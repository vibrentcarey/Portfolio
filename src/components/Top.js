import React from 'react';
import Avatar from './Avatar';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Top() {
  return (
    <AnimationOnScroll animateIn="animate__jackInTheBox" animateOnce className='w-full flex flex-col items-center justify-center mt-16'>
      <div className='prose text-center w-full'>
        <h1 className='mt-8'>Hi I'm Brent</h1>
        <Avatar />
        <h1 className='mb-8'>Front End Developer</h1>
      </div>
    </AnimationOnScroll>

  )
}
