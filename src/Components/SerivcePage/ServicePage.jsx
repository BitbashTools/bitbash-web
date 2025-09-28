import LoadingBar from "react-top-loading-bar";
import React, { useEffect, useRef } from "react";
import "./servicepage.css";
import { Link, useLocation } from "react-router-dom";
import serviceData from "../../data/serviceData.json";
import { Helmet } from "react-helmet-async";

function ServicePage() {
  const services = serviceData;
  const title = "Services";
  const description =
    "We provide a wide range of software development and design services to help your business succeed online.";

  const ref = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (ref.current) {
      ref.current.continuousStart();
      setTimeout(() => {
        if (ref.current) {
          ref.current.complete();
        }
      }, 1500);
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 600; // Adjust this value as needed to scroll 5 lines up
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [hash]);

  return (
    <div className="bg-white min-h-screen">
      <LoadingBar color="#6366f1" ref={ref} shadow={true} />

      <Helmet>
        <title>Bitbash | {title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`Software Development, Design,${services
            .map((service) => service.title)
            .join(", ")}`}
        />
        <link rel="canonical" href="https://www.bitbash.com/Service-page" />
      </Helmet>

      <div className="parentdiv bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => {
              return (
                <div
                  key={`${Math.random()} + ${index}`}
                  className="w-dyn-item animate__animated animate__fadeInUp"
                  id={item.id}  // Add ID for each service item
                >
                  <div className="service-list-main-item bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col">
                    <div className="services-main-link-block w-full mb-4">
                      <Link to={`/Service-Details/${item.id}`}>
                        <img
                          alt="photo"
                          src={item.image}
                          className="service-list-main-item-image w-full h-48 object-cover rounded-lg"
                        />
                      </Link>
                    </div>
                    <div className="service-list-main-item-content flex-1 flex flex-col">
                      <div className="service-list-main-title-wrapper flex items-center gap-2 mb-4">
                        <img
                          src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/starservice.svg"
                          alt="icon"
                          className="service-list-main-item-icon w-6 h-6 flex-shrink-0"
                        />
                        <h1 className="flex-1">
                          <Link
                            to={`/Service-Details/${item.id}`}
                            className="text-black text-xl hover:text-purple-600 font-bold lg:text-2xl transition-colors duration-200 line-clamp-2"
                          >
                            {item.title}
                          </Link>
                        </h1>
                      </div>
                      <p className="service-list-main-item-description text-black mb-6 leading-relaxed flex-1 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <Link
                          to={`/Service-Details/${item.id}`}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                        >
                          Learn more
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA Section */}
          <div className="cta-block-after-content bg-[#fcfcfc] py-16 px-8 text-center border border-black rounded-2xl mt-16">
            <h2 className="section-title-cta text-3xl font-bold text-black mb-8 max-w-4xl mx-auto leading-tight">
              Enhance Your Operations with Our Software Services
            </h2>
            <Link
              to="/Contact-us"
              className="primary-button bg-purple-600 text-white px-8 py-4 rounded-3xl hover:bg-purple-700 hover:text-white transition-all duration-200 inline-block animate__animated animate__fadeInUp"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ServicePage);