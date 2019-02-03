import React, { Component } from 'react';
import styled from 'styled-components';

import media from './helpers/media.style';
import Observer from '@researchgate/react-intersection-observer';
import LoadingPlaceholder from './LoadingPlaceholder';

const BrowserWindow = styled.div`
  position: relative;
  display: flex;
  align-items : center;
  min-height: 384px;
  width: 100%;
  /* width: 683px; */
  /* padding-bottom: 56%; */
  max-height: fit-content;
  border-radius: 10px;
  background-color: ghostwhite;
  box-shadow: 0 5px rgba(0,0,0,0.2); 
  overflow: hidden;
  margin: 0 auto;


  .fake-nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: ghostwhite;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 7px;
    i {
      position: absolute;
      left : 20px;
      width: 15px;
      height: 15px; 
      border-radius: 50%;
      :nth-child(1) { background-color: rgb(253, 47, 47); }
      :nth-child(2) {
        background-color: rgb(253, 140, 47);
        margin-left: 30px;
      }
      :nth-child(3) {
        background-color: rgb(43, 170, 26);
        margin-left: 60px;
      }
    }
  }

  img {
    position: absolute;
    top: ${props => props.hideNav ? '0px' : '30px'};
    left: 0;
    width: 100%;
    height: auto;
    ${media.tablet`
      position: initial;
    `}
  }

  iframe {
    position: absolute;
    height : ${props => props.youtube ? '93%' : '100%'};
    top: ${props => props.hideNav ? '0px' : '30px'};
    left : 0px;
    z-index: 0;
  }
`;

const IFrame = ({ isVisible, url, onLoad }) => {
  let src = url;
  return (
    <iframe onLoad={onLoad} title={url} width="100%" src={isVisible ? src : undefined} frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )
}

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      originalUrl: null
    }
    this.initLoad();
  }

  initLoad = () => {
    if (this.state.loaded) return false;
    let img = new Image();
    if (this.props.isVisible) {
      img.src = this.props.url;
    }
    img.onload = () => {
      this.setState({
        loaded: true,
        originalUrl: img.src
      });
      this.props.onLoad();
    }
  }

  render() {
    this.initLoad();
    return (
      <>
        {
          this.state.loaded &&
          <img
            alt={this.props.url}
            width="100%"
            height="100%"
            src={this.state.originalUrl}
          />
        }
      </>
    )
  }
}

class FakeBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEntered: false,
      loaded: false
    }
  }

  handleEnter = (event) => {
    if (event.isIntersecting === true) {
      this.setState({
        isEntered: event.isIntersecting
      });
    }
  }

  handleLoad = () => {
    this.setState({
      loaded: true
    });
  }

  render() {
    let component;
    if (this.props.image) {
      component = <Img isVisible={this.state.isEntered} url={this.props.url} onLoad={this.handleLoad} />
    } else {
      component = <IFrame isVisible={this.state.isEntered} url={this.props.url} onLoad={this.handleLoad} />
    }

    return (
      <BrowserWindow
        className={this.props.className}
        hideNav={this.props.hideNav}
        image={this.props.image}
        youtube={this.props.youtube}>
        {
          !(this.props.hideNav) &&
          (<div className="fake-nav">
            <i></i><i></i><i></i>
          </div>)
        }
        {(this.state.isEntered && (!this.state.loaded)) && <LoadingPlaceholder />}
        <Observer disabled={this.state.isEntered} onChange={this.handleEnter}>
          <div>
            {component}
          </div>
        </Observer>
      </BrowserWindow>
    )
  }
}

export default FakeBrowser;

