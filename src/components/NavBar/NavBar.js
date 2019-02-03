import React, { Component } from 'react';
import { NavWrapper, NavLink } from './NavBar.style';

function Link({ hideMenu, to, children }) {
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

function NavItems({ mobile, hideMenu }) {
  return (
    
    <div className={`nav__items ${mobile ? 'show_nav' : ''}`}>
      <Link to="intro" hideMenu={hideMenu} >Intro</Link>
      <Link to="portfolio" hideMenu={hideMenu} >Portfolio</Link>
      <Link to="sideprojects" hideMenu={hideMenu} >Side Projects</Link>
      {/* <Link to="jsprojects" hideMenu={hideMenu} >JS Projects</Link> */}
      <Link to="creativecoding" hideMenu={hideMenu} >Creative Coding</Link>
      <Link to="concepts" hideMenu={hideMenu} >Concepts</Link>
      <Link to="about" hideMenu={hideMenu} >About</Link>
      <Link to="contact" hideMenu={hideMenu} >Contact</Link>
    </div>
  )
}

function Burger({ handleToggle }) {
  return (
    <div onClick={handleToggle} className="burger">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

function BackDrop({ hideMenu }) {
  return (
    <div onClick={hideMenu} className={'backdrop'}></div>
  )
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      shrinknav: false
    }
  }

  componentDidMount() {
    window.addEventListener('mousewheel', (e) => {
      if (e.deltaY < 0) {
        this.setState({ shrinknav: false })
      } else if (e.deltaY > 0) {
        this.setState({ shrinknav: true })
      }
    });

  }

  handleToggle = () => {
    this.setState(prev => {
      return { toggle: !prev.toggle }
    })
  }

  hideMenu = () => {
    this.setState({ toggle: false })
  }

  render() {
    return (
      <div>
        {this.state.toggle && <BackDrop hideMenu={this.hideMenu} />}
        <NavWrapper shrink={this.state.shrinknav}>
          <h2 className="nav__title">Anurag Hazra</h2>
          <Burger handleToggle={this.handleToggle} />
          <NavItems hideMenu={this.hideMenu} mobile={this.state.toggle} />
        </NavWrapper>
      </div>
    )
  }
}

export default NavBar;
