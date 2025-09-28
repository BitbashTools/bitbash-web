import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, Users, Globe, X } from 'lucide-react';

const ProductsGridPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Products data
  const productsData = {
    "products": [
      {
        "title": "Appilot",
        "description": "AppPilot streamlines app development with intuitive tools and real-time collaboration for modern development teams.",
        "image": "https://i.postimg.cc/s2VYMGKP/app.jpg",
        "link": "https://www.appilot.app/",
        "category": "Development Tools",
        "features": ["Intuitive Design", "Real-time Collaboration", "Streamlined Workflow", "Cross-platform Support"],
        "pricing": "Starting at $29/month"
      },
      {
        "title": "Ttinit",
        "description": "Turbocharge your TikTok Shop affiliate outreach with better results and effortless management systems.",
        "image": "https://i.postimg.cc/3rCdsrPr/download-1.jpg",
        "link": "https://ttinit.com/",
        "category": "Marketing Automation",
        "features": ["Affiliate Management", "TikTok Integration", "Automated Outreach", "Performance Analytics"],
        "pricing": "Contact for pricing"
      },
      {
        "title": "BITBOT",
        "description": "BITBOT enforces distraction-free deep work hours in Slack by scheduling non-urgent messages and supporting urgent overrides.",
        "image": "https://i.postimg.cc/FKDSXrfJ/download.jpg",
        "link": "https://bitbot-bitbash.vercel.app/",
        "category": "Productivity",
        "features": ["Slack Integration", "Message Scheduling", "Audit Trails", "Focus Management"],
        "pricing": "Free with premium features"
      },
      {
        "title": "BITLINK",
        "description": "Bridge WhatsApp, Telegram, and Discord into Slack with two-way, real-time communication across all platforms.",
        "link": "https://bitlink-page.vercel.app/",
        "image": "https://i.postimg.cc/0yypcX2f/bitlink-capital-cover.jpg",
        "category": "Communication",
        "features": ["Multi-platform Bridge", "Real-time Sync", "Two-way Communication", "Unified Interface"],
        "pricing": "Starting at $19/month"
      }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div 
          id="hero-section"
          data-animate
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-black px-2">
            Revolutionary Tools for Modern Teams
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Transform your business with cutting-edge solutions that eliminate friction, accelerate growth, and unlock your team's full potential. From development acceleration to seamless communication bridges, our products don't just solve problems—they create competitive advantages.
          </p>
        </div>
      </section>

      {/* Products Grid - Enhanced Responsive Design */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Responsive Grid: 1 col on mobile, 2 on tablet+, 3 on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {productsData.products.map((product, index) => (
              <div
                key={index}
                id={`product-${index}`}
                data-animate
                className={`bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible[`product-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Mobile-first Layout - Stack vertically on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Product Icon - Full width on mobile, fixed width on larger screens */}
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-purple-200 mx-auto sm:mx-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="#e5e7eb"/>
                              <rect x="50%" y="50%" width="30" height="30" fill="#9333ea" transform="translate(-15, -15)" rx="4"/>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content - Full width layout */}
                  <div className="flex-1 flex flex-col text-center sm:text-left">
                    {/* Category Badge */}
                    <div className="mb-2 sm:mb-3">
                      <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {product.category}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                      {product.title}
                    </h3>

                    {/* Description - Responsive text size */}
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {product.description}
                    </p>

                    {/* Features - Show fewer on mobile */}
                    <div className="mb-3 sm:mb-4 flex-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-black mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features?.slice(0, window.innerWidth < 640 ? 2 : 3).map((feature, i) => (
                          <li key={i} className="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-gray-700">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                        {product.features?.length > (window.innerWidth < 640 ? 2 : 3) && (
                          <li className="text-xs sm:text-sm text-purple-600 font-medium text-center sm:text-left">
                            +{product.features.length - (window.innerWidth < 640 ? 2 : 3)} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons - Responsive layout */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                      <button
                        onClick={() => openProductDetails(product)}
                        className="w-full sm:flex-1 bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm"
                      >
                        Learn More
                      </button>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 bg-white border-2 border-black hover:bg-black hover:text-white text-black px-3 sm:px-4 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm text-center flex items-center justify-center gap-1 sm:gap-2"
                      >
                        Visit Product
                        <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            {/* Responsive flex layout - stack on mobile */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed">
                  Join thousands of teams already using our products to streamline their operations and boost productivity. Transform your business with cutting-edge solutions that eliminate friction, accelerate growth, and unlock your team's full potential.
                </p>
              </div>
              
              {/* CTA Button - Full width on mobile */}
              <div className="w-full lg:w-auto lg:flex-shrink-0">
                <a
                  href="/Contact-us"
                  className="block w-full lg:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full font-bold transition-all duration-300 text-base sm:text-lg lg:text-xl hover:scale-105 transform text-center"
                >
                  Ready to Flow
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Responsive Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative border-2 border-purple-200 mx-2">
            {/* Close Button */}
            <button
              onClick={closeProductDetails}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-black" />
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header */}
              <div className="mb-6 sm:mb-8 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-purple-200 mx-auto mb-3 sm:mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2">{selectedProduct.title}</h2>
                <span className="bg-purple-100 text-purple-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  {selectedProduct.category}
                </span>
                <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features Grid - Stack on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 flex items-center justify-center sm:justify-start gap-2">
                    <Star className="text-purple-600" size={18} />
                    Key Features
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {selectedProduct.features?.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-black text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 flex items-center justify-center sm:justify-start gap-2">
                    <Users className="text-purple-600" size={18} />
                    Benefits
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-black text-sm sm:text-base">
                      <Users className="text-purple-600" size={16} />
                      <span>Enhanced Team Collaboration</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-black text-sm sm:text-base">
                      <Globe className="text-purple-600" size={16} />
                      <span>Cloud-based Solution</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-black text-sm sm:text-base">
                      <Star className="text-purple-600" size={16} />
                      <span>Premium Support Included</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Responsive layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Learn More
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={closeProductDetails}
                  className="w-full sm:w-auto bg-white border-2 border-black hover:bg-black hover:text-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsGridPage;