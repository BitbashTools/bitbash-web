import "./HomeBar.css";
import Heading from "./Heading";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./threeimgs.css";
import "./heroimganimation.css"; 

function BannerHome() {
  const texts = ["Full Stack ", "Dev ops", "Django", "React", "HR", "Sales"];
  const images = [
    "https://i.imgur.com/mLYbu58.jpg",
    "https://i.postimg.cc/rscxH8C3/zegham.png",
    "https://i.imgur.com/WmivWoI.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (texts.length / 2));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <main>
        <section className="banner-home bg-white">
          <article className="banner-content-container">
            <div className="two-column-wrapper-banner">
              <aside className="column-two-banner ml-7">
                <div className="bg-white text-black border border-solid border-black rounded-[30px] py-2 px-8 2xl:mt-0 animate__animated animate__fadeInUp font-medium">
                  Welcome to Bit-Bash!
                </div>
                <Heading />
                <figure className="hero-text-wrap animate__animated animate__fadeInUp">
                  <div className="hero-text-images ">
                    <img
                      style={{
                        objectFit: "cover",
                        border: "4px solid #E5E6E1",
                        borderRadius: "50%",
                        objectPosition: "100% 10%",
                      }}
                      src="https://i.imgur.com/pr3jTKv.jpg"
                      alt=""
                      className="hero-text-img "
                      sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 43vw, (max-width: 1919px) 535px, 635px"
                    />
                    <img
                      style={{
                        borderRadius: "50%",
                        border: "4px solid #E5E6E1",
                      }}
                      src="https://i.imgur.com/b7BIgZh.jpg "
                      alt=""
                      sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 43vw, (max-width: 1919px) 535px, 635px"
                      className="hero-text-img hero-text-img-child2"
                    />
                    <img
                      style={{
                        borderRadius: "50%",
                        border: "4px solid #E5E6E1",
                      }}
                      src="https://i.postimg.cc/k572Lgwb/Umar-Farooq-20250822-052844-1.jpg"
                      alt=""
                      sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 43vw, (max-width: 1919px) 535px, 635px"
                      className="hero-text-img hero-text-img-child3"
                    />
                  </div>
                  <figcaption className="overflow-hidden ">
                    <p className="hero-text body-01 w-[100%]">
                     At Bitbash, we turn bold ideas into reliable software — built with care by a team that delivers.
                    </p>
                  </figcaption>
                </figure>
                <nav className="hero-button-wrap">
                  <div className="overflow-hidden mt-9">
                    <div
                      href="#"
                      className="hero-button black-bg w-inline-block"
                    >
                      <div className="hero-button-text button-01 white-text animate__animated animate__fadeInUp">
                        
                        <a 
                          href="https://calendar.app.google/GyobA324GxBqe6en6" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white"
                        >
                          Schedule a Meeting
                        </a>

                      </div>
                       <a 
                          href="https://calendar.app.google/GyobA324GxBqe6en6" 
                          target="_blank" 
                        >
                      <img
                        src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/phoneimg.svg"
                        alt=""
                        className="hero-button-icon"
                      />
                      </a>
                    </div>
                  </div>
                </nav>
              </aside>
              <section className="column-one-banner animate__animated animate__fadeIn">
                <div className="banner-block-image-wrapper">
                  <img
                    className="banner-block-image image-transition"
                    src={images[currentIndex % images.length]}
                    alt="Photo"
                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 43vw, (max-width: 1919px) 535px, 635px"
                  />
                  <img
                    src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/herosection.svg"
                    alt="icon"
                    className="image-banner-bg"
                  />
                  <div className="banner-tag one !bg-purple-600 !text-white  font-medium">{texts[currentIndex]}</div>
                  <div className="banner-tag two !bg-purple-600 !text-white  font-medium">
                    {texts[(currentIndex + 1) % texts.length]}
                  </div>
                </div>
              </section>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default React.memo(BannerHome);