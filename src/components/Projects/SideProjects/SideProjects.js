import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Project } from '../Project';
import SideProjectsWrapper from './SideProjects.style';


function SideProjects() {
  return (
    <SideProjectsWrapper>
      <Project
        title={'EvolutionAquerium'}
        icons={['html', 'css', 'js']}
        tags={['Steering Behavior', 'Genetic Algorithm']}
        tools={['Vector.js', 'Candy.js']}
        langs={['HTML5', 'CanvasAPI', 'Javascript']}
        links={{
          video: 'https://www.youtube.com/embed/GKIhVrOsQCI',
          demo: 'https://anuraghazra.github.io/EvolutionAquerium',
          src: 'https://github.com/anuraghazra/EvolutionAquerium'
        }}
      >
        <p>
          Evolution Aquerium is based on Craig Reynold's Steering Behaviors and Flocking System. It's also implements Genetic Algorithm and mutations.
          <br/><br/>
          My Mentor Daniel Shiffman showcased this on his Youtube Channel at TheCodingTrain.
          <br/><br/>
          And i was very happy about the humble feedback sir Daniel Shiffman gave to me. it just boosted my confidence more and more. and motivated me to make this project better.
        </p>
      </Project>

      <Project
        title={'ShaderExpo'}
        icons={['html', 'css', 'js']}
        tags={['WebGL', 'Graphics', 'Editor']}
        tools={['WebGL', 'glMatrix', 'AceEditor']}
        langs={['WebGL', 'CanvasAPI', 'Javascript']}
        links={{
          video: 'https://www.youtube.com/embed/rtPhA041U4U',
          demo: 'https://anuraghazra.github.io/ShaderExpo',
          src: 'https://github.com/anuraghazra/ShaderExpo'
        }}
      >
        <p>
          ShaderExpo is purely dependency free shader editor made in Raw WebGL API. Experiment with basic webgl shaders on the fly.
          <br />
          ShaderExpo Includes rich features like Inline Error Logs, AutoCompletion, Live Editing, Example Shaders etc.
          <br />
          ShaderExpo is also mentioned in <a href="https://github.com/sjfricke/awesome-webgl#glsl-editors" className="red">Awesome-Webgl</a>
        </p>
      </Project>
      
      <Project
        title={'GyroDodge'}
        icons={['html', 'css', 'js']}
        tags={['HTML Game']}
        tools={['p5js', 'p5dom']}
        langs={['HTML5', 'CanvasAPI', 'Javascript']}
        links={{
          video: 'https://www.youtube.com/embed/GdRlkHTMk9c',
          demo: 'https://anuraghazra.github.io/GyroDodge/',
          src: 'https://github.com/anuraghazra/GyroDodge'
        }}
      >
        <p>
          Dodge! Shoot! Win!
          GyroDodge is a simple gyroscopic mobile game.
          <br />
          i used device orientation api to get the alpha, gamma, delta rotations of mobile device and then
          use it to control the player.
          <br/>
          also available on <a href="https://anuraghazra.itch.io/gyrododge">itch.io</a>
        </p>
      </Project>

      <Project
        title={'Verlet Drawing'}
        icons={['html', 'css', 'js']}
        tags={['Verlet physics']}
        langs={['HTML5', 'CanvasAPI', 'Javascript']}
        tools={['Verlet.js', 'uiu.js']}
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
        tools={['p5js']}
        langs={['CanvasAPI', 'Javascript']}
        links={{
          video: 'https://www.youtube.com/embed/6pnLnwew68w',
          demo: 'https://anuraghazra.github.io/classicLogo',
          src: 'https://github.com/anuraghazra/classicLogo'
        }}
      >
        <p>
          Classic Logo is a LOGO Interpreter Made With HTML5 Canvas.
          it Implements all of the basic LOGO commands and also repeat command.
          it also got mentioned in Daniel Shiffman's Youtube Channel TheCodingTrain
        </p>
      </Project>

      <Project
        title={'QuickerPoll'}
        icons={['react', 'node', 'server']}
        tags={['Nodejs', 'React', 'Mongo']}
        langs={['Javascript', 'Nodejs']}
        tools={['antDesign', 'mongoose', 'socket.io']}
        links={{
          video: 'https://www.youtube.com/embed/10sL4z9BHNE',
          demo: 'https://quickerpoll.herokuapp.com',
          src: 'https://github.com/anuraghazra/QuickerPoll'
        }}
      >
        <p>
          QuickerPoll is a crowd-sourced real-time polling app created with React and Nodejs.
          QuickerPoll lets you create, edit, update, delete public polls and vote on them publicly.
          This project is just an example of using react, nodejs and restfull apis all together
        </p>
      </Project>

      <Row>
        <Col xs={12} lg={4}>
          <Project
            noVideo
            title={'Creative Chat'}
            icons={['html', 'js', 'node']}
            tags={['Nodejs']}
            tools={['Heroku', 'Socket.io']}
            langs={['NodeJS', 'Express']}
            links={{
              demo: 'https://creativechat.herokuapp.com',
              src: 'https://github.com/anuraghazra/creativechat'
            }}
          >
            <p>Creative Chat is a realtime fun chatting app. where users can draw with colors in the canvas and communicate trough art</p>
          </Project>
        </Col>
        
        <Col md={12} lg={4}>
          <Project
            noVideo
            title={'Verly.js'}
            icons={['html', 'css', 'js']}
            tags={['Verlet', 'Physics', 'Canvas']}
            langs={['Javascript', 'CanvasAPI', 'HTML5']}
            tools={['']}
            links={{
              demo: 'https://anuraghazra.github.io/Verly.js',
              src: 'https://github.com/anuraghazra/Verly.js'
            }}
          >
            <p>Verly.js is a successor to my old Verlet.js Physics Engine. Very.js is more simple to use and very modular. Easy to integrate verlet physics engine. </p>
          </Project>
        </Col>

        <Col xs={12} lg={4}>
          <Project
            noVideo
            title={'Simple Rockets'}
            icons={['server', 'js', 'node']}
            tags={['NodeJS', 'Multiplayer']}
            tools={['Heroku', 'Socket.io']}
            langs={['NodeJS', 'Express']}
            links={{
              demo: 'https://simplerockets.herokuapp.com',
              src: 'https://github.com/anuraghazra/simplerockets'
            }}
          >
            <p>Simple Rockets is a online multiplayer game made with NodeJS and Socket.io. all of the players can join the game with their unique name and play.</p>
          </Project>
        </Col>

      </Row>
    </SideProjectsWrapper>
  )
}

export default SideProjects;