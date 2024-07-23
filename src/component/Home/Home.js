import React from 'react'
import Navbar from '../Navbar/Navbar';
import Slideshow from '../Slideshow/Slideshow';
import "./home.css"
import Footer from '../Footer/Footer';
import CardsApp from '../Cards/cardsapp';
import Testimonial from '../Moti/moti';
import PhotoBook from './PhotoBook';

// import Ourwork from '../Ourwork/ourwork';
import VideoBackground from '../Youtube/youtube';
// import RadialTeam from '../Second/second';
import SocialMediaIcons from '../SocialMedia';
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='home'>
    <Navbar/>
   
      <Slideshow/>


  
    <br/>
  
      < CardsApp/>
 
    <br>
    </br>
    <Testimonial/>
    



    <VideoBackground/>
    <SocialMediaIcons />
    
   
    <Footer/>
    <PhotoBook />

   
    </div>
    

  )
}

export default Home;