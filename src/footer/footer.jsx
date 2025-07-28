import React from 'react';
import logo from "./logo.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
   <>
   <footer className="bg-[#1a1a1a] text-white py-8 px-4 font-arial" data-aos="fade-up" >
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-between gap-8">
    
    {/* Logo */}
    <div className="text-2xl font-bold text-white">
                <a href="/">
                  <img src={logo} alt="" width={50} />
                </a>
              </div>
    {/* <div className="text-2xl font-bold">SBA</div> */}

    {/* Solutions */}
    <div className="min-w-[140px]">
      <h3 className="text-gray-400 text-sm mb-2">Solutions</h3>
      <ul className="list-none space-y-1">
        <li><a href="data-and-ai" className="text-white text-sm hover:underline">Data And AI</a></li>
        <li><a href="It_and_buisness_automation" className="text-white text-sm hover:underline">IT and Business Automation</a></li>
        <li><a href="Open_hybrid_cloud" className="text-white text-sm hover:underline">Open Hybrid Cloud</a></li>
        <li><a href="Security_and_sustainability" className="text-white text-sm hover:underline">Security And Sustainability</a></li>
      </ul>
    </div>

    {/* About */}
    <div className="min-w-[140px]">
      <h3 className="text-gray-400 text-sm mb-2">About</h3>
      <ul className="list-none space-y-1">
        <li><a href="Company" className="text-white text-sm hover:underline">Company</a></li>
        <li><a href="Join-with-us" className="text-white text-sm hover:underline">Careers</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div className="min-w-[140px]">
      <h3 className="text-gray-400 text-sm mb-2">Resources</h3>
      <ul className="list-none space-y-1">
        <li><a href="About-us" className="text-white text-sm hover:underline">About us</a></li>
        <li><a href="our-stories" className="text-white text-sm hover:underline">Our Stories</a></li>
      </ul>
    </div>

    {/* Follow */}
    <div className="min-w-[140px]">
      <h3 className="text-gray-400 text-sm mb-2">Follow</h3>
      <ul className="list-none space-y-1">
        <li><a href="https://www.linkedin.com/company/sba-info-solutions" className="text-gray-400 text-sm hover:text-white">LinkedIn</a></li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-8 text-center text-gray-500 text-xs">
    © 1996 - {new Date().getFullYear()}, SBA Info Solutions. All rights reserved.
  </div>
</footer>

   </>
  );
};

export default Footer;