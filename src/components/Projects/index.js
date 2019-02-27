import React from 'react';
import ProjectsWrapper from '../helpers/FlexWrapper';
import JSProjects from './JSProjects/JSProjects';
import SideProjects from './SideProjects/SideProjects';


function Projects(props) {
  return (
    <div id={props.id}>
      {/* Side Projects */}
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
