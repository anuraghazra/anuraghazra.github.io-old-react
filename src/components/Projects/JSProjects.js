import React from 'react';
import styled from 'styled-components';

import FlexWrapper from '../helpers/FlexWrapper';
import SingleJSProject from './SingleJSProject';

const JSProjectWrapper = styled(FlexWrapper)`
  color: white;
  position: relative;
  height: fit-content;

  .project {
    margin-bottom: 100px;
  }

  .project__body {
    padding: 20px;
  }

  .project__info {
    min-height: 250px;
    margin: 0px;
    overflow: auto;
  }

  .project__links {
    margin-top: 20px;
    width: 100%;
    padding: 5px;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
  }

  .panel__icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .project__links a {
    flex: 1;
    margin: 0;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .project__links a:hover {
    color: #242424 !important;
  }
`;

const JSProjects = ({ id }) => {
  return (
    <JSProjectWrapper id={id}>
      <SingleJSProject
        hideNav
        title={'Verlet.js'}
        links={{
          demo: 'https://codepen.io/anuraghazra/embed/zevGrm/?height=265&&theme-id=35893&default-tab=result',
          source: 'https://github.com/anuraghazra/verlet.js',
          download: 'https://github.com//anuraghazra/verlet.js/archive/master.zip'
        }}>
        <p>
          verlet.js is a 2D Physics Simulation Engine. verlet.js is used for creating rapid and fast verlet physics
          based models and structures. i was developing this engine for about 4 months and made a electron based desktop
          drawing application on top of it.
        </p>
      </SingleJSProject>

      <SingleJSProject
        rowReverse
        hideNav
        title={'Atomic.js'}
        links={{
          demo: 'https://codepen.io/anuraghazra/embed/JxYGNL/?height=300&theme-id=35893&default-tab=result',
          source: 'https://github.com/anuraghazra/atomic.js',
          download: 'https://github.com/anuraghazra/Atomic.js/archive/master.zip'
        }}>
        <p>
          Atomic.js is Greatly Simple 2D Physics Engine. It is a collision detection and resolution engine. Can be used
          in 2d HTML5 games and 2d physics simulations. it uses SAT (Seperation Axis Theorem) Collision Detection and
          mass seperation collision resolution.
        </p>
      </SingleJSProject>

      <SingleJSProject
        hideNav
        title={'Candy.js'}
        links={{
          demo: 'https://codepen.io/anuraghazra/embed/pGjvaR/?height=265&theme-id=35893&default-tab=result',
          source: 'https://github.com/anuraghazra/candy.js',
          download: 'https://github.com//anuraghazra/Candy.js/archive/master.zip'
        }}>
        <p>
          Candy.js is CanvasAPI Rendering Toolkit Library. Candy.js is highly inspired by p5.js's methods and functions.
          but it is more geared towards simplicity and utility functions.
        </p>
      </SingleJSProject>
    </JSProjectWrapper>
  );
};

export default JSProjects;
