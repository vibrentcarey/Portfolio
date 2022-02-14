import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Project = ({ title, description, stack, link, image }) => {
  console.log(image)
  // Map tech stack to icons
  const techStack = stack.map(tech => {
    if (tech === 'React') {
      return <FaReact className='text-3xl sm:text-4xl hover:text-primaryPink mx-1' />
    } else if (tech === 'Tailwind') {
      return <SiTailwindcss className='text-3xl sm:text-4xl hover:text-primaryPink mx-1' />
    } else if (tech === 'TypeScript') {
      return <SiTypescript className='text-3xl sm:text-4xl hover:text-primaryPink mx-1' />
    } else if (tech === 'Next') {
      return <SiNextdotjs className='text-3xl sm:text-4xl hover:text-primaryPink mx-1' />
    } else if (tech === 'Node') {
      return <FaNodeJs className='text-3xl sm:text-4xl hover:text-primaryPink mx-1' />
    }  else if (tech === 'CSS') {
      return <FaCss3Alt className='text-3xl sm:text-4xl hover:text-primaryPink mx-1' />
    }
  })
  return (
    <div className="card card-bordered px-2 py-4 prose my-12">
      <h2 className='text-center'>{title}</h2>

      <div className='sm:grid grid-cols-2 gap-10 w-full'>
        <div class="mockup-window bg-base-300 px-1 max-h-96">
          <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut" animateOnce>
            <img src={image} alt='app demo' class="mask rounded-md" />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__zoomOut" animateOnce>
          <article className='mt-8'>
            <h3 className='mt-1 underline'>Summary</h3>
            <p>{description}</p>
            <h3 className='mt-1 underline'>Tech Stack</h3>
            <div className='flex w-10/12'>
              {techStack}
            </div>
            <div data-tip="Link to the project" class="tooltip tooltip-right tooltip-accent mt-6">
              <a class="link link-accent" href={link} target='_blank' rel='noreferrer'>Check It Out Here!</a>
            </div>
          </article>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Project;