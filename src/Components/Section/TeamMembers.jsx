import { Link } from "react-router-dom";
import "./customCssResponsive.css";
import { useLocation } from "react-router-dom";
import Allworkbutton from "../AllWorkBtn/Allworkbutton.jsx";
import teamdata from "../../data/teamData.json";
import React from "react";

function TeamMembers() {
  const location = useLocation();
  const isTeam = location.pathname.includes("/Team");
  const teammembersinfo = teamdata;
    
  // Show 8 members on home page, all on team page
  const displayedMembers = isTeam ? teammembersinfo : teammembersinfo.slice(0, 8);

  // Function to split role into two lines with better styling
  const styleRole = (role) => {
    const words = role.split(' ');
    if (words.length <= 1) {
      return <span className="text-sm sm:text-base md:text-lg text-gray-600">{role}</span>;
    }
            
    const firstWord = words[0];
    const remainingWords = words.slice(1).join(' ');
            
    return (
      <div className="leading-tight">
        <div className="text-base sm:text-lg md:text-xl font-bold text-black mb-1">{firstWord}</div>
        <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600">{remainingWords}</div>
      </div>
    );
  };

  return (
    <div className={`w-full overflow-hidden ${isTeam ? 'bg-white' : 'bg-gray-200'}`}>
      <div className={`flex flex-col pt-12 sm:pt-16 md:pt-20 lg:pt-24 box-border m-0 animate__animated animate__fadeInUp min-h-screen ${isTeam ? 'bg-white' : 'bg-gray-200'}`}>
        <div className={`py-4 sm:py-6 md:py-8 lg:py-10 w-full m-0 ${isTeam ? 'bg-white' : 'bg-gray-200'}`}>
          <div className={`max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6`}>
            {/* Only show heading and button on home page */}
            {!isTeam && (
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between w-full mb-6 sm:mb-8">
                <h1 className="font-semibold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                  Meet our Team
                </h1>
                <div className="flex justify-center sm:justify-end">
                  <Allworkbutton
                    src="/Team"
                    buttontitlte="All team"
                    classtype="black"
                  />
                </div>
              </div>
            )}
          
            {/* Responsive Grid Layout - Mobile: 1 column, Tablet+: Multiple columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {displayedMembers.map((info, index) => {
                const uniqueId = `id-${Date.now()}-${index}`;
                return (
                  <div
                    key={uniqueId}
                    className="rounded-xl sm:rounded-2xl lg:rounded-3xl w-full shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 bg-white transform hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl flex-shrink-0">
                      <img
                        src={info.imgsrc}
                        alt={`${info.name} Image`}
                        className="h-64 sm:h-48 md:h-52 lg:h-56 xl:h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-4 lg:p-6 flex-1 flex flex-col justify-between">
                      <div className="flex-1">
                        <h2 className="text-black text-center my-2 sm:my-3 text-lg sm:text-lg md:text-xl lg:text-[1.3rem] xl:text-[1.5rem] tracking-wider leading-tight font-semibold hover:text-purple-600 transition-colors duration-300">
                          <Link to="/" className="text-inherit no-underline block">
                            {info.name}
                          </Link>
                        </h2>
                      </div>
                      <div className="text-center mt-2 sm:mt-3 mb-1 flex-shrink-0">
                        {styleRole(info.role)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TeamMembers);