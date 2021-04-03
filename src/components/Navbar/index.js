import React from 'react'
import {Nav, ToggleSidebar, Bars, NavContent, NavLogo, NavAccountLink, NavAccountIcon} from './NavbarElements'
import Logo from '../../assets/images/logo.png'


const Navbar = () => {
  

  return (
    <Nav>
      
      <NavContent>
        <NavLogo to='/'>
          <img src={Logo} alt="Cogito Logo"/>
        </NavLogo>
      </NavContent>
      

      <NavAccountLink to='/signin'>
        <NavAccountIcon/>
      </NavAccountLink>
    </Nav>
  )
}

export default Navbar
