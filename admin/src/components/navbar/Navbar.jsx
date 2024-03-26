import React from 'react'
import logo from '../../assets/logo2.jpg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src={logo}/>
        <p><b>Fashion Wear</b></p>

        </div>
        <div className='profile'>
        <FontAwesomeIcon icon={faUserTie} size='2x' />

        </div>
       
       
      
    </div>
  )
}

export default Navbar
