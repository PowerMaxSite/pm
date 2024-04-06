import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import NotFound from './NotFound';
import Contact from './Contact';
import Products from './Products';
import Footer from "./Footer";
import './css/index.css';
import './css/Header.css';
import './css/Contact.css';
import './css/Links.css';
import './css/App.css';
import './css/SideNav.css';
import Header from './Header';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'srb' : 'en');
  };

  return (
    <>
      <div className="App">

        <Header language={language}  isMobile={isMobile} toggleLanguage={toggleLanguage} setLanguage={setLanguage} />

        <Routes>
          <Route index element={<Home language={language} toggleLanguage={toggleLanguage} isMobile={isMobile}/>} />
          <Route path="/" element={<Layout />} />
          <Route path="/react-site-one" element={<Home language={language} toggleLanguage={toggleLanguage} isMobile={isMobile}/>} />
          <Route path="/contact" element={<Contact language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="/products" element={<Products language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

          <Footer isMobile={isMobile} language={language} />

      </div>
    </>
  );
};

export default App;



