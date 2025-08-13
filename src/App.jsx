import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Typing animation component
const Typewriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

// Premium particle background
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Premium Navigation
const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'certifications', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400"
            whileHover={{ scale: 1.05 }}
          >
            VM
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'resume', label: 'Resume' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                                 className={`relative font-medium transition-all duration-300 capitalize ${
                   activeSection === item.id
                     ? 'text-emerald-600 dark:text-emerald-400'
                     : 'text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400'
                 }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                                 {activeSection === item.id && (
                   <motion.div
                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400"
                     layoutId="activeSection"
                     initial={false}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 rounded-full glass hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
            
            <div className="md:hidden">
              <button className="p-2 rounded-lg glass">
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Premium Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Avatar */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <div className="w-full h-full rounded-full glass p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                VM
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-hero font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Vaibhav Mehta
          </h1>
          
          <motion.div
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Typewriter text="B.Tech CSE Student | Aspiring Full-Stack Developer" speed={80} />
          </motion.div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            📍 Khatauli, Muzaffarnagar, India
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center mb-8"
        >
          <motion.a
            href="mailto:vaibhavmehtajp098@gmail.com"
            className="btn-premium flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 vaibhavmehtajp098@gmail.com
          </motion.a>
        </motion.div>
        
        <motion.a
          href="https://www.linkedin.com/in/vaibhav-mehta-8a8363283"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium inline-flex items-center gap-3 bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Connect on LinkedIn
        </motion.a>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Premium About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="neumorphism p-12 md:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                A punctual and highly organized undergraduate with a strong commitment to completing tasks ahead of schedule. Known for maintaining a well-structured workflow and thriving in team environments. Possesses excellent communication and leadership skills, with a passion for exploring innovative avenues in Computer Science Engineering and delivering high-quality projects efficiently.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 rounded-full glass p-2 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-sm font-medium">Full-Stack Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Premium Skills Section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "C", icon: "🔵" },
        { name: "C++", icon: "🔵" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Machine Learning", icon: "🤖" }
      ],
      color: "blue"
    },
    {
      title: "Operating Systems",
      icon: "🖥️",
      skills: [
        { name: "Windows", icon: "🪟" },
        { name: "Linux", icon: "🐧" }
      ],
      color: "green"
    },
    {
      title: "Other Interests",
      icon: "🎯",
      skills: [
        { name: "Data Structures & Algorithms", icon: "📊" },
        { name: "Data Science", icon: "📈" }
      ],
      color: "purple"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="neumorphism p-8"
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-2xl font-bold text-${category.color}-700 dark:text-${category.color}-400 mb-2`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="skill-card glass p-4 rounded-xl text-center hover:scale-105"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "DineQR – Digital Restaurant Management System",
      role: "Team Leader & Frontend Developer",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: ["QR-based menu", "Real-time orders", "Smart inventory alerts"],
      description: "A comprehensive digital restaurant management system that streamlines operations through QR-based menus and real-time order tracking.",
      image: "🍽️",
      color: "blue"
    },
    {
      title: "MICO Hospital Website",
      role: "Team Leader & Frontend Developer",
      techStack: ["HTML", "CSS"],
      features: ["Appointment booking", "AI chatbot", "Basic ML for disease prediction"],
      description: "A modern hospital website with integrated appointment booking system and AI-powered chatbot for patient assistance.",
      image: "🏥",
      color: "green"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card neumorphism p-8 relative group"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className={`text-${project.color}-600 dark:text-${project.color}-400 font-semibold`}>
                  {project.role}
                </p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-center">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-center">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-overlay">
                <div className="text-white text-center">
                  <div className="text-2xl mb-2">🔗</div>
                  <div className="font-semibold">View Project</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Education Section
const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech CSE",
      institution: "Chandigarh Group of Colleges, Landran",
      period: "2023–2027",
      score: "8.53 CGPA",
      icon: "🎓"
    },
    {
      degree: "Intermediate",
      institution: "KK Public School",
      period: "2021-2023",
      score: "82.75%",
      icon: "📚"
    },
    {
      degree: "Matriculation",
      institution: "S.T. Thomas School",
      period: "2020-2021",
      score: "87%",
      icon: "📖"
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Education</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="timeline-item neumorphism p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="text-4xl mr-6">{edu.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Achievements Section
const AchievementsSection = () => {
  const achievements = [
    { text: "3-Star Badge in C++ & Problem Solving on HackerRank", icon: "⭐" },
    { text: "17 Specialist Badges on Coding Ninjas", icon: "🏆" },
    { text: "NPTEL Certification in Data Structures using C", icon: "📜" },
    { text: "Selected for Semifinal Round of SIH 2024", icon: "🎯" },
    { text: "3× College Topper on Naukri 360 Leaderboard", icon: "🥇" }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Achievements</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="achievement-badge neumorphism p-6 flex items-center"
            >
              <div className="text-3xl mr-4">{achievement.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {achievement.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Resume Section
const ResumeSection = () => {
  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf file to the public folder
    link.download = 'Vaibhav_Mehta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            Download my detailed resume to learn more about my experience and skills
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="neumorphism p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">📄</div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Vaibhav Mehta - Resume
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A comprehensive overview of my education, skills, projects, and achievements in a professional format.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-semibold text-gray-800 dark:text-white">Education</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">B.Tech CSE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-semibold text-gray-800 dark:text-white">Skills</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Full-Stack Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-semibold text-gray-800 dark:text-white">Achievements</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Multiple Certifications</div>
              </div>
            </div>
            
            <motion.button
              onClick={handleDownload}
              className="btn-premium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg text-lg flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📥 Download Resume (PDF)
            </motion.button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Premium Certifications Section
const CertificationsSection = () => {
  const certifications = [
    { title: "Introduction to Data Science", issuer: "Simplilearn", icon: "📊" },
    { title: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", icon: "🤖" },
    { title: "Introduction to Artificial Intelligence", issuer: "LinkedIn Learning", icon: "🧠" }
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Certifications</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="neumorphism p-8"
            >
              <div className="flex items-center">
                <div className="text-4xl mr-8">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                </div>
                <div className="text-green-500 text-2xl">✓</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            I'd love to hear from you! Let's discuss opportunities and collaborations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 neumorphism">
                <span className="text-3xl mr-6">📧</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                  <a href="mailto:vaibhavmehtajp098@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    vaibhavmehtajp098@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 neumorphism">
                <span className="text-3xl mr-6">📍</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Khatauli, Muzaffarnagar, India</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 neumorphism">
                <span className="text-3xl mr-6">🔗</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/vaibhav-mehta-8a8363283" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="neumorphism p-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Send Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="form-input w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn-premium w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Premium Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 glass p-4 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ⬆️
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
