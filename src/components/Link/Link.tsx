import React, { ComponentPropsWithoutRef } from 'react';
import './Link.style.css';
import { Text } from '../Text';

export const Link = (props: ComponentPropsWithoutRef<"a"> & {
  children: string
}) => {
  const className = `${props.className || ''} td-link`.trim();
  return (
    <a {...props} className={className}>
      <Text className='font-1'>
        {props.children}
      </Text>
    </a>
  );
}
