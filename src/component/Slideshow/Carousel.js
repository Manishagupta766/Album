// src/Carousel.js
import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="background-video">
        <iframe
          src="https://www.youtube.com/embed/0u9tvSeCI1U?autoplay=1&mute=1&loop=1&playlist=0u9tvSeCI1U"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="overlay"></div>
      <div className="text-container">
        <h1 className="main-title">“Capturing moments, creating memories.”</h1>
        <p className="description">
          Our mission is to help you preserve the fleeting moments of life, turning them into timeless treasures. 
          Our mission is to help you preserve the fleeting moments of life, turning them into timeless treasures.
        </p>
        <div className="buttons">
          <a href='/gallery'><button className="btn get-started">Get Started</button> </a>
          <a href='/aboutus' > <button className="btn experience-generator">Explore</button></a>
=======
          <button className="btn get-started">Get Started</button>
          <button className="btn experience-generator ">Experience Generator</button>
          <a href="/gallery"><button className="btn get-started">Get Started</button></a>
          <a href="/aboutus"><button className="btn experience-generator">Explore</button></a>
        </div>
      </div>
      <div className="image-container">
        <div className="image-grid">
        </div>
      </div>
    </div>
  );
};

export default Carousel;
