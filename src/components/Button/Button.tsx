import React from 'react';
import { Text } from '../Text';
import './Button.style.css';

export const Button = (props: {
  children: any,
  className?: string
}) => {
  const { children, className } = props;

  return (
    <button className={`td-button td-border ${className || ''}`}>
      {children}
    </button>
  );
}
