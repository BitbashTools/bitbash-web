import React from "react";
function BannerHome() {
  const clients = [
    {
      href: "https://www.myactuary.ai/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Acturial.svg",
      name: "Acturial",
      width: "10rem",
    },
    {
      href: "https://www.askmary.ai/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/AskMary.svg",
      name: "AskMary",
      width: "10rem",
    },
    {
      href: "https://onnmed.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Onnmed.svg",
      name: "Onnmed",
      width: "10rem",
    },
    {
      href: "https://www.thecenturyidea.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/thecenturyidea.svg",
      name: "TheCenturyIdea",
      width: "10rem",
    },
    {
      href: "https://polyglotme.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/polyglotme.svg",
      name: "PolyglotMe",
      width: "10rem",
    },
    {
      href: "https://www.nftwzrd.net/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/nftwzrd.svg",
      name: "NFTWzrd",
      width: "6rem",
    },
    {
      href: "https://demo.cloudclmlive.com/demo/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/CloudCLM.svg",
      name: "CloudCLM",
      width: "10rem",
    },
    {
      href: "https://airproxy.io/en/",
      src: "https://i.postimg.cc/vDRrndyt/output-onlinepngtools.png",
      name: "AirProxy",
      width: "3rem",
    },
    {
      href: "https://petla.app/",
      src: "https://i.postimg.cc/bJ4GdH07/output-onlinepngtools-3.png",
      name: "Petla",
      width: "5rem",
    },
  ];

  const projectImages = [
    "./chatbot.png",
    "./Genrative AI 1.jpg",
    "./Automation boat development.png",
    "./Data gathering 2.jpg",
    "./Backend.jpg",
  ];

  return (
    <>
      <style>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-down {
          animation: scrollDown 20s linear infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }

        .project-grid-container {
          height: 600px;
          overflow: hidden;
          position: relative;
        }

        .project-grid-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .client-scroll-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .client-scroll-wrapper {
          display: flex;
          gap: 2rem;
          width: fit-content;
        }
      `}</style>

      <section className="relative bg-white text-gray-900 overflow-hidden pt-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pt-12 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-0">
            <div className="space-y-8 z-10 mt-0">   
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black mt-0">
                Transform your idea into software
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl pt-4">
                We are a dynamic software development company committed to building intelligent systems that create scalable impact.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-1 border-2 border-black rounded-full text-gray-800 font-semibold transition-all duration-300 cursor-pointer">
                  AI & ML Solutions
                </div>
                <div className="px-4 py-1 border-2 border-black rounded-full text-gray-800 font-semibold transition-all duration-300 cursor-pointer">
                  Modern App Platforms
                </div>
                <div className="px-4 py-1 border-2 border-black rounded-full text-gray-800 font-semibold transition-all duration-300 cursor-pointer">
                  Full-Stack Engineering
                </div>
              </div>

<div>
  <a 
    href="https://calendar.app.google/GyobA324GxBqe6en6" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-purple-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-purple-700 transition-colors duration-300 w-auto"
  >
    Schedule a Meeting
  </a>
</div>
            </div>

            <div className="relative hidden lg:block">
              <div className="project-grid-container rounded-3xl overflow-hidden">
                <div className="project-grid-wrapper animate-scroll-down">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[0]}
                        alt="Project 1"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[1]}
                        alt="Project 2"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[2]}
                        alt="Project 3"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[3]}
                        alt="Project 4"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[0]}
                        alt="Project 1"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[1]}
                        alt="Project 2"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[2]}
                        alt="Project 3"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <img 
                        src={projectImages[3]}
                        alt="Project 4"
                        className="w-full h-56 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div className="relative w-full bg-white/50 backdrop-blur-sm border-t border-gray-200/50 py-12">
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <h2 className="text-xl font-semibold text-left text-gray-800">
              Partnered with Trusted Brands
            </h2>
          </div>
          
          <div className="client-scroll-container">
            <div className="client-scroll-wrapper animate-scroll-left">
              {clients.map((client, index) => (
                <a 
                  key={index}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white rounded-xl p-4 shadow-md hover:shadow-xl"
                >
                  <img 
                    src={client.src} 
                    alt={client.name}
                    className="h-12 w-auto object-contain"
                    style={{ width: client.width }}
                  />
                </a>
              ))}
              {clients.map((client, index) => (
                <a 
                  key={`dup-${index}`}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white rounded-xl p-4 shadow-md hover:shadow-xl"
                >
                  <img 
                    src={client.src} 
                    alt={client.name}
                    className="h-12 w-auto object-contain"
                    style={{ width: client.width }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerHome;