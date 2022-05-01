import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { NavLink } from 'react-router-dom'
// import '../../form/form.html'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Stray Animal Assist</a>
      <h2><button style={{padding: "10px 20px", color: "#f0a54f", borderRadius: "1rem", background: "#4a2104"}}><NavLink to = "/form">Admin</NavLink></button></h2>


      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#portfolio">Our Objectives</a></li>
        <li><a href="#testimonials">Our Services</a></li>
        <li><a href="#services">Join Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
       
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; React Portfolio. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer


