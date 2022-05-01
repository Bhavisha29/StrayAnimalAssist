import React from 'react'
import './header.css'
// import CTA from './CTA'
// import HeaderSocial from './HeaderSocials'
import bg from '../../assets/bg.jpg'

const Header = () => {
  return (
    <header>
      <div className = "head-text">
        <div className = "head-image">
          <img src = {require ('/Users/bhavisha sondagar/Downloads/React-Portfolio-main/src/assets/bg.jpg')} />
        </div>
        <div className="text">
        <h2>"Every stray deserves a chance at love, a home and a warm bed to sleep at night.</h2>
         <h2>Support us and let's create wonders for stray animals together."</h2>
        </div>
</div>
    </header>
  )
}

export default Header