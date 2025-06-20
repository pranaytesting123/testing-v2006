import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Heart } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';

const HeroSection: React.FC = () => {
  const { siteSettings } = useProducts();
  const { heroProduct } = siteSettings;
  const navigate = useNavigate();

  // Debug log to check if hero product is updating
  React.useEffect(() => {
    console.log('Hero section re-rendered with:', heroProduct);
  }, [heroProduct]);

  const handleHeroProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Extract product ID from the CTA link if it's a product link
    const ctaLink = heroProduct.ctaLink;
    if (ctaLink.includes('/product/')) {
      const productId = ctaLink.split('/product/')[1];
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      navigate(`/product/${productId}`);
    } else {
      // For other links like collections, navigate normally
      navigate(ctaLink);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-green-600"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-amber-600"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 rounded-full bg-green-600"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-amber-600"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="h-4 w-4" />
              <span>100% Sustainable • Handcrafted • Upcycled</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroProduct.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {heroProduct.description}
              </p>
            </div>

            {/* Price */}
            {heroProduct.price && (
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <span className="text-3xl font-bold text-green-600">₹{heroProduct.price}</span>
                <span className="text-gray-500 line-through text-lg">₹{(heroProduct.price * 1.3).toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">Save 23%</span>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-gray-700">
                <Recycle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Upcycled</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Heart className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Handmade</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleHeroProductClick}
                className="group bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>{heroProduct.ctaText}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/collections"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Collections</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <span className="font-medium text-green-600">500+</span>
                <span>Happy Customers</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-green-600">100%</span>
                <span>Sustainable</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-green-600">⭐ 4.9</span>
                <span>Rating</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Main Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-amber-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform group-hover:-rotate-1 transition-transform duration-500">
                <img
                  key={heroProduct.image} // Force re-render when image changes
                  src={heroProduct.image}
                  alt={heroProduct.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  onLoad={() => console.log('Hero image loaded:', heroProduct.image)} // Debug log
                  onError={(e) => {
                    console.error('Hero image failed to load:', heroProduct.image);
                    // Fallback to a default image if the current one fails
                    e.currentTarget.src = 'https://images.pexels.com/photos/6542652/pexels-photo-6542652.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Leaf className="h-6 w-6" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-amber-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;