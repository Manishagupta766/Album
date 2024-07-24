// src/components/FeaturesSection.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faBook, faShippingFast, faCity } from '@fortawesome/free-solid-svg-icons';
 // Optional for additional styling
 import './FeaturesSection.css';

const features = [
  {
    icon: faMedal,
    title: "THE PRINTIQUE PROMISE",
    description: "We stand by everything we produce, and nothing is more important to us than your complete satisfaction. Learn more here."
  },
  {
    icon: faBook,
    title: "PERSONALIZED FOR YOU",
    description: "Your story, your way. We provide the tools for personalization, empowering you to create products that resonate uniquely with you."
  },
  {
    icon: faShippingFast,
    title: "FAST SHIPPING",
    description: "We prioritize prompt delivery without compromising on our high standards. Your order is processed efficiently to reach your home swiftly."
  },
  {
    icon: faCity,
    title: "MADE IN NEW YORK",
    description: "Our products are crafted with precision in our workshop in the Heart of Brooklyn. By choosing us, you support local craftsmanship."
  }
];

const FeaturesSection = () => {
  return (
    <div className="container2 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4 text-gray-700">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
