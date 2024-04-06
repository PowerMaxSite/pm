import React from 'react';
import { Link } from 'react-router-dom';
import smol from './pics/smolLog.png';

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
    {!isMobile && (
      <span className='dnoSpan'>
        <img src={smol} alt='small_logo' className='smallLogo'></img>
      </span>
    )}
                <span className='dnoSpan'>
      <h3> <Link to="/contact" className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h3>
      <p style={{ textAlign: 'center', fontSize: isMobile ? '14px' : '20px' }}>
        gile.borocki@gmail.com<br /><br />
        <i style={{ opacity: '0.5' }}>Tel: </i> 060 12 123 123
      </p>
    </span>
    <span className='dnoSpan'>
      <h3><Link to='/contact' className='customLink'>{language === 'en' ? 'Adress' : 'Adresa'}</Link></h3>
      <p style={{ textAlign: 'center', fontSize: isMobile ? '14px' : '20px' }}>Vuka Karadžića 14 21400 Backa Palanka Srbija</p><br /><br />
    </span>
  </div>
    <footer className='footer' style={footerStyle}>
      <span style={{ marginLeft: 'auto' ,marginRight: '40px'}}>&copy; 2024 PowerMax Doo All rights reserved</span>
    </footer>
    </>
  );
}

export default Footer;
