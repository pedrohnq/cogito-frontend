import React from 'react'
import {Nav, NavLogo, NavBtnLink, NavBtn, NavAccountIcon} from './NavbarElements'
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to='/'>
        <img src={Logo} alt="Cogito Logo"/>
      </NavLogo>

      <NavBtn>
        <NavBtnLink to='/signin'>
          <NavAccountIcon/>
        </NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
