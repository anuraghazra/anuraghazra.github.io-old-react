// @ts-check
import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import FakeBrowser from '../FakeBrowser/FakeBrowser';

/**
 * @type any
 */
const GitLinksWrapper = styled.div`
  margin-top : 2rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.secondaryLight};

  a {
    color: ${props => props.theme.secondaryLight};
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
const GitLinks = ({ demo, source, noStyle }) => {
  return (
    <GitLinksWrapper noStyle={noStyle}>
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
    <Grid justify={'space-evenly'} style={{ width: '100%' }} container>
      {icon.html && <Grid item><i className="fab fa-2x fa-html5"></i></Grid>}
      {icon.js && <Grid item><i className="fab fa-2x fa-js-square"></i></Grid>}
      {icon.css && <Grid item><i className="fab fa-2x fa-css3"></i></Grid>}
      {icon.node && <Grid item><i className="fab fa-2x fa-node-js"></i></Grid>}
      {icon.server && <Grid item><i className="fas fa-2x fa-server"></i></Grid>}
    </Grid>
  )
}


/**
 * 
 * @param {object} props
 * @param {string} props.title 
 * @param {object} props.links 
 * @param {object} props.tags 
 * @param {object} props.langs 
 * @param {object} props.tools 
 * @param {object} props.icons 
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
  return (
    <>
      {
        !noVideo && (
          <Grid item xs={12} md={7}>
            <FakeBrowser youtube url={links.video} />
          </Grid>
        )
      }
      <Grid item xs={12} md={!noVideo ? 5 : true}>
        <h2 className="sub-title title-grad">{title}</h2>
        <div className="project__info">
          {children}
          <ul className="side-projects-ul">
            <li>Implements :
              <div>
                {tags.map((text, i) => <span key={i} className="tags">{text}</span>)}
              </div>
            </li>
            <li>Languages : {langs}</li>
            <li>Tools : {tools}</li>
          </ul>
          <TechUsed icons={icons} />
        </div>
        <GitLinks
          demo={links.demo}
          source={links.src}
        />
      </Grid>
    </>
  )
}

export { GitLinks, TechUsed, Project }
