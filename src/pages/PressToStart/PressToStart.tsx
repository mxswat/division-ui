import React from 'react';
import { ButtonKeybind } from '../../components/ButtonKeybind';
import { Background } from './Background';
import { Logo } from './Logo';
import './PressToStart.style.css';

export const PressToStart = () => {
  return (
    <div className='td-pts'>
      <Logo />
      <div className='td-pts-buttons'>
        <ButtonKeybind keybind='space' label='Press to Start' />
        <ButtonKeybind keybind='Esc' label='Quit' />
      </div>
      <Background/>
    </div>
  );
}
