import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
function Analytics() {
  const TRACKINGID = "G-7DEL2YFVYQ";
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKINGID);
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
export default Analytics;
