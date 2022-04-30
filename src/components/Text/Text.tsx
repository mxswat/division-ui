import React from 'react';
import './Text.style.css';

export const Text = ({
  children = '',
  hasShadow = true,
  className = '',
}) => {
  const _className = `preserve-3d td-text ${hasShadow ? 'td-text--shadow' : ''} ${className}`.trim();

  return (
    <span className={_className} data-tdtext={children}>
      {children}
    </span>
  );
}