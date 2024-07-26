import React from 'react'
import Navbar from '../Navbar/Navbar';
import Slideshow from '../Slideshow/Slideshow';
import Carousel from '../Slideshow/Carousel';
import "./home.css"
import Footer from '../Footer/Footer';
import CardsApp from '../Cards/cardsapp';
import Testimonial from '../Moti/moti';
import PhotoBook from './PhotoBook';
import './BounceHeading.css';


// import Ourwork from '../Ourwork/ourwork';
// import VideoBackground from '../Youtube/youtube';
// import RadialTeam from '../Second/second';
import SocialMediaIcons from '../SocialMedia';
import Card2 from '../SecondSection/card2';
import FeaturesSection from './FeaturesSection';
import VideoSection from './VideoSection';
import BounceHeading from './BounceHeading';
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='home'>
    <Navbar/>
      <Carousel/>
      {/* <Slideshow/> */}

<Card2/>
<FeaturesSection/>
{/* <VideoSection className="p-10 m-10"></VideoSection> */}
{/* < VideoSection/> */}
  
  <br/>
      < CardsApp/>
 
    <br>
    </br>
    <Testimonial/>
    



    {/* <VideoBackground/> */}
    <SocialMediaIcons />

    <PhotoBook />

    <VideoSection/>
    
   
    <Footer/>
    



    <h1 className="bounce">Welcome to My Website</h1>


   
    </div>
    

  )
}

export default Home;