import React, { useState, useEffect, useRef } from 'react';
import { Award, Info, TrendingUp, MapPin, Users, Clock, Star, ChevronDown, ChevronUp, Filter, Search, User, Mail, Phone, FileText, Upload, Send, CheckCircle, AlertCircle, Briefcase, Code, ArrowLeft } from 'lucide-react';

const InteractiveCareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedJob, setExpandedJob] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    experience: '',
    education: '',
    skills: '',
    portfolio: '',
    linkedIn: '',
    github: '',
    expectedSalary: '',
    availableFrom: '',
    motivation: '',
    references: ''
  });

  const [files, setFiles] = useState({
    resume: null,
    portfolio: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  const fileInputRef = useRef(null);
  const portfolioInputRef = useRef(null);

  // Fixed jobs data with proper structure
  const jobsData = [
    {
      id: 1,
      position: "Full Stack MERN Developer",
      location: "Lahore (On site)",
      type: "Full Time",
      salary: "Competitive Package",
      experience: "2-4 years",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      description: "Join our dynamic development team to build cutting-edge web applications using the MERN stack. Work on exciting projects that impact thousands of users.",
      requirements: ["Strong MERN stack experience", "JavaScript proficiency", "Database design skills", "API development experience"]
    },
    {
      id: 2,
      position: "Senior-Level Django/React Web Developer",
      location: "Lahore (On site)",
      type: "Full Time",
      salary: "Senior Level Package",
      experience: "4-6 years",
      skills: ["Django", "React", "Python", "JavaScript", "PostgreSQL"],
      description: "Lead web development projects using Django backend and React frontend. Mentor junior developers and architect scalable solutions.",
      requirements: ["5+ years Django experience", "Advanced React skills", "Leadership experience", "System design knowledge"]
    },
    {
      id: 3,
      position: "Entry-Level Django/React Web Developer",
      location: "Lahore (On site)",
      type: "Full Time",
      salary: "Entry Level Package",
      experience: "0-2 years",
      skills: ["Django", "React", "Python", "JavaScript", "HTML/CSS"],
      description: "Start your career in web development with Django and React. Work with experienced developers and grow your skills in a supportive environment.",
      requirements: ["Basic Django knowledge", "React fundamentals", "Python programming", "Eagerness to learn"]
    },
    {
      id: 4,
      position: "Full Stack Developer Trainee",
      location: "Lahore (On site)",
      type: "Trainee",
      salary: "Trainee Package",
      experience: "0-1 years",
      skills: ["HTML", "CSS", "JavaScript", "Basic React", "Basic Node.js"],
      description: "Comprehensive training program for aspiring full stack developers. Learn industry best practices while working on real projects.",
      requirements: ["Basic programming knowledge", "Strong problem-solving skills", "Commitment to learning", "Computer science background preferred"]
    },
    {
      id: 5,
      position: "Senior Full Stack Web Developer",
      location: "Lahore (On site)",
      type: "Full Time",
      salary: "Senior Package",
      experience: "5-8 years",
      skills: ["React", "Node.js", "Python", "AWS", "Docker"],
      description: "Lead full stack development initiatives and mentor development teams. Work on complex applications and system architecture.",
      requirements: ["Extensive full stack experience", "Cloud platform knowledge", "Team leadership skills", "Architecture design experience"]
    },
    {
      id: 6,
      position: "Full Stack Software Developer (Junior Level)",
      location: "Lahore (On site)",
      type: "Full Time",
      salary: "Junior Level Package",
      experience: "1-3 years",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
      description: "Develop and maintain web applications using modern technologies. Collaborate with cross-functional teams to deliver high-quality software.",
      requirements: ["1+ years development experience", "Full stack knowledge", "Version control proficiency", "Team collaboration skills"]
    },
    {
      id: 7,
      position: "Intern: Python and JavaScript",
      location: "Lahore (On site)",
      type: "Internship",
      salary: "Internship Stipend",
      experience: "0 years",
      skills: ["Python", "JavaScript", "Basic Web Development", "Git"],
      description: "Learn programming fundamentals and web development through hands-on projects. Work with experienced developers in a learning-focused environment.",
      requirements: ["Basic Python knowledge", "JavaScript fundamentals", "Strong learning attitude", "Currently pursuing CS degree"]
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Career Growth", description: "Continuous learning and advancement opportunities" },
    { icon: MapPin, title: "Global Presence", description: "Work with international teams and clients" },
    { icon: Award, title: "Recognition", description: "Regular acknowledgment of outstanding contributions" },
    { icon: Info, title: "24/7 Support", description: "Comprehensive support for all your needs" }
  ];

  const experienceLevels = [
    "Fresh Graduate (0 years)",
    "Entry Level (0-2 years)",
    "Junior Level (1-3 years)", 
    "Mid Level (2-4 years)",
    "Senior Level (4-6 years)",
    "Lead Level (5-8 years)",
    "Expert Level (8+ years)"
  ];

  const filteredJobs = jobsData.filter(job => {
    const matchesType = filterType === 'all' || job.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesSearch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const uniqueTypes = ['all', ...new Set(jobsData.map(job => job.type))];
  const allPositions = [...jobsData.map(job => job.position), "Other Position"];

  // Helper function to format filter labels
  const formatFilterLabel = (type) => {
    if (type === 'all') return 'All Positions';
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJobClick = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setFormData(prev => ({ ...prev, position }));
    setShowApplicationForm(true);
    setSubmitStatus(null);
    window.scrollTo(0, 0);
  };

  const handleBackToJobs = () => {
    setShowApplicationForm(false);
    setSubmitStatus(null);
    window.scrollTo(0, 0);
  };

  // Application form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (type) => (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          [type]: 'File size must be less than 10MB'
        }));
        return;
      }
      
      setFiles(prev => ({
        ...prev,
        [type]: file
      }));
      
      setErrors(prev => ({
        ...prev,
        [type]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation letter is required';
    if (!files.resume) newErrors.resume = 'Resume is required';
    if (!termsAccepted) newErrors.terms = 'You must accept the terms and conditions';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    const phoneRegex = /^[\+]?[\d\s\-\(\)]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Convert file to base64 for email inclusion
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  // Simple, reliable form submission using FormSubmit
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create FormData for submission
      const submitData = new FormData();
      
      // FormSubmit configuration
      submitData.append('_subject', `Job Application: ${formData.position} - ${formData.fullName}`);
      submitData.append('_template', 'table');
      submitData.append('_captcha', 'false');
      
      // Add all form fields
      submitData.append('Full_Name', formData.fullName);
      submitData.append('Email', formData.email);
      submitData.append('Phone', formData.phone);
      submitData.append('Address', formData.address || 'Not provided');
      submitData.append('Position_Applied', formData.position);
      submitData.append('Experience_Level', formData.experience);
      submitData.append('Education', formData.education || 'Not specified');
      submitData.append('Technical_Skills', formData.skills || 'Not specified');
      submitData.append('Portfolio_URL', formData.portfolio || 'Not provided');
      submitData.append('LinkedIn', formData.linkedIn || 'Not provided');
      submitData.append('GitHub', formData.github || 'Not provided');
      submitData.append('Expected_Salary', formData.expectedSalary || 'Not specified');
      submitData.append('Available_From', formData.availableFrom || 'Immediately');
      submitData.append('Motivation_Letter', formData.motivation);
      submitData.append('References', formData.references || 'Not provided');
      
      // Add file information
      if (files.resume) {
        submitData.append('Resume_File_Info', `${files.resume.name} (${(files.resume.size / 1024 / 1024).toFixed(2)}MB)`);
      }
      if (files.portfolio) {
        submitData.append('Portfolio_File_Info', `${files.portfolio.name} (${(files.portfolio.size / 1024 / 1024).toFixed(2)}MB)`);
      }
      
      // Add note about file attachments
      if (files.resume || files.portfolio) {
        submitData.append('File_Attachment_Note', 'IMPORTANT: Resume and portfolio files were uploaded by the candidate. Please request them to send files directly to your email if needed, or contact them using the provided information above.');
      }
      
      submitData.append('Application_Date', new Date().toLocaleString());
      
      // Submit to FormSubmit.co
      const response = await fetch('https://formsubmit.co/samreenajmal098@gmail.com', {
        method: 'POST',
        body: submitData
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      setSubmitStatus('error');
      setErrors(prev => ({
        ...prev,
        general: 'There was an issue submitting your application. Please try again or contact us directly at samreenajmal098@gmail.com'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        experience: '',
        education: '',
        skills: '',
        portfolio: '',
        linkedIn: '',
        github: '',
        expectedSalary: '',
        availableFrom: '',
        motivation: '',
        references: ''
      });
      setFiles({ resume: null, portfolio: null });
      setTermsAccepted(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
      if (portfolioInputRef.current) portfolioInputRef.current.value = '';
    }, 3000);
  };

  // Show application form if requested
  if (showApplicationForm) {
    // Show success message if form was submitted successfully
    if (submitStatus === 'success') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-8 px-4 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBackToJobs}
              className="flex items-center gap-2 mb-6 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to Job Listings
            </button>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle size={64} className="text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Thank you for your interest in joining BitBash! We have received your application for <span className="font-semibold text-purple-600">{selectedPosition}</span>.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will review your application and get back to you within 3-5 business days.
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleBackToJobs}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Other Positions
                </button>
                <p className="text-sm text-gray-500">
                  Questions? Contact us at <span className="font-semibold">samreenajmal098@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Show partial success (form sent but files too large)
    if (submitStatus === 'partial') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-8 px-4 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBackToJobs}
              className="flex items-center gap-2 mb-6 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to Job Listings
            </button>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <AlertCircle size={64} className="text-yellow-600" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Application Submitted!
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Your application details have been sent successfully. However, your resume file was too large to include automatically.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-yellow-800 mb-3">Next Step Required:</h3>
                <p className="text-yellow-700 mb-4">
                  Please send your resume directly to <span className="font-bold">samreenajmal098@gmail.com</span> with the subject:
                </p>
                <div className="bg-white border border-yellow-300 rounded-lg p-3 font-mono text-sm">
                  "Job Application: {selectedPosition} - Resume Attachment"
                </div>
              </div>
              <div className="space-y-4">
                <button
                  onClick={handleBackToJobs}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Other Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-8 px-4 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToJobs}
            className="flex items-center gap-2 mb-6 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Job Listings
          </button>

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-3 sm:p-4 rounded-2xl">
                <Briefcase size={36} className="text-white sm:w-12 sm:h-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Apply for {selectedPosition}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Ready to start your journey with BitBash? Fill out this application and let's build the future together.
            </p>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'error' && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 sm:gap-4">
              <AlertCircle size={20} className="text-red-600 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-800 text-sm sm:text-base">Submission Failed</h3>
                <p className="text-red-700 text-xs sm:text-sm">
                  {errors.general || 'There was an issue submitting your application. Please try again or contact us directly at samreenajmal098@gmail.com'}
                </p>
              </div>
            </div>
          )}

          {/* File Upload Notice */}
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start gap-3 sm:gap-4">
              <Info size={20} className="text-blue-600 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-blue-800 text-sm sm:text-base">File Upload Information</h3>
                <p className="text-blue-700 text-xs sm:text-sm">
                  For large files (over 2MB), you may need to send your resume separately to <span className="font-semibold">samreenajmal098@gmail.com</span> after submitting this form.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form - Rest of the form remains the same */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 lg:p-12">
            {/* All the form sections remain exactly the same as in the original */}
            {/* Personal Information */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
                <User size={24} className="text-purple-600 sm:w-7 sm:h-7" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+92 300 1234567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
                <Briefcase size={24} className="text-purple-600 sm:w-7 sm:h-7" />
                Professional Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Position Applied *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Position</option>
                    {allPositions.map(pos => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.position}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Experience</option>
                    {experienceLevels.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                  {errors.experience && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.experience}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="BS Computer Science, University Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Salary (Optional)
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="PKR 50,000 - 80,000"
                  />
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Technical Skills
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  placeholder="React, Node.js, Python, JavaScript, MongoDB, etc."
                />
              </div>
            </div>

            {/* Online Presence */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
                <Code size={24} className="text-purple-600 sm:w-7 sm:h-7" />
                Online Presence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="https://github.com/yourusername"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Available From
                  </label>
                  <input
                    type="date"
                    name="availableFrom"
                    value={formData.availableFrom}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
                <Upload size={24} className="text-purple-600 sm:w-7 sm:h-7" />
                Documents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 text-center hover:border-purple-600 transition-colors duration-300">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange('resume')}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <Upload size={32} className="mx-auto text-gray-400 mb-3 sm:mb-4 sm:w-10 sm:h-10" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">
                      {files.resume ? files.resume.name : 'Click to upload your resume'}
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300"
                    >
                      Choose File
                    </button>
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX (Max 10MB)</p>
                    {files.resume && files.resume.size > 2 * 1024 * 1024 && (
                      <p className="text-xs text-yellow-600 mt-1">
                        Large file - may need to be sent separately
                      </p>
                    )}
                  </div>
                  {errors.resume && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.resume}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Portfolio File (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 text-center hover:border-purple-600 transition-colors duration-300">
                    <input
                      type="file"
                      ref={portfolioInputRef}
                      onChange={handleFileChange('portfolio')}
                      accept=".pdf,.doc,.docx,.zip"
                      className="hidden"
                    />
                    <FileText size={32} className="mx-auto text-gray-400 mb-3 sm:mb-4 sm:w-10 sm:h-10" />
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">
                      {files.portfolio ? files.portfolio.name : 'Upload additional portfolio'}
                    </p>
                    <button
                      type="button"
                      onClick={() => portfolioInputRef.current?.click()}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300"
                    >
                      Choose File
                    </button>
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX, ZIP (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation & References */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
                <FileText size={24} className="text-purple-600 sm:w-7 sm:h-7" />
                Additional Information
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to join BitBash? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      errors.motivation ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your passion for technology, why you're interested in this role, and what you can bring to our team..."
                  />
                  {errors.motivation && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.motivation}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    References (Optional)
                  </label>
                  <textarea
                    name="references"
                    value={formData.references}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="Previous employer, manager, or professional reference with contact information"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              {/* Terms and Conditions Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 max-w-md mx-auto text-left cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => {
                      setTermsAccepted(e.target.checked);
                      if (errors.terms) {
                        setErrors(prev => ({
                          ...prev,
                          terms: ''
                        }));
                      }
                    }}
                    className={`mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 ${
                      errors.terms ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => window.open('/terms', '_blank')}
                      className="text-purple-600 hover:text-purple-700 underline font-medium"
                    >
                      Terms and Conditions
                    </button>
                    {' '}and{' '}
                    <button
                      type="button"
                      onClick={() => window.open('/privacy', '_blank')}
                      className="text-purple-600 hover:text-purple-700 underline font-medium"
                    >
                      Privacy Policy
                    </button>
                    . By submitting this application, I consent to the processing of my personal data for recruitment purposes.
                  </span>
                </label>
                {errors.terms && <p className="text-red-500 text-xs sm:text-sm mt-2 text-center">{errors.terms}</p>}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !termsAccepted}
                className={`inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform ${
                  isSubmitting || !termsAccepted
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-lg'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white"></div>
                    <span className="hidden sm:inline">Submitting Application...</span>
                    <span className="sm:hidden">Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">Submit Application</span>
                    <span className="sm:hidden">Submit</span>
                  </>
                )}
              </button>
              
              <p className="text-xs sm:text-sm text-gray-500 mt-4 px-4">
                Your application will be sent to <span className="font-semibold">samreenajmal098@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-50"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="hero-content"
              data-animate
              className={`transition-all duration-1000 ${isVisible['hero-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                We go above and beyond to ensure your success
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                Collaboration is at the heart of our process. We work closely with cross-functional teams, 
                including developers, product managers, and stakeholders, to ensure a seamless integration 
                of design and functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               <a href="#jobs-header">
  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
    View Open Positions
  </button>
</a>
              </div>
            </div>
            <div 
              id="hero-image"
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                    <Users size={80} className="text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best Section */}
      <section className="bg-gray-50 py-20 rounded-t-3xl -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="best-section"
            data-animate
            className={`transition-all duration-1000 ${isVisible['best-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Why We're The Best</h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  At BitBash, our seasoned professionals come from diverse backgrounds with expertise in 
                  software development, UI design, and system integration. With years of experience and 
                  cutting-edge knowledge, we consistently deliver modern, efficient solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${isVisible['best-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4">
                      <benefit.icon size={40} className="text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="jobs-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['jobs-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Join Our Family</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career in a supportive, innovative environment.
            </p>
          </div>

          {/* Search and Filter */}
          <div 
            id="search-filter"
            data-animate
            className={`mb-12 transition-all duration-1000 delay-200 ${isVisible['search-filter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search positions or locations..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {uniqueTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setFilterType(type);
                      setActiveFilter(type);
                    }}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap ${
                      activeFilter === type 
                        ? 'bg-purple-600 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    {formatFilterLabel(type)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                id={`job-${job.id}`}
                data-animate
                className={`bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  isVisible[`job-${job.id}`] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } ${expandedJob === job.id ? 'ring-2 ring-purple-600' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleJobClick(job.id)}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                            {job.position}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            {job.skills.slice(0, 4).map((skill, i) => (
                              <span key={i} className="px-4 py-2 bg-purple-300 text-black rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                {skill}
                              </span>
                            ))}
                            {job.skills.length > 4 && (
                              <span className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm font-semibold shadow-md">
                                +{job.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center text-purple-600 ml-4">
                          {expandedJob === job.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="truncate">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="truncate">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="truncate">{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8 flex-shrink-0">
                      <button 
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full lg:w-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyClick(job.position);
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {expandedJob === job.id && (
                    <div className="mt-8 pt-8 border-t border-gray-200 transition-all duration-500">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-3">About This Role</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                          
                          <h4 className="text-lg font-bold text-gray-800 mb-3">Required Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-3">Requirements</h4>
                          <ul className="space-y-3 text-gray-600 mb-8">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                            <h5 className="font-bold text-gray-800 mb-2">Ready to Apply?</h5>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                              Join our team and help us build the future of technology.
                            </p>
                            <button 
                              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 w-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleApplyClick(job.position);
                              }}
                            >
                              Apply for This Position
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">No positions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InteractiveCareerPage;