import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Icon = ({ children, title }) => {
  return (
    <AnimationOnScroll animateIn="animate__flipInX" animateOut='animate__flipOutX' >
    <div className='flex flex-col justify-center items-center '>
      {children}
      <p className='m-0' >{title}</p>
    </div>
    </AnimationOnScroll>
  );
};

export default Icon;