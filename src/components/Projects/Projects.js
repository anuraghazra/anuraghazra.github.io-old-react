import React, { Component } from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import media from '../helpers/media.style';

import ProjectsWrapper from '../helpers/FlexWrapper';
import JSProjects from './JSProjects';

import { Project } from './SingleProject';

const VideoCard = styled.section`
  padding: 10px;
  margin-bottom : 20px;
  border-radius : 5px;
  text-align: left;
  
  .title-grad {
    margin : 20px;
  }
  .single__project {
    border-radius : 5px;
    margin-bottom : 50px;
    padding: 20px;
    border: 1px solid ${props => props.theme.secondaryLight};
    
    ${media.tablet`
      padding: 5px;
      margin-bottom : 100px;
    `}
  }

  .small__projects {
    border: none;
    padding : 0;
    margin-bottom : 0;


    > div {
      margin : 10px;
      padding : 10px;
      border-radius : 5px;
      border: 1px solid ${props => props.theme.secondaryLight};
      
      ${media.tablet`
        margin: 0;
        margin-bottom : 100px;
        padding: 5px;
        :nth-last-child(1) {
          margin-bottom : 0px !important;
        }
      `}
    }
  } 
  
  .project__info p {
    display: block;
    min-height: 100px;
    color : #252525;
  }
  .project__info {
    min-height: 250px;
    margin: 10px;
    overflow: hidden;
  }
  .side-projects-ul {
    list-style-type: none;
    line-height: 40px;
    padding: 0;
  }
  
  .side-projects-ul li {
    font-weight: bolder;
    background: ${props => props.theme.gradDark};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

class Projects extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <ProjectsWrapper boxCard>
          <VideoCard>
            <Grid direction={'row-reverse'} alignItems='center' justify={'space-between'} className={'single__project'} container>
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
                  Evolution Aquerium is based on Craig Reynold's Steering Behaviors and Flocking System.
                  It's also implements Genetic Algorithm and mutations.
                <br />
                  <br />My Mentor Daniel Shiffman showcased this on his Youtube Channel at TheCodingTrain.
                <br />
                  <br />And i was very happy about the humble feedback sir Daniel Shiffman gave to me.
                  it just boosted my confidence more and more. and motivated me to make this project better.
              </p>
              </Project>
            </Grid>

            <Grid direction={'row-reverse'} alignItems='center' className={'single__project'} container>
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
                <p>
                  Verlet Drawing is a physics based drawing app.
                  made with verlet.js as a showcase of its capabilities
              </p>
              </Project>
            </Grid>

            <Grid direction={'row-reverse'} alignItems='center' className={'single__project'} container>
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
                <p>
                  Classic Logo is a LOGO Interpreter Made With HTML5 Canvas.
                  it Implements all of the basic LOGO commands and also repeat command.
                  it also got mentioned in Daniel Shiffman's Youtube Channel TheCodingTrain
              </p>
              </Project>
            </Grid>

            <Grid alignItems='center' className={'single__project small__projects'} container>
              <Project noVideo title={'Creative Chat'}
                icons={['html', 'js', 'node']}
                tags={['Nodejs']}
                tools={'Heroku, Socket.io'}
                langs={'NodeJS, Express'}
                links={{
                  demo: 'https://creativechat.herokuapp.com',
                  src: 'https://github.com/anuraghazra/creativechat'
                }}
              >
                <p>
                  Creative Chat is a realtime fun chatting app. where users can draw with colors in the canvas and communicate trough art
              </p>
              </Project>


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
                <p>
                  Simple Rockets is a online multiplayer game made with NodeJS and Socket.io.
                  all of the players can join the game with their unique name and play.</p>
              </Project>


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
                <p>
                  Creative Chat is a realtime fun chatting app. where users can draw with colors in the canvas and communicate trough art
              </p>
              </Project>
            </Grid>
          </VideoCard>

        </ProjectsWrapper>

        {/* JS Projects */}
        <h1 className="sub-title page-title">Javascript Libraries</h1>
        <JSProjects id='JSProjects' />

      </div>
    )
  }
}

export default Projects;