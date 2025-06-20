import React, { useState, useEffect } from 'react';
import { X, Upload, Eye } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { HeroProduct } from '../../types';

interface HeroProductFormProps {
  onClose: () => void;
}

const HeroProductForm: React.FC<HeroProductFormProps> = ({ onClose }) => {
  const { siteSettings, updateHeroProduct } = useProducts();
  const [formData, setFormData] = useState<HeroProduct>({
    id: '',
    title: '',
    description: '',
    image: '',
    ctaText: '',
    ctaLink: '',
    price: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (siteSettings.heroProduct) {
      console.log('Loading hero product data:', siteSettings.heroProduct); // Debug log
      setFormData({ ...siteSettings.heroProduct });
    }
  }, [siteSettings.heroProduct]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (!formData.ctaText.trim()) newErrors.ctaText = 'Call-to-action text is required';
    if (!formData.ctaLink.trim()) newErrors.ctaLink = 'Call-to-action link is required';
    if (formData.price && (isNaN(Number(formData.price)) || Number(formData.price) < 0)) {
      newErrors.price = 'Price must be a valid positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const heroProductData: HeroProduct = {
      ...formData,
      id: formData.id || Date.now().toString(),
      price: formData.price ? Number(formData.price) : undefined
    };

    console.log('Submitting hero product data:', heroProductData); // Debug log
    updateHeroProduct(heroProductData);
    
    // Add a small delay to ensure the update is processed
    setTimeout(() => {
      console.log('Hero product update completed'); // Debug log
      onClose();
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const suggestedLinks = [
    { label: 'All Products', value: '/products' },
    { label: 'Bowls & Tableware', value: '/products?collection=Bowls & Tableware' },
    { label: 'Home Decor', value: '/products?collection=Home Decor' },
    { label: 'Planters & Garden', value: '/products?collection=Planters & Garden' },
    { label: 'Kitchen Accessories', value: '/products?collection=Kitchen Accessories' },
    { label: 'Wellness & Spa', value: '/products?collection=Wellness & Spa' },
    { label: 'Collections Page', value: '/collections' },
    { label: 'Contact Page', value: '/contact' }
  ];

  if (previewMode) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-10 mx-auto p-5 border w-full max-w-6xl shadow-lg rounded-md bg-white">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Hero Section Preview</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setPreviewMode(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Eye className="h-6 w-6" />
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{formData.title}</h1>
                <p className="text-gray-600">{formData.description}</p>
                {formData.price && (
                  <div className="text-2xl font-bold text-green-600">₹{formData.price}</div>
                )}
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                  {formData.ctaText}
                </button>
              </div>
              <div className="relative">
                {formData.image && (
                  <img
                    src={formData.image}
                    alt={formData.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6">
            <button
              onClick={() => setPreviewMode(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Edit
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Edit Hero Product</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setPreviewMode(true)}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-md hover:bg-gray-100"
              title="Preview"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Handcrafted Coconut Bowl Set"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Describe the featured product and its benefits..."
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Image URL *
              </label>
              <div className="flex space-x-2">
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.image ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
              {formData.image && (
                <div className="mt-2">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-32 h-20 object-cover rounded border"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price || ''}
                onChange={handleChange}
                step="0.01"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.price ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0.00"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Call-to-Action Text *
              </label>
              <input
                type="text"
                name="ctaText"
                value={formData.ctaText}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.ctaText ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Shop Now, View Collection"
              />
              {errors.ctaText && <p className="text-red-500 text-sm mt-1">{errors.ctaText}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Call-to-Action Link *
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  name="ctaLink"
                  value={formData.ctaLink}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.ctaLink ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="/products or /collections"
                />
                <div className="flex flex-wrap gap-2">
                  {suggestedLinks.map((link) => (
                    <button
                      key={link.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, ctaLink: link.value }))}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
              {errors.ctaLink && <p className="text-red-500 text-sm mt-1">{errors.ctaLink}</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode(true)}
              className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Preview
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroProductForm;