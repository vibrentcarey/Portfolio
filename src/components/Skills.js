import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiMaterialui, SiRedux, SiJest, SiJavascript, SiNextdotjs, SiTypescript } from 'react-icons/si'

import Icon from './Icon';

const Skills = () => {
  return (
    <div className="card card-bordered flex items-center">
      <div className="card-body prose w-full">
        <h2 className='text-center underline'>Skills</h2>
        <div className='grid gap-5 grid-cols-3 md:grid-cols-4'>
          <Icon title='HTML'>
            <FaHtml5 className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='CSS'>
            <FaCss3Alt className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='JavaScript'>
            <SiJavascript className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='SASS'>
            <FaSass className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='Tailwind'>
            <SiTailwindcss className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='MaterialUI'>
            <SiMaterialui className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='React'>
            <FaReact className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='Redux'>
            <SiRedux className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='Jest'>
            <SiJest className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='TypeScript'>
            <SiTypescript className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='Next.js'>
            <SiNextdotjs className='text-4xl sm:text-5xl' />
          </Icon>
          <Icon title='Node'>
            <FaNodeJs className='text-4xl sm:text-5xl' />
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default Skills;