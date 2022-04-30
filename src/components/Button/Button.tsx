import React from 'react';
import { Text } from '../Text';
import './Button.style.css';

export const Button = (props: {
  children: any,
  className?: string
}) => {
  const { children, className } = props;

  return (
    <button className={`preserve-3d td-button td-border ${className || ''}`}>
      {children}
    </button>
  );
}
