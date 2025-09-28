import "./Location.css";
import React from "react";

function LocationSectionAbout() {
  return (
    <div className="location-section-about mt-16 animate__animated animate__fadeInUp">
      <div className="location-container-about">
        <div className="location-flex-container flex flex-row gap-20 items-start">
          {/* Left Side: Text Content */}
          <div className="location-left flex-1">
            <div className="overflow-hidden">
              <h3 className="location-title-about heading3">
                We are located in Pakistan
              </h3>
            </div>
            <div className="location-text-about body-01">
              Uncover the Path to Our Agency and Experience Excellence in Person.
            </div>
            <div className="location-btn-about-wrap mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Bitbash/@31.3682428,74.2608145,17z/data=!3m1!4b1!4m6!3m5!1s0x3919ab2e3a4d8ce5:0xd0226f0200043504!8m2!3d31.3682428!4d74.2633894!16s%2Fg%2F11vk3l8490?entry=ttu"
                className="location-btn-about button-02 w-button"
                style={{ backgroundColor: '#7c3aed', color: '#fff', border: 'black'  }}
              >
                Get Google Map
              </a>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="location-right">
            <iframe
              title="Google Map of Bitbash Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.047747248763!2d74.2608145!3d31.3682428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919ab2e3a4d8ce5%3A0xd0226f0200043504!2sBitbash!5e0!3m2!1sen!2s!4v1688114414147!5m2!1sen!2s"
              width="600"
              height="400"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LocationSectionAbout);
