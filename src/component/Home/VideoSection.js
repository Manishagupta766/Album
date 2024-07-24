import React from 'react';

const VideoSection = () => {
  const videoId = '7pVpquui3Rc';


  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 overflow-hidden border-4 border-red-500 rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover object-top"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default VideoSection;
