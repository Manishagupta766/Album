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
      <div className="text-container">
        <h1 className="main-title ">“Capturing moments, creating memories.”</h1>
        <p className="description">
          Our mission is to help you preserve the fleeting moments of life, turning them into timeless treasures. 
        </p>
        <div className="buttons">
<<<<<<< Updated upstream
          <a href='/gallery'><button className="btn get-started">Get Started</button> </a>
          <a href='/aboutus' > <button className="btn experience-generator">Explore</button></a>
=======
          <button className="btn get-started">Get Started</button>
          <button className="btn experience-generator ">Experience Generator</button>
>>>>>>> Stashed changes
        </div>
      </div>
      <div className="image-container">
        <div className="image-grid">
          <img src="https://parulankur.com/wp-content/uploads/2021/03/outdoor_by_parul_and_ankur00025.jpg" alt="placeholder" />
          <img src="https://pvthenextlevelphotography.com/wp-content/uploads/2023/01/255414794_3110659415877043_3821111081193717413_n.jpg" alt="placeholder" />
          <img src="https://5.imimg.com/data5/OT/PZ/BD/SELLER-14898858/professional-outdoor-photoshoot-service-500x500.png" alt="placeholder" />
          <img src="https://meghnarathorephotography.com/wp-content/uploads/2023/03/Deepak-3-months-baby-photoshoot-by-best-baby-photographer-in-delhi-gurugram-india-january-2022-1.jpg" alt="placeholder" />
          <img src="https://www.golokaso.com/wp-content/uploads/2020/01/lokasoapp_80694477_2498664073735028_708516356737521223_n-1024x1024.jpg" alt="placeholder" />
          <img src="https://mysticstudios.in/wp-content/uploads/2021/12/love-for-temples-mystic-studios-pre-wedding-ideas-10-720x400.jpg" alt="placeholder" />
          <img src="https://m.media-amazon.com/images/I/71yKEo2wjjL._AC_UF894,1000_QL80_.jpg" alt="placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
