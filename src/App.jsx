import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MdEmail, 
  MdLocationOn, 
  MdPerson, 
  MdComputer, 
  MdBuild,
  MdSchool,
  MdWork,
  MdStar,
  MdDownload,
  MdMenu,
  MdLightMode,
  MdDarkMode,
  MdDescription
} from "react-icons/md";
import { 
  FaLinkedin, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava, 
  FaGitAlt, 
  FaFigma,
  FaGithub,
  FaCode,
  FaDatabase,
  FaMobile,
  FaTrophy,
  FaCertificate,
  FaGraduationCap,
  FaProjectDiagram,
  FaAward
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiTailwindcss, 
  SiVite, 
  SiNodedotjs, 
  SiMongodb,
  SiExpress,
  SiPython,
  SiTypescript
} from "react-icons/si";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-bold text-primary">VM</span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
              </motion.button>
              <motion.button 
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdMenu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              VM
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vaibhav Mehta
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            B.Tech CSE Student | Aspiring Full-Stack Developer
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MdLocationOn className="text-red-500" />
            Khatauli, Muzaffarnagar, India
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="mailto:vaibhavmehtajp098@gmail.com"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail size={20} />
              Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vaibhav-mehta-8a8363283"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={20} />
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A punctual and highly organized undergraduate with a strong commitment to completing tasks ahead of schedule. Known for maintaining a well-structured workflow and thriving in team environments. Possesses excellent communication and leadership skills, with a passion for exploring innovative avenues in Computer Science Engineering and delivering high-quality projects efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-primary text-2xl" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SiCplusplus className="text-blue-600 text-xl" />
                  <span>C++</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiCplusplus className="text-blue-600 text-xl" />
                  <span>C</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaJava className="text-orange-500 text-xl" />
                  <span>Java</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiPython className="text-yellow-500 text-xl" />
                  <span>Python</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaReact className="text-blue-500 text-2xl" />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaHtml5 className="text-orange-500 text-xl" />
                  <span>HTML5</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCss3Alt className="text-blue-500 text-xl" />
                  <span>CSS3</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaJs className="text-yellow-400 text-xl" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaReact className="text-blue-500 text-xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTailwindcss className="text-cyan-500 text-xl" />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MdBuild className="text-green-500 text-2xl" />
                <h3 className="text-xl font-semibold">Tools & Others</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaGitAlt className="text-orange-600 text-xl" />
                  <span>Git</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="text-gray-800 dark:text-white text-xl" />
                  <span>GitHub</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiVite className="text-purple-500 text-xl" />
                  <span>Vite</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFigma className="text-purple-600 text-xl" />
                  <span>Figma</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaProjectDiagram className="text-blue-500 text-2xl" />
                <h3 className="text-xl font-semibold">DineQR – Digital Restaurant Management System</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A comprehensive digital restaurant management system that streamlines operations through QR-based menus and real-time order tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React.js</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Role: Team Leader & Frontend Developer</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaProjectDiagram className="text-green-500 text-2xl" />
                <h3 className="text-xl font-semibold">MICO Hospital Website</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A modern hospital website with integrated appointment booking system and AI-powered chatbot for patient assistance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">HTML</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">CSS</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">AI Chatbot</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Role: Team Leader & Frontend Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-primary text-3xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">B.Tech CSE</h3>
                  <p className="text-gray-600 dark:text-gray-300">Chandigarh Group of Colleges, Landran</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023–2027</p>
                </div>
                <span className="bg-primary text-white px-4 py-2 rounded-full font-semibold">8.53 CGPA</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <MdSchool className="text-secondary text-3xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Intermediate</h3>
                  <p className="text-gray-600 dark:text-gray-300">KK Public School</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2021-2023</p>
                </div>
                <span className="bg-secondary text-white px-4 py-2 rounded-full font-semibold">82.75%</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <MdSchool className="text-accent text-3xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Matriculation</h3>
                  <p className="text-gray-600 dark:text-gray-300">S.T. Thomas School</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2020-2021</p>
                </div>
                <span className="bg-accent text-white px-4 py-2 rounded-full font-semibold">87%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <FaTrophy className="text-yellow-500 text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">3-Star Badge in C++ & Problem Solving on HackerRank</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <FaTrophy className="text-yellow-500 text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">17 Specialist Badges on Coding Ninjas</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <FaCertificate className="text-green-500 text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">NPTEL Certification in Data Structures using C</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <FaAward className="text-blue-500 text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">Selected for Semifinal Round of SIH 2024</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <MdStar className="text-yellow-500 text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">3× College Topper on Naukri 360 Leaderboard</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h2>
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <FaCertificate className="text-blue-500 text-3xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Introduction to Data Science</h3>
                  <p className="text-gray-600 dark:text-gray-300">Simplilearn</p>
                </div>
                <div className="text-green-500 text-2xl">✓</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <FaCertificate className="text-purple-500 text-3xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Career Essentials in Generative AI</h3>
                  <p className="text-gray-600 dark:text-gray-300">Microsoft & LinkedIn</p>
                </div>
                <div className="text-green-500 text-2xl">✓</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              variants={scaleIn}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <FaCertificate className="text-green-500 text-3xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Introduction to Artificial Intelligence</h3>
                  <p className="text-gray-600 dark:text-gray-300">LinkedIn Learning</p>
                </div>
                <div className="text-green-500 text-2xl">✓</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Resume
          </motion.h2>
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg text-center border border-gray-200 dark:border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <MdDescription className="text-6xl text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Vaibhav Mehta - Resume</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A comprehensive overview of my education, skills, projects, and achievements in a professional format.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <FaGraduationCap className="text-2xl text-primary mx-auto mb-2" />
                <div className="font-semibold">Education</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">B.Tech CSE</div>
              </div>
              <div className="text-center">
                <FaCode className="text-2xl text-secondary mx-auto mb-2" />
                <div className="font-semibold">Skills</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Full-Stack Development</div>
              </div>
              <div className="text-center">
                <FaTrophy className="text-2xl text-accent mx-auto mb-2" />
                <div className="font-semibold">Achievements</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Multiple Certifications</div>
              </div>
            </div>
            
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Resume.pdf';
                link.download = 'Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-lg text-lg flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdDownload size={24} />
              Download Resume
            </motion.button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 dark:text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'd love to hear from you! Let's discuss opportunities and collaborations.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-600"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-primary text-2xl" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:vaibhavmehtajp098@gmail.com" className="text-primary hover:underline">
                        vaibhavmehtajp098@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-600"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <MdLocationOn className="text-red-500 text-2xl" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p>Khatauli, Muzaffarnagar, India</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-600"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-blue-600 text-2xl" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/vaibhav-mehta-8a8363283" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>
              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                    placeholder="Your message..."
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-8 px-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Vaibhav Mehta. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
