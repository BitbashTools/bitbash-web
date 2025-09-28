import React, { useState } from 'react';

const BitBash = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const phases = [
    { title: "Sprint Planning", description: "A key agile process where teams define sprint goals, prioritize tasks, and allocate resources for short, focused development cycles (typically 1-4 weeks), fostering collaboration and a clear roadmap." },
    { title: "Daily Bit", description: "Brief daily stand-up meetings where team members share progress updates, discuss blockers, and align on priorities. These 15-minute sessions keep everyone synchronized and maintain project momentum." },
    { title: "Empowerment Failure VS Success", description: "An analysis of how team empowerment impacts outcomes. Success relies on trust and autonomy, while failure often stems from unclear goals or lack of support, offering valuable lessons for organizational growth." },
    { title: "Sprint Planning Template", description: "A customizable guide with sections for goals, tasks, timelines, and resources, streamlining planning, enhancing coordination, and addressing all critical elements for successful sprint execution." },
    { title: "Daily Bit Template", description: "A structured format for daily updates, including progress, challenges, and next steps, promoting consistency, communication, and effective project momentum tracking across all team members." },
  ];

  
  const workspaceAreas = [
    { name: "Modern Office Space", description: "Open-plan environment fostering collaboration", image: "https://i.postimg.cc/3xym6FYB/2025-02-03.webp" },
    { name: "Collaboration Areas", description: "Dedicated spaces for team brainstorming", image: "https://i.postimg.cc/8PZmxCW1/2025-02-03-3.webp" },
    { name: "Innovation Labs", description: "Cutting-edge tech for experimentation", image: "https://i.postimg.cc/3wVLVxsy/sir.webp" },
    { name: "Recreation Zone", description: "Relax and recharge with team activities", image: "https://i.postimg.cc/XY21K8xk/office.webp" },
    { name: "Meeting Rooms", description: "Professional spaces for client calls", image: "https://i.postimg.cc/8k3Y9tVK/IMG-9834.avif" }
  ];

  const cultureValues = [
    { 
      number: "1", 
      title: "Innovation First", 
      description: "We foster a culture where creative thinking thrives. Every team member is encouraged to propose breakthrough ideas, experiment with new technologies, and challenge conventional approaches to problem-solving.",
    },
    { 
      number: "2", 
      title: "Continuous Growth", 
      description: "Personal and professional development is woven into our DNA. We provide mentorship programs, learning stipends, conference attendance, and dedicated time for skill development to ensure every team member reaches their full potential.",
    },
    { 
      number: "3", 
      title: "Work-Life Harmony", 
      description: "We believe productivity flourishes when life is balanced. Our flexible schedules, remote work options, wellness programs, and mental health support create an environment where both personal and professional lives can thrive.",
    },
  ];

  const deepWorkSessions = [
    { 
      title: "Deep Focus Time", 
      description: "Uninterrupted 4-hour blocks dedicated to complex problem-solving, architectural decisions, and deep coding sessions.", 
      time: "DPW1: 10:00 AM - 2:00 PM",
      color: "bg-purple-300",
      activities: ["Complex Algorithm Development", "System Architecture Design", "Code Refactoring", "Research & Analysis"]
    },
    { 
      title: "Quiet Innovation Zones", 
      description: "Noise-free environments equipped with premium tools for concentration, critical thinking, and creative breakthroughs.", 
      time: "Available throughout the day",
      color: "bg-purple-300",
      activities: ["Individual Research", "Documentation", "Strategic Planning", "Creative Problem Solving"]
    },
    { 
      title: "Structured Productivity", 
      description: "Time-blocked schedules optimizing energy levels and cognitive performance for maximum creative output.", 
      time: "DPW2: 3:00 PM - 6:00 PM",
      color: "bg-purple-300",
      activities: ["Implementation & Testing", "Code Reviews", "Integration Tasks", "Quality Assurance"]
    },
  ];

  const brainBashActivities = [
    { 
      title: "Innovation Workshops", 
      description: "Weekly cross-functional sessions where diverse perspectives converge to explore emerging technologies, brainstorm solutions, and prototype revolutionary ideas.",
      duration: "2 hours weekly",
      participants: "8-12 team members"
    },
    { 
      title: "Hackathons & Build Days", 
      description: "Regular intensive innovation sprints where teams have 24-48 hours to transform crazy ideas into working prototypes, fostering rapid experimentation.",
      duration: "24-48 hours regularly",
      participants: "All teams participate"
    },
    { 
      title: "Tech Talks & Knowledge Sharing", 
      description: "Expert-led presentations on cutting-edge technologies, industry trends, and best practices, featuring both internal experts and guest speakers.",
      duration: "1 hour bi-weekly",
      participants: "Company-wide attendance"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Workspace Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Dynamic Workspace</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Thoughtfully designed environments that inspire creativity, foster collaboration, and support every aspect of your work life.
            </p>
          </div>
          
          {/* Enhanced Image Carousel Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Descriptions */}
            <div className="space-y-6">
              <div className="space-y-4">
                {workspaceAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer transform ${
                      hoveredCard === index 
                        ? 'bg-purple-200 shadow-lg scale-105 border-l-4 border-purple-600' 
                        : 'bg-gray-50 hover:bg-purple-300'
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onClick={() => setHoveredCard(index)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          hoveredCard === index ? 'bg-purple-600' : 'bg-purple-300'
                        }`}>
                          <span className={`font-bold text-lg ${
                            hoveredCard === index ? 'text-white' : 'text-purple-600'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          hoveredCard === index ? 'text-purple-600' : 'text-gray-900'
                        }`}>
                          {area.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Image Carousel - FIXED */}
            <div className="relative h-full">
              <div className="h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-100 sticky top-8">
                {workspaceAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      hoveredCard === index 
                        ? 'opacity-100' 
                        : 'opacity-0'
                    }`}
                  >
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-full object-cover"
                      style={{
                        imageRendering: 'crisp-edges',
                        WebkitImageRendering: 'crisp-edges',
                        msImageRendering: 'crisp-edges'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {area.name}
                      </h3>
                      <div className="flex space-x-2">
                        {workspaceAreas.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              dotIndex === index ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Default state when no hover */}
                {hoveredCard === null && (
                  <div className="absolute inset-0 flex items-center justify-center bg-purple-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Our Workspace</h3>
                      <p className="text-gray-600">Hover over areas to explore</p>
                    </div>
                  </div>
                )}
                
                {/* Navigation arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <button
                    onClick={() => {
                      const prevIndex = hoveredCard === null ? workspaceAreas.length - 1 : 
                                     hoveredCard === 0 ? workspaceAreas.length - 1 : hoveredCard - 1;
                      setHoveredCard(prevIndex);
                    }}
                    className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-gray-800 font-bold">‹</span>
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <button
                    onClick={() => {
                      const nextIndex = hoveredCard === null ? 0 : 
                                       hoveredCard === workspaceAreas.length - 1 ? 0 : hoveredCard + 1;
                      setHoveredCard(nextIndex);
                    }}
                    className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-gray-800 font-bold">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        
          {/* Workspace Stats & Features - Different Layout */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Statistics */}
            <div className="bg-purple-300 rounded-3xl p-12 text-black shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-center">Workspace by Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-300 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">5000+</div>
                  <div className="text-sm text-black">Square Feet</div>
                </div>
                <div className="bg-purple-300 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">50+</div>
                  <div className="text-sm text-black">Work Stations</div>
                </div>
                <div className="bg-purple-300 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">12</div>
                  <div className="text-sm text-black">Meeting Rooms</div>
                </div>
                <div className="bg-purple-300 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-bold text-black mb-2">24/7</div>
                  <div className="text-sm text-black">Access Available</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="https://pk.linkedin.com/company/bitbashcompany" className="inline-block">
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Our workspace
                  </button>
                </a>
              </div>
            </div>
            
            {/* Right: Features List */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Our Space Special</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Architecture</h4>
                    <p className="text-gray-600 leading-relaxed">Open-plan design with natural lighting, ergonomic furniture, and sustainable materials that create an inspiring work environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Collaboration Zones</h4>
                    <p className="text-gray-600 leading-relaxed">Dedicated areas for brainstorming, stand-ups, and creative sessions with whiteboards, comfortable seating, and AV equipment.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation Labs</h4>
                    <p className="text-gray-600 leading-relaxed">Cutting-edge technology spaces for prototyping, testing, and experimenting with the latest tools and frameworks.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Focus Areas</h4>
                    <p className="text-gray-600 leading-relaxed">Quiet zones with noise-cancellation features, private pods, and library-style seating for deep concentration work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced PDLC Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black bg-white mb-6">Product Development Lifecycle</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our comprehensive methodology ensures every project delivers exceptional results through structured phases and collaborative processes.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Enhanced CTA Section */}
              <div className="lg:w-2/5 p-12 bg-purple-300 text-black relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Ideas?</h3>
                  <p className="text-lg text-black mb-8 leading-relaxed">
                    From initial concept to market-ready product, our experienced team guides you through every step of the development journey.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <span className="text-black">Expert consultation & planning</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-black">Agile development methodology</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-black">Continuous support & optimization</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Enhanced Phases Section */}
              <div className="lg:w-3/5 p-12">
                <h3 className="text-2xl font-bold text-black mb-8">Development Phases</h3>
                <div className="space-y-2">
                  {phases.map((phase, index) => (
                    <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                      <div
                        className="flex justify-between items-center cursor-pointer p-6 hover:bg-purple-50 transition-colors duration-200"
                        onClick={() => setSelectedPhase(selectedPhase?.title === phase.title ? null : phase)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-black font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-black">{phase.title}</h4>
                            {selectedPhase?.title !== phase.title && (
                              <p className="text-sm text-black mt-1">{phase.preview}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-2xl text-black font-bold transition-transform duration-300">
                          {selectedPhase?.title === phase.title ? '−' : '+'}
                        </div>
                      </div>
                      {selectedPhase?.title === phase.title && (
                        <div className="px-6 pb-6">
                          <div className="bg-purple-100 rounded-lg p-6 border-l-4 border-purple-300">
                            <p className="text-black leading-relaxed">{phase.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Culture & Values</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              The principles that guide our daily interactions, decision-making, and commitment to creating an exceptional work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {cultureValues.map((value, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-black leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-purple-300 rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-black">
                  <h3 className="text-2xl font-bold mb-6">Our Team in Action</h3>
                  <div className="bg-purple-200 rounded-2xl p-8 backdrop-blur-sm">
                    <p className="text-lg mb-6 text-black">Join daily standups, collaborative sessions, and innovation workshops that bring our values to life.</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-black">50+</div>
                        <div className="text-sm opacity-90 text-black">Team Members</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-black">100%</div>
                        <div className="text-sm opacity-90 text-black">Remote Flexible</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Deep Work Sessions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Deep Work Sessions</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Dedicated time blocks designed to maximize focus, creativity, and productivity while minimizing distractions and interruptions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deepWorkSessions.map((session, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${session.color} rounded-3xl p-8 text-black shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3">{session.title}</h3>
                    <div className="text-lg font-semibold mb-4  text-black rounded-lg px-4 py-2 inline-block">
                      {session.time}
                    </div>
                    <p className="text-black/90 leading-relaxed">{session.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Key Activities:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {session.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="bg-white/10 rounded-lg px-4 py-2 text-sm backdrop-blur-sm">
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced BrainBash Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">BrainBash Internship Program</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              A comprehensive mentorship program where experienced developers provide one-on-one guidance to interns, combining hands-on learning with real project experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {brainBashActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-black mb-4">{activity.title}</h3>
                  <p className="text-black mb-6 leading-relaxed">{activity.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-purple-200 text-black px-3 py-1 rounded-full">
                      {activity.duration}
                    </div>
                    <div className="bg-purple-200 text-black px-3 py-1 rounded-full">
                      {activity.participants}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-purple-300 rounded-3xl p-12 text-black shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-center">Program Overview</h3>
                <div className="bg-purple-100 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Format:</span>
                      <span className="text-xl font-bold">1-on-1 Pairing</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Projects:</span>
                      <span className="text-xl font-bold">Real Client Work</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Mentorship:</span>
                      <span className="text-xl font-bold">Daily Sessions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Support:</span>
                      <span className="text-xl font-bold">Full Guidance</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h4 className="text-xl font-bold mb-4">Program Benefits</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-semibold">Personalized Learning</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-semibold">Industry Experience</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-semibold">Career Guidance</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="font-semibold">Full-Time Opportunity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Program Timeline */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">BrainBash Program Structure</h3>
            
            {/* Phase Headers */}
           
                 

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phase 1 Activities */}
              <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-purple-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Initial Phase Activities</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Environment setup & tool configuration</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Company coding standards training</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Basic programming exercises</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Daily 2-hour pair sessions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Team workflow introduction</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center text-sm font-semibold text-black">
                    Focus: Learning & Adaptation
                  </div>
                </div>
              </div>

              {/* Phase 2 Activities */}
              <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-purple-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Development Phase Activities</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Real project contributions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Code reviews with mentors</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Bug fixing & debugging</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Team meeting participation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Feature component development</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center text-sm font-semibold text-black">
                    Focus: Hands-on Development
                  </div>
                </div>
              </div>

              {/* Phase 3 Activities */}
              <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-purple-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Mastery Phase Activities</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Lead feature development</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Direct client interaction</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Independent problem solving</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Final project presentation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Full-time offer evaluation</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center text-sm font-semibold text-black">
                    Focus: Leadership & Assessment
                  </div>
                </div>
              </div>
            </div>

            {/* Program Metrics */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-gray-900 mb-2">Daily</div>
                <div className="text-sm text-gray-600">Pair Programming Sessions</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-gray-900 mb-2">1:1</div>
                <div className="text-sm text-gray-600">Mentor to Intern Ratio</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-gray-900 mb-2">90%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-gray-900 mb-2">Real</div>
                <div className="text-sm text-gray-600">Client Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Icon/Logo area */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Enhanced title with gradient text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-black bg-clip-text text-transparent leading-tight">
            Ready to Shape the Future with Us?
          </h2>

          {/* Enhanced description */}
          <div className="mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-black leading-relaxed max-w-3xl mx-auto">
              Join a team where your ideas matter, your growth is prioritized, and your work creates meaningful impact in the world of technology.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-600">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-sm font-medium text-black">Innovation-Driven</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-sm font-medium text-black">Career Growth</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-sm font-medium text-black">Global Impact</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact-us"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative flex items-center space-x-2">
                <span>Contact Us</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BitBash;