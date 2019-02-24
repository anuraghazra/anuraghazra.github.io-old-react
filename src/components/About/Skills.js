import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media.style';

const SkillsWrapper = styled.section`
  width : 100%;
  height : auto;

  margin-top : 150px;
  text-align: center;

  .chart {
    margin: auto;
    width : 90%;
    padding: 1rem;
    text-align: left;

    ${media.tablet`
      width : 100%;
      padding : 5px;
    `}

    .bar {
      width : 100%;
      display: flex;
      align-items: center;
      background-color : white;
      margin-top: 1rem;
      border-radius : 10px;
      border: 2px solid white;
      
      .percent {
        display: block;
        width: 50px;
        margin : 0;
        padding : 0;
        color : #252525;
        font-size : 0.8em;
      }
    }

    .progress {
      width : 100%;
      height : 35px;
      display: flex;
      align-items: center;
      background : ${props => props.theme.grad};
      border-radius : 8px;
      margin-right : auto;

      .bar-icon {
        width : 50px;
        margin: auto 0;
        color : white;
        font-size : 1.5em;
        margin-left: 1.5rem;
      }
      .name {
        width : 100px;
        color : white;
        font-size : 1em;
      }
    }
  }

`;

const Bar = (props) => {
  return (
    <div className="bar">
      <div className='progress' style={{ width: props.percent + '%' }}>
        <div className="bar-icon"><i className={props.icon}></i></div>
        <p className="name">{props.name}</p>
      </div>
      <p className="percent">{props.percent}%</p>
    </div>
  )
}

function Skills() {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', percent: 88 },
    { name: 'CSS', icon: 'fab fa-css3', percent: 20 },
    { name: 'NodeJS', icon: 'fab fa-node', percent: 55 },
    { name: 'React', icon: 'fab fa-react', percent: 45 },
    { name: 'Git', icon: 'fab fa-github', percent: 75 },
    { name: 'Canvas', icon: 'fas fa-palette', percent: 90 },
    { name: 'Raster', icon: 'fab fa-adobe', percent: 63 },
    { name: 'Vector', icon: 'fa fa-bezier-curve', percent: 78 },
  ]

  const filtered = skills.sort((e, f) => f.percent - e.percent);
  return (
    <SkillsWrapper>
      <h2>My skillz with a 'Z'</h2>
      <div className="chart">
        {
          filtered.map((data, i) => {
            return <Bar key={i} name={data.name} icon={data.icon} percent={data.percent} />
          })
        }
      </div>
    </SkillsWrapper>
  )
}

export default Skills;
