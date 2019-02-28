import React, { Component } from 'react';
import { NavWrapper } from './NavBar.style';
import NavItems from './NavItems';

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
  return <div onClick={hideMenu} className={'backdrop'}></div>
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarState: false,
      shrinknav: false
    }
  }

  componentDidMount() {
    window.addEventListener('mousewheel', (e) => {
      if (e.deltaY < 0) {
        this.setState({ shrinknav: false });
      } else if (e.deltaY > 0) {
        this.setState({ shrinknav: true });
      }
    });
  }

  expandNav = () => {
    this.setState({ shrinknav: false })
  }

  handleToggle = () => {
    this.setState(prev => {
      return { sidebarState: !prev.sidebarState }
    })
  }

  hideMenu = () => {
    this.setState({ sidebarState: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.sidebarState && <BackDrop hideMenu={this.hideMenu} />}
        <NavWrapper onMouseOver={this.expandNav} shrink={this.state.shrinknav}>
          <h2 className="nav__title">Anurag Hazra</h2>
          <Burger handleToggle={this.handleToggle} />
          <NavItems hideMenu={this.hideMenu} sidebarState={this.state.sidebarState} />
        </NavWrapper>
      </React.Fragment>
    )
  }
}

export default NavBar;
