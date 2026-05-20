import React, { useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import quotation from "../assets/homeAssets/quotation.svg";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Content */}
      <div className="bg-white rounded-2xl p-12 md:p-16 shadow-lg relative">
        {/* Large Quote Icon */}
        <div className="absolute top-8 left-8 opacity-10">
          <img src={quotation} alt="quote" className="w-20 h-20" />
        </div>
        
        <div className="relative z-10">
          {/* Author */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-center">
              <p className="text-gray-900 font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          {/* Content */}
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            "{testimonials[currentIndex].content}"
          </p>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-600 w-8' 
                    : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

