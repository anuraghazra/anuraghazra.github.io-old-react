// React Components
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

// My Components
import Wrapper from './components/Wrapper/Wrapper';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Porfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects';
import Concepts from './components/Concepts/Concepts';
import CCProjects from './components/CCProjects/CCProjects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import './App.css';

// default styles
const theme = {
  primary: '#e37682',
  secondary: '#5f4d93',
  secondaryLight: '#a58fe9',
  grad: 'linear-gradient(45deg, #a58fe9, #e37682)',
  gradDark: 'linear-gradient(-180deg, #ff6272, #5f4d93)'
};


const BGWave = () => {
  return (
    <svg className="bg-wave"
      id="wave"
      viewBox="0 0 209.2643 36.755718"
      height="100%"
      width="100%">
      <g
        transform="translate(-0.23267502,-260.183)"
        id="layer1">
        <path id="p1"
          d="M 0.23267502,290.41885 C 81.514795,318.93117 142.82767,241.47813 209.49697,294.24737 V 260.183 H 0.23267502 Z"
        />
      </g>
    </svg>
  )
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} className='App'>
        <Wrapper>
          <NavBar />

          <BGWave />

          <Intro />

          <h1 className='sub-title page-title'>My Designs Are</h1>
          <Porfolio id='portfolio' />

          <h1 className='sub-title page-title'>Side ⚝ Projects</h1>
          <Projects id='sideprojects' />

          <h1 className='sub-title page-title'>Creative Coding Projects</h1>
          <CCProjects id='creativecoding' />

          <h1 className='sub-title page-title'>Concepts</h1>
          <Concepts id='concepts' />

          <h1 className='sub-title page-title'>About</h1>
          <About id='about' />

          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
