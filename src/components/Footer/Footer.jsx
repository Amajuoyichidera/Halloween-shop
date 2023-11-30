import React from 'react'
import { FaTwitter, FaInstagram ,  FaLinkedin,  FaFacebook } from 'react-icons/fa';
import logo from '../../images/footLogo.svg'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={logo} alt="logo" />
        </div>

        <div className={style.myP}>
            <a href="#home">
             <p>Home</p>
            </a>
            <a href="#product">
            <p>Shop</p>
            </a>
            <p>About</p>
            <p>Contact</p>
        </div>

        <div className={style.myIcon}>
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
        </div>
    </footer>
  )
}

export default Footer