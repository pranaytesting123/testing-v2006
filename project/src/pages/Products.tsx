import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { FilterState } from '../types';
import ProductGrid from '../components/Product/ProductGrid';
import ProductFilters from '../components/Product/ProductFilters';

interface ProductsProps {
  searchQuery?: string;
}

const Products: React.FC<ProductsProps> = ({ searchQuery = '' }) => {
  const { searchProducts, getProductsByCollection, collections, loading } = useProducts();
  const [filters, setFilters] = useState<FilterState>({
    collection: 'all',
    sortBy: 'name',
    searchQuery: '',
  });
  const [filteredProducts, setFilteredProducts] = useState(searchProducts(''));

  useEffect(() => {
    if (searchQuery) {
      setFilters(prev => ({ ...prev, searchQuery }));
    }
  }, [searchQuery]);

  useEffect(() => {
    let products = filters.searchQuery ? 
      searchProducts(filters.searchQuery) : 
      getProductsByCollection(filters.collection);

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        products = [...products].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'name':
      default:
        products = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredProducts(products);
  }, [filters, searchProducts, getProductsByCollection]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">
            {filters.searchQuery 
              ? `Search results for "${filters.searchQuery}" (${filteredProducts.length} products)`
              : `Discover our full range of products (${filteredProducts.length} products)`
            }
          </p>
        </div>

        <ProductFilters
          filters={filters}
          collections={collections}
          onFilterChange={setFilters}
        />

        <ProductGrid products={filteredProducts} loading={loading} />
      </div>
    </div>
  );
};

export default Products;