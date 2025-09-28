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
      return <span className="text-lg text-white">{role}</span>;
    }
            
    const firstWord = words[0];
    const remainingWords = words.slice(1).join(' ');
            
    return (
      <div className="leading-tight ">
        <div className="text-xl font-bold text-black mb-1">{firstWord}</div>
        <div className="text-base font-bold text-black-300">{remainingWords}</div>
      </div>
    );
  };

 return (
  <div className={`w-screen -mx-5 px-5 ${isTeam ? 'bg-white' : 'bg-gray-200'}`}>
    <div className={`flex flex-col pt-24 box-border m-0 animate__animated animate__fadeInUp min-h-screen ${isTeam ? 'bg-white' : 'bg-gray-200'}`}>
      <div className={`py-10 w-full m-0 ${isTeam ? 'bg-white' : 'bg-gray-200'}`}>
        <div className={`max-w-7xl mx-auto overflow-x-hidden ${isTeam ? 'px-5' : 'px-2'}`}>
          {/* Only show heading and button on home page */}
          {!isTeam && (
            <div className="flex flex-row items-center justify-between w-full mb-8">
              <h1 className="my-8 font-semibold text-black text-[3.2rem]">
                Meet our Team
              </h1>
              <Allworkbutton
                src="/Team"
                buttontitlte="All team"
                classtype="black"
              />
           </div>
          )}
          
          <div className="w-[100%] gridcolumn">
            {displayedMembers.map((info, index) => {
              const uniqueId = `id-${Date.now()}-${index}`;
              return (
                <div
                  key={uniqueId}
                  className={`rounded-3xl w-[90%] mb-10 mx-auto shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white`}
                >
                  <img
                    src={info.imgsrc}
                    alt={`${info.name} Image`}
                    className="carddiv h-64 w-full rounded-t-3xl object-cover"
                  />
                  <div className="pt-4 pb-8">
                    <h2 className="text-black text-center my-3 text-[1.5rem] tracking-wider leading-10 font-semibold hover:text-purple-600 transition-colors duration-300">
                      <Link to="/" className="text-inherit no-underline">{info.name}</Link>
                    </h2>
                    <h3 className="text-black mt-[10px] mb-5 text-center text-lg font-semibold">
                      {styleRole(info.role)}
                    </h3>
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