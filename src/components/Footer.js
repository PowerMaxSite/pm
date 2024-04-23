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
      {isMobile ? (<h3>Powermax&nbsp;D.O.O</h3>):(<h1>Powermax&nbsp;D.O.O</h1>)}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw' }}>
        <p>Vuka&nbsp;Karadžića&nbsp;14</p>
        <p> 21400&nbsp;Backa&nbsp;Palanka</p>
        <p> Serbia</p>
      </p>
    </span>
    <span className='dnoSpan'>
      {isMobile ? (<h3><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h3>):(
        <h1><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h1>
      )}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw',width:'fit-content' }}>
        <p>gileborocki@gmail.com</p>
        <p>powermaxbp@gmail.com</p><br />

        <div><i style={{ opacity: '0.5' }}>Tel:</i>060-12-123-123 </div></p>
    </span>
  </div>
    <footer className='footer' style={footerStyle}>
      <span style={{ marginLeft: 'auto' ,marginRight: '40px'}}>&copy; 2024 PowerMax Doo {language === 'en' ?"All rights reserved" : "Sva prava zadrzana"}</span>
    </footer>

    </>
  )
}

export default Footer;
