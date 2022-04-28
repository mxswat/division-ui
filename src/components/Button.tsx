import React from 'react';
import './Button.css';

const Button = (props: {
  text: string,
  className?: string
}) => {
  const { text, className } = props;

  return (
    <button className={`preserve-3d td-button td-border ${className || ''}`}>
      <div  className="preserve-3d td-button--text" data-tdtext={text}>
        {text}
      </div>
    </button>
  );
}

export default Button;
