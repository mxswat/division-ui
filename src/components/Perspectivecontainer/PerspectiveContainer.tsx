import React from 'react';
import './PerspectiveContainer.style.css';

/**
 * This container is mandatory to keep the perspective relative to the view port
 * @param props 
 * @returns 
 */
export const PerspectiveContainer = (props: {
  children: React.ReactNode;
  className: string,
  classNameScroller: string
}) => {
  return (
    <div className={`${props.className} perspective-container`}>
      <div className={`${props.classNameScroller} perspective-container--overflower`}>
        {props.children}
      </div>
    </div>
  );
}
