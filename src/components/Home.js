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

      <div className='container' style={{marginTop: '10px'}}>
        <p style={{fontFamily: 'sans-serif',fontSize: '25px'}}>{language === 'en' ? 'Company' : 'Kompanija'} <b>Powermax DOO Backa Palanka</b> 
        {language === 'en' ? ' is established 2007. year in Backa Palanka with goal of producing highest quality siliconised paper' :
         ' je osnovana 2007. godine u Backoj Palanci sa ciljem proizvodnje visoko kvalitetnog silikonizovanog papira'}.<br/><br/>

                 {language === 'en' ? 'Our company can boast with constant and high quality siliconisation of paper.Products of our company are used across Europe and EU in more than 20 countries' :
         'Nasa kompanija moze da se pohvali sa konstantnim i visokim kvalitetom silikonizovanog papira. Proizvodi nase kompanije su rasprostranjeni sirom zemalja Evrope i EU u preko 20 zemalja.'}.

{language === 'en' ? 'Our products are subject to certificates with ecological marks such as:' :
         'Nasi proizvodi podlezu sertifikatima sa ekoloskim normama kao sto su:'}<br/><br/>

        {language === 'en' ? 'Gained quality constantly gets upgraded following modern trends and listening to requests of our customers.' :
         'Stečeni kvalitet konstantno usavršavamo prateći savremene trendove i slušajući zahteve nasih korisnika.'}<br/><br/>

{language === 'en' ? 'For every product we give guarantee pereiod,which makes our customers care-free.' : 
'Za sve proizvode dajemo garantni rok čime su naši korisnici osigurani.'}<br/><br/>

{language === 'en' ? 'Customizable siliconization per your request' : 
'Mogucnost silikonizacije po vasem zahtevu.'}<br/><br/>
 </p>
      </div><br/>
      </>
);
}

export default Home;