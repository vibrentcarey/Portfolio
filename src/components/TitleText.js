import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const TitleText = () => {
  return (
    <AnimationOnScroll animateIn='animate__slideInLeft' animateOut='animate__slideOutLeft' id='about' animateOnce>

      <article className='prose my-16' id='about'>
        <h2>About Me</h2>
        <p>I am passionate about building intuitive and user friendly interfaces. After completing web development programs at <a target="_blank" rel='noreferrer' class="link link-primary" href='https://www.lighthouselabs.ca/'>Lighthouse Labs</a> and <a target="_blank" rel='noreferrer' class="link link-primary" href='https://brainstation.io/'>BrainStation</a> I secured my first role as a Front End Developer but I am still open to opportunities. I am continuously learning new things and always pushing my limits to grow into a better developer. When I am not coding you can find me watching anime or enjoying the nature in beautiful
          British Columbia 🏔.
        </p>
      </article>
    </AnimationOnScroll>

  );
};

export default TitleText;