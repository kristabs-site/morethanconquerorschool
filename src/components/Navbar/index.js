import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, LogoLink, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from 
'./NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <LogoLink to="/"> 
                <NavLogo img src="/more2.png" alt="Logo" />
            </LogoLink>
            <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="about">ABOUT</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="academics">ACADEMICS</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="admission">ADMISSION</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="newsevents">NEWS & EVENTS</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="contact">CONTACT</NavLinks>
        </NavItem>
      </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar;