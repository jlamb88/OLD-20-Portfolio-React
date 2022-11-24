import React from 'react';
import uniqid from 'uniqid'
import projectContainer from '../components/Projects/index/index'
import './Projects.css'

projects = ['Fore-some - Golf Planner', 'Weather Now', 'Coding Quiz']

const Work = () => {

  return (
    <section id='projects' className='section projects'>
      <h2 className='section-title'> Projects</h2>
      <div className='projects-grid'>
        {projects.map((project) => (
          <projectContainer key={uniqid} project={project} />
        ))}
      </div>
    </section >
  );
};

export default Work;
