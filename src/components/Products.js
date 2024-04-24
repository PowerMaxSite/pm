import React from "react";
import { useState,useEffect } from "react";
import peel from './pics/peelS.png'
import bw80 from './pics/saturatedPaper.png'
import p80 from './pics/grSheets.png'
import p125S from './pics/krem.png'
import './css/Product.css'
import './css/Modal.css'


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
<div className="topnav stickyElement">
<a href="#plavi"><button>80BW</button></a>
<a href="#zeleni"><button>80P</button></a>
<a href="#debeli"><button>110BW</button></a>
<a href="#krem"><button>125S</button></a>
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
Printing side: Light Blue side<br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/><br/>

We recommend opening the packaging and cutting sheets on working
 dimension a few hours before final using in reason to optimize the 
 stability of the paper.<br/><br/>

 Storage: Teximax CP-e 80BW must be stored at room temperature 
 in dry condition environment with no exposure to moisture.<br/><br/>

 Pre-conditioning for screen printing: TEXIMAX CP-e 80BW 
 is necessary pre-heating, before screen printing, 
 through drier on recommended 
 temperature 140°C-150°C for 45 seconds.<br/><br/>

<b>Final appearance after transfering on textil - MATTE.</b><br/><br/>

<i>Recommended processing-time: within one year from the date of production.</i><br/><br/>

<b>Transfer process:</b><br/>
Application temperatures: 170° to 205°C<br/>
Dwell time 10–15 seconds<br/>
Pressure: Medium (35 to 45 psi)<br/><br/>


<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p>

</div>
<div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={bw80} alt="bw80" ></img></div>
 </div>


 <div className="okvir" id="zeleni">

 <div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={p80} alt="p80" ></img></div>

<div className="box"><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 80P</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks
 with the excellent dimensional stability. Suitable for multi color transfers.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 80g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light green/ White green</li>
</ul>
<b>Screen printing:</b><br/><br/>
Printing side: Light green side
Ink types: Wide range of  plastisol inks can be used with or without powdered adhesives (polyester,
polyamide, polyurethane).<br/><br/>

We recommend opening the packaging and cutting sheets on working
 dimension a few hours before final using in reason to optimize the 
 stability of the paper.<br/><br/>

 Storage: Teximax CP-e 80P must be stored at room temperature 
 in dry condition environment with no exposure to moisture.<br/><br/>

 Pre-conditioning for screen printing: TEXIMAX CP-e 80P 
 is necessary pre-heating, before screen printing, 
 through drier on recommended 
 temperature 140°C-150°C for 45 seconds.<br/><br/>

<b>Final appearance after transfering on textil - MATTE.</b><br/><br/>

<i>Recommended processing-time: within one year from the date of production.</i><br/><br/>

<b>Transfer process:</b><br/>
Application temperatures: 170° to 205°C<br/>
Dwell time 10–15 seconds<br/>
Pressure: Medium (35 to 45 psi)<br/><br/>

<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p></div>
 </div>


<div className="okvir" id="debeli">
<div className="box"><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 110BW</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks.
 Suitable for multi color transfers.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 110g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light blue / White</li>
</ul>
<b>Screen printing:</b><br/><br/>
Printing side: Light Blue side<br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/><br/>

We recommend opening the packaging and cutting sheets on working
 dimension a few hours before final using in reason to optimize the 
 stability of the paper.<br/><br/>

 Storage: Teximax CP-e 80BW must be stored at room temperature 
 in dry condition environment with no exposure to moisture.<br/><br/>

 Pre-conditioning for screen printing: TEXIMAX CP-e 80BW 
 is necessary pre-heating, before screen printing, 
 through drier on recommended 
 temperature 140°C-150°C for 45 seconds.<br/><br/>

<b>Final appearance after transfering on textil - MATTE.</b><br/><br/>

<i>Recommended processing-time: within one year from the date of production.</i><br/><br/>

<b>Transfer process:</b><br/>
Application temperatures: 170° to 205°C<br/>
Dwell time 10–15 seconds<br/>
Pressure: Medium (35 to 45 psi)<br/><br/>



Final appearance after transfering on textil - MATTE.<br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p></div>
<div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={bw80} alt="bw80" ></img></div>
 </div>
 
 <div className="okvir" id="krem">

 <div className="box" style={{display: 'flex', justifyContent: 'center'}}><img src={p125S} alt="p125S" ></img></div>

<div className="box"><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 125 S</h3><p style={{paddingRight: '90px',paddingLeft: '90px'}}>
 The high quality transfer paper for Screen printing
  on textile with water based inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 125g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light blue / White</li>
</ul>
<b>Screen printing:</b><br/><br/>
Printing side is the side with thicker silicone coating and 
is much easier for peeling.<br/><br/>

We recommend opening the packaging and cutting on 
final printing size one day earlier before printing in
 reason to optimize the stability of the paper.<br/><br/>

 <i>Storage:</i> <b>Teximax CP-e 125S</b> must be stored at room temperature and dry 
 environment with no exposure to moisture.<br/><br/>

 <i>Pre-conditioning for screen printing:</i>
   TEXIMAX CP-e 125S is necessary pre-heating, before screen printing, 
   through drier on recommended temperature 140°C-150°C for 45 seconds.<br/><br/>

<i>Recommended processing-time: within one year 
  from the date of production.</i><br/><br/>

<b>Final appearance after transfering on textil - MATTE.</b><br/><br/>


<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;200 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;400 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p></div>
 </div>
 
 </>

 
):(
  <>
  {/*  mobile */}
<div className="topnav stickyElementM" style={{width: '90%',marginBottom: '100px'}}>
<a href="#plavi"><button style={{textAlign: 'center',fontSize: '13px', width: '20%',height: '60%',margin: '0 5px'}}>80BW</button></a>
<a href="#zeleni"><button style={{textAlign: 'center',fontSize: '13px', width: '20%',height: '60%',margin: '0 5px'}}>80P</button></a>
<a href="#debeli"><button style={{textAlign: 'center',fontSize: '13px', width: '20%',height: '60%',margin: '0 5px'}}>110BW</button></a>
<a href="#krem"><button style={{textAlign: 'center',fontSize: '13px', width: '20%',height: '60%',margin: '0 5px'}}>125S</button></a>
</div>

<div id="plavi" className="okvirM">
<div><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 80BW</h3><p style={{paddingRight: '30px',paddingLeft: '30px'}}>
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
<br/>
Final appearance after transfering on textil - <b>MATTE.</b><br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p>

</div>
<div className="okvirSlikeM"><img src={bw80} alt="bw80" style={{width: '60%'}} ></img></div>
 </div>
 <div id="zeleni" className="okvirM" >
<div><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 80P</h3><p style={{paddingRight: '30px',paddingLeft: '30px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 80g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light green / White green</li>
</ul>
<b>Screen printing:</b><br/><br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/>
<br/>
Final appearance after transfering on textil - <b>MATTE.</b><br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p>

</div>
<div className="okvirSlikeM"><img src={p80} alt="p80" style={{width: '60%'}} ></img></div>
 </div>

 <div id="debeli" className="okvirM">
<div><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 110BW</h3><p style={{paddingRight: '30px',paddingLeft: '30px'}}>
 The high quality transfer paper for Screen printing on textile with plastisol inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 110g./sm</li>
        <li>designed for cold peel transfers</li>
        <li>colored sides-Light blue / White</li>
</ul>
<b>Screen printing:</b><br/><br/>
Ink types: Wide range of plastisol inks can be used with or without powdered adhesives (polyester, poly
amide, polyurethane).<br/>
<br/>
Final appearance after transfering on textil - <b>MATTE.</b><br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;250 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;500 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p>

</div>
<div className="okvirSlikeM"><img src={bw80} alt="bw110" style={{width: '60%'}} ></img></div>
 </div>

 <div id="krem" className="okvirM">
<div><h3 style={{textAlign: 'center'}}>TEXIMAX CP-e 125S</h3><p style={{paddingRight: '30px',paddingLeft: '30px'}}>
 The high quality transfer paper for Screen printing on textile with water based inks.<br/><br />
<b>Properties:</b><br />
<ul>
        <li>weight 125g./sm</li>
        <li>designed for cold peel transfers</li>

</ul>
<b>Screen printing:</b><br/><br/>
Printing side is the side with thicker silicone coating and 
is much easier for peeling.<br/>
<br/>
Final appearance after transfering on textil - <b>MATTE.</b><br/><br/>
<b>Default Packaging:</b><br /><br />
&nbsp;&nbsp;&nbsp;200 Sheets 100 x 70 cm<br/>
&nbsp;&nbsp;&nbsp;400 Sheets 50 x 70 cm<br /><br />
<i>*other sizes are available on customer request</i></p>

</div>
<div className="okvirSlikeM"><img src={p125S} alt="p125S" style={{width: '60%'}} ></img></div>
 </div>
 
 </>
)}
    </>
  );
};

export default Products;

  