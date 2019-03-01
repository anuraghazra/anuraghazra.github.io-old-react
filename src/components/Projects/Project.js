// @ts-check
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useInView } from 'react-intersection-observer';
import { animated, config, useSpring } from "react-spring";
import styled from 'styled-components';
import FakeBrowser from '../FakeBrowser/FakeBrowser';

/**
 * @type any
 */
const GitLinksWrapper = styled(Row)`
  width: 100%;
  margin-top : 2rem;
  padding: 7px 5px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.secondaryLight};
  font-size: 0.8rem;

  a {
    color: ${props => props.theme.secondaryLight};
    transition: 0.2s;
    :hover {
      color: ${props => props.theme.primary};
    }
  }
  span {
    position: relative;
    top: -5px;
    margin-left: 10px;
  }
`

/**
 * @param {object} props
 * @param {string} props.demo 
 * @param {string} props.source 
 * @param {boolean=} props.noStyle 
 */
const GitLinks = ({ demo, source }) => {
  return (
    <GitLinksWrapper around='xs'>
      <a rel="noopener noreferrer" target="_blank" href={demo}>
        <i className="fa fa-2x fa-window-maximize"></i><span>Live Demo</span>
      </a>
      <a rel="noopener noreferrer" target="_blank" href={source}>
        <i className="fab fa-2x fa-github"></i><span>Source Code</span>
      </a>
    </GitLinksWrapper>
  )
}

const TechUsed = ({ icons }) => {
  const icon = {};
  for (let i = 0; i < icons.length; i++) {
    icon[icons[i]] = true;
  }
  return (
    <Row className="project__techused">
      {icon.html && <Col><i className="fab fa-html5"></i></Col>}
      {icon.js && <Col><i className="fab fa-js-square"></i></Col>}
      {icon.css && <Col><i className="fab fa-css3"></i></Col>}
      {icon.react && <Col><i className="fab fa-react"></i></Col>}
      {icon.node && <Col><i className="fab fa-node-js"></i></Col>}
      {icon.server && <Col><i className="fas fa-server"></i></Col>}
    </Row>
  )
}

const Info = ({ children, tags, langs, tools, icons }) => {
  return (
    <div className="project__info">
      {children}
      <ul className="side-projects-ul">
        <li>
          <div>
            <i className="fas fa-tags"></i>
          </div>
          <div>{tags.map((text, i) => <span key={i} className="tags">{text}</span>)}</div>
        </li>
        <li>
          <div>
            <i className="fas fa-tools"></i>
          </div>
          <div>{tools.map((text, i) => <span key={i} className="tags">{text}</span>)}</div>
        </li>
        <li>
          <div>
            <i className="fas fa-code"></i>
          </div>
          <div>{langs.map((text, i) => <span key={i} className="tags">{text}</span>)}</div>
        </li>
      </ul>
      <TechUsed icons={icons} />
    </div>
  )
}


/**
 * 
 * @param {object} props
 * @param {string} props.title 
 * @param {object} props.links 
 * @param {object} props.tags 
 * @param {array} props.langs 
 * @param {array} props.tools 
 * @param {array} props.icons 
 * @param {boolean} props.children 
 * @param {boolean=} props.noVideo
 */
const Project = ({
  title,
  links,
  tags,
  langs,
  tools,
  icons,
  noVideo,
  children
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const props = useSpring({
    config: config.gentle,
    delay: 0,
    from: {
      opacity: 0,
      transform: 'translateY(100px)'
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(100px)'
    }
  });

  return (
    <animated.div style={props} ref={ref}>
      <Row reverse className={'single__project'}>
        {
          !noVideo && (
            <Col xs={12} lg={7}>
              <FakeBrowser youtube url={links.video} />
            </Col>
          )
        }
        <Col xs={12} lg={!noVideo ? 5 : true}>
          <h2 className="sub-title title-grad">{title}</h2>
          <Info
            tags={tags}
            langs={langs}
            icons={icons}
            tools={tools}
            children={children}
          />
          <GitLinks demo={links.demo} source={links.src} />
        </Col>
      </Row>
    </animated.div>
  )
}

export { GitLinks, TechUsed, Project };