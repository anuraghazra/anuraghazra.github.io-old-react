import React from 'react'
import styled from 'styled-components';
import media from '../helpers/media.style';

import Avatar from '../Avatar';
import Skills from './Skills';

const AboutWrapper = styled.section`
  color : white;
  text-align: left;
  margin-bottom: 50px;
  height : auto;
  overflow: auto;

  ${media.tablet`
    text-align: justify;
    padding : 10px;
  `}

  .avatar {
    width: 250px;
    height: 250px;
    float: left;
    margin-right: 50px;
    shape-outside: circle();
    ${media.tablet`
      float: none;
      margin : auto;
      shape-outside: none;
    `}
  }

`;

function About(props) {
  return (
    <AboutWrapper id={props.id}>
      <Avatar className='avatar' img={'static/img/avatar-min.jpg'} />
      <p>
        Hi. My name is anurag hazra i am a graphics designer from ramakrishna mission shilpamandira.
        I Started designing from my childhood with drawing books and crayons. but as i grow up, i want to do something different so my creativity lead me to computers, at first i do some paintings in M.S Paint and M.S PowerPoint. i also dig up game's textures and models and it give me a great joy to do 3D Modeling. So I Started Blender.. and make some photorealistic designings on my own. and when i join at RKMSCC my self-confidence increased more and more. and started Vector And Raster graphics as well as web designs and web developing got my intrest. and i decided to learn HTML,CSS,JavaScript. my RKMSCC teacher taught me HTML and CSS and i learned JavaScript from W3Schools. and got advanced in it. i also make some small games in JavaScript. and make some websites and experiments with web developing i also started some js libraries like jQuery, Angular and also started PHP, AJAX, MySQL etc..
      </p>

      <Skills />
    </AboutWrapper>
  )
}

export default About;
