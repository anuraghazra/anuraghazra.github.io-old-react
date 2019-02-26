// @ts-check
import React from 'react';

import { useSpring, animated, config } from "react-spring";
import { useInView } from 'react-intersection-observer';

import { Row, Col } from 'react-flexbox-grid';
import FakeBrowser from '../../FakeBrowser/FakeBrowser';

export const IconLink = ({ source, icon }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={source}>
      <i className={icon}></i>
    </a>
  )
}
const PanelLinks = (props) => {
  return (
    <div className="panel__icons">
      {props.links.source && (
        <IconLink source={props.links.source} icon="fab fa-2x fa-github" />
      )}
      {props.links.download && (
        <IconLink source={props.links.download} icon="fas fa-2x fa-download" />
      )}
      {props.links.demo && (
        <IconLink source={props.links.demo} icon="fas fa-2x fa-window-maximize" />
      )}
    </div>
  )
}


/**
 * 
 * @param {object} props
 * @param {any=} props.handleClick
 * @param {boolean=} props.rowReverse
 * @param {boolean=} props.hideNav
 * @param {boolean=} props.image
 * @param {object} props.links
 * @param {string} props.title
 * @param {any} props.children
 */
function SingleJSProject({
  handleClick,
  rowReverse,
  hideNav,
  image,
  links,
  title,
  children
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const props = useSpring({
    config: config.gentle,
    delay: 300,
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-100px)'
    }
  });
  return (
    <animated.div style={{...props, width: '100%'}} ref={ref}>

      <Row
        center='xs'
        around='xs'
        reverse={rowReverse}
        className={'project'}
        onClick={handleClick}
      >
        <Col xs={12} md={7}>
          <FakeBrowser
            hideNav={hideNav}
            image={image}
            url={links.demo}
          />
        </Col>

        <Col xs={12} md={5} className={'project__body'}>
          <h2 className="sub-title">{title}</h2>
          <div className="project__info">
            {children}
          </div>
          <div className="project__links">
            <PanelLinks links={links} />
          </div>
        </Col>
      </Row>
    </animated.div>
  )
}

export default SingleJSProject;
