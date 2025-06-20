import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import CollectionDetail from './pages/CollectionDetail';
import Contact from './pages/Contact';
import AdminPanel from './pages/Admin/AdminPanel';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change, but allow individual components to override
    if (!pathname.startsWith('/product/')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin-secret-panel');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isAdminRoute) {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header onSearch={handleSearch} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:collection" element={<CollectionDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ProductProvider>
      <Router>
        <AppContent />
      </Router>
    </ProductProvider>
  );
}

export default App;