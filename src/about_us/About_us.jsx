import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import venkatesh from "./venkatesh.jpg"
import sadeesh from "./sadeesh.png"
import kandhan from "./kandhan.jpg"
import viswanathan from "./viswanathan.jpg"
import ananth_narayanan from "./Anantha_narayanan.jpg"

function About_us(){
   
        useEffect(() => {
          AOS.init({
                duration: 1000,
                once: true,
              });
        }, []);
      
       
      

    return(
        <>
        <section className="py-20 bg-black text-white relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:50px_50px]"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
    {/* Header Section */}
    <div className="mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
          Leadership Team
        </span>
      </div>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Meet Our Team
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Passionate leaders driving innovation and excellence in every project
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {/* Team Member 1 */}
      <div className="group relative h-full">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-gray-800 hover:border-red-500/50 h-full flex flex-col">
          {/* Red Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <div className="relative z-10">
            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img 
                src={venkatesh} 
                alt="Venkatesh A" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Social Links Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                </button>
                <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-auto">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
                Venkatesh A
              </h3>
              <div className="inline-block">
                <span className="text-red-500 font-semibold text-lg tracking-wide">
                  CGO
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[1.25rem]">
                Chief Growth Officer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="group relative h-full">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-gray-800 hover:border-red-500/50 h-full flex flex-col">
          <div className="absolute inset-0 rounded-2xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <div className="relative z-10">
            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img 
                src={ananth_narayanan} 
                alt="Anantha Narayanan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                </button>
                <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-auto">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
                Anantha Narayanan
              </h3>
              <div className="inline-block">
                <span className="text-red-500 font-semibold text-lg tracking-wide">
                  CEO
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[1.25rem]">
                Chief Executive Officer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="group relative h-full">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-gray-800 hover:border-red-500/50 h-full flex flex-col">
          <div className="absolute inset-0 rounded-2xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <div className="relative z-10">
            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img 
                src={sadeesh} 
                alt="Sadeeshkumar G" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                </button>
                <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-auto">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
                Sadeeshkumar G
              </h3>
              <div className="inline-block">
                <span className="text-red-500 font-semibold text-lg tracking-wide">
                  Lead Client Engineering
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[1.25rem]">
                Engineering Team Leader
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="group relative h-full">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-gray-800 hover:border-red-500/50 h-full flex flex-col">
          <div className="absolute inset-0 rounded-2xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <div className="relative z-10">
            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img 
                src={viswanathan} 
                alt="Viswanathan N" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                </button>
                <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors duration-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-auto">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
                Viswanathan N
              </h3>
              <div className="inline-block">
                <span className="text-red-500 font-semibold text-lg tracking-wide">
                  Head of Service & Delivery
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[1.25rem]">
                Service & Delivery Leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    {/* <div className="mt-16 text-center">
      <p className="text-gray-400 text-lg mb-6">
        Ready to work with our amazing team?
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-red-500">
        Get in Touch
      </button>
    </div> */}
  </div>
</section>
        </>
    )
}


export default About_us
