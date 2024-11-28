import React from 'react'
import './footer.css'
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div >
      <div class="pg-footer">
    <footer class="footer">
      
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      
   
      <div style={{height:"40vh"}}>
    
<div className='maindiv-footer' >
<div className='heading-footer' >
<h1>Nacre System</h1>
</div>
<div className='aboutus-footer'  >
<h2>About Us</h2>
<p style={{textAlign:"justify"}}>A decade old software development company continuously focused in delivering higher levels of automation leveraging new and upcoming technologies such as AI and internet of things. We build solutions which are scalable and can integrate seamlessly with other software solutions that exist.</p>
</div>
<div className='quicklink-footer' >
<h2>Quick Links</h2>
<div style={{padding:"10px"}}>
<FontAwesomeIcon icon={faLinkedin} className='quicklink-footer-icons'/>
<FontAwesomeIcon icon={faFacebook} className='quicklink-footer-icons'  />
<FontAwesomeIcon icon={faInstagram}  className='quicklink-footer-icons'/>
<FontAwesomeIcon icon={faGithub}  className='quicklink-footer-icons'/>
</div>
</div>
<div className='Chatting-session' >
  <h2>Lets Chat</h2>
  <FontAwesomeIcon icon={faWhatsapp} className="blink" style={{ fontSize: "30px" }} />
  <p>info@nacresys.com</p>
  <h2>call Us</h2>
  <p>+91 7736742072 </p>
</div>
</div>






      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <span class="footer-copyright-link"  target="_self" style={{fontSize:"20px"}}>2011 © Nacre System All rights reserved.
            Nacre System</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
    </div>
  )
}

export default Footer