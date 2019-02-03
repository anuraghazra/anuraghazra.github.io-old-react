import React, { Component } from 'react';
import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { IntroWrapper } from './Intro.style';
import Avatar from '../Avatar/Avatar';

import bg from './bg.svg';

const Avtr = styled.div`
  flex: none;
  margin: auto;
`;

class Intro extends Component {
  render() {
    return (
      <IntroWrapper id='intro'>
        <img src={bg} alt='bg' />
        <main className='intro__content'>
          <Fade top>
            <div className='intro__text'>
              <p>Hi, I'm Anurag Hazra</p>
              <p>Passionate Web Designer</p>
              <p className='slogan'>
                <span> Simplicity Is The</span>
                <span> Baddest choice</span>
                <span> To Be The Best</span>
              </p>
            </div>
          </Fade>

          <Avtr>
            <Zoom>
              <Avatar img={'static/img/avatar-min.jpg'} />
            </Zoom>
          </Avtr>

          <Link
            spy={true}
            hashSpy={true}
            offset={-150}
            smooth={true}
            to={'portfolio'}
            className='btn-outline find-more'>
            Find More
          </Link>
        </main>
      </IntroWrapper>
    );
  }
}

export default Intro;
