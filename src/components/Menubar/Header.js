import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-4 py-3 bg-transparent flex justify-between items-center z-50">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-white">
        logo
      </a>

      {/* Navbar */}
      <nav className="flex space-x-8">
        <a 
          href="/" 
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Features
        </a>
        <a 
          href="/" 
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Pricing
        </a>
        <a 
          href="/" 
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
};

export default Header;
