import { useState, useEffect } from "react";
import "./navbar.css";
import SideBar from "../Header/SideBar";
import { Link, NavLink, useLocation } from "react-router-dom";
import StarAnimation from "../Header/StarTopAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
  faMedium,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import socialContactData from "../../data/socialContactData.json";
import serviceData from '../../data/serviceDetailData.json'
import workdetails from '../../data/workDetails.json'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [backgroundSize, setBackgroundSize] = useState(getBackgroundSize());
  const navigate = useNavigate()
  const location = useLocation();

  const isBlogsPage = location.pathname.includes("/Blogs");
  const isTeamPage = location.pathname.includes("/Team");
  const testimonialPage = location.pathname.includes("/Testimonials");
  const isContactUsPage = location.pathname.includes("/Contact-us");
  const isServicePage = location.pathname.includes("/Service-page");
  const isCareerPage = location.pathname.includes("/Career");
  const isWorkPage = location.pathname.includes("/Work");
  const isProductsPage = location.pathname.includes("/Products");
  const isSuccessStoriesPage = location.pathname.includes("/Success-Stories");
  const isServiceDetailPage = location.pathname.includes(`/Service-Details/`);
  const isWorkDetailPage = location.pathname.includes(`/Work-Details/`);
  const isLifeAtBitbashPage = location.pathname.includes("/bitbash");

  const pageId = isServiceDetailPage || isWorkDetailPage
    ? location.pathname.split('/').pop()
    : null;

  // Click outside handler for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.company-dropdown-wrapper') && !event.target.closest('.dropdown-content')) {
        setIsCompanyDropdownOpen(false);
      }
      if (!event.target.closest('.contact-dropdown-container')) {
        setIsContactUsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isTeamPage || isCareerPage || testimonialPage || isSuccessStoriesPage || isLifeAtBitbashPage) {
      setIsCompanyDropdownOpen(false);
      setIsContactUsOpen(false);
    }
  }, [location.pathname]);

  const getDynamicHeading = () => {
    if (isServiceDetailPage) {
      const serviceDetail = serviceData.find(item => item.id.toString() === pageId);
      return serviceDetail ? serviceDetail.heading : '';
    } else if (isWorkDetailPage) {
      const workDetail = workdetails.find(item => item.id.toString() === pageId);
      return workDetail ? workDetail.heading : '';
    }
    return '';
  };

  const dynamicHeading = getDynamicHeading();

  const pageHeadings = {
    "/Contact-us": "Contact Us",
    "/Testimonials": "Reviews of Our Services",
    "/Service-page": "Services",
    "/Career": "Join Us",
    "/Work": "Work",
    "/Products": "Our Products",
    "/Success-Stories": "Our Success Stories",
    "/Team": "Our Team",
    "/bitbash": "Life at BitBash"
  };
  
  const currentPage = location.pathname;
  const heading = dynamicHeading || pageHeadings[currentPage] || '';

  const isSpecialPage = isTeamPage || isCareerPage || testimonialPage || isProductsPage || isSuccessStoriesPage || isLifeAtBitbashPage;

  function getBackgroundSize() {
    const screenWidth = window.innerWidth;
    const mediumScreen = 768;
    const largeScreen = 1024;
    if (screenWidth < mediumScreen) {
      return "auto, auto 70%, auto 70%";
    } else if (screenWidth >= mediumScreen && screenWidth < largeScreen) {
      return "auto, auto 80%, auto 80%";
    } else {
      return "auto, auto 90%, auto 90%";
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setBackgroundSize(getBackgroundSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // Single consistent hero background image
  const heroImage = "https://i.postimg.cc/RFChHwCf/bitbash.png";

  const pageStyles = {
    teamPageBgStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    testimonialPageStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    successStoriesPageStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    JoinUsPageStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    ContactUsStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    servicepagestyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    productsPageStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    serivceDetailsStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    workStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
    lifeAtBitbashStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      imageRendering: "-webkit-optimize-contrast"
    },
  };

  useEffect(() => {
    const specialPages = ["Team", "Career", "Testimonials", "Products", "Success-Stories", "bitbash"];
    if (specialPages.some((page) => location.pathname.includes(`/${page}`))) {
      setIsCompanyDropdownOpen(false);
      setIsContactUsOpen(false);
    }
  }, [location.pathname]);

  const handleHamBurger = () => {
    setIsOpen(!isOpen);
  };

  function getBackgroundStyle() {
    if (isBlogsPage) return pageStyles.blogPageBgStyle;
    if (isTeamPage) return pageStyles.teamPageBgStyle;
    if (testimonialPage) return pageStyles.testimonialPageStyle;
    if (isSuccessStoriesPage) return pageStyles.successStoriesPageStyle;
    if (isContactUsPage) return pageStyles.ContactUsStyle;
    if (isServicePage) return pageStyles.servicepagestyle;
    if (isProductsPage) return pageStyles.productsPageStyle;
    if (isCareerPage) return pageStyles.JoinUsPageStyle;
    if (isLifeAtBitbashPage) return pageStyles.lifeAtBitbashStyle;
    if (location.pathname.startsWith('/Service-Details')) return pageStyles.serivceDetailsStyle;
    if (isWorkPage) return pageStyles.workStyle;
    return {};
  }

  const iconMapping = {
    faTwitter,
    faLinkedinIn,
    faWhatsapp,
    faTelegram,
    faMedium,
    faDiscord,
  };

  // Check if this is a special page that needs hero section
  const isHeroPage = isBlogsPage || isTeamPage || testimonialPage || isContactUsPage || isServicePage || isProductsPage || isCareerPage || isSuccessStoriesPage || isWorkPage || isWorkDetailPage || isServiceDetailPage || isLifeAtBitbashPage;

  return (
    <>
      {/* Modern Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="https://i.postimg.cc/qqMTC2PW/untitled-0.jpg"
                  alt="BitBash Logo"
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-6 flex items-center space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black border-b-2 border-purple-600"
                        : "text-black hover:text-purple-700"
                    } px-3 py-3 text-base font-medium transition-all duration-200 border-b-2 border-transparent hover:border-purple-600`
                  }
                >
                  Home
                </NavLink>

                {/* Services Dropdown */}
                <div className="relative group">
                  <NavLink
                    to="/Service-page"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black border-b-2 border-purple-600"
                          : "text-black hover:text-purple-700"
                      } px-3 py-3 text-base font-medium transition-all duration-200 border-b-2 border-transparent hover:border-purple-600 flex items-center`
                    }
                  >
                    Services
                  </NavLink>
                </div>

                {/* Products Dropdown */}
                <div className="relative group">
                  <NavLink
                    to="/Products"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-black border-b-2 border-purple-600"
                          : "text-black hover:text-purple-700"
                      } px-3 py-3 text-base font-medium transition-all duration-200 border-b-2 border-transparent hover:border-purple-600 flex items-center`
                    }
                  >
                    Products
                  </NavLink>
                </div>

                <NavLink
                  to="/Work"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black border-b-2 border-purple-600"
                        : "text-black hover:text-purple-700"
                    } px-3 py-3 text-base font-medium transition-all duration-200 border-b-2 border-transparent hover:border-purple-600`
                  }
                >
                  Work
                </NavLink>

                <NavLink
                  to="/Contact-us"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black border-b-2 border-purple-600"
                        : "text-black hover:text-purple-700"
                    } px-3 py-3 text-base font-medium transition-all duration-200 border-b-2 border-transparent hover:border-purple-600`
                  }
                >
                  Contact Us
                </NavLink>

                {/* Company Dropdown - moved to end */}
                <div
                  className="relative company-dropdown-wrapper group"
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                >
                  <button className="text-black hover:text-purple-600 px-3 py-3 text-base font-medium transition-all duration-200 border-b-2 border-transparent hover:border-purple-600 flex items-center">
                    Company
                    <FontAwesomeIcon 
                      icon={isCompanyDropdownOpen ? faCaretUp : faCaretDown} 
                      className="ml-2 text-xs transition-transform duration-200" 
                    />
                  </button>
                  
                  {/* Company Dropdown Menu */}
                  {isCompanyDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        <Link
                          to="/Success-Stories"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsCompanyDropdownOpen(false)}
                        >
                          Our Success Stories
                        </Link>
                        <Link
                          to="/Testimonials"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsCompanyDropdownOpen(false)}
                        >
                          Testimonials
                        </Link>
                        <Link
                          to="/Team"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsCompanyDropdownOpen(false)}
                        >
                          Team
                        </Link>
                        <Link
                          to="/bitbash"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsCompanyDropdownOpen(false)}
                        >
                          Life at BitBash
                        </Link>
                        <Link
                          to="/Career"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsCompanyDropdownOpen(false)}
                        >
                          Career
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button & Contact Dropdown */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Contact Dropdown */}
              <div
                className="contact-dropdown-container relative"
                onMouseEnter={() => setIsContactUsOpen(true)}
                onMouseLeave={() => setIsContactUsOpen(false)}
              >
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-200 flex items-center">
                  Other Contacts
                  <FontAwesomeIcon
                    icon={isContactUsOpen ? faCaretUp : faCaretDown}
                    className="ml-2 text-sm"
                  />
                </button>
                
                {/* Contact Dropdown Menu */}
                {isContactUsOpen && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <a
                        href="https://twitter.com/bitbash_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 mr-3" />
                        Twitter
                      </a>
                      <a
                        href="https://linkedin.com/company/bitbash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 mr-3" />
                        LinkedIn
                      </a>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-3" />
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/bitbash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faTelegram} className="w-4 h-4 mr-3" />
                        Telegram
                      </a>
                      <a
                        href="https://medium.com/@bitbash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faMedium} className="w-4 h-4 mr-3" />
                        Medium
                      </a>
                      <a
                        href="https://discord.gg/bitbash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 mr-3" />
                        Discord
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={handleHamBurger}
                className="text-gray-700 hover:text-purple-600 p-2 rounded-md transition-colors duration-200"
              >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <SideBar handleHamBurger={handleHamBurger} isOpen={isOpen} />
        </div>
      </nav>

      {/* Enhanced Hero Section - Only show for special pages with proper spacing */}
      {isHeroPage && (
        <>
          <div
            className="relative pt-24 h-[36rem] flex items-center justify-center rounded-b-[2rem] overflow-hidden"
            style={{
              ...getBackgroundStyle(),
              position: 'relative',
              willChange: 'transform'
            }}
          >
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
            
            {/* Content container with better positioning */}
            <div className="relative z-10 text-center w-full px-4 max-w-5xl mx-auto">
              {heading && (
                <div className="mb-8">
                  <h1 
                    className="font-bold mx-auto text-center text-white drop-shadow-2xl"
                    style={{
                      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                      lineHeight: '1.1',
                      maxWidth: '100%',
                      textShadow: '3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)',
                      fontWeight: '800',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {heading}
                  </h1>
                  
                  {/* Decorative line */}
                  <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full shadow-lg"></div>
                </div>
              )}
              
              {/* Enhanced page descriptions with better styling */}
              <div className="max-w-3xl mx-auto">
                {isServicePage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    We believe in a collaborative approach, working closely with our clients to understand their goals and target audience.
                  </p>
                )}
                {isProductsPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Discover our innovative solutions designed to streamline your business operations and enhance productivity.
                  </p>
                )}
                {isSuccessStoriesPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Explore our portfolio of transformative projects and client success stories across industries.
                  </p>
                )}
                {isWorkPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Discover our diverse portfolio of innovative projects, from cutting-edge software solutions to transformative digital experiences.
                  </p>
                )}
                {isContactUsPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Ready to transform your business? Get in touch with our team of experts and let's discuss your project requirements.
                  </p>
                )}
                {isTeamPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Meet our talented team of developers, designers, and strategists dedicated to bringing your vision to life.
                  </p>
                )}
                {testimonialPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Hear what our clients say about their experience working with us and the results we've achieved together.
                  </p>
                )}
                {isCareerPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Join our dynamic team and help us build the future of technology. Explore exciting career opportunities with us.
                  </p>
                )}
                {isLifeAtBitbashPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Discover our vibrant culture, cutting-edge systems, and the amazing people who make BitBash extraordinary.
                  </p>
                )}
                {isServiceDetailPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Learn more about our specialized services and how we can help transform your business with cutting-edge solutions.
                  </p>
                )}
                {isWorkDetailPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Dive deep into our project showcase and discover the innovative solutions we've delivered for our clients.
                  </p>
                )}
                {isBlogsPage && (
                  <p className="text-center text-white text-xl leading-relaxed font-light" 
                     style={{
                       textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                       fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
                     }}>
                    Stay updated with the latest insights, trends, and expert perspectives from our team of technology professionals.
                  </p>
                )}
              </div>

              {/* Call-to-action button for hero sections */}
              <div className="mt-10">
                
              </div>
            </div>
          </div>
          {/* Spacer to prevent content overlap */}
          <div className="h-16"></div>
        </>
      )}

      {/* StarAnimation for non-hero pages with proper spacing */}
      {!isHeroPage && (
        <div className="pt-24 pb-12">
          <StarAnimation />
        </div>
      )}
    </>
  );
}

export default Navbar;