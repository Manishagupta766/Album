// src/Carousel.js
import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="text-container">
        <h1 className="main-title">MERCH REDEFINED</h1>
        <p className="description">
          Our on-site merch customization experiences transform your event attendees into artists, creators, and product designers.
        </p>
        <div className="buttons">
          <button className="btn get-started">Get Started</button>
          <button className="btn experience-generator">Experience Generator</button>
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
