import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/About';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/404';
import CartPage from './pages/Cart';
import ProductPage from './pages/Product';
import ProfilePage from './pages/Profile';


function App() {
  
  return (
    <Router>
      <Navbar /> 
      <div style={{ minHeight: 'calc(100vh - 150px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product" element={<ShopPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
