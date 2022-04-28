import React from 'react';
import Button from '../../components/Button';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className="td-MainMenu preserve-3d">
      <div className="left-side preserve-3d">
        <Button text='Hello'></Button>
        <Button className='giga-font' text='Hello'></Button>
        <Button className='giga-font' text='Hello'></Button>
        <Button text='Hello'></Button>
        <Button className='giga-font' text='Hello'></Button>
        <Button className='giga-font' text='Hello'></Button>
        <Button text='Hello'></Button>
      </div>
      <div className="right-side preserve-3d">

      </div>
    </div>
  );
}

export default MainMenu;
