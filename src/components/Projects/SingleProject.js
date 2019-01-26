import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import FakeBrowser from '../FakeBrowser';

const GitLinksWrapper = styled.div`
  margin-top : 30px;
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
const GitLinks = ({ demo, source, noStyle }) => {
  return (
    <GitLinksWrapper noStyle={noStyle}>
      <a target="_blank" href={demo}>
        <i className="fa fa-2x fa-window-maximize"></i><span>Live Demo</span>
      </a>
      <a target="_blank" href={source}>
        <i className="fab fa-2x fa-github"></i><span>Source Code</span>
      </a>
    </GitLinksWrapper>
  )
}

const TechUsed = ({ icons }) => {
  let icon = {};
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

const Project = (props) => {
  return (
    <>
      {
        !props.noVideo ? (
          <Grid item xs={12} md={7}>
            <FakeBrowser youtube url={props.links.video} />
          </Grid>
        ) : null
      }
      <Grid item xs={12} md={!props.noVideo ? 5 : true}>
        <h2 className="sub-title title-grad">{props.title}</h2>
        <div className="project__info">
          {props.children}
          <ul className="side-projects-ul">
            <li>Implements :
              <div>
                {props.tags.map((text, i) => <span key={i} className="tags">{text}</span>)}
              </div>
            </li>
            <li>Languages : {props.langs}</li>
            <li>Tools : {props.tools}</li>
          </ul>
          <TechUsed icons={props.icons} />
        </div>
        <GitLinks
          demo={props.links.demo}
          source={props.links.src}
        />
      </Grid>
    </>
  )
}

export { GitLinks, TechUsed, Project }
