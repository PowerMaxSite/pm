import React from "react";
import { useState,useEffect } from "react";
import peel from './pics/peelS.png'
import bw80 from './pics/bwSheets.png'
import p80 from './pics/grSheets.png'
import r80 from './pics/rSheets.png'
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
    <div><h1 style={{textAlign: 'center',fontSize: 'xxx-large'}}>{language === 'en' ? 'Products' : 'Proizvodi'}</h1></div>
<br />
{/* Papir meni skrol */}
{!isMobile ? (
  <>
<div className="topnav">
<a href="#plavi"><button>80BW</button></a>
<a href="#zeleni"><button>80P</button></a>
<a><button>110BW</button></a>
<a href="#crveni"><button>125S</button></a>
</div>


<div className="okvir" id="plavi" >
<div className="box"><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 80BW</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 80g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light blue / White</li>
</ul>
<b>Screen printing:</b><br/><br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/>
Final appearance after transfering on textil - MATTE.<br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p></div>
<div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={bw80} alt="bw80" ></img></div>
 </div>


 <div className="okvir" id="zeleni">

 <div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={p80} alt="p80" ></img></div>

<div className="box"><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 80BW</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 80g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light blue / White</li>
</ul>
<b>Screen printing:</b><br/><br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/>
Final appearance after transfering on textil - MATTE.<br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p></div>
 </div>


<div className="okvir" id="crveni">
<div className="box"><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 80BW</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 80g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light blue / White</li>
</ul>
<b>Screen printing:</b><br/><br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/>
Final appearance after transfering on textil - MATTE.<br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p></div>
<div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={r80} alt="bw80" ></img></div>
 </div>
 </>
):(
<p>U izradi</p>
)}
    </>
  );
};

export default Products;

  