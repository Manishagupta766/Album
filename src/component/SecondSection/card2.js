import React from "react";
import Card from "./card";

import "./style.css";
import slide1 from '../../assest/ani.jpg';
import slide3 from '../../assest/party.jpg'; 
import slide2 from '../../assest/bdy1.jpeg';
import slide4 from '../../assest/pre_wed.jpg'
// Add your background image here
import backgroundImg from "../../assest/background.jpg"

const Card2 = () => {
  return (
    <div className="xy relative bg-cover bg-center bg-no-repeat h-screen bg-black opacity-90 bg-fixed" style={{ backgroundImage: `url(${backgroundImg})` , position: "sticky"}}>
    <div className="container2 mx-auto p-4">
      <div className="flex flex-wrap -mx-3">
      <div className="flex flex-col items-center text-center bg-opacity-75 bg-white p-8  rounded-lg relative z-10">
        <p className="mb-4">WE CAPTURE SOULS IN EVERY FRAME!</p>
        <h1 className="text-4xl text-black mb-6">
          Wedding Photography Services Of Patna Wedding Photographer
        </h1>
        <p className="mb-20">
          Explore the enchanting wedding photography services of our Patna Wedding Photographer.
          Book the magic, feel the romance, and let your wedding day unfold in frames of pure delight with us!
        </p>
      </div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative -mt-20 z-10">
        <Card imgSrc={slide1} description="Mirage" title="Congrats for new life" />
        <Card imgSrc={slide2} description="Birthday" title="Welcome to the world" />
        <Card imgSrc={slide3} description="Party" title="Let's Enjoy" />
        <Card imgSrc={slide4} description="Pre wedding" title="Some beautiful memories" />
      </div>
    </div>
  </div>
);
};

export default Card2;