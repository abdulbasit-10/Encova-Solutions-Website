import React, { useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import quotation from "../assets/homeAssets/quotation.svg";
import left from "../assets/homeAssets/left.svg";
import right from "../assets/homeAssets/right.svg";
import star from "../assets/homeAssets/star.svg";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
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
          {/* Stars */}
          <div className="flex justify-center mb-6 gap-1">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <img key={i} src={star} alt="star" className="w-6 h-6" />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            "{testimonials[currentIndex].content}"
          </p>

          {/* Author */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold text-xl mb-4">
              {testimonials[currentIndex].name.split(' ').map(n => n.charAt(0)).join('')}
            </div>
            <div className="text-center">
              <p className="text-gray-900 font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          {/* Navigation Arrows - Inside the card */}
          <div className="flex justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors bg-white"
              aria-label="Previous testimonial"
            >
              <img src={left} alt="previous" className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors bg-white"
              aria-label="Next testimonial"
            >
              <img src={right} alt="next" className="w-5 h-5" />
            </button>
          </div>

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

