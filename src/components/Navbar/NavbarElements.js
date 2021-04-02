import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'


export const Nav = styled.nav`
  background: var(--color-primary);
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 10;
  box-shadow: 0 1px 10px var(--color-primary);
`

export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  & {
    justify-content: center;
    flex-grow: 1;
  }

  img {
    width: 150px;
  }
`

export const NavBtn = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1.5em;
  align-items: center;
`

export const NavBtnLink =  styled(Link)`
  text-decoration: none;
`

export const NavAccountIcon = styled(FaUser)`
  font-size: 20px;
  color: white;
`