import React from 'react';
import phone from './pics/phone.png'
import mail from './pics/email.png'
import addres from './pics/location.png'
import linkedin from './pics/linkedin.png'
import './css/Contact.css';

const Contact = ({ language, toggleLanguage}) => {
return (
  <>
  <h1 style={{paddingLeft: '30px',color: '#24569b'}}>{language === 'en' ? 'Contact Us' : 'Kontaktirajte Nas'}</h1>
<div className="container" style={{padding: '40px',borderRadius: '15px',marginTop: '30px'}}>

  {/*Kontak informacije*/}

    <div className='my-div'>

<h2><b style={{fontSize: '30px'}}>Gligorije Borocki <i style={{fontSize: '22px'}}>{language === 'en' ? '(General Director)' : '(Generalni Direktor)'}</i></b><br />
<br /><br/>
{/* Tehnicki direktor */}
                <p style={{paddingBottom: '10px'}}> 
                <i><img title='mail' src={mail} alt='mail' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin shrinkTxt" style={{fontSize: '19px'}}>gile.borocki@gmail.com</span>
                </p>
                 {/* bobanradonic@gmail.com */}

                <p style={{paddingBottom: '10px'}}> 
                <i><img title='fon' src={phone} alt='phone' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">+381 60 33-77-946</span>
                </p>
                {/* +381 60 02-02-02-8 */}

                <p style={{paddingBottom: '20px'}}> 
                <i><img title='linkedin' src={linkedin} alt='linkedin' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">Gligorije Borocki</span>
                </p>
                {/* linkedin linkove ubaciti  */}

                <p><div style={{display: 'flex'}}>
                <i><img title='addres' src={addres} alt='phone' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">Vuka Karadžića 15 21400 Bačka Palanka, {language === 'en' ? 'Serbia' : 'Srbija'}</span>
                </div>
                </p>

                <br />

</h2>
</div>
  {/*Upit Forma*/}
  <div className='my-div'>
    <div className='upit'>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>{language === 'en' ? 'Direct Contact' : 'Direktan Kontakt'}</h2>
  <form>
    <label for="username">{language === 'en' ? 'Name' : 'Ime'}:</label><br/>
    <input type="text" id="username" name="username" placeholder={language === 'en' ? 'Name' : 'Ime'}></input><br/>
    <label for="email">E-mail:</label><br/>
    <input type="email" id="email" name="email" cols="40" placeholder={language === 'en' ? "You'r mail" : 'Vas mail'}></input><br/>
    <label for="comments">{language === 'en' ? 'Message' : 'Poruka'}:</label><br/>
    <textarea id="comments" name="comments" rows="4" cols="40" placeholder={language === 'en' ? "You'r message" : 'Vas upit'}></textarea>
</form>
<button className='button'>{language === 'en' ? 'Send' : 'Posalji'}</button>
{/* onClick={alert("Thank you for submitting questions. We will get back to you shortly.")} */}
</div>
    </div>

  
</div>
<br/>
</>
);

  };
  
  export default Contact;
  