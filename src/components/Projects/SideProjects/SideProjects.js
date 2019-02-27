import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Project } from '../Project';
import SideProjectsWrapper from '../styles/SideProjects.style';


function SideProjects() {
  return (
    <SideProjectsWrapper>
      <Project
        title={'EvolutionAquerium'}
        icons={['html', 'css', 'js']}
        tags={['Steering Behavior', 'Genetic Algorithm']}
        tools={'Vector.js, Candy.js'}
        langs={'HTML5, CanvasAPI, Javascript'}
        links={{
          video: 'https://www.youtube.com/embed/GKIhVrOsQCI',
          demo: 'https://anuraghazra.github.io/EvolutionAquerium',
          src: 'https://github.com/anuraghazra/EvolutionAquerium'
        }}
      >
        <p>
          Evolution Aquerium is based on Craig Reynold's Steering Behaviors and Flocking System. It's also implements Genetic Algorithm and mutations.
          <br /><br />
          My Mentor Daniel Shiffman showcased this on his Youtube Channel at TheCodingTrain.
          <br /><br />
          And i was very happy about the humble feedback sir Daniel Shiffman gave to me. it just boosted my confidence more and more. and motivated me to make this project better.
        </p>
      </Project>

      <Project
        title={'Verlet Drawing'}
        icons={['html', 'css', 'js']}
        tags={['Verlet physics']}
        langs={'HTML5, CanvasAPI, Javascript'}
        tools={'Verlet.js, uiu.js'}
        links={{
          video: 'https://www.youtube.com/embed/OCZXO8C4zTA',
          demo: 'https://anuraghazra.github.io/VerletDrawing',
          src: 'https://github.com/anuraghazra/VerletDrawing'
        }}
      >
        <p>Verlet Drawing is a physics based drawing app. made with verlet.js as a showcase of its capabilities</p>
      </Project>

      <Project
        title={'Classic Logo'}
        icons={['html', 'css', 'js']}
        tags={['LOGO Programming']}
        tools={'p5js'}
        langs={'CanvasAPI, Javascript'}
        links={{
          video: 'https://www.youtube.com/embed/6pnLnwew68w',
          demo: 'https://anuraghazra.github.io/classicLogo',
          src: 'https://github.com/anuraghazra/classicLogo'
        }}
      >
        <p>Classic Logo is a LOGO Interpreter Made With HTML5 Canvas. it Implements all of the basic LOGO commands and also repeat command. it also got mentioned in Daniel Shiffman's Youtube Channel TheCodingTrain</p>
      </Project>

      <Row>
        <Col xs={12} lg={4}>
          <Project
            noVideo
            title={'Creative Chat'}
            icons={['html', 'js', 'node']}
            tags={['Nodejs']}
            tools={'Heroku, Socket.io'}
            langs={'NodeJS, Express'}
            links={{
              demo: 'https://creativechat.herokuapp.com',
              src: 'https://github.com/anuraghazra/creativechat'
            }}
          >
            <p>Creative Chat is a realtime fun chatting app. where users can draw with colors in the canvas and communicate trough art</p>
          </Project>
        </Col>

        <Col xs={12} lg={4}>
          <Project
            noVideo
            title={'Simple Rockets'}
            icons={['server', 'js', 'node']}
            tags={['NodeJS', 'Multiplayer']}
            tools={'Heroku, Socket.io'}
            langs={'NodeJS, Express'}
            links={{
              demo: 'https://simplerockets.herokuapp.com',
              src: 'https://github.com/anuraghazra/simplerockets'
            }}
          >
            <p>Simple Rockets is a online multiplayer game made with NodeJS and Socket.io. all of the players can join the game with their unique name and play.</p>
          </Project>
        </Col>

        <Col md={12} lg={4}>
          <Project
            noVideo
            title={'WebGL.js'}
            icons={['html', 'css', 'js']}
            tags={['WebGL', '3D']}
            langs={'Javascript, WebGL'}
            tools={'glMatrix.js'}
            links={{
              demo: 'https://anuraghazra.github.io/WebGL.js',
              src: 'https://github.com/anuraghazra/WebGL.js'
            }}
          >
            <p>Creative Chat is a realtime fun chatting app. where users can draw with colors in the canvas and communicate trough art</p>
          </Project>
        </Col>
      </Row>
    </SideProjectsWrapper>
  )
}

export default SideProjects;