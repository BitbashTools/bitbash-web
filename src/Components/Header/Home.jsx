import BannerHome from "./HomeBar";
import Section from "../Section/Section";
import LoadingBar from "react-top-loading-bar";
import { Helmet } from "react-helmet-async";
import React, { useEffect, useRef } from "react";

function Home() {
  const ref = useRef(null);
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

  return (
    <>
      <div className="bg-white min-h-screen w-full overflow-x-hidden">
        <LoadingBar color="#4F46E5" ref={ref} shadow={true} height={2} />
        <Helmet>
          <title>BitBash | Leading Digital Solutions</title>
          <meta
            name="description"
            content="Explore BitBash's premier digital solutions. We specialize in software development, design services, and more. Join hands with the best in the industry."
          />
          <meta
            name="keywords"
            content="digital solutions, software development, design services, BitBash, leading tech company, tech solutions"
          />
          <meta
            property="og:title"
            content="BitBash | Leading Digital Solutions"
          />
          <meta
            property="og:description"
            content="Explore BitBash's premier digital solutions. We specialize in software development, design services, and more. Join hands with the best in the industry."
          />
          <meta
            property="og:image"
            content="https://www.bitbash.dev/With%20curve.png"
          />
          <meta property="og:url" content="https://www.bitbash.dev/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="BitBash | Leading Digital Solutions"
          />
          <meta
            name="twitter:description"
            content="Explore BitBash's premier digital solutions. We specialize in software development, design services, and more. Join hands with the best in the industry."
          />
          <meta
            name="twitter:image"
            content="https://www.bitbash.dev/With%20curve.png"
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "BitBash | Leading Digital Solutions",
              description:
                "Explore BitBash's premier digital solutions. We specialize in software development, design services, and more. Join hands with the best in the industry.",
              url: "https://www.bitbash.dev/",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@type": "WebSite",
                      url: "https://www.bitbash.dev/",
                      name: "Home",
                    },
                  },
                ],
              },
            })}
          </script>
        </Helmet>
        
        {/* Main content wrapper */}
        <main className="w-full overflow-x-hidden">
          {/* Banner Section */}
          <section className="w-full overflow-y-hidden">
            <BannerHome />
          </section>
          
          {/* All other sections */}
          <section className="w-full overflow-x-hidden">
            <Section />
          </section>
        </main>
      </div>
    </>
  );
}

export default React.memo(Home);