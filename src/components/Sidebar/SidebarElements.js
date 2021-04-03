import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {NavLink as Link} from 'react-router-dom'

export const Side = styled.div`
  background-color: var(--color-secondary);
  display: flex;
  width: 200px;
  box-shadow: inset 0 20px 15px -20px var(--color-primary);
  @media only screen and (max-width: 800px) {
    display: none;
    &.active {
      display: flex;
      width: 100%;
      position: absolute;
      height: calc(100vh - 66px);
      justify-content: center;
      
    }
  }
`

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideMenuItem = styled(Link)`
  display: flex;
  text-decoration: none;
`

export const SideMenuItemText = styled.p`
  display: flex;
  align-items: center;
  color: white;
`

export const SideMenuItemIcon = styled.div`
  color: white;
  padding: 1rem;
  font-size: 30px;
`

export const ToggleSidebar = styled.div`
  display: none;
  position: absolute;
  left: 1rem;
  top: 1.2em;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`

export const Bars = styled(FaBars)`
  font-size: 30px;
  color: white;
  display: flex;
`