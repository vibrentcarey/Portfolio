import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 footer bg-base-300 text-base-content footer-center">
      <div>
        <p>ViBrent Studios © 2022 -
          <span data-tip="Incase You Missed It Before!" className="tooltip tooltip-accent">
            <a className='link link-accent ' href='mailto:brentbcarey@gmail.com' target="_blank" rel='noreferrer'> Email Me Here</a>  </span></p>

      </div>
    </footer>

  );
};

export default Footer;