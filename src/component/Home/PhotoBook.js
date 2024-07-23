// src/components/PhotoBook.js

import React, { useEffect, useState } from 'react';
import './PhotoBook.css';
import slide1 from '../../assest/slide2.jpg';
import slide3 from '../../assest/slide3.jpg'; 
import slide2 from '../../assest/slide1.JPG';
import slide4 from '../../assest/slide5.jpg'

const photos = [
  slide1,
  slide2,
  slide3,
  slide4,
  // Add more image paths as needed
];

const PhotoBook = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 5000); // 5 seconds interval
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="photo-book-container">
        <div className="photo-book">
          <div className="spiral"></div>
          <div className="photo-book-pages">
            <div
              className="photo-slides"
              style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="photo-slide">
                  <img
                    src={photo}
                    alt={`Slide ${index}`}
                    className="photo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PhotoBook;