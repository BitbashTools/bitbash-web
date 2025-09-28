import "./ProjectTags.css";
import React from "react";

const ProjectTagWrapper = ({ tags }) => {
  return (
    <div className="project-tag-wrapper">
      {tags.map((tag, index) => (
        <span key={index + Date.now()} className="category-tag w-inline-block">
          <div className="body-text-s-med">{tag}</div>
        </span>
      ))}
    </div>
  );
};

export default React.memo(ProjectTagWrapper);
