import React from 'react';
// import './App.css';

const PerspectiveContainer = (props: {
  children: any
}) => {
  const { children } = props;

  return (
    <div className="td-perspectivePanel">
      {children}
    </div>
  );
}

export default PerspectiveContainer;
