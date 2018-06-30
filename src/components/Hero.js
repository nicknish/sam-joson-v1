import React from 'react';
import Img from 'gatsby-image';

const Hero = props => (
  <section className="hero">
    <Img
      className="hero-bgImg"
      height={props.height}
      sizes={props.image.sizes}
      backgroundColor={'#eeeeee'}
    />
    <h1 className="hero-title">{props.title}</h1>
  </section>
);

export default Hero;
