import React, { Component } from 'react';
import Link from 'react-scroll/modules/components/Link'

import { IntroWrapper } from './Intro.style';
import Avatar from '../Avatar/Avatar';

import bg from './bg.svg';

class Intro extends Component {
  render() {
    return (
      <IntroWrapper id="intro">
        <img src={bg} alt="bg" />
        <main className="intro__content">
          <div className="intro__text">
            <p>Hi, I'm Anurag Hazra</p>
            <p>Passionate Web Designer</p>
            <p className="slogan">
              <span> Simplicity Is The</span>
              <span> Baddest choice</span>
              <span> To Be The Best</span>
            </p>
          </div>
          <Avatar img={'static/img/avatar-min.jpg'} />
          <Link
            spy={true}
            hashSpy={true}
            offset={-150}
            smooth={true}
            to={'portfolio'} className="btn-outline find-more">Find More</Link>
        </main>
      </IntroWrapper>
    )
  }
}

export default Intro;
