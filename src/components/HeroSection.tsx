import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row justify-between min-h-screen p-6 md:p-12 text-white">
      {/* Left Content */}
      <div className="absolute bottom-0 left-[1.5rem] translate-y-1/4 flex flex-col justify-center h-full max-w-lg text-left">
        <h1 className="text-4xl md:text-4xl font-light leading-tight drop-shadow-lg">
          All-electric. Ultra-sleek. Engineered for speed.
        </h1>
        <button className="mt-8 px-5 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200 self-start">
          Schedule a Test Drive
        </button>
      </div>

      {/* Vertical VANTA Logo - Fixed to screen edge */}
      <div className="fixed right-[5rem] top-1/2 transform -translate-y-1/2 translate-x-1/2 -rotate-90 z-50 flex items-center text-white text-8xl md:text-9xl font-black tracking-tighter whitespace-nowrap drop-shadow-lg origin-center italic">
        VANTA<sup className="text-2xl md:text-6xl font-meidum mt-4 -ml-2">&reg;</sup>
      </div>
    </div>
  );
};

export default HeroSection;
