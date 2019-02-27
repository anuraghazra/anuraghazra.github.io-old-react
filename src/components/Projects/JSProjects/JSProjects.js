// @ts-check
import React from 'react';
import GenericProject from '../GenericProject';

const JSProjects = ({ id }) => {
  const projectsData = [
    {
      title: 'Verlet.js',
      links: {
        demo: 'https://codepen.io/anuraghazra/embed/zevGrm/?height=265&&theme-id=35893&default-tab=result',
        source: 'https://github.com/anuraghazra/verlet.js',
        download: 'https://github.com//anuraghazra/verlet.js/archive/master.zip'
      },
      brief: `verlet.js is a 2D Physics Simulation Engine. verlet.js is used for creating rapid and fast verlet physics
      based models and structures. i was developing this engine for about 4 months and made a electron based desktop
      drawing application on top of it.`
    },
    {
      title: 'Atomic.js',
      links: {
        demo: 'https://codepen.io/anuraghazra/embed/JxYGNL/?height=300&theme-id=35893&default-tab=result',
        source: 'https://github.com/anuraghazra/atomic.js',
        download: 'https://github.com/anuraghazra/Atomic.js/archive/master.zip'
      },
      brief: `Atomic.js is Greatly Simple 2D Physics Engine. It is a collision detection and resolution engine. Can be used
      in 2d HTML5 games and 2d physics simulations. it uses SAT (Seperation Axis Theorem) Collision Detection and
      mass seperation collision resolution.`
    },
    {
      title: 'Candy.js',
      links: {
        demo: 'https://codepen.io/anuraghazra/embed/pGjvaR/?height=265&theme-id=35893&default-tab=result',
        source: 'https://github.com/anuraghazra/candy.js',
        download: 'https://github.com//anuraghazra/Candy.js/archive/master.zip'
      },
      brief: `Candy.js is CanvasAPI Rendering Toolkit Library. Candy.js is highly inspired by p5.js's methods and functions.
      but it is more geared towards simplicity and utility functions.`
    }
  ];
  
  return (
    <div id={id}>
      {
        projectsData.map((project, index) => {
          return (
            <GenericProject
              key={index}
              hideNav
              rowReverse={(index % 2) ? false : true}
              title={project.title}
              links={project.links}>
              <p>
                {project.brief}
              </p>
            </GenericProject>
          )
        })
      }
    </div>
  );
};

export default JSProjects;
