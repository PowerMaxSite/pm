import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import srb from './pics/flagSrb.png';
import en from './pics/flagEng.png';

function SideNav({language,setLanguage}) {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(250);
  };

  const closeNav = () => {
    setNavWidth(0);
  };

  return (
    <div>
      <div className="sidenav" style={{ width: navWidth }}>
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <span className='spanLangM'>
                    <div style={{ paddingRight: '7px' }}>
                      <button onClick={() => setLanguage('en')} className={language === 'en' ? 'languageButton activeLanguageButton' : 'languageButton'}>
                        <img src={en} alt='eng' style={{ width: '40px' }}></img>
                        </button>
                        </div>
                    <div style={{ paddingLeft: '7px' }}>
                      <button onClick={() => setLanguage('srb')} className={language === 'srb' ? 'languageButton activeLanguageButton' : 'languageButton'}>
                        <img src={srb} alt='srb' style={{ width: '40px' }}></img>
                        </button>
                        </div>
                  </span>
                  <div style={{paddingTop: '10px'}}>
        <Link to='/' className='custom-link' onClick={closeNav}>
          {language === 'en' ? <>About&nbsp;us</> : <>O&nbsp;nama</>}</Link>
        <Link to='/products' className='custom-link' onClick={closeNav}>
          {language === 'en' ? 'Products' : 'Proizvodi'}</Link>
        <Link to='/contact' className='custom-link' onClick={closeNav}>
          {language === 'en' ? 'Contact' : 'Kontakt'}</Link>
          </div>
      </div>
      <span style={{ fontSize: '30px', cursor: 'pointer',color: '#5b83cd',paddingRight: '5px' }} onClick={openNav}>&#9776;</span>
    </div>
  );
}

export default SideNav;
