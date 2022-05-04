import React from 'react';
import { ButtonKeybind } from '../../components/ButtonKeybind';
import { Separator } from '../../components/Separator';
import './PressToStart.style.css';

export const PressToStart = () => {
  return (
    <div className={`td-pts`}> 
      <div>
        <ButtonKeybind keybind='space' label='Press To Start' />
      </div>
      <Separator />
      <div>
        <ButtonKeybind keybind='space' label='Press To Start' />
      </div>
    </div>
  );
}