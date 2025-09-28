import LoadingBar from "react-top-loading-bar";
import React, { useEffect, useRef, useState } from "react";
import TeamMembers from "../Section/TeamMembers";
import LocationSectionAbout from "./Location";
import Faqs from "../Faqs/Faqs";
import "./Team.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Team() {
  const ref = useRef(null);
  const [activeSection, setActiveSection] = useState('team');
  const [isVisible, setIsVisible] = useState({});
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  const observerRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 1500);

    // Animate stats counter
    const animateStats = () => {
      const targets = { projects: 100, clients: 50, experience: 8, satisfaction: 98 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const increment = targets[key] / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            setStats(prev => ({ ...prev, [key]: targets[key] }));
            clearInterval(timer);
          } else {
            setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, stepTime);
      });
    };

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            if (entry.target.id === 'stats-section') {
              animateStats();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const teamValues = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: "🤝",
      title: "Collaborative Spirit",
      description: "Cross-functional teamwork drives our success, fostering creativity and shared ownership."
    },
    {
      icon: "⚡",
      title: "Agile Excellence",
      description: "Rapid iteration and continuous improvement ensure we deliver value consistently."
    },
    {
      icon: "💡",
      title: "Creative Problem Solving",
      description: "We approach challenges with fresh perspectives and innovative thinking."
    }
  ];

  return (
    <>
      <LoadingBar color="#FFFFFF" ref={ref} shadow={true} />
      <Helmet>
        <title>Team & FAQs | BitBash - Learn About Our Team and Get Answers</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://www.bitbash.dev/Team" />
        <meta name="description" content="Meet the BitBash team and get answers to your questions. Discover our work culture, tech stack, collaboration methods, and our approach to projects." />
        <meta name="keywords" content="BitBash, Team, FAQs, Questions, Answers, Tech Stack, Work Culture, Collaboration, Team Dynamics, Project Management, Software Development" />
        <meta name="author" content="BitBash" />
        <meta name="publisher" content="BitBash, Inc." />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco" />
        <meta name="geo.position" content="latitude;longitude" />
        <meta name="ICBM" content="latitude, longitude" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bitbash.dev/Team" />
        <meta property="og:title" content="Team & FAQs | BitBash - Learn About Our Team and Get Answers" />
        <meta property="og:description" content="Meet the BitBash team and explore frequently asked questions to learn about our ethos, our methods, and our commitment to excellence in software development." />
        <meta property="og:image" content="https://www.bitbash.dev/With%20curve.png" />
        <meta property="og:site_name" content="BitBash" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.bitbash.dev/Team" />
        <meta name="twitter:title" content="Team & FAQs | BitBash - Learn About Our Team and Get Answers" />
        <meta name="twitter:description" content="Meet the BitBash team and get answers to your questions. Discover our work culture, tech stack, collaboration methods, and our approach to projects." />
        <meta name="twitter:image" content="https://www.bitbash.dev/With%20curve.png" />
        <meta name="twitter:creator" content="@BitBash" />
        <meta name="twitter:site" content="@BitBash" />

        {/* Google / Schema.org Markup */}
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "BitBash",
        "url": "https://www.bitbash.dev",
        "logo": "https://www.bitbash.dev/With%20curve.png",
        "sameAs": [
          "https://www.linkedin.com/company/bitbash"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "customer service"
        }
      }
    `}
        </script>
      </Helmet>

      <div className="bg-white text-black min-h-screen overflow-x-hidden">
        {/* Team Introduction Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Meet the Minds Behind the Magic
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We're a diverse team of passionate developers, innovative designers, and strategic thinkers 
              who transform complex challenges into elegant solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
              <span className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                🎯 Problem Solvers
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                💻 Tech Enthusiasts
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                🚀 Innovation Drivers
              </span>
            </div>
          </div>
        </section>

        {/* Team Members Section - FIXED TO FULL WIDTH */}
        <section 
          id="team-section" 
          data-animate
          className={`py-16 px-6 w-full overflow-x-hidden transition-all duration-1000 ${
            isVisible['team-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full overflow-x-hidden">
            <TeamMembers />
          </div>
        </section>

        {/* Team Values & Culture Section */}
        <section 
          id="culture-section" 
          data-animate
          className={`py-20 bg-white overflow-x-hidden transition-all duration-1000 ${
            isVisible['culture-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <img
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  src="./teamimg.webp"
                  alt="Team collaboration"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">8+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  We go above and beyond to ensure your success
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Collaboration is at the heart of our process. We work closely with cross-functional teams, 
                  including developers, product managers, and stakeholders, to ensure a seamless integration 
                  of design and functionality.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By fostering open communication and valuing diverse perspectives, we aim to create 
                  harmonious and impactful digital experiences that drive real business results.
                </p>
                <div className="pt-6">
                  <Link
                    to="/Contact-us"
                    className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Start Your Project
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          id="stats-section" 
          data-animate
          className={`py-20 bg-white overflow-x-hidden transition-all duration-1000 ${
            isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Impact in Numbers</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Delivering exceptional results through dedication and expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { key: 'projects', label: 'Projects Completed', suffix: '+' },
                { key: 'clients', label: 'Happy Clients', suffix: '+' },
                { key: 'experience', label: 'Years Experience', suffix: '+' },
                { key: 'satisfaction', label: 'Client Satisfaction', suffix: '%' }
              ].map((stat, index) => (
                <div 
                  key={stat.key}
                  className="text-center group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white border-2 border-black rounded-xl p-8 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 hover:shadow-lg">
                    <div className="text-4xl md:text-5xl font-bold text-black mb-3">
                      {stats[stat.key]}{stat.suffix}
                    </div>
                    <div className="text-lg text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <LocationSectionAbout />
          </div>
        </section>
        {/* FAQs Section */}
        <section 
          id="faqs-section" 
          data-animate
          className={`py-20 bg-white overflow-x-hidden transition-all duration-1000 ${
            isVisible['faqs-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our team and processes
              </p>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl p-12 w-full">
              <Faqs />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default React.memo(Team);