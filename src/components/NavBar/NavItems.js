import React from 'react'
import { NavLink, NavItemsWrapper } from './NavItems.style';

function ALink({ hideMenu, to, children }) {
  return (
    <NavLink onClick={hideMenu}
      activeClass="active"
      hashSpy={true}
      spy={true}
      offset={-150}
      smooth={true}
      to={to}>
      {children}
    </NavLink>
  )
}

function NavItems({ sidebarState, hideMenu }) {
  return (
    <NavItemsWrapper sidebarState={sidebarState}>
      <ALink to="intro" hideMenu={hideMenu}>Intro</ALink>
      <ALink to="portfolio" hideMenu={hideMenu}>Portfolio</ALink>
      <ALink to="sideprojects" hideMenu={hideMenu}>Side Projects</ALink>
      {/* <ALink to="jsprojects" hideMenu={hideMenu}>JS Projects</ALink> */}
      <ALink to="creativecoding" hideMenu={hideMenu}>Creative Coding</ALink>
      <ALink to="concepts" hideMenu={hideMenu}>Concepts</ALink>
      <ALink to="about" hideMenu={hideMenu}>About</ALink>
      <ALink to="contact" hideMenu={hideMenu}>Contact</ALink>
    </NavItemsWrapper>
  )
}


export default NavItems;