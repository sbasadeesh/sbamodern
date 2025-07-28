import React, { useState, useEffect } from 'react';
import slide from "./slide.jpg"

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: slide,
      title: 'CUATR',
      text: '"With Harvey, you gain the ability."',
      caseStudyLink: '#',
      secondaryLink: '#',
      caseStudyText: 'Case Study',
      quote: 'Omar Puertas-Alvarez, Partner',
    },
    {
      img: slide,
      title: 'CLIEUKSC',
      text: '"Within spring, fiction Demoo Perinor Katecholiione."',
      caseStudyLink: '#',
      secondaryLink: '#',
      caseStudyText: 'Case Study',
      quote: 'Domo Riberos Alvors Rander',
    },
    {
      img: slide,
      title: 'CUATRECASAS',
      text: '"This ability to outperform yourself rapidly and almost limitlessly."',
      caseStudyLink: '#',
      secondaryLink: '#',
      caseStudyText: 'Case Study',
      quote: 'Omar Puertas-Alvarez, Partner',
    },
  ];
  const totalSlides = slides.length;

  const updateCarousel = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideInterval);
  }, []);

  return (
    <div className="carousel relative max-w-[1200px] mx-auto overflow-hidden">
      <div
        className="carousel-inner flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item min-w-full min-h-[300px] relative text-center">
            <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover opacity-70" />
            <div className="carousel-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-base mb-4">{slide.text}</p>
              <a href={slide.caseStudyLink} className="btn inline-block px-4 py-2 bg-white text-black text-sm rounded-md">
                {index === 0 ? 'Read Case Study' : index === 1 ? 'Create Test' : 'Test Case'}
              </a>
              <a
                href={slide.secondaryLink}
                className="btn secondary inline-block px-4 py-2 bg-transparent text-white text-sm rounded-md border border-white ml-2"
              >
                Case Study
              </a>
            </div>
            <div className="case-study absolute bottom-4 left-4 bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded-md text-white text-sm">
              {slide.caseStudyText}
            </div>
            <div className="quote absolute bottom-4 right-4 text-gray-300 text-sm">{slide.quote}</div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot w-3 h-3 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 ease-in-out ${
              currentSlide === index ? 'bg-gray-800 scale-125' : 'hover:bg-gray-600'
            }`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;