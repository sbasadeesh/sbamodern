import React, { useState } from 'react';

// Placeholder images - replace with your actual images

import pongal_celebration from "./pongal_celebration.webp"
import meeting from "./meeting.webp"
import meeting2 from "./meeting2.webp"
import outing from "./outing.webp"
import speaking from "./speaking.webp"
import group from "./group.webp"
import celebration from "./celebration.jpeg"
import turf from "./turf.jpeg"


export default function CompanyEventsCollage() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const eventPhotos = [
    {
      id: 1,
      title: "Team Outing 2024",
      image: turf,
      category: "Outing"
    },
    {
      id: 2,
      title: "Company Celebration",
      image: celebration,
      category: "Celebration"
    },
    {
      id: 3,
      title: "Pongal Festival",
      image: pongal_celebration,
      category: "Celebration"
    },
    {
      id: 4,
      title: "Team Building",
      image: outing,
      category: "Outing"
    },
    {
      id: 5,
      title: "Board Meeting",
      image: meeting,
      category: "Event"
    },
    {
      id: 6,
      title: "Team Sync",
      image: meeting2,
      category: "Event"
    },
  ];
  
  // Group photos by category
  const groupedPhotos = eventPhotos.reduce((acc, photo) => {
    if (!acc[photo.category]) {
      acc[photo.category] = [];
    }
    acc[photo.category].push(photo);
    return acc;
  }, {});

  const getCategoryGradient = (category) => {
    // All gradients use black, white, and red theme
    const gradients = {
      'Outing': 'from-red-600 to-red-800',
      'Celebration': 'from-red-600 to-red-800',
      'Party': 'from-red-600 to-red-800',
      'Office': 'from-gray-700 to-gray-900',
      'Event': 'from-red-600 to-red-800',
      'Birthday': 'from-red-500 to-red-700',
      'Activity': 'from-gray-800 to-black',
      'Success': 'from-red-600 to-red-900',
      'Food': 'from-gray-700 to-black',
      'Award': 'from-red-700 to-black'
    };
    return gradients[category] || 'from-gray-800 to-black';
  };

  const getFanRotation = (index, total) => {
    const baseAngle = -15;
    const angleStep = 30 / Math.max(total - 1, 1);
    return baseAngle + (index * angleStep);
  };

  const getFanOffset = (index) => {
    return index * 20;
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-7xl font-black mb-6 relative z-10">
            <span className="text-white">OUR</span>
            <span className="text-red-600 ml-4">MOMENTS</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-white"></div>
            <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gray-600"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-16 h-1 bg-white"></div>
          </div>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Capturing the joy, celebrations, and unforgettable memories we create together
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 mb-20">
          {Object.entries(groupedPhotos).map(([category, photos]) => (
            <div 
              key={category} 
              className="relative group cursor-pointer mb-16" 
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className={`text-center mb-12 relative z-20`}>
                <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${getCategoryGradient(category)} shadow-lg border border-gray-700 transform group-hover:scale-110 group-hover:border-red-500 transition-all duration-300`}>
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  <h2 className="text-white font-bold text-lg uppercase tracking-wide">
                    {category}
                  </h2>
                  <div className="ml-3 text-white/90 text-sm font-medium bg-white/10 border border-white/20 px-2 py-1 rounded-full">
                    {photos.length}
                  </div>
                </div>
              </div>

              {/* Fanned Cards */}
              <div className="relative h-96 flex items-center justify-center">
                {photos.map((photo, index) => {
                  const isSpread = hoveredCategory === category;
                  const isCardHovered = hoveredCard === photo.id;
                  
                  const spreadMultiplier = isSpread ? 2.5 : 1;
                  const rotation = getFanRotation(index, photos.length) * spreadMultiplier;
                  const offsetX = getFanOffset(index) * spreadMultiplier;
                  const offsetY = index * (isSpread ? 20 : 8);
                  
                  return (
                    <div
                      key={photo.id}
                      className={`
                        absolute w-64 h-80 bg-white rounded-lg shadow-2xl border-2
                        transition-all duration-700 ease-out cursor-pointer
                        ${isCardHovered 
                          ? 'scale-110 rotate-0 z-50 border-red-500 shadow-red-500/30' 
                          : 'border-gray-300 hover:border-gray-400'
                        }
                      `}
                      style={{
                        transform: isCardHovered 
                          ? 'rotate(0deg) scale(1.1)' 
                          : `rotate(${rotation}deg) translateX(${offsetX}px) translateY(${offsetY}px)`,
                        zIndex: isCardHovered ? 100 : (isSpread ? 50 - index : index + 10),
                        transformOrigin: 'bottom center'
                      }}
                      onMouseEnter={() => setHoveredCard(photo.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Card Content */}
                      <div className="relative overflow-hidden w-full h-full rounded-lg">
                        <img
                          src={photo.image}
                          alt={photo.title}
                          className={`w-full h-4/5 object-cover transition-all duration-500 ${
                            isCardHovered ? 'filter-none' : 'filter grayscale hover:grayscale-0'
                          }`}
                        />
                        
                        {/* Photo Title */}
                        <div className="h-1/5 flex items-center justify-center bg-white px-4">
                          <h3 className="text-gray-900 font-bold text-sm text-center leading-tight">
                            {photo.title}
                          </h3>
                        </div>
                        
                        {/* Category Badge */}
                        <div className={`absolute top-3 right-3 ${
                          category === 'Celebration' || category === 'Party' || category === 'Birthday' || category === 'Success'
                            ? 'bg-red-600' 
                            : 'bg-gray-800'
                        } text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg border border-white/20`}>
                          {category}
                        </div>
                        
                        {/* Tape Effect - Red accent */}
                        <div className="absolute -top-2 left-1/4 w-16 h-6 bg-red-500 opacity-90 transform -rotate-12 shadow-md"></div>
                        
                        {/* Corner Fold */}
                        <div className="absolute bottom-4 right-4 w-6 h-6 bg-gray-400 opacity-60 transform rotate-45 shadow-inner"></div>
                        
                        {/* Red corner accent for hovered card */}
                        {isCardHovered && (
                          <div className="absolute top-0 left-0 w-8 h-8 bg-red-600 opacity-20"></div>
                        )}
                      </div>

                      {/* Card Shadow */}
                      <div className="absolute inset-0 bg-black opacity-30 transform translate-x-2 translate-y-2 -z-10 blur-sm rounded-lg"></div>
                    </div>
                  );
                })}
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-red-600/20 to-white/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-full`}></div>
              </div>

              {/* Category Stats */}
              <div className="text-center mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-center items-center space-x-4 text-gray-500 text-sm">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
                    {photos.length} {photos.length === 1 ? 'Memory' : 'Memories'}
                  </span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span className="hover:text-white transition-colors duration-300">
                    {category} Collection
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Text Elements */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-12 text-gray-500 text-base uppercase tracking-widest">
            <span className="flex items-center group cursor-pointer hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:animate-ping"></div>
              Team Spirit
            </span>
            <span className="flex items-center group cursor-pointer hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 bg-white rounded-full mr-3 group-hover:animate-bounce"></div>
              Good Vibes
            </span>
            <span className="flex items-center group cursor-pointer hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:animate-pulse"></div>
              Great Memories
            </span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-px bg-gray-600"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-24 h-px bg-white"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-12 h-px bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}