import "./detailstemplate.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import serviceDetailData from "../../data/serviceDetailData.json";
import { Helmet } from "react-helmet-async";

// URL to ID mapping for better slug handling
const URL_TO_ID_MAPPING = {
  'web-webapp-development': 1,
  'web-development': 1,
  'web-dev': 1,
  'webapp-development': 1,
  'web-application-development': 1,
  
  'ai-machine-learning': 2,
  'ai-ml': 2,
  'artificial-intelligence': 2,
  'machine-learning': 2,
  'ai-solutions': 2,
  
  'web-mobile-design': 3,
  'ui-ux-design': 3,
  'design-services': 3,
  'web-design': 3,
  'mobile-design': 3,
  'user-interface-design': 3,
  
  'desktop-app-development': 4,
  'desktop-application': 4,
  'desktop-development': 4,
  'desktop-software': 4,
  
  'data-analysis-testing': 5,
  'data-analytics': 5,
  'data-analysis': 5,
  'testing-services': 5,
  
  'software-development': 6,
  'other-development': 6,
  'custom-software': 6,
  'other-services': 6,
  
  'scripts-utilities': 7,
  'utility-development': 7,
  'scripts-development': 7,
  'automation-scripts': 7,
  
  'data-extraction-etl': 8,
  'data-processing': 8,
  'data-extraction': 8,
  'etl-services': 8,
  'data-migration': 8,
  
  'automation-bots': 9,
  'bot-development': 9,
  'automation-services': 9,
  'process-automation': 9,
  
  'ecommerce-development': 10,
  'e-commerce': 10,
  'ecommerce': 10,
  'online-store': 10,
  'shopping-website': 10,
  
  'generative-ai': 11,
  'ai-generation': 11,
  'generative-artificial-intelligence': 11,
  'ai-content-generation': 11,
  
  'fullstack-development': 12,
  'full-stack': 12,
  'fullstack': 12,
  'complete-development': 12,
  
  'chatbot-development': 13,
  'chatbot-services': 13,
  'chatbot': 13,
  'conversational-ai': 13,
  
  'backend-development': 14,
  'back-end': 14,
  'backend': 14,
  'server-development': 14,
  'api-development': 14,
  
  'frontend-development': 15,
  'front-end': 15,
  'frontend': 15,
  'client-side-development': 15,
  'ui-development': 15
};

// Light Purple Color Palette
const colors = {
  primary: '#9f7aea',        // Main purple
  primaryLight: '#8048cf',   // Lighter purple
  primaryDark: '#8048cf',    // Darker purple
  background: 'white',     // Very light purple background
  cardBg: '#f7fafc',         // Light purple card background
  accent: '#8048cff',         // Purple accent
  text: '#4a5568',           // Dark gray text
  border: '#e2e8f0'          // Light border
};

const ServiceDetail = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { id } = useParams();
  
  const iconMapping = {
    phone: faPhone,
    envelope: faEnvelope,
    whatsapp: faWhatsapp,
    telegram: faTelegram,
  };

  // Enhanced service matching with multiple strategies
  const findMatchedService = (searchId) => {
    if (!serviceDetailData || !Array.isArray(serviceDetailData)) {
      console.error("Service data is not available or invalid");
      return null;
    }

    console.log("Searching for service with ID:", searchId);
    console.log(" Available services:", serviceDetailData.map(s => ({ id: s.id, heading: s.heading })));

    // Strategy 1: Quick URL mapping check (MOST IMPORTANT FIX)
    if (URL_TO_ID_MAPPING[searchId]) {
      const mappedId = URL_TO_ID_MAPPING[searchId];
      const mappedService = serviceDetailData.find(service => service.id === mappedId);
      if (mappedService) {
        console.log("Found by URL mapping:", mappedService.heading);
        return mappedService;
      }
    }

    // Strategy 2: Exact numeric match
    const numericId = parseInt(searchId);
    if (!isNaN(numericId)) {
      const numericMatch = serviceDetailData.find(service => service.id === numericId);
      if (numericMatch) {
        console.log(" Found by numeric ID:", numericMatch.heading);
        return numericMatch;
      }
    }

    // Strategy 3: String comparison
    const stringMatch = serviceDetailData.find(service => 
      service.id.toString() === searchId.toString()
    );
    if (stringMatch) {
      console.log("Found by string ID:", stringMatch.heading);
      return stringMatch;
    }

    console.log("No service found for ID:", searchId);
    return null;
  };

  // Helper function to safely get nested properties
  const safeGet = (obj, path, defaultValue = '') => {
    try {
      return path.split('.').reduce((current, key) => current?.[key], obj) || defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // Helper function to safely get array
  const safeGetArray = (obj, path, defaultValue = []) => {
    const result = safeGet(obj, path, defaultValue);
    return Array.isArray(result) ? result : defaultValue;
  };

  // Show loading state
  if (loading) {
    return (
      <div className="section clean-white-section" style={{ backgroundColor: colors.background }}>
        <div className="base-container w-container">
          <div className="text-center py-20">
            <div 
              className="loading-spinner"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                border: `4px solid ${colors.accent}`,
                borderTop: `4px solid ${colors.primary}`,
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '1rem'
              }}
            ></div>
            <p style={{ color: colors.text, fontSize: '1.1rem' }}>Loading service details...</p>
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
    );
  }

  const matchedService = findMatchedService(id);

  // Error handling for when no matching service is found
  if (!matchedService) {
    return (
      <>
        <div 
          className="hero-section text-black py-20 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(159, 122, 234, 0.7), rgba(128, 90, 213, 0.9)), url('https://i.postimg.cc/tgwBm9WH/service.jpg')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            minHeight: "300px"
          }}
        >
          <div className="max-w-4xl mx-auto px-4 pt-16">
            <h1 
              className="text-white font-bold mx-auto text-center mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.1',
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                fontWeight: 'bold'
              }}
            >
              Service Not Found
            </h1>
          </div>
        </div>
        
        <div className="section clean-white-section" style={{ backgroundColor: colors.background }}>
          <div className="base-container w-container">
            <div className="text-center py-20">
              <p className="text-gray-600 mb-6" style={{ color: colors.text }}>
                The service you're looking for doesn't exist or the URL might be incorrect.
              </p>
              
              <Link 
                to="/Service-page" 
                className="clean-back-button"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  backgroundColor: colors.primary,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.primaryDark;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.primary;
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                ← Go Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Safely extract all required data with fallbacks
  const serviceData = {
    heading: matchedService.heading || 'Service Details',
    metaDescription: matchedService.metaDescription || 'Professional service details',
    imageUrl: matchedService.imageUrl || '/images/default-service.jpg',
    title: safeGet(matchedService, 'richTextContent.title', matchedService.heading || 'Service Details'),
    paragraphs: safeGetArray(matchedService, 'richTextContent.paragraphs', ['Service description not available.']),
    header2Solutions: safeGet(matchedService, 'richTextContent.header2Solutions', 'Our Solutions'),
    serviceOfferings: safeGetArray(matchedService, 'richTextContent.serviceOfferings', ['Service offerings will be updated soon.']),
    header2WhyChoose: safeGet(matchedService, 'richTextContent.header2WhyChoose', 'Why Choose Us'),
    USPs: safeGetArray(matchedService, 'richTextContent.USPs', ['Unique selling points will be updated soon.']),
    header2Process: safeGet(matchedService, 'richTextContent.header2Process', 'Our Process'),
    processOutline: safeGetArray(matchedService, 'richTextContent.processOutline', ['Process details will be updated soon.']),
    header2Technologies: safeGet(matchedService, 'richTextContent.header2Technologies', 'Technologies We Use'),
    technologyStack: safeGetArray(matchedService, 'richTextContent.technologyStack', []),
    secondParaTitle: safeGet(matchedService, 'secondParaData.title', 'Additional Information'),
    secondParaPara: safeGetArray(matchedService, 'secondParaData.para', ['Additional information will be updated soon.']),
    header2Testimonials: matchedService.header2Testimonials || 'What Our Clients Say',
    faqs: safeGetArray(matchedService, 'faqs', []),
    contactDetails: safeGetArray(matchedService, 'contactDetails', [])
  };

  // Improved image URL handling
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return `https://via.placeholder.com/800x400/${colors.primary.replace('#', '')}/FFFFFF?text=Service+Image`;
    }

    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    } else if (imageUrl.startsWith('/')) {
      return imageUrl;
    } else {
      return `/${imageUrl}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{serviceData.heading} | BitBash</title>
        <meta name="description" content={serviceData.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.bitbash.com/service-details/${id}`}
        />
        <meta property="og:title" content={serviceData.heading} />
        <meta property="og:description" content={serviceData.metaDescription} />
        <meta property="og:image" content="https://www.bitbash.dev/With%20curve.png" />
        <meta property="og:url" content={`https://www.bitbash.com/service-details/${id}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceData.heading,
            description: serviceData.metaDescription,
            provider: {
              "@type": "Organization",
              name: "BitBash",
              url: "https://www.bitbash.dev",
            },
            image: "https://www.bitbash.dev/With%20curve.png",
            areaServed: "Worldwide",
            availableChannel: {
              "@type": "ServiceChannel",
              availableLanguage: ["en"],
              serviceUrl: `https://www.bitbash.com/service-details/${id}`,
            },
          })}
        </script>
      </Helmet>
      
      <div className="section clean-white-section" style={{ backgroundColor: colors.background }}>
        <div className="base-container w-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          
          {/* NEW LAYOUT: Content Left, Contact Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: '3rem',
            minHeight: '100vh'
          }}>

            {/* LEFT CONTENT AREA - SERVICE DETAILS (SCROLLABLE) */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: `0 4px 20px ${colors.primary}20`,
              border: `1px solid ${colors.border}`
            }}>

              {/* Service Image */}
              <img
                src={getImageUrl(serviceData.imageUrl)}
                alt={serviceData.title}
                onError={(e) => {
                  console.error('Image load failed:', e.target.src);
                  e.target.src = `https://via.placeholder.com/800x400/${colors.primary.replace('#', '')}/FFFFFF?text=Service+Image`;
                }}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  border: `1px solid ${colors.border}`
                }}
              />

              {/* Service Title */}
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: colors.primaryDark,
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                {serviceData.title}
              </h1>
              
              {/* Service Introduction */}
              <div style={{ marginBottom: '3rem' }}>
                {serviceData.paragraphs.map((p, index) => (
                  <p key={index} style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: colors.text,
                    marginBottom: '1rem'
                  }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Our Solutions Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: colors.primaryDark,
                  marginBottom: '1.5rem',
                  borderBottom: `3px solid ${colors.primary}`,
                  paddingBottom: '0.5rem'
                }}>
                  {serviceData.header2Solutions}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1rem'
                }}>
                  {serviceData.serviceOfferings.map((data, index) => (
                    <div
                      key={`service-${index}`}
                      style={{
                        padding: '1.5rem',
                        backgroundColor: hoveredItem === `service-${index}` ? colors.accent : colors.cardBg,
                        borderRadius: '12px',
                        border: `1px solid ${colors.border}`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem'
                      }}
                      onMouseEnter={() => setHoveredItem(`service-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        backgroundColor: colors.primary,
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        color: colors.text,
                        lineHeight: '1.5'
                      }}>
                        {data}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: colors.primaryDark,
                  marginBottom: '1.5rem',
                  borderBottom: `3px solid ${colors.primaryLight}`,
                  paddingBottom: '0.5rem'
                }}>
                  {serviceData.header2WhyChoose}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1rem'
                }}>
                  {serviceData.USPs.map((data, index) => (
                    <div
                      key={`usp-${index}`}
                      style={{
                        padding: '1.5rem',
                        backgroundColor: hoveredItem === `usp-${index}` ? colors.accent : colors.cardBg,
                        borderRadius: '12px',
                        border: `1px solid ${colors.border}`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem'
                      }}
                      onMouseEnter={() => setHoveredItem(`usp-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        backgroundColor: colors.primaryLight,
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        color: colors.text,
                        lineHeight: '1.5'
                      }}>
                        {data}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Process Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: colors.primaryDark,
                  marginBottom: '1.5rem',
                  borderBottom: `3px solid ${colors.primary}`,
                  paddingBottom: '0.5rem'
                }}>
                  {serviceData.header2Process}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {serviceData.processOutline.map((data, index) => (
                    <div
                      key={`process-${index}`}
                      style={{
                        padding: '2rem',
                        backgroundColor: hoveredItem === `process-${index}` ? colors.accent : 'white',
                        borderRadius: '16px',
                        border: `2px solid ${colors.primary}`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        textAlign: 'center',
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredItem(`process-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: colors.primary,
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        margin: '0 auto 1rem auto'
                      }}>
                        {index + 1}
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        color: colors.text,
                        lineHeight: '1.6',
                        fontWeight: '500'
                      }}>
                        {data}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Section */}
              {serviceData.technologyStack.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: colors.primaryDark,
                    marginBottom: '1.5rem',
                    borderBottom: `3px solid ${colors.primaryLight}`,
                    paddingBottom: '0.5rem'
                  }}>
                    {serviceData.header2Technologies}
                  </h2>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    {serviceData.technologyStack.map((tech, index) => (
                      <div key={`tech-${index}`} style={{
                        padding: '1.5rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        border: `1px solid ${colors.primary}`,
                        textAlign: 'center'
                      }}>
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          color: colors.primary,
                          marginBottom: '0.5rem'
                        }}>
                          {tech.name || 'Technology'}
                        </h4>
                        <p style={{
                          fontSize: '0.95rem',
                          color: colors.text,
                          lineHeight: '1.5',
                          margin: 0
                        }}>
                          {tech.description || 'Description not available'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Information Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: colors.primaryDark,
                  marginBottom: '1.5rem',
                  borderBottom: `3px solid ${colors.primary}`,
                  paddingBottom: '0.5rem'
                }}>
                  {serviceData.secondParaTitle}
                </h2>
                <div>
                  {serviceData.secondParaPara.map((p, index) => (
                    <p key={index} style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: colors.text,
                      marginBottom: '1rem'
                    }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Testimonials Link */}
              <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <Link 
                  to="/Testimonials" 
                  style={{
                    display: 'inline-block',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: colors.primary,
                    textDecoration: 'none',
                    padding: '1rem 2rem',
                    border: `2px solid ${colors.primary}`,
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primary;
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = colors.primary;
                  }}
                >
                  {serviceData.header2Testimonials}
                </Link>
              </div>

              {/* FAQ Section */}
              {serviceData.faqs.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: colors.primaryDark,
                    marginBottom: '1.5rem',
                    borderBottom: `3px solid ${colors.primaryLight}`,
                    paddingBottom: '0.5rem'
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <Accordion allowToggle>
                    {serviceData.faqs.map((item, index) => (
                      <AccordionItem
                        key={`faq-${index}`}
                        border={`1px solid ${colors.border}`}
                        borderRadius="12px"
                        marginBottom="1rem"
                        backgroundColor="white"
                      >
                        <h2>
                          <AccordionButton 
                            padding="1.5rem"
                            _hover={{ backgroundColor: colors.accent }}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontSize="1.2rem"
                              fontWeight="600"
                              color={colors.text}
                            >
                              {item.question || 'Question not available'}
                            </Box>
                            <AccordionIcon color={colors.primary} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel 
                          padding="1.5rem"
                          backgroundColor={colors.background}
                          color={colors.text}
                          lineHeight="1.6"
                        >
                          {item.answer || 'Answer not available'}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

            </div>

            {/* RIGHT SIDEBAR - CONTACT INFORMATION (STICKY) */}
            <div style={{
              position: 'sticky',
              top: '2rem',
              height: 'fit-content',
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: `0 4px 20px ${colors.primary}20`,
              border: `1px solid ${colors.border}`
            }}>
              {/* Contact Header */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: colors.primary,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <h3 style={{ 
                  margin: '0 0 0.5rem 0', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  color: colors.primaryDark
                }}>
                  Get In Touch
                </h3>
                <p style={{ 
                  margin: '0', 
                  color: colors.text,
                  fontSize: '1rem'
                }}>
                  Ready to start your project?
                </p>
              </div>

              {/* Contact Methods */}
              <div style={{ marginBottom: '2rem' }}>
                {serviceData.contactDetails.length > 0 ? (
                  <div>
                    {serviceData.contactDetails.map((detail, index) => (
                      <a
                        key={index}
                        href={detail.href || '#'}
                        target={detail.target || '_self'}
                        rel={detail.rel || ''}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '1rem',
                          marginBottom: '0.75rem',
                          backgroundColor: colors.cardBg,
                          borderRadius: '12px',
                          textDecoration: 'none',
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = colors.primary;
                          e.target.style.color = 'white';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = colors.cardBg;
                          e.target.style.color = colors.text;
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '1rem',
                          backgroundColor: colors.accent,
                          borderRadius: '8px'
                        }}>
                          <FontAwesomeIcon
                            icon={iconMapping[detail.icon] || faEnvelope}
                            style={{ fontSize: '18px', color: colors.primary }}
                          />
                        </div>
                        <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                          {detail.text || 'Contact Us'}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <a 
                    href="mailto:info@bitbash.dev" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1rem',
                      backgroundColor: colors.cardBg,
                      borderRadius: '12px',
                      textDecoration: 'none',
                      color: colors.text,
                      border: `1px solid ${colors.border}`
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      backgroundColor: colors.accent,
                      borderRadius: '8px'
                    }}>
                      <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '18px', color: colors.primary }} />
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                      info@bitbash.dev
                    </span>
                  </a>
                )}
              </div>

              {/* CTA Button */}
              <Link 
                to="/Contact-us" 
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem 1.5rem',
                  backgroundColor: colors.primary,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  marginBottom: '1.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.primaryDark;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.primary;
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                🚀 Start Your Project
              </Link>

              {/* Back to Services Link */}
              <Link 
                to="/Service-page" 
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: colors.primary,
                  textDecoration: 'none',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  border: `2px solid ${colors.primary}`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.primary;
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = colors.primary;
                }}
              >
                ← All Services
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .base-container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(ServiceDetail);