import React from 'react';
import './Separator.style.css';

export const Separator = (props: {
  className?: string,
  vertical?: boolean
}) => {
  const { vertical, className } = props;
  const orientation = vertical
    ? 'td-separator--vertical'
    : 'td-separator--horizontal'
  const _className = `${className || ''} ${orientation} td-separator`.trim();
  return (
    <div className={_className} />
  );
}
