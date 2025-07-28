import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';


function Test(){

 const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
    <br /><br /><br />
    <br /><br /><br />
   
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button
          onTouchMove={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className={`${menuOpen ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
                <svg className="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
            </li>
            <li><a href="#" className="nav-link">Marketplace</a></li>
            <li><a href="#" className="nav-link">Resources</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>

      {dropdownOpen && (
        <div id="mega-menu-full-cta-dropdown" className="mt-1 bg-white border-gray-200 shadow-xs border-y dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul className="space-y-4 sm:mb-4 md:mb-0">
              <li><a href="#" className="dropdown-link">Online Stores</a></li>
              <li><a href="#" className="dropdown-link">Segmentation</a></li>
              <li><a href="#" className="dropdown-link">Marketing CRM</a></li>
              <li><a href="#" className="dropdown-link">Online Stores</a></li>
            </ul>
            <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
              <li><a href="#" className="dropdown-link">Our Blog</a></li>
              <li><a href="#" className="dropdown-link">Terms & Conditions</a></li>
              <li><a href="#" className="dropdown-link">License</a></li>
              <li><a href="#" className="dropdown-link">Resources</a></li>
            </ul>
            <div className="mt-4 md:mt-0">
              <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 dark:hover:text-blue-700">
                Explore our brands
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Test
