import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import './case.css';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Virtual Learning Platform",
      company: "Stemuli",
      description: "AI-powered e-learning platform with personalized learning paths and adaptive content delivery.",
      category: "Education Tech",
      duration: "8 months",
      teamSize: "12 experts",
      budget: "$250,000",
      results: "300% increase in learning outcomes",
      satisfaction: "92%",
      testimonial: "This platform transformed our learning outcomes by 300%. The AI personalization is incredible!",
      clientName: "Sarah Johnson",
      clientTitle: "CEO, Stemuli",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "AI Trading Platform",
      company: "IFOREX",
      description: "Intelligent trading platform with machine learning algorithms for market analysis and predictions.",
      category: "FinTech",
      duration: "6 months",
      teamSize: "8 experts",
      budget: "$180,000",
      results: "250% improvement in trading efficiency",
      satisfaction: "89%",
      testimonial: "Our trading efficiency improved dramatically. The AI predictions are remarkably accurate.",
      clientName: "Michael Chen",
      clientTitle: "CTO, IFOREX",
      technologies: ["Python", "Django", "TensorFlow", "Redis", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Crypto Data Platform",
      company: "CRYPTO",
      description: "Comprehensive cryptocurrency analytics platform with real-time market insights and portfolio management.",
      category: "Blockchain",
      duration: "10 months",
      teamSize: "15 experts",
      budget: "$300,000",
      results: "500% increase in data processing speed",
      satisfaction: "94%",
      testimonial: "The most comprehensive crypto analytics platform we've ever used. Game-changing insights!",
      clientName: "Alex Rodriguez",
      clientTitle: "Fund Manager, CRYPTO",
      technologies: ["React", "GraphQL", "MongoDB", "Docker", "Kubernetes"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Healthcare AI Assistant",
      company: "MedTech Pro",
      description: "AI-powered healthcare assistant for diagnosis support and patient care optimization.",
      category: "Healthcare",
      duration: "12 months",
      teamSize: "20 experts",
      budget: "$400,000",
      results: "85% improvement in diagnosis accuracy",
      satisfaction: "96%",
      testimonial: "This AI assistant has revolutionized our patient care process and improved diagnosis accuracy.",
      clientName: "Dr. Emily Watson",
      clientTitle: "Chief Medical Officer",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Smart Logistics Platform",
      company: "LogiFlow",
      description: "Intelligent supply chain management with IoT and machine learning for route optimization.",
      category: "Logistics",
      duration: "9 months",
      teamSize: "14 experts",
      budget: "$280,000",
      results: "40% reduction in delivery times",
      satisfaction: "91%",
      testimonial: "Reduced our delivery times by 40% and cut operational costs significantly.",
      clientName: "James Wilson",
      clientTitle: "Operations Director",
      technologies: ["React", "Node.js", "MongoDB", "AWS IoT", "Python"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "E-commerce AI Engine",
      company: "ShopSmart",
      description: "Advanced recommendation engine that personalizes shopping experiences and increases conversions.",
      category: "E-commerce",
      duration: "7 months",
      teamSize: "10 experts",
      budget: "$200,000",
      results: "250% increase in sales conversion",
      satisfaction: "93%",
      testimonial: "Sales increased by 250% with their personalization engine. Absolutely game-changing!",
      clientName: "Lisa Park",
      clientTitle: "Marketing Director",
      technologies: ["React", "Python", "TensorFlow", "Redis", "MySQL"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  const categories = ['all', 'Education Tech', 'FinTech', 'Blockchain', 'Healthcare', 'Logistics', 'E-commerce'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const renderProjectImage = (project) => (
    <div 
      className="w-full h-48 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg"
      style={{ background: project.gradient }}
    >
      {project.company}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transformative projects across industries showcasing our expertise in AI, Machine Learning, and Data Engineering.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-black">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-black">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-black">Industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">$50M+</div>
              <div className="text-black">Value Generated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-300 text-black border-purple-300 transform scale-105 shadow-lg" 
                      : "bg-white text-black border-black"
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="p-6 pb-0">
                {renderProjectImage(project)}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-black font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-black ">{project.title}</h3>
                    <p className="text-black">{project.company}</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-semibold text-black">{project.budget}</div>
                    <div className="text-black font-medium">{project.duration}</div>
                  </div>
                </div>

                <p className="text-black font-normal mb-6">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 font-bold rounded-lg">
                    <Calendar className="w-4 h-4 text-black font-bold mx-auto mb-1" />
                    <div className="text-xs text-black font-semibold">Duration</div>
                    <div className="text-sm font-semibold">{project.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-4 h-4 text-black font-bold mx-auto mb-1" />
                    <div className="text-xs text-black font-bold">Team</div>
                    <div className="text-sm font-normal">{project.teamSize}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-black bold mx-auto mb-1" />
                    <div className="text-xs text-black font-bold">Satisfaction</div>
                    <div className="text-sm font-normal">{project.satisfaction}</div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-purple-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-purple-700 font-semibold mb-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Key Results
                  </div>
                  <div className="text-lg font-bold text-gray-900">{project.results}</div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-purple-100 font-semibold text-black px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <blockquote className="text-black  font-medium italic mb-2">
                    "{project.testimonial}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-black">{project.clientName}</div>
                    <div className="text-black font-normal">{project.clientTitle}</div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-2xl font-semibold transition-colors flex items-center justify-center">
                  Start Similar Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No projects found in this category</p>
            <button 
              onClick={() => setSelectedCategory('all')}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              View All Projects
            </button>
          </div>
        )}

  <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden">
          
          {/* Background decorative elements - adjusted for mobile */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-50 rounded-full -translate-y-16 sm:-translate-y-24 md:-translate-y-32 translate-x-16 sm:translate-x-24 md:translate-x-32 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-purple-100 rounded-full translate-y-12 sm:translate-y-18 md:translate-y-24 -translate-x-12 sm:-translate-x-18 md:-translate-x-24 opacity-40"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-14 lg:gap-16 items-center relative z-10">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fadeInLeft order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
                  Ready to Start?
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                  Ready To Join Our{' '}
                  <span className="relative inline-block">
                    <span className="text-purple-600">Success Stories?</span>
                    <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3" viewBox="0 0 100 8" fill="none">
                      <path d="M0 6c20-4 40-4 60 0s40 4 40 0" stroke="#a78bfa" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>
                </h2>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed max-w-xl">
                Let's discuss how we can help transform your business with our proven expertise and dedication to excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 ">
                 <Link
                                to="/Contact-us"
                                className="primary-button bg-purple-600 text-white px-8 py-4 rounded-3xl hover:bg-purple-700  hover:text-white transition-all duration-200 inline-block animate__animated animate__fadeInUp"
                              >
                                Get In Touch
                              </Link>
              </div>
              
              {/* Trust indicators - mobile optimized */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-3 sm:pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-black/70 text-xs sm:text-sm font-medium">50+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <div className="text-yellow-400 flex text-sm sm:text-base">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-black/70 text-xs sm:text-sm font-medium ml-2">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="relative animate-fadeInRight order-1 lg:order-2">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 sm:border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-black/80 text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed font-medium">
                    "Your success story could be featured here next. Join{' '}
                    <span className="font-bold text-purple-600">50+ satisfied clients</span>{' '}
                    who chose BitBash for their digital transformation."
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-purple-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">?</span>
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl truncate">Your Name Here</h4>
                    <p className="text-purple-600 font-semibold text-sm sm:text-base md:text-lg">Future Success Story</p>
                    <div className="flex text-yellow-400 text-xs sm:text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced decorative elements - mobile friendly */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-purple-300 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-purple-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>


      </div>

    </div>
  );
};

export default CaseStudy;