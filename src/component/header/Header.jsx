import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../asset/AirBrush_20220404083616.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Odisi Ebi</h1>
        <h5 className="text-light">FullStack Developer, UI/UX Designer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header> 
  )
}

export default Header