import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const StarAnimation = () => {
  const starRef = useRef(null);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches  // Changed from 1440px to 1024px
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");  // Changed from 1440px to 1024px
    const handler = (e) => setMatches(e.matches);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (matches) {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.to(starRef.current, {
        duration: 5,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 1.3],
          start: 0.3,
          end: 0.4,
        },
      });
      gsap.to(starRef.current, {
        rotation: "+=360",
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "none",
        duration: 2.5,
      });
    }
  }, [matches]);

  return (
    <div
      className="starAnimation"
      style={{
        display: matches ? "block" : "none",
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: "900",
      }}
    >
      <div className="absolute">
        <svg
          style={{ position: "relative", top: 0, left: 0 }}
          width="380"
          viewBox="0 0 868 711"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1041_6"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="868"
            height="711"
          >
            <rect width="867.683" height="710.796" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1041_6)">
            <path
              id="path"
              d="M323.345 -563.532C569.376 -434.427 1095.05 -54.4989 692.391 200.138C335.994 425.52 -54.5434 301.813 -279.869 232.389C-161.567 180.063 109.067 106.808 245.19 232.389C381.314 357.97 67.3461 641.971 -106.653 768.274"
              stroke="black"
            />
          </g>
        </svg>
        <svg
          ref={starRef}
          style={{ position: "relative", top: -384, left: 20 }}
          width="50"
          height="40"
          viewBox="0 0 84 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="star"
            d="M33.1046 51.5747L0.105031 42.332L33.1046 35.9782L41.6382 0.798861L49.0606 35.9782L83.1714 42.332L49.0606 51.5747L41.6382 83.8652L33.1046 51.5747Z"
            fill="#9333ea"
          />
        </svg>
      </div>
    </div>
  );
};

export default StarAnimation;