import React, { ComponentPropsWithoutRef } from 'react';
import { Separator } from '../Separator';
import './ButtonKeybind.style.css';

export const ButtonKeybind = (props: ComponentPropsWithoutRef<"button"> & {
  keybind: string,
  label?: string,
}) => {
  const className = `${props.className || ''} td-button-keybind`.trim();
  return (
    <button className={className}>
      <span className='td-button-keybind--keybind'>
        {props.keybind}
      </span>
      <Separator vertical={true}/>
      <span className='td-button-keybind--label'>
        {props.label}
      </span>
    </button>
  );
}
