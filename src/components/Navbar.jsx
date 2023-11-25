import React, { useState } from 'react';
import logo from '../assets/digitalarena.png';
import { Image } from 'astro:assets';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50 ">
      <nav className="absolute top-0 left-0 w-full h-auto bg-transparent transition-all duration-400 ease-in-out z-50">
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-green-600 p-3 z-40" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="flex items-center justify-center flex-col gap-20 pt-10">
          <div className="hidden absolute left-20 transform lg:flex lg:space-x-6 pt-5">
            <img src={logo.src} alt="logo" className="w-1/5 pt-5 hidden lg:block" />
          </div>

          <div className="hidden absolute right-20 transform lg:flex lg:space-x-6 pt-5">
            <li><a className="text-base text-white hover:text-green-500" href="/">Home</a></li>
            <li className="text-black"></li>
            <li><a className="text-base text-white hover:text-green-500" href="/about">About Us</a></li>
            <li className="text-white"></li>
            <li><a className="text-base text-white hover:text-green-500" href="/services">Services</a></li>
            <li className="text-white"></li>
            <li><a className="text-base text-white hover:text-green-500" href="/portfolio">Portfolio</a></li>
            <li className="text-white"></li>
            <li><a className="text-base text-white hover:text-green-500" href="/contact">Contact</a></li>
          </div>
        </ul>
      </nav>

      <div className={`navbar-menu absolute z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-1/2 max-w-base py-6 px-6 bg-gradient-to-b from-green-800 via-green-700 to-green-500 border-r overflow-y-auto">
          <div className="flex items-center mb-8 justify-between">
            <img src={logo.src} alt="logo" className="w-1/2 md:hidden" />
            <button className="navbar-close" onClick={toggleMenu}>
              <svg className="h-6 w-6 text-white cursor-pointer hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-white hover:bg-green-50 hover:text-green-600 rounded" href="/">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-white hover:bg-green-50 hover:text-green-600 rounded" href="/about">About Us</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-white hover:bg-green-50 hover:text-green-600 rounded" href="/services">Services</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-white hover:bg-green-50 hover:text-green-600 rounded" href="/portfolio">Portfolio</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-white hover:bg-green-50 hover:text-green-600 rounded" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-white">
              <span>Copyright ©digital arena 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
