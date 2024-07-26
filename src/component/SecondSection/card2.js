import React from "react";

import Card from "./card";
import "./style.css";
import slide1 from '../../assest/ani.jpg';
import slide3 from '../../assest/party.jpg'; 
import slide2 from '../../assest/bdy1.jpeg';
import slide4 from '../../assest/pre_wed.jpg'

const Card2 = () => {

  return (
    <div className="container" >
      <div className="card__container " >
        
        <Card imgSrc={slide1} description="Marriage" title="Congratualtions for new  life" />
        <Card imgSrc={slide2} description="Birthday" title="Welcome to the world" />
        <Card imgSrc={slide3} description="Party" title="Let's Enjoy" />
        <Card imgSrc={slide4} description="Pre wedding" title="Some beautiful-Memory" />
      </div>
    </div>
  );
};

export default Card2;
