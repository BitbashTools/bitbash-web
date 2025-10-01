import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Work.css";
import "animate.css";
import workCardData from '../../data/workCardData.json'
import LoadingBar from 'react-top-loading-bar';

const BlogPost = ({ imageSrc, title, tags, id }) => {
  return (
    <div className="blog-item-wrapper bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col relative">
      <div className="blog-image-wrapper w-full mb-4">
        <Link to={`/Work-Details/${id}`}>
          <img 
            src={imageSrc} 
            className="blog-image w-full h-48 object-cover rounded-lg animate__slideInUp" 
            alt={title || "Project Image"}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Image+Not+Available';
            }}
            style={{ minHeight: '192px', backgroundColor: '#f3f4f6' }}
          />
        </Link>
      </div>
      
      {/* Tags section */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {tags && tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-white text-black text-xs font-semibold px-3 py-1 rounded-full  transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="w-full animate__slideInUp text-3xl mb-4 flex-1">
          <Link to={`/Work-Details/${id}`} className="blog-title text-black hover:text-purple-600 transition-colors duration-200 line-clamp-2">
            {title || 'Untitled Project'}
          </Link>
        </div>
        
        {/* See Details button */}
        <div className="mt-auto">
          <Link to={`/Work-Details/${id}`} className="block w-full">
            <button className="w-full bg-purple-600 text-white mt-3 py-3 px-8 rounded-lg text-base font-medium duration-300 cursor-pointer hover:bg-purple-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
              See Details
            </button>
          </Link>
        </div>
      </div>
      
      <Link
        to={`/Work-Details/${id}`}
        className="blog-arrow-button bg-purple-500 absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity duration-200"
      >
        <img
          src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/arrow.svg"
          loading="lazy"
          width="18"
          alt="icon"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </Link>
    </div>
  );
};

BlogPost.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

function Work() {
  const [selectedTag, setSelectedTag] = useState(
    sessionStorage.getItem("selectedTag") || "All"
  );

  useEffect(() => {
    const storedTag = sessionStorage.getItem("selectedTag");
    if (storedTag) {
      window.scrollTo(0, 0);
      setSelectedTag(storedTag);
    } else {
      setSelectedTag("All");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedTag", selectedTag);
  }, [selectedTag]);

  const handleClick = (tag) => {
    setSelectedTag(tag);
  };
  
  const isTagSelected = (tag) => {
    return tag === selectedTag;
  };
  
  const tags = [
    'All', 
    'Python',
    'Data Scraping',
    'Full Stack Development',
    'Bot Development',
    'Machine Learning',
    'Automation',
    'Web Development',
    'Data Engineering',
    'Mobile App Development',
    'Back-End Development'
  ];
    
  const blogPostData = workCardData || [];
  const filteredBlogPosts =
    selectedTag === "All"
      ? blogPostData
      : blogPostData.filter((post) =>
        post.tags && post.tags.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
        )
      );

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
    <div className="bg-white min-h-screen">
      <LoadingBar color="#7c3aed" ref={ref} shadow={true} />
      
      

      <div className="parentdiv bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tags */}
          <div className="flex gap-3 flex-wrap mb-10 animate__animated animate__fadeInUp justify-center">
            {tags.map((item, index) => {
              return (
                <button
                  key={`${index}+${item}`}
                  className={`text-sm cursor-pointer px-4 py-2 rounded-full font-normal transition-colors duration-200 border ${
                    isTagSelected(item) 
                      ? "bg-black text-white border-black" 
                      : "bg-white text-black border-gray-300 hover:bg-white hover:border-gray-300"
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          
          {/* Project grid */}
          <div className="animate__animated animate__fadeInUp">
            {filteredBlogPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogPosts.map((data, index) => {
                  return (
                    <BlogPost
                      key={`${data.id}-${index}`}
                      imageSrc={data.imageSrc}
                      title={data.title}
                      tags={data.tags}
                      id={data.id}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No projects found for the selected tag.</p>
                <button 
                  onClick={() => handleClick('All')}
                  className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Work);