import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaUser, FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
  background: var(--color-primary);
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 3;
  box-shadow: 0 1px 15px var(--color-primary);
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  
  & {
    justify-content: center;
    flex-grow: 1;
  }

`

export const NavLogo = styled(Link)`
  
  cursor: pointer;

  
  img {
    width: 150px;
  }
`

export const NavAccountLink =  styled(Link)`
  text-decoration: none;
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1.2em;
  align-items: center;
`

export const NavAccountIcon = styled(FaUser)`
  font-size: 30px;
  color: white;
`