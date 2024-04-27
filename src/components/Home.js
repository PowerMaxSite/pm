import React from 'react';
import unroll from './pics/divHome.png'


const Home = ({ language, toggleLanguage,isMobile }) => {

return(
  <>
<div style={{marginBottom: '15px',position: 'relative',display: 'inline-block', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
  <img src={unroll} alt='unroll' style={{width: '100%',height: 'auto',display:"block"}}></img>
  {language === 'en' ? 
 <div className='overlay' style={{fontSize: '4vw',color: '#bdbcd5'}}>
  
  <b>Producer of high quality<br/> Siliconised paper </b>
 </div> :
  <div className='overlay' style={{fontSize: '3vw',color: '#bdbcd5'}}>

  <b>Proizvodjac visoko kvalitetnog <br/>silikonizovanog papira</b>
 </div>
}
  </div>

  <h1 style={{textAlign: 'center'}}>{language === 'en' ? 'About us' : 'O Nama'}</h1>

  <div className='container' style={{ marginTop: '10px' }}>
  <p style={{ fontFamily: 'sans-serif', fontSize: '25px', lineHeight: '1.5' }}>
    {language === 'en' ? 'Company' : 'Kompanija'} <b>Powermax DOO Backa Palanka</b>
    {language === 'en' ? ' is established in 2007 in Backa Palanka with the goal of producing the highest quality siliconised paper.' :
      ' je osnovana 2007. godine u Bačkoj Palanci sa ciljem proizvodnje visokokvalitetnog silikonizovanog papira.'}
    <br /><br />

    {language === 'en' ? 'Our company boasts constant high-quality siliconisation of paper. Our products are used across Europe and the EU in more than 20 countries.' :
      'Naša kompanija se može pohvaliti konstantnim i visokim kvalitetom silikonizacije papira. Proizvodi naše kompanije koriste se širom Evrope i EU u više od 20 zemalja.'}
    <br /><br />

    {language === 'en' ? 'Our products are certified with ecological marks such as:' :
      'Naši proizvodi su sertifikovani sa ekološkim oznakama kao što su:'}
    <br /><br />

    {language === 'en' ? 'We constantly upgrade our quality following modern trends and listening to the requests of our customers.' :
      'Konstantno unapređujemo kvalitet prateći savremene trendove i slušajući zahteve naših korisnika.'}
    <br /><br />

    {language === 'en' ? 'For every product, we provide a guarantee period, ensuring peace of mind for our customers.' :
      'Za sve proizvode pružamo garanciju, što našim kupcima omogućava bezbrižnost.'}
    <br /><br />

    {language === 'en' ? 'Customizable siliconization according to your request.' :
      'Silikonizacija po vašem zahtevu.'}
    <br /><br />
  </p>
</div>

      </>
);
}

export default Home;