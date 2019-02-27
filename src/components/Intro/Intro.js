import React from 'react';
import Link from 'react-scroll/modules/components/Link';

import { IntroWrapper } from './Intro.style';
import Avatar from '../UI/Avatar';

import { useSpring, animated, config } from "react-spring";
import { useInView } from 'react-intersection-observer'

const IntroText = () => {
  return (
    <React.Fragment>
      <p>Hi, I'm Anurag Hazra</p>
      <p>Passionate Web Designer</p>
      <p className='slogan'>
        <span> Simplicity Is The</span>
        <span> Baddest choice</span>
        <span> To Be The Best</span>
      </p>
    </React.Fragment>
  )
}

function Intro() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const fadeTop = useSpring({
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "translateY(-100px)"
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(-100px)"
    }
  });
  const zoom = useSpring({
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "scale(0)"
    },
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0)"
  });

  return (
    <IntroWrapper id='intro' ref={ref}>
      <main className='intro__content'>

        <animated.div className="intro__text" style={fadeTop}>
          <IntroText />
        </animated.div>

        <animated.div className="avtr-animated" style={zoom}>
          <Avatar img={'static/img/avatar-min.jpg'} />
        </animated.div>

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

export default Intro;
