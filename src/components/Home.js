import React from 'react';
import unroll from './pics/divHome.png'


const Home = ({ language, toggleLanguage,isMobile }) => {

return(
  <>
<div style={{marginBottom: '15px',position: 'relative',display: 'inline-block', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
  <img src={unroll} alt='unroll' style={{width: '100%',height: 'auto',display:"block"}}></img>
  {language === 'en' ? 
 <div className='overlay' style={{fontSize: '4vw',color: '#bdbcd5'}}>
  
  <b>Producer of high-quality<br/> Silicone Coated Liners </b>
 </div> :
  <div className='overlay' style={{fontSize: '3vw',color: '#bdbcd5'}}>

  <b>Proizvodjac visoko-kvalitetnog <br/>papira za preslikace</b>
 </div>
}
  </div>

  <h1 style={{textAlign: 'center'}}>{language === 'en' ? 'About us' : 'O Nama'}</h1>

      <div className='container' style={{marginTop: '10px'}}>
        <p style={{fontFamily: 'sans-serif',fontSize: '25px'}}>{language === 'en' ? 'Firm' : 'Firma'} <b>Power Max DOO</b> {language === 'en' ? 'Backa Palanka is established 2006.year.' : 'Backa Palanka je osnovana 2006. godine.'}.<br/><br/>

        {language === 'en' ? 'Gained quality constantly gets upgraded following modern trends and listening to requests of our customers.' : 'Stečeni kvalitet konstantno usavršavamo prateći savremene trendove i slušajući zahteve nasih korisnika.'}<br/><br/>

{language === 'en' ? 'For every product we give guarantee pereiod,which makes our customers care-free' : 'Za sve proizvode dajemo garantni rok čime su naši korisnici osigurani.'}<br/><br/>

{language === 'en' ? 'Our offer,amongs other things, includes:' : 'Nasu ponudu izmedju ostalog cine:'}<br/>
<ul style={{paddingLeft: '40px'}}> 
  <li>{language === 'en' ? 'Siliconisation' : 'Silikonizacija'}</li>
  <li>{language === 'en' ? 'Packaging and storing' : 'Pakovanje i skladistenje'}</li>
  <li>{language === 'en' ? 'Dimensions by your choice' : 'Dimenzije po vasoj zelji'}</li>
  <li>{language === 'en' ? 'Guaranteed safety' : 'Silikonizacija'}</li>
</ul>

{language === 'en' ? "Proffesionall staff guarantee's shipment and safety around shipping products in record times." : 'Stručno osoblje garantuje isporuku i sigurnost prevoza proizvoda u rekordnim rokovima.'}</p>
      </div><br/>
      </>
);
}

export default Home;