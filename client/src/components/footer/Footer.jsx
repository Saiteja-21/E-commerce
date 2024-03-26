import React from 'react'
import logo from '../assets/logo2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
            <img src={logo}/>
            <p>Fashion wear</p>

        </div> 
        <ul className='links'>
         
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
            
         
         <div className='socialmedia_icons'>
            <div className='icons'>
            <FontAwesomeIcon icon={faInstagram} />
           

            </div>
            <div className='icons'>
            <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className='icons'>
            <FontAwesomeIcon icon={faFacebook} />
            </div>

         </div>
         <div className='copyright'>
            <hr/>
            <p>copyright @ 2024 - All Rights Reserved</p>

         </div>
        </div>
      
    
  )
}

export default Footer
