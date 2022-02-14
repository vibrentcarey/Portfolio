import React from 'react';
import Project from './Project';
import DotLoader from "react-spinners/DotLoader";
import {projects } from '../data/projects'

const Projects = () => {
  return (
    <div className='prose w-full my-8'>
      <h2 className='text-center underline'>Projects</h2>
      <div className=''>
      {projects.map(project => (
        <Project key={project.title} title={project.title} link={project.link} description={project.description} stack={project.stack} image={project.image}/>
      ))}
      </div>

      <div className='flex justify-center items-center mt-8'>
        <DotLoader color='#FF80C0' />
        <h3 className='mx-4'>Projects Pending...</h3>
      </div>
    </div>
  );
};

export default Projects;