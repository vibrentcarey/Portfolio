import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Social = () => {
  return (
    <div className='flex items-center my-16'>
      <div class="card card-bordered prose h-full w-full max-h-72 p-4">
        <h2 className='text-center underline'>Find Me On</h2>

        <div className='card-body'>
          <AnimationOnScroll animateIn="animate__flipInX" animateOut='animate__flipOutX' className='w-full flex justify-evenly'>
          <a href='https://www.linkedin.com/in/brent-carey/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='text-4xl sm:text-5xl hover:text-primaryPink cursor-pointer transition ease-in-out hover:scale-110 duration-300' />
            </a>
            <a href='https://github.com/vibrentcarey' target='_blank' rel='noreferrer'>
              <FaGithub className='text-4xl sm:text-5xl hover:text-primaryPink cursor-pointer transition ease-in-out hover:scale-110 duration-300' /></a>
            <a href='https://vibrentcarey.medium.com/' target='_blank' rel='noreferrer'>
            <FaMedium className='text-4xl sm:text-5xl hover:text-primaryPink cursor-pointer transition ease-in-out hover:scale-110 duration-300' />
            </a>
            <a href='https://twitter.com/vibrentcarey' target='_blank' rel='noreferrer'>
            <FaTwitter className='text-4xl sm:text-5xl hover:text-primaryPink cursor-pointer transition ease-in-out hover:scale-110 duration-300' />
            </a>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Social;