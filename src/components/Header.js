import React from 'react';
import {FaArrowDown} from 'react-icons/fa'
const Header = () => {
  return (
    <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-b-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
          ViBrent
        </span>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <a href='#about'><FaArrowDown className='text-2xl'/></a>
        </button>
      </div>
    </header>
  );
};

export default Header;