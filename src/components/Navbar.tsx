import React from 'react';
import { Instagram, X } from 'lucide-react';
import { XLogoIcon } from '@phosphor-icons/react';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-10 flex justify-between items-center p-6 text-white">
      <div className="flex space-x-14">
        <a href="#" className="hover:text-gray-300 transition-colors duration-200">Design</a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-200">Performance</a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-200">Story</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors duration-200"><Instagram size={20} /></a>
        <a href="https://x.com/KevIsDev" aria-label="X (formerly Twitter)" className="hover:text-gray-300 transition-colors duration-200"><XLogoIcon size={20} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
