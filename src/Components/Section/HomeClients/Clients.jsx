import "./Clients.css";
import React from "react";
const Clients = () => {
  const clients = [
    {
      href: "https://www.myactuary.ai/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Acturial.svg",
      width: "10rem",
      height: "5rem",
    },
    {
      href: "https://www.askmary.ai/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/AskMary.svg",
      width: "10rem",
    },
    {
      href: "https://onnmed.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Onnmed.svg",
      width: "10rem",
    },
    {
      href: "https://www.thecenturyidea.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/thecenturyidea.svg",
      width: "10rem",
    },
    {
      href: "https://polyglotme.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/polyglotme.svg",
      width: "10rem",
    },
    {
      href: "https://www.nftwzrd.net/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/nftwzrd.svg",
      width: "6rem",
    },
        {
      href: "https://demo.cloudclmlive.com/demo/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/CloudCLM.svg",
      width: "10rem",
    },
    {
      href: "https://airproxy.io/en/",
      src: "https://i.postimg.cc/vDRrndyt/output-onlinepngtools.png",
      width: "3rem",
    },
   
       {
      href: "https://petla.app/",
      src: "https://i.postimg.cc/bJ4GdH07/output-onlinepngtools-3.png",
      width: "5rem",
    },
  ];

  return (
    <div className=" bg-gray-200 py-16 w-[100%]">
    <div className="client-container mb-5q animate__animated animate__fadeInUp ">
      <div className="text-style-h4">Our beloved client</div>
      <div className="client-logo-container animation-div">
        <div className="ticker">
          {clients.map((client) => (
            <div className="client-logo-block" key={client.href}>
              <a href={client.href} target="_blank" rel="noreferrer">
                <img
                  src={client.src}
                  alt=""
                  className="client-logo-image"
                  style={{
                    width: client.width,
                  }}
                />
              </a>
            </div>
          ))}
          {clients.map(
            (
              client
            ) => (
              <div
                className="client-logo-block"
                key={client.href + "-duplicate"}
              >
                <a href={client.href} target="_blank" rel="noreferrer">
                  <img
                    src={client.src}
                    alt=""
                    className="client-logo-image"
                    style={{
                      width: client.width,
                      height: client.height || "auto",
                    }}
                  />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default React.memo(Clients);
