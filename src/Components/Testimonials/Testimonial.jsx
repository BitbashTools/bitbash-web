import "./Testimonials.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className="text-yellow-400 text-sm"
      />
    );
  }
  
  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon 
        key="half" 
        icon={faStar} 
        className="text-yellow-400 text-sm opacity-50"
      />
    );
  }
  
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <FontAwesomeIcon 
        key={`empty-${i}`} 
        icon={faStar} 
        className="text-gray-300 text-sm"
      />
    );
  }
  
  return <div className="flex gap-1">{stars}</div>;
};

const TestimonialCard = ({ name, position, company, content, date, image, rating }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 h-full flex flex-col max-w-md mx-auto">
      <div className="text-4xl text-purple-200 mb-4">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      
      <div className="flex-1 mb-6">
        <p className="text-black text-lg leading-relaxed italic">
          "{content}"
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
          {name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U'}
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-lg text-black mb-1">{name}</h4>
          <p className="text-purple-600 font-medium text-sm mb-2">{position} - {company}</p>
          <StarRating rating={rating || 5} />
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "43+", label: "Clients", color: "text-black-500" },
    { number: "20+", label: "Team Size", color: "text-black-500" },
    { number: "93+", label: "Project Complete", color: "text-black-500" },
    { number: "8+", label: "Year Experience", color: "text-black-500" }
  ];

  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = ({ testimonials = [], title = "Reviews That Speak Volumes!" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-4">{title}</h2>
            <p className="text-gray-600">No testimonials available</p>
          </div>
        </div>
      </div>
    );
  }

  // Auto-slide functionality
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? testimonials.length - 1 : prevIndex;
    });
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title and Stats */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold text-black nb-600 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-black text-lg mb-12">
              Let us take a look at what our valued clients think about our AI/ML and data engineering services.
            </p>
            <StatsSection />
          </div>

          {/* Right side - Single Testimonial */}
          <div className="flex flex-col justify-center h-full">
            <div className="relative">
              {/* Single Testimonial */}
              <div className="min-h-[400px] flex items-center mb-8">
                <TestimonialCard {...testimonials[currentIndex]} />
              </div>

              {/* Navigation Arrows and Dots at Bottom */}
              {testimonials.length > 1 && (
                <div className="flex items-center justify-between">
                  {/* Dots indicator */}
                  <div className="flex gap-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-black-400' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-2">
                    <button 
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TestimonialsSection);