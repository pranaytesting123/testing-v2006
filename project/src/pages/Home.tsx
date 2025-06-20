import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, HeadphonesIcon, Leaf, Recycle, Heart, Award } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/Product/ProductCard';
import HeroSection from '../components/Hero/HeroSection';

const Home: React.FC = () => {
  const { getFeaturedProducts, collections, getProductsByCollection, loading } = useProducts();
  const featuredProducts = getFeaturedProducts();
  const navigate = useNavigate();

  // Handle product clicks with scroll reset
  const handleProductClick = (productId: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate(`/product/${productId}`);
  };

  // Handle collection navigation with proper URL encoding
  const handleCollectionNavigation = (collectionName: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate(`/collections/${encodeURIComponent(collectionName)}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Coconut Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular handcrafted coconut products, each piece uniquely made from upcycled coconut shells
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections with Products */}
      {collections.slice(0, 3).map((collection) => {
        const collectionProducts = getProductsByCollection(collection.name).slice(0, 4);
        
        if (collectionProducts.length === 0) return null;

        return (
          <section key={collection.id} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Collection Info */}
                <div className="lg:w-1/3">
                  <div className="relative">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-gray-200 mb-4">
                        {collection.description}
                      </p>
                      <button
                        onClick={() => handleCollectionNavigation(collection.name)}
                        className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                      >
                        View All {collection.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Collection Products */}
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {collectionProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Sustainability Story Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sustainability Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every coconut shell we transform tells a story of sustainability, craftsmanship, and environmental responsibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Recycle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Upcycled Materials</h3>
              <p className="text-gray-600">
                We rescue discarded coconut shells that would otherwise become waste, giving them new life as beautiful, functional products.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Handcrafted with Love</h3>
              <p className="text-gray-600">
                Each piece is carefully handcrafted by skilled artisans, ensuring every product is unique and made with attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Impact</h3>
              <p className="text-gray-600">
                By choosing our products, you're supporting sustainable practices and helping reduce environmental waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Everything Coconut?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to creating beautiful, sustainable products while providing exceptional customer service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted products made from the finest coconut materials</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping with eco-friendly packaging</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our handcrafted products</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HeadphonesIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help with your coconut product questions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;