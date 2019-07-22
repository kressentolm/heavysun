import React from 'react'
// import Square from './shapes/Square';
// import Triangle from './shapes/Triangle';

const Hero = (props) => (
    <div className={`hero-container ${props.classNames}`}>
        <div className="hero-inner polyscape-background" id="polyscape-3">
            <h2 className="hero-title">{props.children}</h2>
        </div>
  </div>
)

export default Hero