import "./workdetail.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import workdata from '../../data/workDetails.json'

const WorkDetail = () => {
    const [hoveredTag, setHoveredTag] = useState(null);

    useEffect(() => {
        window.scroll("0", "0");
    }, []);

    const { id } = useParams();
    const matchedService = workdata.find(
        (work) => work.id === parseInt(id)
    );
    
    const iconMapping = {
        phone: faPhone,
        envelope: faEnvelope,
        whatsapp: faWhatsapp,
        telegram: faTelegram,
    };

    const handleClick = (item) => {
        console.log("Tag clicked:", item);
    };

    // Helper function to check if array has valid content
    const hasValidContent = (arr) => {
        return arr && arr.length > 0 && arr.some(item => item && item.trim() !== "");
    };

    // Helper function to get fallback content
    const getFallbackContent = (primary, fallback) => {
        if (hasValidContent(primary)) return primary;
        if (hasValidContent(fallback)) return fallback;
        return [];
    };

    // Error handling for when no matching service is found
    if (!matchedService) {
        return (
            <div className="clean-work-section">
                <div className="base-container w-container">
                    <div className="text-center py-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Work Not Found</h2>
                        <p className="text-gray-600 mb-6">The work item you're looking for doesn't exist.</p>
                        <Link to="/Work" className="clean-work-back-button">
                            ← Go Back to All Works
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Get overview content with fallback to description
    const overviewContent = hasValidContent(matchedService.overview) 
        ? matchedService.overview 
        : matchedService.description 
        ? [matchedService.description]
        : [];

    return (
        <>
            <Helmet>
                <title>{matchedService.title} | BitBash</title>
                <meta name="description" content={matchedService.description || matchedService.title} />
                <link
                    rel="canonical"
                    href={`https://www.bitBash.com/Work-Details/${id}`}
                />
                <meta property="og:title" content={matchedService.title} />
                <meta
                    property="og:description"
                    content={matchedService.description || matchedService.title}
                />
                <meta
                    property="og:image"
                    content="https://www.bitbash.dev/With%20curve.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:url"
                    content={`https://www.bitBash.com/Work-Details/${id}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={matchedService.title} />
                <meta
                    name="twitter:description"
                    content={matchedService.description || matchedService.title}
                />
                <meta
                    name="twitter:image"
                    content="https://www.bitbash.dev/With%20curve.png"
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: matchedService.title,
                        description: matchedService.description || matchedService.title,
                        provider: {
                            "@type": "Organization",
                            name: "BitBash",
                            url: "https://www.bitBash.dev",
                        },
                        image: "https://www.bitbash.dev/With%20curve.png",
                        areaServed: "Worldwide",
                        availableChannel: {
                            "@type": "ServiceChannel",
                            availableLanguage: ["en"],
                            serviceUrl: `https://www.bitBash.com/Work-Details/${id}`,
                        },
                    })}
                </script>
            </Helmet>
            
            <div className="clean-work-section">
                <div className="base-container w-container">
                    <div className="service-details-content">
                        <div className="service-details-content-wrapper">
                            
                            <div className="work-tag-wrapper">
                                <span className="clean-work-tag">
                                    {matchedService.title}
                                </span>
                            </div>

                            {matchedService.pic && (
                                <img
                                    src={`.${matchedService.pic}`}
                                    alt={matchedService.title}
                                    className="clean-work-image"
                                />
                            )}

                            <div className="clean-work-content">
                                <h2 className="clean-work-title">
                                    {matchedService.title}
                                </h2>
                                
                                {/* Duration and Client Info */}
                                <div className="project-info-grid">
                                    {matchedService.duration && (
                                        <div className="info-item">
                                            <strong>Duration:</strong> {matchedService.duration}
                                        </div>
                                    )}
                                    {matchedService.client && (
                                        <div className="info-item">
                                            <strong>Client:</strong> {matchedService.client}
                                        </div>
                                    )}
                                    {matchedService.location && (
                                        <div className="info-item">
                                            <strong>Location:</strong> {matchedService.location}
                                        </div>
                                    )}
                                    {matchedService.category && (
                                        <div className="info-item">
                                            <strong>Category:</strong> {matchedService.category}
                                        </div>
                                    )}
                                </div>

                                {/* Project Overview */}
                                {overviewContent.length > 0 && (
                                    <div className="work-section">
                                        <h3 className="work-section-title">Project Overview</h3>
                                        <div className="work-description">
                                            {overviewContent.map((data, index) => (
                                                <p key={index} className="overview-paragraph">{data}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Responsibilities */}
                                {hasValidContent(matchedService.responsibilities) && (
                                    <div className="work-section">
                                        <h3 className="work-section-title">Responsibilities</h3>
                                        <div className="work-list-grid">
                                            {matchedService.responsibilities.filter(item => item && item.trim() !== "").map((data, index) => (
                                                <div
                                                    key={`${index}+${Math.random()}+${Date.now()}`}
                                                    className="work-list-item"
                                                >
                                                    <div className="work-item-number">{index + 1}</div>
                                                    <div className="work-item-text">{data}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Client Reviews/Achievements */}
                                {hasValidContent(matchedService.achievements) && (
                                    <div className="work-section">
                                        <h3 className="work-section-title">Achievements & Results</h3>
                                        <div className="work-list-grid">
                                            {matchedService.achievements.filter(item => item && item.trim() !== "" && item !== "Specific achievements were not provided").map((data, index) => (
                                                <div
                                                    key={`${index}+${Math.random()}+${Date.now()}`}
                                                    className="work-list-item review-item"
                                                >
                                                    <div className="work-item-number">★</div>
                                                    <div className="work-item-text">{data}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Skills Deployed */}
                                {hasValidContent(matchedService.skills_deployed) && (
                                    <div className="work-section">
                                        <h3 className="work-section-title">Skills & Technologies</h3>
                                        <div className="skills-grid">
                                            {matchedService.skills_deployed.filter(item => item && item.trim() !== "").map((skill, index) => (
                                                <div
                                                    key={`${index}+${Math.random()}+${Date.now()}`}
                                                    className="skill-badge"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Client Feedback */}
                                {matchedService.client_feedback && matchedService.client_feedback.trim() !== "" && matchedService.client_feedback !== "No given" && matchedService.client_feedback !== "While specific feedback was not provided by the client" && (
                                    <div className="work-section">
                                        <h3 className="work-section-title">Client Feedback</h3>
                                        <div className="client-feedback">
                                            <blockquote>"{matchedService.client_feedback}"</blockquote>
                                        </div>
                                    </div>
                                )}

                                {/* Tags */}
                                {hasValidContent(matchedService.tags) && (
                                    <div className="work-section">
                                        <h3 className="work-section-title">Project Tags</h3>
                                        <div className="tags-container">
                                            {matchedService.tags.filter(item => item && item.trim() !== "").map((item, index) => (
                                                <div
                                                    key={`${index}+${Math.random()}`}
                                                    className="work-tag-item"
                                                    onClick={() => handleClick(item)}
                                                    onMouseEnter={() => setHoveredTag(index)}
                                                    onMouseLeave={() => setHoveredTag(null)}
                                                >
                                                    {item.toUpperCase()}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className="clean-work-sidebar">
                            <div className="clean-sidebar-content">
                                <h5 className="clean-sidebar-title">Have Additional Questions?</h5>
                                <p className="clean-sidebar-subtitle">Let's discuss your project!</p>
                                
                                {matchedService.contactDetails && matchedService.contactDetails.length > 0 && (
                                    <div className="clean-contact-list">
                                        {matchedService.contactDetails.map((detail, index) => (
                                            <a
                                                key={index}
                                                href={detail.href}
                                                target={detail.target}
                                                rel={detail.rel}
                                                className="clean-contact-item"
                                            >
                                                <div className="clean-contact-icon">
                                                    <FontAwesomeIcon
                                                        icon={iconMapping[detail.icon]}
                                                    />
                                                </div>
                                                <span className="clean-contact-text">{detail.text}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                                
                                <Link to="/Contact-us" className="clean-contact-button">
                                    Contact Us
                                </Link>
                                
                                <Link to="/Work" className="clean-work-back-button" style={{ marginTop: '1rem', width: '100%' }}>
                                    ← Go Back All Works
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(WorkDetail);