import React from 'react';
import {FaArrowDown} from 'react-icons/fa'
const Header = () => {
  return (
    <header class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-b-box">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
          ViBrent
        </span>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <a href='#about'><FaArrowDown className='text-2xl'/></a>
        </button>
      </div>
    </header>
  );
};

export default Header;