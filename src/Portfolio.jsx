import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Code, Briefcase, PenTool } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "DevConnect - Professional Networking Platform",
      description: "A full-stack professional networking platform that enables developers and professionals to connect, showcase their skills and resumes, and engage in real-time communication.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Netlify", "Render"],
      category: "Full Stack",
      link: "https://github.com/MadeshN-2004/devconnect-frontend.git,https://github.com/MadeshN-2004/devconnect-backend.git",
      image: "/devconnect.png"
    },
    {
      title: "School ERP Management System",
      description: "Comprehensive system with attendance management, student and subject registration, and student details management.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web Development",
      link: "https://github.com/MadeshN-2004/school-erp-website.git",
      image: "/erp.png"
    },
    {
      title: "Women Safety Web Application",
      description: "Safety-focused application with voice-activated and manual emergency assistance, integrated with Google Maps API.",
      tech: ["HTML", "CSS", "JavaScript", "Google Maps API", "Voice Recognition API"],
      category: "Web Development",
      link: "https://github.com/MadeshN-2004/women-safety-application-web-app.git",
      image: "/women.png"
    },
    {
    title: "Landslide Prediction Using Machine Learning",
      description: "Built a web app to predict short- and long-term landslide risks using Logistic Regression. Used real-time Weather API data for short- term predictions and synthetic data for long-term analysis. Deployed with Flask and HTML,CSS,Javascript for live interaction",
      tech: ["Python", "scikit-learn", "Flask", "HTML", "CSS", "JavaScript", "Weather API","REST API"],
      category: "Machine Learning",
      link: "https://github.com/MadeshN-2004/landslide-prediction-using-ML.git",
      image : "/landslide.png"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", emoji: "⚛️" },
        { name: "JavaScript", emoji: "🟨" },
        { name: "HTML5", emoji: "🧱" },
        { name: "CSS3", emoji: "🎨" },
        { name: "Tailwind CSS", emoji: "💨" },
        { name: "Bootstrap", emoji: "🅱️" }
      ],
      icon: "🎨",
      color: "from-blue-900/20 to-purple-900/20"
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", emoji: "🟢" },
        { name: "Express.js", emoji: "🚂" },
        { name: "PHP", emoji: "🐘" },
        { name: "REST APIs", emoji: "🔗" },
        { name: "MongoDB", emoji: "🍃" },
        { name: "MySQL", emoji: "🐬" }
      ],
      icon: "⚙️",
      color: "from-green-900/20 to-teal-900/20"
    },
    {
      category: "Digital Marketing",
      skills: [
        { name: "SEO", emoji: "🔍" },
        { name: "Content Writing", emoji: "✍️" },
        { name: "Social Media Marketing", emoji: "📱" },
        { name: "Google Analytics", emoji: "📊" },
        { name: "Content Strategy", emoji: "🎯" }
      ],
      icon: "📊",
      color: "from-purple-900/20 to-pink-900/20"
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", emoji: "📂" },
        { name: "GitHub", emoji: "🐙" },
        { name: "Netlify", emoji: "🌐" },
        { name: "Render", emoji: "🚀" },
        { name: "Google APIs", emoji: "🔧" },
        { name: "VS Code", emoji: "💻" },
        { name: "XAMPP", emoji: "🔶" },
        { name: "Postman", emoji: "📮" }
      ],
      icon: "🛠️",
      color: "from-orange-900/20 to-red-900/20"
    }
  ];

  const achievements = [
    {
      title: "Privacy and Security in Online Social Media",
      description: "Completed NPTEL certification in Privacy and Security in Online Social Media",
      year: "2024",
      icon: <Award className="w-6 h-6" />,
      color: "#4ADE80"
    },
    {
      title: "Digital Marketing Certification",
      description: "Completed Udemy's Digital Marketing – Complete Toolkit course",
      year: "2024",
      icon: <PenTool className="w-6 h-6" />,
      color: "#60A5FA"
    },
    {
      title: "MongoDB Certification",
      description: "Completed Introduction to MongoDB certification from MongoDB University",
      year: "2024",
      icon: <Code className="w-6 h-6" />,
      color: "#A78BFA"
    },
    {
      title: "Smart India Hackathon 2024",
      description: "Participated and selected until the 2nd round of Smart India Hackathon 2024",
      year: "2024",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#F59E0B"
    }
  ];

  // Floating particles animation
  const FloatingParticles = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: '#4ADE80',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float${i % 3} ${3 + Math.random() * 2}s ease-in-out infinite`,
            opacity: 0.3
          }}
        />
      ))}
    </div>
  );

  // Enhanced inline styles with animations
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      overflow: 'hidden',
      position: 'relative'
    },
    navBox: {
      position: 'fixed',
      top: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(55, 65, 81, 0.3)',
      borderRadius: '50px',
      padding: '0.75rem 1.5rem',
      zIndex: 1000,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      animation: 'slideDown 0.8s ease-out'
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      fontSize: '0.875rem',
      color: '#9CA3AF'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#9CA3AF',
      cursor: 'pointer',
      transition: 'all 0.3s',
      padding: '0.5rem 1rem',
      borderRadius: '25px',
      position: 'relative'
    },
    navButtonActive: {
      color: '#ffffff',
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
      transform: 'scale(1.05)'
    },
    socialLinks: {
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      color: '#9CA3AF',
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(55, 65, 81, 0.3)',
      borderRadius: '50px',
      padding: '0.75rem 1.5rem',
      zIndex: 1000,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      animation: 'slideDown 0.8s ease-out 0.2s both'
    },
    mainContent: {
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      paddingTop: '6rem'
    },
    leftHalf: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4rem'
    },
    rightHalf: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: '5rem',
      fontWeight: '300',
      lineHeight: '1',
      marginBottom: '2rem',
      background: 'linear-gradient(135deg, #ffffff, #4ADE80)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'glow 2s ease-in-out infinite alternate'
    },
    description: {
      color: 'rgba(156, 163, 175, 0.8)',
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '3rem',
      maxWidth: '32rem',
      animation: 'fadeInUp 1s ease-out 0.5s both'
    },
   button: {
      background: 'linear-gradient(135deg, #16A34A, #22C55E)',
      color: '#ffffff',
      padding: '1rem 2.5rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)',
      position: 'relative',
      overflow: 'visible',
      animation: 'pulse 2s infinite',
      whiteSpace: 'nowrap',
      minWidth: 'fit-content',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profileImage: {
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '6px solid rgba(34, 197, 94, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(34, 197, 94, 0.2)',
      transition: 'all 0.5s ease',
      animation: 'float 3s ease-in-out infinite'
    },
    
    sectionContainer: {
      minHeight: '100vh',
      paddingTop: '8rem',
      paddingBottom: '4rem',
      paddingLeft: '4rem',
      paddingRight: '4rem'
    },
    sectionTitle: {
      fontSize: '3.75rem',
      fontWeight: '300',
      textAlign: 'center',
      marginBottom: '5rem',
      background: 'linear-gradient(135deg, #ffffff, #4ADE80)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'slideInFromTop 0.8s ease-out'
    }
  };

  // Add CSS animations via style tag
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-30px) translateX(-50%);
        }
        to {
          opacity: 1;
          transform: translateY(0) translateX(-50%);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 0.6;
        }
      }
      
      @keyframes glow {
        from {
          text-shadow: 0 0 20px rgba(74, 222, 128, 0.2);
        }
        to {
          text-shadow: 0 0 30px rgba(74, 222, 128, 0.4);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-10px) rotate(1deg);
        }
      }
      
      @keyframes pulse {
        0% {
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
        }
        50% {
          box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
        }
        100% {
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
        }
      }
      
      @keyframes slideInFromTop {
        from {
          opacity: 0;
          transform: translateY(-50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float0 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-20px) translateX(10px); }
      }
      
      @keyframes float1 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(-15px) translateX(-10px); }
        66% { transform: translateY(15px) translateX(5px); }
      }
      
      @keyframes float2 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-10px) translateX(15px); }
        75% { transform: translateY(10px) translateX(-5px); }
      }
      
      @keyframes skillHover {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(5deg); }
        100% { transform: scale(1) rotate(0deg); }
      }
      
      .skill-card:hover {
        animation: skillHover 0.6s ease-in-out;
      }
      
      .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 30px 60px rgba(34, 197, 94, 0.2);
      }
      
      .achievement-card:hover {
        transform: scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div style={styles.container}>
      <FloatingParticles />
      
      {/* Mouse follower effect */}
      <div style={{
        position: 'fixed',
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'rgba(74, 222, 128, 0.1)',
        border: '1px solid rgba(74, 222, 128, 0.3)',
        pointerEvents: 'none',
        transition: 'all 0.1s ease',
        zIndex: 9999
      }} />
      
      {/* Floating Navigation Box */}
      <div style={styles.navBox}>
        <div style={styles.nav}>
          <button 
            onClick={() => setActiveSection('home')}
            style={{
              ...styles.navButton, 
              ...(activeSection === 'home' ? styles.navButtonActive : {})
            }}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveSection('projects')}
            style={{
              ...styles.navButton, 
              ...(activeSection === 'projects' ? styles.navButtonActive : {})
            }}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveSection('skills')}
            style={{
              ...styles.navButton, 
              ...(activeSection === 'skills' ? styles.navButtonActive : {})
            }}
          >
            Skills
          </button>
          <button 
            onClick={() => setActiveSection('achievements')}
            style={{
              ...styles.navButton, 
              ...(activeSection === 'achievements' ? styles.navButtonActive : {})
            }}
          >
            Achievements
          </button>
          <button 
            onClick={() => setActiveSection('contact')}
            style={{
              ...styles.navButton, 
              ...(activeSection === 'contact' ? styles.navButtonActive : {})
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div style={styles.socialLinks}>
        <a 
          href="https://linkedin.com/in/n-madesh-aa0571243" 
          target="_blank"
          rel="noopener noreferrer"
          style={{color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s'}}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          <Linkedin size={18} />
        </a>
        <span style={{fontSize: '0.875rem'}}></span>
        <a 
          href="https://github.com/MadeshN-2004" 
          target="_blank"
          rel="noopener noreferrer"
          style={{color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s'}}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          <Github size={18} />
        </a>
      </div>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div style={{position: 'relative', height: '100vh'}}>
          <div style={styles.mainContent}>
            {/* Left Half - Content */}
            <div style={styles.leftHalf}>
              <div style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 1s ease'
              }}>
                <h1 style={styles.title}>
                  Madesh N
                </h1>
                <p style={styles.description}>
                  "Hey there! I’m Madesh 👋 — a curious frontend developer who loves turning ideas into interactive, user-friendly websites. From crafting clean code with HTML, CSS & JavaScript to exploring React & the MERN stack, I’m always building, learning, and leveling up. I’m passionate about creating meaningful digital experiences and making the web more engaging, fun, and accessible 🌍. When I’m not coding, you’ll find me diving into new tech trends and pushing myself to grow every day."
                </p>
                <button 
                  onClick={() => setActiveSection('contact')}
                  style={styles.button}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.05)';
                    e.target.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 10px 25px rgba(34, 197, 94, 0.3)';
                  }}
                >
                  Let's get started ›
                </button>
              </div>
            </div>

            {/* Right Half - Profile Photo */}
            <div style={styles.rightHalf}>
              <div style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 1s ease 0.3s'
              }}>
                <img 
                  src="/profile.jpg"
                  alt="Madesh N - Full Stack Developer"
                  style={{
                    ...styles.profileImage,
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.08) rotate(2deg)';
                    e.target.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.4), 0 0 200px rgba(34, 197, 94, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1) rotate(0deg)';
                    e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(34, 197, 94, 0.2)';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom - Worked With Section */}
          <div style={styles.workedWith}>
            <p style={{marginBottom: '1rem'}}>Worked with</p>
            <div style={{display: 'flex', gap: '3rem', opacity: '0.4'}}>
              <span style={{animation: 'fadeIn 1s ease-out 1.2s both'}}>ClickUp</span>
              <span style={{animation: 'fadeIn 1s ease-out 1.4s both'}}>Dropbox</span>
              <span style={{animation: 'fadeIn 1s ease-out 1.6s both'}}>PAYCHEX</span>
              <span style={{animation: 'fadeIn 1s ease-out 1.8s both'}}>elastic</span>
              <span style={{animation: 'fadeIn 1s ease-out 2s both'}}>stripe</span>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '5rem'}}>
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                transition: 'all 0.5s ease',
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}>
                <div style={{order: index % 2 === 0 ? 0 : 2}}>
                  <div style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, #1F2937, #111827)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    fontSize: '4rem',
                    opacity: '0.8',
                    transition: 'all 0.5s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(34, 197, 94, 0.1)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={project.image}
                      alt={`${project.title} Screenshot`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1) rotate(1deg)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1) rotate(0deg)';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.opacity = '1';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.opacity = '0';
                    }}
                    ></div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  order: index % 2 === 0 ? 1 : 0
                }}>
                  <span style={{
                    display: 'inline-block',
                    color: '#4ADE80',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    animation: 'pulse 2s infinite'
                  }}>{project.category}</span>
                  <h3 style={{
                    fontSize: '2.25rem',
                    fontWeight: '300',
                    lineHeight: '1.2',
                    transition: 'color 0.3s ease'
                  }}>{project.title}</h3>
                  <p style={{
                    color: '#9CA3AF',
                    fontSize: '1.125rem',
                    lineHeight: '1.75'
                  }}>{project.description}</p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        color: '#9CA3AF',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '1rem',
                        border: '1px solid rgba(55, 65, 81, 0.5)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                        e.target.style.color = '#4ADE80';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
                        e.target.style.color = '#9CA3AF';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#4ADE80',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateX(10px)';
                    e.target.style.color = '#22C55E';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.color = '#4ADE80';
                  }}
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} style={{marginLeft: '0.5rem'}} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Skills & Expertise</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '80rem',
            margin: '0 auto'
          }}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{
                background: `linear-gradient(135deg, ${skill.color.split(' ')[0]} ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[2]} ${skill.color.split(' ')[3]})`,
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(31, 41, 55, 0.3)',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(34, 197, 94, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(74, 222, 128, 0.05) 0%, transparent 70%)',
                  animation: 'float 4s ease-in-out infinite'
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  animation: 'float 3s ease-in-out infinite'
                }}>{skill.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '400',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>{skill.category}</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}>
                  {skill.skills.map((skillItem, skillIndex) => (
                    <span key={skillIndex} style={{
                      fontSize: '0.875rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      color: '#E5E7EB',
                      padding: '0.5rem 1rem',
                      borderRadius: '1.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      animation: `fadeIn 1s ease-out ${skillIndex * 0.1}s both`
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                      e.target.style.transform = 'scale(1.1) rotate(5deg)';
                      e.target.style.color = '#4ADE80';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                      e.target.style.transform = 'scale(1) rotate(0deg)';
                      e.target.style.color = '#E5E7EB';
                    }}
                    >
                      <span style={{fontSize: '1rem'}}>{skillItem.emoji}</span>
                      {skillItem.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Section */}
      {activeSection === 'achievements' && (
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Achievements</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '80rem',
            margin: '0 auto'
          }}>
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card" style={{
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6))',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(55, 65, 81, 0.3)',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${achievement.color}, transparent)`,
                  animation: 'pulse 2s infinite'
                }}></div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    color: achievement.color,
                    marginRight: '1rem',
                    backgroundColor: `${achievement.color}20`,
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'rotate(10deg) scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'rotate(0deg) scale(1)';
                  }}
                  >
                    {achievement.icon}
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#9CA3AF',
                    backgroundColor: 'rgba(55, 65, 81, 0.5)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    animation: 'pulse 3s infinite'
                  }}>{achievement.year}</span>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  marginBottom: '0.75rem',
                  color: '#ffffff'
                }}>{achievement.title}</h3>
                <p style={{
                  color: '#9CA3AF',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div style={styles.sectionContainer}>
          <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={styles.sectionTitle}>Get In Touch</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#9CA3AF',
              marginBottom: '4rem',
              lineHeight: '1.75',
              maxWidth: '40rem',
              margin: '0 auto 4rem',
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}>
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {[
                { icon: Mail, title: 'Email', value: 'madeshnickil@gmail.com', href: 'mailto:madeshnickil@gmail.com' },
                { icon: Phone, title: 'Phone', value: '+91 7339594177', href: 'tel:+917339594177' },
                { icon: MapPin, title: 'Location', value: 'Tirunelveli, Tamil Nadu', href: '#' }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} style={{
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6))',
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(55, 65, 81, 0.3)',
                    transition: 'all 0.5s ease',
                    cursor: 'pointer',
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(34, 197, 94, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(74, 222, 128, 0.03) 0%, transparent 70%)',
                      animation: 'float 6s ease-in-out infinite'
                    }} />
                    <IconComponent style={{
                      margin: '0 auto 1rem',
                      color: '#4ADE80',
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      padding: '1rem',
                      borderRadius: '1rem',
                      width: '3rem',
                      height: '3rem',
                      transition: 'all 0.3s ease'
                    }} />
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '500',
                      marginBottom: '0.5rem',
                      color: '#ffffff'
                    }}>{contact.title}</h3>
                    <a href={contact.href} style={{
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#4ADE80';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#9CA3AF';
                    }}
                    >
                      {contact.value}
                    </a>
                  </div>
                );
              })}
            </div>

        
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;