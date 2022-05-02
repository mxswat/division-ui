import React from 'react';
import './Image.style.css';

export const Image = (props: {
  src: string,
  alt: string,
  className?: string
}) => {
  const { src, alt, className = '' } = props;

  return (
    <div className={`td-image-wrapper td-border ${className}`.trim()}>
      <img className='td-image' src={src} alt={alt} />
    </div>
  );
}
