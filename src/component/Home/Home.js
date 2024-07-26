import React from 'react'
import Navbar from '../Navbar/Navbar';
import Slideshow from '../Slideshow/Slideshow';
import Carousel from '../Slideshow/Carousel';
import "./home.css"
import Footer from '../Footer/Footer';
import CardsApp from '../Cards/cardsapp';
import Testimonial from '../Moti/moti';
import PhotoBook from './WeddingPage';
import './BounceHeading.css';


// import Ourwork from '../Ourwork/ourwork';
// import VideoBackground from '../Youtube/youtube';
// import RadialTeam from '../Second/second';
import SocialMediaIcons from '../SocialMedia';
import Card2 from '../SecondSection/card2';
import FeaturesSection from './FeaturesSection';
import VideoSection from './VideoSection';
import BounceHeading from './BounceHeading';
import WeddingPage from './WeddingPage';
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='home'>
    <Navbar/>
    <div className='top'>
    <Carousel/>
      

<Card2/>
<FeaturesSection/>
<WeddingPage/>
{/* <VideoSection className="p-10 m-10"></VideoSection> */}
{/* < VideoSection/> */}
  
  <br/>
      < CardsApp/>
 
    <br>
    </br>
    {/* <Testimonial/> */}
    



    {/* <VideoBackground/> */}
    <SocialMediaIcons />
    
   
    <Footer/>
    <PhotoBook />



   
    </div>
    

  )
}

export default Home;