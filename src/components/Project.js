import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import hadgits from '../hadgits.png'
const Project = ({ title }) => {
  return (
    <div className="card card-bordered flex items-center w-full">
      <div className="card-body prose w-full">
      <h2 className='text-center'>{title}</h2>

    <div className='grid md:grid-cols-2 gap-10 w-full'>
      <div class="mockup-window bg-base-300 px-1 max-h-96">
    <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut" >
        <img src={hadgits} alt='app demo' class="mask rounded-md" />
        </AnimationOnScroll>
      </div>
    <AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__zoomOut" >
      <article>
        <h3 className='mt-1 underline'>Summary</h3>
        <p>Hadgits is a Full Stack Application that allows users to keep track of their habits. It will keep track of your habit streak and allow you to add reasons and resources for keeping your streak going. </p>
        <h3 className='mt-1 underline'>Tech Stack</h3>
        <div className='flex justify-evenly w-10/12'>
          <FaReact className='text-3xl sm:text-4xl hover:text-primaryPink' />
          <SiTailwindcss className='text-3xl sm:text-4xl hover:text-primaryPink' />
          <SiTypescript className='text-3xl sm:text-4xl hover:text-primaryPink' />
          <SiNextdotjs className='text-3xl sm:text-4xl hover:text-primaryPink' />
          <FaNodeJs className='text-3xl sm:text-4xl hover:text-primaryPink' />
        </div>
        <div data-tip="Link to the project" class="tooltip tooltip-right tooltip-accent mt-6">
        <a class="link link-accent" href='https://hadgits.vercel.app/' target='_blank' rel='noreferrer'>Check It Out Here!</a>
        </div>
      </article>
      </AnimationOnScroll>
    </div>
    </div>
    </div>
  );
};

export default Project;