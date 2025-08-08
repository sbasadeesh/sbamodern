import React, { useState, useEffect } from 'react';
import slide from './slide.jpg'; // Replace with actual image

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: slide,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Repsol_logo.svg',
      text: '“Harvey has been a significant achievement for our legal department – the implementation of Harvey positions Repsol\'s lawyers at the forefront of the legal profession\'s digital transformation.”',
      quote: 'Pablo Blanco, General Counsel, Repsol',
      caseStudyLink: '#',
    },
    {
      img: slide,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Red_Hat_logo_2019.svg',
      text: '“With Harvey, our innovation potential feels almost limitless.”',
      quote: 'Omar Puertas-Alvarez, Partner',
      caseStudyLink: '#',
    },
    {
      img: slide,
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png',
      text: '“Harvey delivers unmatched value for legal professionals using AI-powered insights.”',
      quote: 'Anna Garcia, Chief Legal Strategist, IBM',
      caseStudyLink: '#',
    }
  ];

  const totalSlides = slides.length;

  const updateCarousel = (index) => setCurrentSlide(index);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Image carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div
            className="whitespace-nowrap transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex' }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0 relative h-[400px] md:h-[460px] bg-black">
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-full object-cover brightness-[0.35]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={slide.logo}
                    alt="logo"
                    className="w-40 md:w-48 h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stable Text and CTA Section */}
        <div className="mt-8 text-center text-white min-h-[200px] flex flex-col items-center justify-center transition-all duration-500">
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 max-w-3xl">
            {slides[currentSlide].text}
          </p>
          <p className="text-sm text-gray-400 mb-6">{slides[currentSlide].quote}</p>
          <a
            href={slides[currentSlide].caseStudyLink}
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-200 transition"
          >
            Read Case Study
          </a>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => updateCarousel(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === i ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
