import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
  SidebarMenu, SidebarLink } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer $isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="academics" onClick={toggle}>
             Academics
            </SidebarLink>
            <SidebarLink to="admission"onClick={toggle}>
            Admission
            </SidebarLink>
            <SidebarLink to="newsevents"onClick={toggle}>
              News & Events
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar;