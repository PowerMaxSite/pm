import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';


function Footer({isMobile,language}) {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'static',
    left: 0,
    bottom: 0,
    height: '1rem', 
    display: 'flex',
    justifyContent: 'space-between', // Align items to the right edge
    alignItems: 'center',
  };

  return (
    <>
    <div className='dno'>
                <span className='dnoSpan'>
      {isMobile ? (<h3>Powermax&nbsp;d.o.o&nbsp;Backa&nbsp;Palanka</h3>):(<h1>Powermax&nbsp;d.o.o&nbsp;Backa&nbsp;Palanka</h1>)}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw' }}>
        <p>Vuka&nbsp;Karadžića&nbsp;15</p>
        <p> 21400&nbsp;Backa&nbsp;Palanka</p>
        <p> Serbia</p>
      </p>
    </span>
    <span className='dnoSpan'>
      {isMobile ? (<h3><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h3>):(
        <h1><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h1>
      )}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw',width:'fit-content' }}>
      <p>powermaxbp@gmail.com</p>
      <p>gile.borocki@gmail.com</p>
      {/* bobanradonic@gmail.com */}
        <br />

        <div><i style={{ opacity: '0.5' }}>Tel:</i>060-33-77-946 </div></p>
        {/* bobanov br fona */}
    </span>
  </div>
    <footer className='footer' style={footerStyle}>
      <span style={{ marginLeft: 'auto' ,marginRight: '40px'}}>&copy; 2024 Powermax d.o.o Backa Palanka {language === 'en' ?"All rights reserved" : "Sva prava zadrzana"}</span>
    </footer>

    </>
  )
}

export default Footer;
