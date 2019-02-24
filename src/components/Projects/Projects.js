import React from 'react';

// import Zoom from 'react-reveal/Zoom';


import ProjectsWrapper from '../helpers/FlexWrapper';
import JSProjects from './JSProjects/JSProjects';
import SideProjects from './SideProject/SideProjects';

function Projects(props) {
  const projectData = [
    {
      title: 'EvolutionAquerium',
      icons: ['html', 'css', 'js'],
      tags: ['Steering Behavior', 'Genetic Algorithm'],
      tools: 'Vector.js, Candy.js',
      langs: 'HTML5, CanvasAPI, Javascript',
      links: {
        video: 'https://www.youtube.com/embed/GKIhVrOsQCI',
        demo: 'https://anuraghazra.github.io/EvolutionAquerium',
        src: 'https://github.com/anuraghazra/EvolutionAquerium'
      },
      children: (
        <p>
          Evolution Aquerium is based on Craig Reynold's Steering Behaviors and Flocking System. It's also implements Genetic Algorithm and mutations.
          <br />
          <br />
          My Mentor Daniel Shiffman showcased this on his Youtube Channel at TheCodingTrain.
          <br />
          <br />
          And i was very happy about the humble feedback sir Daniel Shiffman gave to me. it just boosted my confidence more and more. and motivated me to make this project better.
        </p>
      )
    }
  ]
  return (
    <div id={props.id}>
      <ProjectsWrapper boxCard>
        <SideProjects />
      </ProjectsWrapper>

      {/* JS Projects */}
      <h1 className="sub-title page-title">Javascript Libraries</h1>
      <JSProjects id="JSProjects" />
    </div>
  );
}

export default Projects;
