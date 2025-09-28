import React, { useState } from "react";
import socialData from "../../data/socialContactData.json";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-white w-full">
      <div className="w-full">
        {/* Main Footer Content - Full Width */}
        <div className="w-full">
          {/* Custom 65/35 grid using CSS Grid fractions */}
          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] min-h-[600px]">
            
            {/* Left Side - White Background (65% width) */}
            <div className="bg-white py-16 px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                
                {/* Services Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center relative">
                      Services 
                      <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-600 rounded-full"></div>
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="/Service-page" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Web/WebApp Development
                        </a>
                      </li>
                      <li>
                        <a href="/Service-page" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Mobile App Development
                        </a>
                      </li>
                      <li>
                        <a href="/Service-page" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          AI/ML And Generative AI
                        </a>
                      </li>
                      <li>
                        <a href="/Service-page" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Automation Scripting
                        </a>
                      </li>
                      <li>
                        <a href="/Service-page" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Web/App Designing
                        </a>
                      </li>
                      <li>
                        <a href="/Service-page" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Team As A Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Industries Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center relative">
                      Industries 
                      <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-600 rounded-full"></div>
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="text-gray-700 hover:text-purple-600 transition-all duration-300 cursor-pointer flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          E-commerce
                        </span>
                      </li>
                      <li>
                        <span className="text-gray-700 hover:text-purple-600 transition-all duration-300 cursor-pointer flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Healthcare
                        </span>
                      </li>
                      <li>
                        <span className="text-gray-700 hover:text-purple-600 transition-all duration-300 cursor-pointer flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Finance
                        </span>
                      </li>
                      <li>
                        <span className="text-gray-700 hover:text-purple-600 transition-all duration-300 cursor-pointer flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Education
                        </span>
                      </li>
                      <li>
                        <span className="text-gray-700 hover:text-purple-600 transition-all duration-300 cursor-pointer flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Entertainment
                        </span>
                      </li>
                      <li>
                        <span className="text-gray-700 hover:text-purple-600 transition-all duration-300 cursor-pointer flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Real Estate
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Company & Support Column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center relative">
                      Company 
                      <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-600 rounded-full"></div>
                    </h3>
                    <ul className="space-y-4 mb-8">
                      <li>
                        <a href="/Career" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Career Opportunities
                        </a>
                      </li>
                      <li>
                        <a href="/Team" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a href="/bitbash" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Life at BitBash
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center relative">
                      Support 
                      <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-600 rounded-full"></div>
                    </h4>
                    <ul className="space-y-4">
                      <li>
                        <a href="/Contact-us" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="/Testimonials" className="text-gray-700 hover:text-purple-600 transition-all duration-300 flex items-center group">
                          <span className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></span>
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Gradient Background (35% width) */}
            <div className="bg-gray-200 px-6 sm:px-8 lg:px-10 flex flex-col justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 text-black bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white text-black rounded-full translate-x-20 translate-y-20"></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white  text-black rounded-full -translate-y-10"></div>
              </div>

              <div className="relative z-10 w-full flex flex-col justify-center py-12">
                {/* BitBash Logo & Brand */}
                <div className="text-center mb-12">
                  <a href="/" className="inline-block mb-8">
                    <img 
                      src="https://i.postimg.cc/qqMTC2PW/untitled-0.jpg" 
                      alt="BitBash Logo" 
                      className="h-12 w-auto mx-auto "
                    />
                  </a>
                  
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Ready to Transform Your Ideas?
                  </h3>
                  <p className="text-black mb-8 leading-relaxed">
                    Join hundreds of satisfied clients who trust BitBash to deliver cutting-edge digital solutions that drive real business growth.
                  </p>

                  <a 
                    href="/Contact-us"
                    className="inline-flex items-center justify-center w-full bg-purple-600  text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700  hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-8"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Your Project
                  </a>
                </div>

                {/* Enhanced Social Media Section */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-black mb-6">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-4 justify-center">
                    {socialData.slice(0, 4).map((social, index) => (
                      <a
                        key={`${Date.now()}-${index}`}
                        href={social.href}
                        target={social.target}
                        rel={social.rel}
                        className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white border-opacity-30"
                      >
                        {social.icon === 'faTwitter' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        )}
                        {social.icon === 'faLinkedinIn' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {social.icon === 'faWhatsapp' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.889 3.488"/>
                          </svg>
                        )}
                        {social.icon === 'faTelegram' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="w-full bg-white border-t border-gray-200 py-8 px-0">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 sm:px-8 lg:px-12 xl:px-16">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © BitBash 2024. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/licensing" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;