import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';
import logo from './pics/TransferPaper.png';

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
      {isMobile ? (<h3>PowerMax&nbsp;D.O.O</h3>):(<h1>PowerMax&nbsp;D.O.O</h1>)}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw' }}>
        Vuka&nbsp;Karadžića&nbsp;14<br />
        21400&nbsp;Backa&nbsp;Palanka<br />
        Serbia<br />
      </p>
    </span>
    <span className='dnoSpan'>
      {isMobile ? (<h3><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h3>):(
        <h1><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h1>
      )}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw',width:'fit-content' }}>
        gileborocki@gmail.com<br />
        powermaxbp@gmail.com<br /><br />

        <div><i style={{ opacity: '0.5' }}>Tel:</i>060-12-123-123 </div></p>
    </span>
  </div>
    <footer className='footer' style={footerStyle}>
      <span style={{ marginLeft: 'auto' ,marginRight: '40px'}}>&copy; 2024 PowerMax Doo All rights reserved</span>
    </footer>

    </>
  )
}

export default Footer;
