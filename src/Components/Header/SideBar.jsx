import PropTypes from "prop-types";
import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import socialContactData from "../../data/socialContactData.json";
import {
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
  faMedium,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function SideBar({ handleHamBurger, isOpen }) {
  const sideBarRef = useRef();
  const hamburgerRef = useRef();
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        isOpen &&
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        handleHamBurger();
      }
    }
    document.addEventListener("mouseup", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  const toggleContactDropdown = () => {
    setContactDropdownOpen(!isContactDropdownOpen);
  };

  const iconMapping = {
    faTwitter,
    faLinkedinIn,
    faWhatsapp,
    faTelegram,
    faMedium,
    faDiscord,
  };

  return (
    <div className="h-screen drop-shadow-xl bg-white overflow-y-auto" ref={sideBarRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Link to="/">
          <img src="https://i.postimg.cc/RFChHwCf/bitbash.png" alt="logo" className="h-20" />
        </Link>
        <img
          ref={hamburgerRef}
          src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/closebutton.svg"
          alt="close button"
          className="w-6 h-6 cursor-pointer mr-3"
          onClick={handleHamBurger}
        />
      </div>

      <div className="flex flex-col h-full bg-white pb-4">
        {/* Main Navigation */}
        <ul className="flex items-start flex-col px-5 gap-4 font-semibold mb-8">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setTimeout(() => handleHamBurger(), 100);
              }}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Service-page"
              onClick={() => {
                setTimeout(() => handleHamBurger(), 100);
              }}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              onClick={() => {
                setTimeout(() => handleHamBurger(), 100);
              }}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Work"
              onClick={() => {
                setTimeout(() => handleHamBurger(), 100);
              }}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact-us"
              onClick={() => {
                setTimeout(() => handleHamBurger(), 100);
              }}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </NavLink>
          </li>
          
          {/* Company Dropdown - Fixed */}
          <li className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center"
            >
              Company
              <FontAwesomeIcon
                icon={isDropdownOpen ? faCaretUp : faCaretDown}
                className="inline-block h-5 w-5 ml-2 transition-transform duration-200"
              />
            </button>
            
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-64 max-w-xs shadow-xl bg-white ring-1 ring-black ring-opacity-10 rounded-xl z-50 overflow-hidden">
                <li>
                  <NavLink
                    to="/Success-Stories"
                    onClick={() => {
                      setDropdownOpen(false);
                      setTimeout(() => handleHamBurger(), 100);
                    }}
                    className="block px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 cursor-pointer"
                  >
                    Success Stories
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/bitbash"
                    onClick={() => {
                      setDropdownOpen(false);
                      setTimeout(() => handleHamBurger(), 100);
                    }}
                    className={({ isActive }) =>
                      `block py-3 px-4 text-base font-medium transition-all duration-200 border-b border-gray-100 cursor-pointer ${
                        isActive
                          ? 'bg-purple-50 text-purple-700'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`
                    }
                  >
                    Life at BitBash
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/Team"
                    onClick={() => {
                      setDropdownOpen(false);
                      setTimeout(() => handleHamBurger(), 100);
                    }}
                    className="block px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 cursor-pointer"
                  >
                    Team
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/Testimonials"
                    onClick={() => {
                      setDropdownOpen(false);
                      setTimeout(() => handleHamBurger(), 100);
                    }}
                    className="block px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 cursor-pointer"
                  >
                    Testimonials
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/Career"
                    onClick={() => {
                      setDropdownOpen(false);
                      setTimeout(() => handleHamBurger(), 100);
                    }}
                    className="block px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    Career
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Other Contacts Section */}
        <div className="px-5 ">
          <div className="relative">
            <button
              onClick={toggleContactDropdown}
              className="m-0 w-full text-white bg-purple-600 tracking-widest border border-purple-600 rounded-3xl text-base duration-300 cursor-pointer hover:bg-purple-700 hover:border-purple-600 hover:text-white px-5 py-3 flex items-center justify-between"
            >
              <span>Other Contacts</span>
              <FontAwesomeIcon
                icon={isContactDropdownOpen ? faCaretUp : faCaretDown}
                className="inline-block h-5 w-5 transition-transform duration-200"
              />
            </button>
            
            {isContactDropdownOpen && (
              <ul className="absolute left-0 bottom-full mb-2 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-xl overflow-hidden z-50">
                {socialContactData.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      target={social.target}
                      rel={social.rel}
                      onClick={toggleContactDropdown}
                      className="flex items-center gap-3 px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                    >
                      <FontAwesomeIcon
                        icon={iconMapping[social.icon]}
                        className="h-5 w-5 text-gray-500"
                      />
                      <span className="font-medium">
                        {social.text.charAt(0).toUpperCase() + social.text.slice(1)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  handleHamBurger: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default React.memo(SideBar);