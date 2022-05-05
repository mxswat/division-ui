import React from 'react';
import './Logo.style.css';

export const Logo = () => {
  return (
    <div className={`pts-logo`}> 
      <div className='logo-division' data-text="Division"/>
      <div className='logo-ui'>
        UI
      </div>
    </div>
  );
}
