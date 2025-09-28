import React, { useState, useEffect, useRef } from "react";
import "./aboutsection.css";
import { scroller } from "react-scroll";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import LoadingBar from "react-top-loading-bar";

function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [visibleSection, setVisibleSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    company: "",
    techStack: "",
    message: "",
  });
  const [agreedToNDA, setAgreedToNDA] = useState(false);
  const ref = useRef(null);

  // Trigger section visibility after component mounts
  useEffect(() => {
    setTimeout(() => setVisibleSection(true), 300);
  }, []);

  const showToastMessage = (message, statusCode) => {
    if (statusCode > 199 && statusCode < 299) {
      toast.success(`${message}`, { position: "top-center", autoClose: 5000, theme: "colored" });
    } else if (statusCode === 400) {
      toast.warn(`${message}`, { position: "top-center", autoClose: 5000, theme: "colored" });
    } else {
      toast.error(`${message}`, { position: "top-center", autoClose: 5000, theme: "colored" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    ref.current?.continuousStart();

    if (!formData.name || !formData.email || !formData.contactNumber || !formData.message) {
      showToastMessage("Please fill in all required fields", 400);
      setIsSubmitting(false);
      ref.current?.complete();
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      showToastMessage("Please enter a valid email address", 400);
      setIsSubmitting(false);
      ref.current?.complete();
      return;
    }

    const serviceId = "service_u9qydf4";
    const templateId = "template_cptcu7y";
    const userId = "xtKsD3oVw0Av9s9w-";

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          contactNumber: formData.contactNumber,
          company: formData.company,
          techStack: formData.techStack,
          message: formData.message,
        },
        userId
      );

      if (response.status > 199 && response.status < 300) {
        showToastMessage("Email sent successfully", response.status);
      } else {
        showToastMessage("Failed to send email", response.status);
      }

      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        company: "",
        techStack: "",
        message: "",
      });
      setAgreedToNDA(false);
    } catch (error) {
      showToastMessage("Failed to send email", 500);
    } finally {
      ref.current?.complete();
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setAgreedToNDA(checked);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const scrollToContact = () => {
    scroller.scrollTo("Contact-us", { duration: 1500, smooth: true });
  };

  const contentData = {
    title: "Transforming Ideas Into Digital Reality",
    subtitle: "Your Digital Success Partner",
    highlights: [
      {
        icon: "🚀",
        title: "Innovation-Driven",
        description: "Cutting-edge technology solutions that propel your business forward"
      },
      {
        icon: "⚡",
        title: "Lightning Fast",
        description: "Rapid development and deployment to get you to market quickly"
      },
      {
        icon: "🎯",
        title: "Strategic Thinking",
        description: "Data-driven decisions that align with your business objectives"
      },
      {
        icon: "💡",
        title: "Creative Solutions",
        description: "Out-of-the-box thinking for unique challenges and opportunities"
      }
    ],
    description: "A leading software solutions provider committed to propelling your digital ambitions. From intricate software development to intuitive user experiences, our adept team of professionals is here to enhance your operational efficiency and lead you to unmatched digital success.",
    mission: "Together, let's redefine your digital landscape and unlock unprecedented growth opportunities.",
    buttonLabel: "Start Your Journey",
    buttonLink: "#Contact-us",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current?.continuousStart();
    const t = setTimeout(() => ref.current?.complete(), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingBar color="#6b46c1" ref={ref} shadow={true} />
      {/* Updated section with explicit white background */}
      <section className="!bg-white min-h-screen" >
        <Helmet>
          <title>Contact BitBash - Your Digital Transformation Partner</title>
          <meta
            name="description"
            content="Reach out to BitBash - your premier partner for innovative software solutions, cutting-edge digital experiences, and strategic technology consulting. Whether you're considering collaboration, seeking expert advice, or just want to chat about the latest in tech, we're here for you. Your digital ambitions are our priority. Let's shape the future, together."
          />
          <meta
            name="keywords"
            content="BitBash, Contact, Software Solutions, Digital Transformation, Tech Consulting, Collaboration, Feedback, Inquiries, Custom Software, Technology Partner, Innovative Solutions, User Experiences, Strategy Consulting"
          />
          <meta property="og:image" content="https://www.bitbash.dev/With%20curve.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content="Contact BitBash - Your Digital Transformation Partner" />
          <meta
            property="og:description"
            content="Reach out to BitBash for innovative software solutions, digital experiences, and strategic technology consulting. Your digital ambitions are our priority."
          />
          <meta property="og:site_name" content="BitBash" />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* Enhanced Intro / Description Section - Ensured white background */}
        <div className="rounded-b-3xl w-full mt-0 z-[77]">
          <section className="enhanced-intro-section !bg-white " >
            <div className="base-container w-container bg-white" >
              <div className={` enhanced-content-wrapper ${visibleSection ? 'animate-fade-in' : ''}`}>
                
                {/* Tag and Title */}
                <div className="intro-header ">
                  <h1 className="enhanced-main-title text-black" style={{color: '#000'}}>
                    {contentData.title}
                  </h1>
                  <div className="enhanced-subtitle text-black" style={{color: '#000'}}>
                    {contentData.subtitle}
                  </div>
                </div>

                {/* Interactive Highlights Grid */}
                <div className="highlights-grid">
                  {contentData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`highlight-card ${hoveredFeature === index ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="highlight-icon">{highlight.icon}</div>
                      <h3 className="highlight-title text-black">{highlight.title}</h3>
                      <p className="highlight-description text-black">{highlight.description}</p>
                    </div>
                  ))}
                </div>

                {/* Enhanced Description */}
                <div className="enhanced-description-section">
                  <div className="description-content">
                    <p className="main-description text-black">{contentData.description}</p>
                    <div className="mission-statement">
                      <div className="mission-icon">✨</div>
                      <p className="mission-text text-black">{contentData.mission}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>

        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} theme="colored" />

        {/* Enhanced Contact Form Section */}
        <div className="py-20 px-8 max-w-7xl mx-auto bg-white" id="Contact-us" style={{ backgroundColor: '#ffffff' }}>
          <div className="contact-form-container">
            <div className="contact-form-inner">
              <div className="flex flex-col lg:flex-row gap-14 items-stretch p-8 lg:p-12 min-h-[700px]">
                {/* LEFT: Enhanced Contact Form */}
                <div className="lg:w-[650px] flex-shrink-0 flex flex-col h-full">
                  <p className="text-black text-[18px] font-semibold mb-3">
                    We are always happy to help
                  </p>

                  <h2 className="text-[48px] leading-[1.1] font-extrabold text-black mb-6">
                    Let's Work Together
                  </h2>

                  <div className="h-px bg-gray-300 mb-8" />

                  <form onSubmit={handleSubmit} noValidate className="space-y-8 flex-1 flex flex-col">
                    {/* Contact Info */}
                    <div>
                      <h3 className="form-section-header text-black">Contact Info</h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="enhanced-input-group">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="enhanced-input text-black"
                            placeholder="Name"
                            required
                          />
                          <label className="enhanced-input-label text-black">
                            Name <span className="text-red-500">*</span>
                          </label>
                        </div>

                        {/* Contact Number */}
                        <div className="enhanced-input-group">
                          <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="enhanced-input text-black"
                            placeholder="Contact Number"
                            required
                          />
                          <label className="enhanced-input-label text-black">
                            Contact Number <span className="text-red-500">*</span>
                          </label>
                        </div>

                        {/* Email */}
                        <div className="enhanced-input-group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="enhanced-input text-black"
                            placeholder="Email"
                            required
                          />
                          <label className="enhanced-input-label text-black">
                            Email <span className="text-red-500">*</span>
                          </label>
                        </div>

                        {/* Company */}
                        <div className="enhanced-input-group">
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="enhanced-input text-black"
                            placeholder="Company"
                          />
                          <label className="enhanced-input-label text-black">Company</label>
                        </div>
                      </div>
                    </div>

                    {/* About Project */}
                    <div className="flex-1">
                      <h3 className="form-section-header text-black">About Project</h3>

                      {/* Tech Stack */}
                      <div className="enhanced-input-group mb-6">
                        <input
                          type="text"
                          name="techStack"
                          value={formData.techStack}
                          onChange={handleChange}
                          className="enhanced-input text-black"
                          placeholder="Enter your Tech Stack"
                        />
                        <label className="enhanced-input-label text-black">Enter your Tech Stack</label>
                      </div>

                      {/* Requirements */}
                      <div className="enhanced-input-group flex-1">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="enhanced-textarea text-black"
                          placeholder="Fill Your Project Requirements"
                          required
                        />
                        <label className="enhanced-input-label text-black">
                          Fill Your Project Requirements <span className="text-red-500">*</span>
                        </label>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex flex-wrap items-center gap-4 mt-auto pt-6">
                      <div className="flex-1" />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="enhanced-submit-button text-white bg-purple-600 hover:bg-purple-700 hover:text-white"
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>

                {/* RIGHT: Enhanced "Why BitBash?" Panel */}
                <div className="lg:w-[400px] flex-shrink-0 flex h-full bg-purple-300">
                  <div className="enhanced-right-panel w-full h-full flex flex-col justify-between p-8 lg:p-10">
                    <div className="panel-content">
                      <h2 className="panel-title text-black">
                        Why BitBash?
                      </h2>

                      <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="feature-item">
                          <div className="feature-header">
                            <div className="feature-icon">
                              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <h4 className="feature-title text-black">Quick Response</h4>
                          </div>
                          <p className="feature-description text-black">
                            Receive prompt assistance and support whenever you need it.
                          </p>
                          <div className="feature-divider" />
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-item">
                          <div className="feature-header">
                            <div className="feature-icon">
                              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                            </div>
                            <h4 className="feature-title text-black">Best Pricing</h4>
                          </div>
                          <p className="feature-description text-black">
                            Unlock unbeatable value with our competitive rates and cost-effective solutions.
                          </p>
                          <div className="feature-divider" />
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-item">
                          <div className="feature-header">
                            <div className="feature-icon">
                              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h4 className="feature-title text-black">Agile and Transparent</h4>
                          </div>
                          <p className="feature-description text-black">
                            Stay informed every step of the way with our transparent processes.
                          </p>
                          <div className="feature-divider" />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Badges */}
                    <div className="enhanced-badges">
                      <div className="badge-item badge-purple">
                        <div className="badge-inner" />
                      </div>
                      <div className="badge-item badge-gray">
                        <div className="badge-inner" />
                      </div>
                      <div className="badge-item badge-blue">
                        <div className="badge-inner" />
                      </div>
                      <div className="badge-item badge-orange">
                        <div className="badge-inner" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(ContactUs);