import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  const videoUrl = '/porsche.mp4';

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col h-screen w-screen">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
