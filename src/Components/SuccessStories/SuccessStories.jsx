import React, { useState, useEffect, useRef } from 'react';
import Allworkbutton from '../AllWorkBtn/Allworkbutton';
import './SuccessStories.css'
const SuccessStories = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 1,
      title: "VIRTUAL LEARNING PLATFORM",
      company: "Stemuli",
      description: "An innovative e-learning platform that revolutionizes online education with AI-powered personalized learning paths and adaptive content delivery.",
      image: "/api/placeholder/400/280",
      category: "Education Tech",
      testimonial: "This platform transformed our learning outcomes by 300%. The AI personalization is incredible!",
      clientName: "Sarah Johnson, CEO"
    },
    {
      id: 2,
      title: "AI TRADING PLATFORM", 
      company: "IFOREX",
      description: "Intelligent trading platform leveraging machine learning algorithms for optimal market analysis and predictions with real-time data processing.",
      image: "/api/placeholder/400/280",
      category: "FinTech",
      testimonial: "Our trading efficiency improved dramatically. The AI predictions are remarkably accurate.",
      clientName: "Michael Chen, CTO"
    },
    {
      id: 3,
      title: "CRYPTO DATA PLATFORM",
      company: "CRYPTO",
      description: "Comprehensive cryptocurrency analytics platform providing real-time market insights and portfolio management tools for institutional investors.",
      image: "/api/placeholder/400/280", 
      category: "Blockchain",
      testimonial: "The most comprehensive crypto analytics we've ever used. Game-changing insights!",
      clientName: "Alex Rodriguez, Fund Manager"
    },
    {
      id: 4,
      title: "HEALTHCARE AI ASSISTANT",
      company: "MedTech Pro",
      description: "AI-powered healthcare assistant that helps medical professionals with diagnosis support and patient care optimization.",
      image: "/api/placeholder/400/280",
      category: "Healthcare",
      testimonial: "This AI assistant has revolutionized our patient care process and improved diagnosis accuracy.",
      clientName: "Dr. Emily Watson, Chief Medical Officer"
    },
    {
      id: 5,
      title: "SMART LOGISTICS PLATFORM",
      company: "LogiFlow",
      description: "Intelligent supply chain management system using IoT and machine learning for optimal route planning and inventory management.",
      image: "/api/placeholder/400/280",
      category: "Logistics",
      testimonial: "Reduced our delivery times by 40% and cut operational costs significantly. Outstanding results!",
      clientName: "James Wilson, Operations Director"
    },
    {
      id: 6,
      title: "E-COMMERCE AI ENGINE",
      company: "ShopSmart",
      description: "Advanced recommendation engine that personalizes shopping experiences and increases conversion rates through machine learning.",
      image: "/api/placeholder/400/280",
      category: "E-commerce",
      testimonial: "Sales increased by 250% with their personalization engine. Absolutely game-changing!",
      clientName: "Lisa Park, Marketing Director"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId;

    const animate = () => {
      const currentScroll = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      
      scrollContainer.scrollLeft = currentScroll + 1;
      
      if (currentScroll >= scrollWidth - clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleNavigateToSuccessStories = () => {
    window.location.href = '/Success-Stories';
  };

  const renderMockupDevice = (projectId) => {
    if (projectId === 1 || projectId === 4) {
      return (
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-lg">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-blue-500 font-bold text-xs">
              {projectId === 1 ? 'L' : 'H'}
            </span>
          </div>
        </div>
      );
    }

    if (projectId === 2 || projectId === 6) {
      return (
        <div className="flex flex-col items-center justify-center w-16 h-16 bg-purple-500 rounded-lg">
          <div className="w-8 h-2 bg-white rounded mb-1"></div>
          <div className="flex space-x-1">
            <div className="w-1 h-4 bg-white rounded"></div>
            <div className="w-1 h-6 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white rounded"></div>
          </div>
        </div>
      );
    }

    if (projectId === 3 || projectId === 5) {
      return (
        <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-lg">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section - Fixed Layout */}
          <div className="pb-20 w-full">
            {/* Title and Button Row - Same structure as ServiceSection */}
            <div className="flex justify-between w-full flex-col text-center gap-5 lg:flex-row mb-12">
              <h1 className="text-5xl font-semibold text-black">
                Success Stories
              </h1>
              <Allworkbutton 
                src="/Success-Stories" 
                buttontitlte="See all" 
                className="black" 
              />
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-xl text-black max-w-xl  text-left leading-relaxed">
                Our passion for innovation has driven us to achieve remarkable milestones in AI, Machine 
                Learning, and Data Engineering. We're excited to share some of our standout projects that 
                showcase how we create impactful solutions across various industries.
              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {projects.concat(projects).map((project, index) => (
                <div key={`${project.id}-${index}`} className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 bg-white flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Mockup Device */}
                    <div className="relative z-10">
                      {renderMockupDevice(project.id)}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm mr-3">
                        {project.company.charAt(0)}
                      </div>
                      <span className="text-black font-medium">{project.company}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-black text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Testimonial */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="text-black text-sm italic mb-2">
                        "{project.testimonial}"
                      </p>
                      <div className="text-black text-xs font-medium">
                        — {project.clientName}
                      </div>
                    </div>

                    <button 
                      onClick={handleNavigateToSuccessStories} 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;