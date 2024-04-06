import React from "react";
import { useState,useEffect } from "react";
import peel from './pics/peelS.png'
import './css/Product.css'

const Products = ({ language, toggleLanguage}) => {
  console.log("Current language in Products:", language);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1268); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
    <div style={{marginBottom: '15px',position: 'relative',display: 'inline-block', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
    <img src={peel} alt='peel' style={{width: '100%',height: 'auto',display:"block"}}></img>
    </div>
    <div><h1 style={{textAlign: 'center'}}>{language === 'en' ? 'Products' : 'Proizvodi'}</h1></div>
{/* Plavi Papir */}

<div className="okvir">
<div></div>
 </div>
    </>
  );
};

export default Products;

  