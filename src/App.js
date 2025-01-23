import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<RestaurantList searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
