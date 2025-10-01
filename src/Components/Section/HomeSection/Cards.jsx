import PropTypes from "prop-types";
import "./Cards.css";
import ProjectTagWrapper from "../ProjectTags";
import TeamMembers from "../TeamMembers";
import Allworkbutton from "../../AllWorkBtn/Allworkbutton.jsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import testimonialData from "../../../data/testimonial.json";
import TestimonialsSection from "../../Testimonials/Testimonial";
import workData from "../../../data/workCardData.json";

const BlogSection = () => {
  // Set Python as default selected tag (highlighted)
  const [selectedTag, setSelectedTag] = useState("Python");

  const tags = [
    "All",
    "Python",
    "Data Scraping",
    "Node.js",
    "Full Stack Development",
    "Bot Development",
    "Machine Learning",
    "Automation",
    "Web Development",
    "Data Engineering",
  ].sort((a, b) => a.length - b.length);

  const filterBlogPosts = () => {
    if (selectedTag === "All") return workData;
    return workData.filter(
      (post) =>
        post.tags && post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
    );
  };
  const blogPostData = filterBlogPosts();

  const testimonials = testimonialData;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white w-full">
        <div className="mainsectiom-base-container mainsectiom-w-container">
          <div className="flex pb-20 py-16 justify-between w-[100%] flex-col text-center gap-5 lg:flex-row ">
            <h1 className="text-5xl font-semibold text-black">Portfolio</h1>
            <Allworkbutton 
              src="/Work" 
              buttontitlte="All Works" 
              className="bg-purple-600 text-white hover:bg-purple-700"
            />
          </div>

          {/* Fixed: Removed two-column-wrapper and reduced spacing */}
          <div className="w-full">
            {/* Enhanced TAGS ROW - Minimal bottom margin */}
            <div className="tags-container mb-2">
              {tags.map((tag, index) => (
                <button
                  key={`${tag}-${index}`}
                  className={`tag-button ${tag === selectedTag ? 'selected' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Portfolio Cards Section */}
            <div className="collection-list-wrapper-blog w-dyn-list">
              <div role="list" className="collection-list-blog w-dyn-items mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPostData.length > 0 ? (
                  blogPostData.map((data) => (
                    <BlogPost
                      key={data.id}
                      imageSrc={data.imageSrc}
                      title={data.title}
                      url={data.url}
                      id={data.id}
                      tag={data.tags.slice(0, 3)}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center text-black py-8">
                    <p className="text-xl">
                      No projects found for "{selectedTag}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
    <TeamMembers />
          <div className="mt-2">
            <TestimonialsSection testimonials={testimonials.slice(0, 3)} />
          </div>
          <div className="mt-2 mb-16">
            <CallToAction
              title="Do You Have A Question? Have An Idea Or Project And Want To Get A Quote? Want To Learn More About Our Services?"
              buttonText="Get In Touch"
              buttonUrl="/Contact-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ imageSrc, title, tag, id }) => {
  return (
    <div className="blog-item-wrapper bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      {/* Image Section */}
      <div className="blog-image-wrapper overflow-hidden">
        <Link to={`/Work-Details/${id}`}>
          <img 
            src={imageSrc} 
            className="blog-image w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
            alt={title} 
          />
        </Link>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Enhanced Tags Section */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tag.slice(0, 3).map((tagItem, index) => (
              <span
                key={index}
                className="inline-block bg-white text-black text-xs font-semibold px-3 py-1 rounded-full  transition-all duration-200"
              >
                {tagItem}
              </span>
            ))}
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-4 flex-grow">
          <Link to={`/Work-Details/${id}`}>
            <h3 className="blog-title text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200 line-clamp-2 leading-tight">
              {title}
            </h3>
          </Link>
        </div>
        
        {/* Action Section - Always at bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <Link 
              to={`/Work-Details/${id}`}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              See Details
            </Link>
            <Link to={`/Work-Details/${id}`} className="blog-arrow-button p-2 rounded-full bg-purple-500 transition-colors duration-200">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-black  transition-colors duration-200"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.array,
};

const CallToAction = ({ title, buttonText, buttonUrl }) => {
  return (
    
    <div className="cta-block-after-content bg-[#fcfcfc] py-16 px-8 text-center border border-black rounded-2xl mt-16">
      <h2 className="section-title-cta text-3xl font-bold text-black mb-8 max-w-4xl mx-auto leading-tight">{title}</h2>
      <Link 
        to={buttonUrl} 
        className="primary-button !bg-purple-600 !text-white px-8 py-4 rounded-full !hover:text-white !hover:bg-purple-700 transition-all duration-200 inline-block shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
      >
        {buttonText}
      </Link>
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default React.memo(BlogSection);