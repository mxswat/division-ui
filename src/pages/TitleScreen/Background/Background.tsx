import React from 'react';
import './Background.style.css';

export const Background = () => {
  const loaders = [
    {
      '--height': 'calc(var(--base-height) - 20vh)',
      '--after-speed': '70s',
      '--before-speed': '50s',
      '--anim-delay': '-40s',
    },
    {
      '--height': 'calc(var(--base-height) - 20vh - 2rem)',
      '--after-speed': '65s',
      '--before-speed': '45s',
      '--anim-delay': '-30s',
    },
    {
      '--height': 'calc(var(--base-height) - 20vh - 3rem)',
      '--after-speed': '60s',
      '--before-speed': '70s',
      '--anim-delay': '-10s',
    },
    {
      '--height': 'calc(var(--base-height) - 40vh - 3rem)',
      '--after-speed': '70s',
      '--before-speed': '30s',
      '--anim-delay': '0s',
    },
    {
      '--height': 'calc(var(--base-height) - 70vh - 3rem)',
      '--after-speed': '70s',
      '--before-speed': '30s',
      '--anim-delay': '-60s',
    },
    {
      '--height': 'calc(var(--base-height) - 8vh - 3rem)',
      '--after-speed': '70s',
      '--before-speed': '30s',
      '--anim-delay': '-60s',
    }
  ]

  const loaderComps = loaders.map(
    (style, i) => (<span className={`loader loader--${i + 1}`} key={i} style={style as React.CSSProperties} />)
  )

  const dottedCircle = new Array(180).fill('').map(
    (_, i) => (
      <span className={`dotted-circle dotted-circle--${i + 1}`} key={i} style={
        {
          '--dot-order': `${i}`,
        } as React.CSSProperties}
      >
        <span className='dot'/>
        <span className='dot'/> 
        <span className='dot'/> 
        <span className='dot'/> 
        <span className='dot'/> 
        <span className='dot'/> 
        <span className='dot'/> 
        <span className='dot'/> 
        <span className='dot'/> 
      </span>
    )
  )

  return (
    <div className='background-container'>
      <span className="loader" />
      {loaderComps}
      {dottedCircle}
    </div>
  );
}
