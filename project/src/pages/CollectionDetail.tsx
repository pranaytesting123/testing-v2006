import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Star } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/Product/ProductGrid';

const CollectionDetail: React.FC = () => {
  const { collection: collectionName } = useParams<{ collection: string }>();
  const { collections, getProductsByCollection } = useProducts();
  
  const decodedCollectionName = collectionName ? decodeURIComponent(collectionName) : '';
  const collection = collections.find(c => c.name === decodedCollectionName);
  const collectionProducts = getProductsByCollection(decodedCollectionName);

  if (!collection) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Collection Not Found</h2>
          <p className="text-gray-600 mb-6">The collection you're looking for doesn't exist.</p>
          <Link
            to="/collections"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-green-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/collections" className="text-gray-500 hover:text-green-600">Collections</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{collection.name}</span>
          </nav>
        </div>
      </div>

      {/* Collection Hero */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Collection Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-2">
                      <Package className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Collection</p>
                      <p className="text-lg font-bold text-gray-900">{collectionProducts.length} Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collection Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{collection.name}</h1>
                <p className="text-lg text-gray-600 leading-relaxed">{collection.description}</p>
              </div>

              {/* Collection Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Products</span>
                  </div>
                  <p className="text-2xl font-bold text-green-900 mt-1">{collectionProducts.length}</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Featured</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-900 mt-1">
                    {collectionProducts.filter(p => p.featured).length}
                  </p>
                </div>
              </div>

              {/* Price Range */}
              {collectionProducts.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{Math.min(...collectionProducts.map(p => p.price)).toFixed(2)}
                    </span>
                    <span className="text-gray-500">-</span>
                    <span className="text-lg font-bold text-gray-900">
                      ₹{Math.max(...collectionProducts.map(p => p.price)).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex space-x-4">
                <Link
                  to="/collections"
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Collections</span>
                </Link>
                <Link
                  to="/products"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Products in {collection.name}
          </h2>
          <p className="text-gray-600">
            Discover all {collectionProducts.length} products in this collection
          </p>
        </div>

        {collectionProducts.length > 0 ? (
          <ProductGrid products={collectionProducts} />
        ) : (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">This collection doesn't have any products yet.</p>
            <Link
              to="/products"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionDetail;