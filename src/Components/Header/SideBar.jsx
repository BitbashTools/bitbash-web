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

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleContactDropdown = () => {
    setContactDropdownOpen(!isContactDropdownOpen);
  };
  const translateY = isDropdownOpen ? "translate-y-40" : "";
  const iconMapping = {
    faTwitter,
    faLinkedinIn,
    faWhatsapp,
    faTelegram,
    faMedium,
    faDiscord,
  };
  return (
    <div className="h-screen drop-shadow-xl bg-white" ref={sideBarRef}>
      <div className="flex align-middle justify-between h">
        <Link to="/">
          <img src="https://i.imgur.com/JEcpfmA.png" alt="logo" className="h-28" />
        </Link>
        <img
          ref={hamburgerRef}
          src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/closebutton.svg"
          alt="close button"
          className="mr-3"
          onClick={handleHamBurger}
        />
      </div>
      <div className="flex flex-col h-screen bg-white">
        <ul className="flex items-start flex-col justify-between px-5 gap-3 font-semibold mb-[5%]">
          <li>
            <NavLink
              to="/"
              className="mx-1 text-lg text-gray-700 hover:text-gray-900"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handleHamBurger()}
              to="/Service-page"
              className="mx-1 text-lg text-gray-700 hover:text-gray-900"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handleHamBurger()}
              to="/Products"
              className="mx-1 text-lg text-gray-700 hover:text-gray-900"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handleHamBurger()}
              to="/Work"
              className="mx-1 text-lg text-gray-700 hover:text-gray-900"
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handleHamBurger()}
              to="/Contact-us"
              className="mx-1 text-lg text-gray-700 hover:text-gray-900"
            >
              Contact-us
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="mx-1 text-lg text-gray-700 hover:text-gray-900"
            >
              Company
              {isDropdownOpen ? (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className={`inline-block h-5 w-5 ml-2 caret-icon ${
                    isDropdownOpen ? "rotate" : ""
                  }`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`inline-block h-5 w-5 ml-2 caret-icon ${
                    isDropdownOpen ? "rotate" : ""
                  }`}
                />
              )}
            </button>
            {isDropdownOpen && (
              <ul
                className={`absolute left-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-xl dropdownsidebar ${
                  isDropdownOpen ? "show" : ""
                }`}
              >
                <li onClick={toggleDropdown}>
                  <NavLink
                    onClick={() => handleHamBurger()}
                    to="/Success-Stories"
                    className="block px-4 py-2 text-lg text-gray-700 hover:text-gray-900"
                  >
                    Success Stories
                  </NavLink>
                </li>
                <li>
  <NavLink
    to="/bitbash"
    onClick={() => {
      setDropdownOpen(false);
      handleHamBurger();
    }}
    className={({ isActive }) =>
      `block py-2 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
        isActive
          ? 'bg-purple-50 text-purple-700'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`
    }
  >
    Life at BitBash
  </NavLink>
</li>
                <li onClick={toggleDropdown}>
                  <NavLink
                    onClick={() => handleHamBurger()}
                    to="/Team"
                    className="block px-4 py-2 text-lg text-gray-700 hover:text-gray-900"
                  >
                    Team
                  </NavLink>
                </li>
                <li onClick={toggleDropdown}>
                  <NavLink
                    onClick={() => handleHamBurger()}
                    to="/Testimonials"
                    className="block px-4 py-2 text-lg text-gray-700 hover:text-gray-900"
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li onClick={toggleDropdown}>
                  <NavLink
                    onClick={() => handleHamBurger()}
                    to="/Career"
                    className="block px-4 py-2 text-lg text-gray-700 hover:text-gray-900"
                  >
                    Career
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className={`px-5 ${translateY}`}>
          <div className="relative">
            <button
              onClick={toggleContactDropdown}
              className=" m-0 w-full text-white bg-indigo-600 tracking-widest border-x border-y border-indigo-600 rounded-3xl paddingbtn text-base duration-300 cursor-pointer hover:bg-white hover:border-indigo-600 hover:text-indigo-600 px-5 py-3"
            >
              Other Contacts
              {isContactDropdownOpen ? (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className={`inline-block h-5 w-5 ml-2 caret-icon ${
                    isContactDropdownOpen ? "rotate" : ""
                  }`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`inline-block h-5 w-5 ml-2 caret-icon ${
                    isContactDropdownOpen ? "rotate" : ""
                  }`}
                />
              )}
            </button>
            {isContactDropdownOpen && (
              <ul
                className={`absolute left-0 top-full mt-2 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-xl dropdownsidebar ${
                  isContactDropdownOpen ? "show" : ""
                }`}
              >
                {socialContactData.map((social, index) => (
                  <li key={index} onClick={toggleContactDropdown}>
                    <a
                      href={social.href}
                      target={social.target}
                      rel={social.rel}
                      className="flex justify-between items-center px-4 py-2 text-lg text-gray-700 hover:text-gray-900"
                    >
                      <FontAwesomeIcon
                        icon={iconMapping[social.icon]}
                        className="h-5"
                      />

                      {social.text.charAt(0).toUpperCase() +
                        social.text.slice(1)}
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