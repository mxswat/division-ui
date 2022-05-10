import React, { ComponentPropsWithoutRef } from 'react';
import { Separator } from '../Separator';
import { useHotkeys } from "react-hotkeys-hook";
import './ButtonKeybind.style.css';

export const ButtonKeybind = (props: ComponentPropsWithoutRef<"button"> & {
  keybind: string,
  label?: string,
  onClick: () => void,
}) => {
  const { keybind, onClick, label, className } = props;
  const _className = `${className || ''} td-button-keybind`.trim();
  useHotkeys(keybind, onClick);

  return (
    <button className={_className} onClick={onClick}>
      <span className='td-button-keybind--keybind'>
        {keybind}
      </span>
      <Separator vertical={true} />
      <span className='td-button-keybind--label'>
        {label}
      </span>
    </button>
  );
}
