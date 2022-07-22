import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>

    <div className="container header__container" >
     <h5>Hello I am</h5>
     <h1>Hajia Bintu</h1>
   <h5 className="text-light">Full stack developer</h5>
   <CTA/>
   <HeaderSocial/>
   <div className="me">
    <img src={ME} alt="" />
   </div>
   <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header