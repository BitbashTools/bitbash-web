import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Allworkbutton from "../../AllWorkBtn/Allworkbutton.jsx";
import './Services.css';

const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "Navigating both front-end and back-end landscapes, our Full Stack Development services offer comprehensive solutions for your digital needs. From interactive user interfaces to robust server-side operations, we ensure every layer of your application is optimized and interconnected seamlessly.",
  },
  {
    title: "Web Development",
    description:
      "We specialize in crafting dynamic websites. Balancing design with functionality, we ensure your online presence is both visually captivating and seamlessly operational.",
  },
  {
    title: "Stealth Automation",
    description:
      "Deploy invisible automation solutions that integrate seamlessly into existing systems. Background process optimization that enhances productivity without user intervention.",
  },
  {
    title: "Web & Mobile Design",
    description:
      "Our team designs visually appealing and intuitive web and mobile interfaces. We prioritize both aesthetics and user experience, ensuring every interaction is engaging and user-friendly.",
  },
  {
    title: "Desktop Application Development",
    description:
      "We create robust software tailored for desktop use. With a focus on user experience, we ensure every application we build is both powerful and easy to navigate.",
  },
  {
    title: "Data Analysis & Testing",
    description:
      "By analyzing vast amounts of data, we uncover valuable insights for businesses. Additionally, our rigorous software testing ensures every product meets the highest standards of performance.",
  },
  {
    title: "Automation Bots Development",
    description:
      "Optimize your processes with our automation solutions. We develop bots that streamline tasks, leading to greater efficiency and improved productivity.",
  },
  {
    title: "Generative AI & Chatbots",
    description:
      "Combining the prowess of Generative AI with advanced models like GPT-4, we design chatbots that can engage in fluid conversations and generate content, enhancing user interactions and providing valuable assistance.",
  },
];

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="w-full">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          {/* Header Section with Services Grid */}
          <div className="pb-12">
            {/* Title and Button Row */}
            <div className="flex justify-between items-center py-8 mb-12 text-center lg:text-left">
              <h1 className="text-4xl font-semibold text-black">Our Services</h1>
              <Allworkbutton
                src="/Service-page"
                buttontitlte="All Service"
                classtype="black"
              />
            </div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Service Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveService(service)}
                    className={`cursor-pointer p-6 rounded-lg border-1 border-black transition-all duration-300 transform hover:scale-105
                      ${activeService.title === service.title 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white text-gray-800 hover:bg-purple-200'}`}
                  >
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                ))}
              </div>

              {/* Right Side - Service Details */}
              <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeService.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {activeService.description}
                </p>
                <Link to="/Contact-us">
                  <button className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg tracking-wide hover:bg-purple-700 transition-all">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceSection);
