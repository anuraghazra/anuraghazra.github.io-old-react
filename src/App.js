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
import CCProjects from './components/CCProjects/CCProjects'

// CSS
// import './css/grid.css';
import './App.css';

// default styles
const theme = {
  primary: '#e37682',
  secondary: '#5f4d93',
  secondaryLight: '#a58fe9',
  grad: 'linear-gradient(45deg, #a58fe9, #e37682)',
  gradDark : 'linear-gradient(-180deg, #ff6272, #5f4d93)'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} className="App">
        <Wrapper>
          
          <NavBar></NavBar>
          
          <Intro />
          
          <h1 className="sub-title page-title">My Designs Are</h1>          
          <Porfolio id='portfolio' />

          <h1 className="sub-title page-title">Side ⚝ Projects</h1>
          <Projects id='sideprojects' />
          


          <h1 className="sub-title page-title">Creative Coding Projects</h1>
          <CCProjects id='creativecoding' />
          
          <h1 className="sub-title page-title">Concepts</h1>
          <Concepts id='concepts'/>

        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
