import React from 'react';
import profile from '../profile_pic.png';

const Avatar = () => {
  return (
    <div className='container mx-auto w-full flex items-center justify-center'>
      <div className="avatar">
        <div className="mb-8 rounded-full w-36 h-36 ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={profile} alt='handsome man' className='m-0' />
        </div>
      </div>
    </div>
  );
};

export default Avatar;