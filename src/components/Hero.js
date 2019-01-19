import React from 'react'
import Triangle from 'shapes/Triangle';

const Hero = () => (
    <div className="hero-container">
        <div className="hero-inner">
            <Triangle />
            <img className="hero-image" src="https://picsum.photos/2000/800/?image=555" alt=""/>
        </div>
  </div>
)

export default Hero