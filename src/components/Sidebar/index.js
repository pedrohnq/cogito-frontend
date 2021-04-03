import React, {useState} from 'react'
import {Side, ToggleSidebar, Bars, SideMenuItemIcon, SideMenu, SideMenuItem, SideMenuItemText} from './SidebarElements'
import {FaRegNewspaper, FaRegCalendarAlt, FaRegBell} from 'react-icons/fa'
import {IoSettingsOutline} from 'react-icons/io5'
const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false)
  console.log(sidebar)

  return (
    <>
      <ToggleSidebar onClick={() => setSidebar(!sidebar)}>
        <Bars/>
      </ToggleSidebar>

      <Side className={ sidebar ? 'active' : ''}>
        <SideMenu>
          <SideMenuItem to='/news'>
            <SideMenuItemIcon><FaRegNewspaper/></SideMenuItemIcon>
            <SideMenuItemText>News</SideMenuItemText>
          </SideMenuItem>

          <SideMenuItem to='/calendar'>
            <SideMenuItemIcon><FaRegCalendarAlt/></SideMenuItemIcon>
            <SideMenuItemText>Calendar</SideMenuItemText>
          </SideMenuItem>
          
          <SideMenuItem to='/notifiication'>
            <SideMenuItemIcon><FaRegBell/></SideMenuItemIcon>
            <SideMenuItemText>Notification</SideMenuItemText>
          </SideMenuItem>

          <SideMenuItem to='/settings'>
            <SideMenuItemIcon><IoSettingsOutline/></SideMenuItemIcon>
            <SideMenuItemText>Settings</SideMenuItemText>
          </SideMenuItem>
      </SideMenu>
    </Side>
    </>
    
  )
}

export default Sidebar
