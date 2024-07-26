import React from 'react';
import img1 from '../../assest/im11.jpg';
import img2 from '../../assest/_DSC0993.jpg';
import img3 from '../../assest/_DSC1023.jpg';
import img4 from '../../assest/_DSC1105.jpg';

const WeddingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <div className="relative flex-shrink-0 h-[500px] lg:h-auto">
          <img src={img1} alt="Wedding 1" className="w-72 h-72 object-cover rounded-lg absolute transform rotate-3 shadow-lg border-4 border-white" style={{ top: '20px', left: '10px' }} />
          <img src={img2} alt="Wedding 2" className="w-80 h-80 object-cover rounded-lg absolute transform -rotate-12 shadow-lg border-4 border-white" style={{ top: '0', left: '180px' }} />
          <img src={img3} alt="Wedding 3" className="w-48 h-64 object-cover rounded-lg absolute transform -rotate-40 shadow-lg border-4 border-white" style={{ bottom: '160px', left: '60px' }} />
          <img src={img4} alt="Wedding 4" className="w-48 h-64 object-cover rounded-lg absolute transform rotate-6 shadow-lg border-4 border-white" style={{ top: '150px', left: '200px' }} />
        </div>
        <div className="max-w-xl lg:ml-8">
          <h1 className="text-4xl font-bold mb-4">The Best Wedding Photographer In Patna Bihar</h1>
          <p className="mb-8 text-justify">
            Hey there! Welcome to Moments Studio – where your love story gets painted with emotional brushstrokes!
            We're the best wedding photographers in Patna, Bihar, capturing the timeless charm of weddings. Step into
            our world for dramatic bridal shoots, fun Jaimaaland Galsedi, and romantic wedding moments. We'll turn your
            big day into a romantic novel with unique poses. Let's make ordinary moments extraordinary!
          </p>
          <p className="mb-8 text-justify">
            Our wedding photographer in Patna believes every click tells a tale, much like the unforgettable lines of an
            Indian movie – “Tum ho paas mere, Saath mere ho....Tum yun. Jitna mehsoos karoon tumko, Utna hi paa bhi loon”
            Trust Moments Studio to tell your love story in frames that will transport you back to those special moments
            long after the wedding bells' echoes have faded. Because, in the end, every love story deserves its cinematic
            masterpiece, and we're here to script yours.
          </p>
          <ul className="text-justify list-none pl-5 mb-8">
            <li className="list-item-tick">Tailored Packages for Every Occasion</li>
            <li className="list-item-tick">Continuous Innovation and Upgrades</li>
            <li className="list-item-tick">Unforgettable Memories, Every Time</li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-500">
              Book Now
            </button>
            <button className="text-white py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .list-item-tick {
          position: relative;
          padding-left: 30px;
          list-style-type: none;
          margin-bottom: 10px;
        }
      
        .list-item-tick::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: red;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      
        .list-item-tick::before {
          content: '\\2713';
          color: white;
          font-size: 14px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default WeddingPage;
