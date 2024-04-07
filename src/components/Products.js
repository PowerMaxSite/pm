import React from "react";
import { useState,useEffect } from "react";
import peel from './pics/peelS.png'
import bw80 from './pics/bwSheets.png'
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
<br />
{/* Papir meni */}
<div className="topnav">
<button>80BW</button>
<button>80P</button>
<button>110BW</button>
<button>125S</button>
</div>


<div className="okvir">
<div className="box"><h3>TEXIMAX CP-e 80BW</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}> The high quality transfer paper for Screen printing on textile with plastisol inks.
TEXIMAX CP-e 80BW is designed for cold peel transfers.
Basic weight of paper 80g./sm. Sides of paper are colored Light Blue-White.
Screen printing:
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).
Final appearance after transfering on textil - MATTE.
Packaging: 250 Sheets 100 x 70 cm
500 Sheets 50 x 70 cm
Other sizes are available on customer request.</p></div>
<div className="box"><img src={bw80}></img></div>
 </div>
    </>
  );
};

export default Products;

  