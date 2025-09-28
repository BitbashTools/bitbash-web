import Clients from "./HomeClients/Clients";
import SuccessStories from "../SuccessStories/SuccessStories";
import ServiceGrid from "./HomeServiceComponent/Service";
import BlogSection from "./HomeSection/Cards";
import React from "react";

function Section() {
  return (
    <div className="w-full"> 
     
          <Clients />
      
      
      {/* Success Stories Section */}
        <SuccessStories />
     
      
      {/* Service Grid Section */}
      
        
         <ServiceGrid />
       
         
       
      
      {/* Blog Section */}
      <section className="w-full bg-white">
        <BlogSection />
      </section>
    </div>
  );
}

export default React.memo(Section);