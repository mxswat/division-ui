import React from 'react';
import { ButtonKeybind } from '../../components/ButtonKeybind';
import { Separator } from '../../components/Separator';
import './PressToStart.style.css';

export const PressToStart = () => {
  return (
    <div className={`td-pts`}>
      <div className='td-pts-buttons'>
        <ButtonKeybind keybind='space' label='Press To Start' />
        <ButtonKeybind keybind='Esc' label='Quit' />
      </div>
    </div>
  );
}
