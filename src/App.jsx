import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Products from './components/pages/Products/Prodects';
import Home from './components/pages/Home/Home';
import Customer_reviews from './components/pages/customer-reviews/customer-reviews';
import About from './components/pages/About/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* إضافة هذا السطر */}
          <Route path="/products" element={<Products />} />
          <Route path="/customer-reviews" element={<Customer_reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
