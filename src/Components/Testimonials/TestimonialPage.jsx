import React, { useState, useEffect, useMemo } from "react";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Users,
  Award,
  ThumbsUp,
  Rocket,
  Filter,
  Search,
  Quote,
  Heart,
  MessageCircle
} from 'lucide-react';

const ReviewPage = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [testimonials, setTestimonials] = useState([]);

  // Trusted client data
  const trustedClients = [
    {
      name: "MyActuary.ai",
      href: "https://www.myactuary.ai/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Acturial.svg",
      width: "10rem",
      height: "5rem",
    },
    {
      name: "AskMary.ai",
      href: "https://www.askmary.ai/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/AskMary.svg",
      width: "10rem",
    },
    {
      name: "Onnmed",
      href: "https://onnmed.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Onnmed.svg",
      width: "10rem",
    },
    {
      name: "The Century Idea",
      href: "https://www.thecenturyidea.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/thecenturyidea.svg",
      width: "10rem",
    },
    {
      name: "PolyglotMe",
      href: "https://polyglotme.com/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/polyglotme.svg",
      width: "10rem",
    },
    {
      name: "NFTWZRD",
      href: "https://www.nftwzrd.net/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/nftwzrd.svg",
      width: "6rem",
    },
    {
      name: "CloudCLM",
      href: "https://demo.cloudclmlive.com/demo/",
      src: "https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/CloudCLM.svg",
      width: "10rem",
    },
    {
      name: "AirProxy",
      href: "https://airproxy.io/en/",
      src: "https://i.postimg.cc/vDRrndyt/output-onlinepngtools.png",
      width: "3rem",
    },
    {
      name: "Petla",
      href: "https://petla.app/",
      src: "https://i.postimg.cc/bJ4GdH07/output-onlinepngtools-3.png",
      width: "5rem",
    },
  ];

  // Testimonial data converted to review format
  const fallbackData = [
    {
      id: 1,
      type: 'video',
      author: "Jhon Bert",
      position: "CEO",
      company: "cloudclmlive",
      rating: 5,
      date: '2023-10-22',
      title: 'Outstanding Results & Communication',
      content: "Great work by Bitbash. They consistently deliver results promptly. Their communication is straightforward and efficient. I definitely recommend Bitbash.",
      videoThumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop',
      videoUrl: '#',
      likes: 34,
      helpful: 28,
      verified: true,
      featured: true
    },
    {
      id: 2,
      type: 'written',
      author: "Rhys Hamilton-Davies",
      position: "CEO", 
      company: "PolyglotMe",
      rating: 5,
      date: '2023-10-22',
      title: 'Dependable & Meets Every Deadline',
      content: "Bitbash is outstanding: dependable, transparent, trustworthy, and best of all, we meet EVERY deadline.",
      likes: 42,
      helpful: 35,
      verified: true,
      featured: true
    },
    {
      id: 3,
      type: 'video',
      author: "Vinicius Terranova",
      position: "Co-founder",
      company: "Terranova Global Venture Ltd.",
      rating: 5,
      date: '2024-11-27',
      title: 'Extremely Professional Experience',
      content: "BitBash worked extremely professional. I was updated everyday with the progress made, I could also see the actual progress being made as well. This was the best experience I had.",
      videoThumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      videoUrl: '#',
      likes: 25,
      helpful: 22,
      verified: true
    },
    {
      id: 4,
      type: 'written',
      author: "Bin Deng",
      position: "Co-founder",
      company: "ECOMHESS", 
      rating: 5,
      date: '2024-01-25',
      title: 'Ahead of Schedule & Smart Solutions',
      content: "BitBash did a great job completing the project ahead of schedule. We removed several unnecessary features due to their lack of usability, and BitBash helped us save money by focusing on what truly mattered and working smart. Highly recommend to everyone in Software development field",
      likes: 38,
      helpful: 31,
      verified: true
    },
    {
      id: 5,
      type: 'video',
      author: "Diego Sinigaglia",
      position: "Co-founder",
      company: "AIRPROXY S.R.L.S.",
      rating: 5,
      date: '2024-06-01',
      title: 'Phenomenal Team for Complex Projects',
      content: "Zeeshan and his team are phenomenal. Successfully completed a unique and complicated project which required extensive research",
      videoThumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
      videoUrl: '#',
      likes: 29,
      helpful: 24,
      verified: true
    },
    {
      id: 6,
      type: 'written',
      author: "Y Ben",
      position: "CEO",
      company: "Self",
      rating: 5,
      date: '2024-10-02',
      title: 'Exceeded Expectations in Every Way',
      content: "BitBash, was super helpful even before the job was accepted. Team paid attention to our needs and helped us find a solution that meets our budget and timeline needs. It exceed my expectations in every count thanks to it's devoted work and focus on my full satisfaction.",
      likes: 31,
      helpful: 27,
      verified: true
    },
    {
      id: 7,
      type: 'written',
      author: "Jacopo Lazzarin",
      position: "CEO", 
      company: "Oppoturnify",
      rating: 5,
      date: '2025-01-22',
      title: 'True Experts in Their Field',
      content: "They are true experts in their field, and their dedication to our success is evident in everything they do.",
      likes: 18,
      helpful: 15,
      verified: true
    },
    {
      id: 8,
      type: 'video',
      author: "Robert Fox",
      position: "CEO",
      company: "send&get group",
      rating: 5,
      date: '2025-05-22', 
      title: 'Dedicated to Success',
      content: "They are true experts in their field, and their dedication to our success is evident in everything they do.",
      videoThumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
      videoUrl: '#',
      likes: 22,
      helpful: 19,
      verified: true
    }
  ];

  useEffect(() => {
    setTestimonials(fallbackData);
  }, []);

  // Calculate rating statistics
  const ratingStats = useMemo(() => {
    const stats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    testimonials.forEach(testimonial => {
      stats[testimonial.rating]++;
    });
    const total = testimonials.length;
    const average = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / total || 5;
    return { stats, total, average };
  }, [testimonials]);

  // Filter and sort testimonials
  const filteredTestimonials = useMemo(() => {
    let filtered = testimonials;
    
    // Filter by type
    if (filter !== 'all') {
      filtered = filtered.filter(testimonial => testimonial.type === filter);
    }
    
    // Filter by rating
    if (selectedRating !== 'all') {
      filtered = filtered.filter(testimonial => testimonial.rating === parseInt(selectedRating));
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(testimonial =>
        testimonial.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort testimonials
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'helpful':
          return b.helpful - a.helpful;
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [testimonials, filter, sortBy, selectedRating, searchTerm]);

  const ClientCarousel = () => {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-black">Trusted by Leading Companies</h3>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Join the growing list of successful businesses that have chosen BitBash
            </p>
          </div>
          
          <div className="relative overflow-hidden bg-gray-50 py-6 rounded-xl">
            <div className="flex space-x-12" style={{
              animation: 'scroll 25s linear infinite',
              width: 'fit-content'
            }}>
              {[...trustedClients, ...trustedClients, ...trustedClients].map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0 flex items-center justify-center p-3 group">
                  <a 
                    href={client.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                      style={{
                        width: client.width || "auto",
                        height: "2rem",
                        maxWidth: "8rem"
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }
            `
          }} />
        </div>
      </div>
    );
  };

  const StarRating = ({ rating, size = 20 }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`${star <= rating ? 'text-yellow-400 fill-current' : 'text-black'}`}
        />
      ))}
    </div>
  );

  const VideoReview = ({ testimonial }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={testimonial.videoThumbnail} 
          alt={`${testimonial.author}'s video review`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-4 transform group-hover:scale-125 transition-all duration-300 shadow-2xl">
            <Play className="text-black ml-1" size={26} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          VIDEO
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
          2:45
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=000000&color=ffffff&size=44`}
                alt={testimonial.author}
                className="w-11 h-11 rounded-full border-2 border-gray-200 shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-black">{testimonial.author}</span>
                {testimonial.verified && (
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                    ✓ Verified
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm font-medium">{testimonial.position} at {testimonial.company}</p>
              <div className="mt-1">
                <StarRating rating={testimonial.rating} size={16} />
              </div>
            </div>
          </div>
          <span className="text-gray-500 text-sm font-medium bg-gray-50 px-2 py-1 rounded-lg">{new Date(testimonial.date).toLocaleDateString()}</span>
        </div>
        <h3 className="font-bold text-lg mb-3 text-black group-hover:text-gray-700 transition-colors">{testimonial.title}</h3>
        <p className="text-black/80 mb-5 leading-relaxed">{testimonial.content}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-all duration-200 hover:scale-105">
              <Heart size={18} className="hover:fill-current" />
              <span className="text-sm font-semibold">{testimonial.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-all duration-200 hover:scale-105">
              <ThumbsUp size={18} />
              <span className="text-sm font-semibold">{testimonial.helpful}</span>
            </button>
          </div>
          <button className="text-black hover:text-black first-letter:font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
            Reply
          </button>
        </div>
      </div>
    </div>
  );

  const WrittenReview = ({ testimonial }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-200 transform hover:-translate-y-2">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=000000&color=ffffff&size=44`}
              alt={testimonial.author}
              className="w-11 h-11 rounded-full border-2 border-gray-200 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white-400 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-black">{testimonial.author}</span>
              {testimonial.verified && (
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                  ✓ Verified
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm font-medium">{testimonial.position} at {testimonial.company}</p>
            <div className="mt-1">
              <StarRating rating={testimonial.rating} size={16} />
            </div>
          </div>
        </div>
        <span className="text-gray-500 text-sm font-medium bg-gray-50 px-2 py-1 rounded-lg">{new Date(testimonial.date).toLocaleDateString()}</span>
      </div>
      
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-400/30" />
        <h3 className="font-bold text-lg mb-3 text-black group-hover:text-gray-700 transition-colors pl-6">{testimonial.title}</h3>
        <p className="text-black/80 mb-5 leading-relaxed pl-6 italic">{testimonial.content}</p>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-200 hover:scale-105">
            <Heart size={18} className="hover:fill-current" />
            <span className="text-sm font-semibold">{testimonial.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-all duration-200 hover:scale-105">
            <ThumbsUp size={18} />
            <span className="text-sm font-semibold">{testimonial.helpful}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-indigo-500 transition-all duration-200 hover:scale-105">
            <MessageCircle size={18} />
            <span className="text-sm font-semibold">Reply</span>
          </button>
        </div>
        <div className="text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1 rounded-full">
          Was this helpful?
        </div>
      </div>
    </div>
  );

  // Dynamic stats based on actual testimonial data
  const stats = [
    { number: `${trustedClients.length}+`, label: "Trusted Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: ThumbsUp },
    { number: `${ratingStats.average.toFixed(1)}/5`, label: "Average Rating", icon: Star },
    { number: "24/7", label: "Support", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            What Our <span className="relative inline-block">
              <span className="text-black">Amazing Clients</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 L100,10 L0,10 Z" fill="#a855f7" opacity="0.8"/>
              </svg>
            </span> Say About Us
          </h1>
          
          <p className="text-xl text-black/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear directly from the {testimonials.length} companies we've helped transform their digital presence and achieve extraordinary results.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group text-center p-6 bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-400 shadow-lg rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-1 group-hover:text-gray-700 transition-colors">{stat.number}</div>
                  <div className="text-black/70 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <ClientCarousel />

      {/* Rating Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-8 mb-8 border border-gray-200 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="text-7xl font-bold mb-2 text-black bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {ratingStats.average.toFixed(1)}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              <div className="mb-3">
                <StarRating rating={Math.round(ratingStats.average)} size={36} />
              </div>
              <p className="text-black/70 font-medium">{ratingStats.total} client reviews</p>
            </div>
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3 group">
                  <span className="w-3 text-black font-semibold">{rating}</span>
                  <Star className="text-purple-400 fill-current group-hover:scale-110 transition-transform" size={18} />
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-purple-400 h-3 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ 
                        width: `${(ratingStats.stats[rating] / ratingStats.total) * 100}%`
                      }}
                    />
                  </div>
                  <span className="w-8 text-sm text-black font-medium">{ratingStats.stats[rating]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Filters */}
        <div className="bg-white rounded-3xl p-6 mb-8 border border-gray-200 shadow-lg">
          <div className="flex flex-wrap gap-4 items-center">            
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-50 text-black rounded-xl px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent hover:shadow-md transition-all duration-200 font-medium"
            >
              <option value="all">All Reviews</option>
              <option value="video">Video Reviews</option>
              <option value="written">Written Reviews</option>
            </select>

            <select 
              value={selectedRating} 
              onChange={(e) => setSelectedRating(e.target.value)}
              className="bg-gray-50 text-black rounded-xl px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent hover:shadow-md transition-all duration-200 font-medium"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 text-black rounded-xl px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent hover:shadow-md transition-all duration-200 font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="transform hover:scale-[1.02] transition-transform duration-300">
              {testimonial.type === 'video' ? (
                <VideoReview testimonial={testimonial} />
              ) : (
                <WrittenReview testimonial={testimonial} />
              )}
            </div>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-12 border border-gray-200 shadow-lg max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">No reviews found</h3>
              <p className="text-black/70 mb-8 leading-relaxed">Try adjusting your filters or search terms to discover more client experiences.</p>
              <button
                className="px-8 py-3 bg-gradient-to-br from-purple-100 to-purple-400 text-black rounded-xl hover:from-purple-100 hover:to-purple-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  setFilter('all');
                  setSelectedRating('all');
                  setSearchTerm('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
       </div>
       </div>
  );
};

export default ReviewPage;