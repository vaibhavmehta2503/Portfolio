import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MdArrowOutward,
  MdCheckCircle,
  MdDarkMode,
  MdDownload,
  MdEmail,
  MdLightMode,
  MdLocationOn,
  MdMenu,
  MdSend,
  MdWorkOutline,
} from 'react-icons/md';
import {
  FaAward,
  FaCertificate,
  FaCode,
  FaGithub,
  FaGraduationCap,
  FaJava,
  FaLinkedin,
  FaReact,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
} from 'react-icons/si';
import './App.css';

const CONTACT_EMAIL = 'vaibhavmehtajp098@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/vaibhav-mehta-8a8363283/';
const CODOLIO_URL = 'https://codolio.com/profile/XuITBFTK';
const CODOLIO_CARD_URL = 'https://codolio.com/profile/XuITBFTK/card';
const navItems = ['Experience', 'Work', 'Coding', 'Skills', 'Contact'];

const stats = [
  { value: '8.53', label: 'B.Tech CSE CGPA' },
  { value: '17+', label: 'Coding Ninjas badges' },
  { value: '3-Star', label: 'HackerRank C++ / Problem Solving' },
  { value: '1500+', label: 'LinkedIn connections' },
];

const experienceHighlights = [
  {
    title: 'Software Developer Intern',
    organization: 'Octave',
    icon: MdWorkOutline,
    summary:
      'Excited to begin my internship journey at Octave, where I am gaining hands-on experience in software development, collaborating with experienced professionals, and contributing to real-world projects.',
    proof: 'Jun 2026 - Present · 2 mos · Hyderabad, Telangana · Hybrid',
  },
  {
    title: 'Technical Head',
    organization: 'Emergians CEC-CGC',
    icon: FaUsers,
    summary:
      'Leading technical coordination for the college community, supporting events, peer learning, and team-led initiatives.',
    proof: 'Jul 2025 - Present · 1 yr 1 mo · Full-time',
  },
  {
    title: 'Student Brand Ambassador',
    organization: 'Naukri.com',
    icon: FaAward,
    summary:
      'Represented Naukri.com on campus, promoting platform features, conducting outreach activities, and bridging the gap between student communities and career opportunities.',
    proof: 'Aug 2025 - Jun 2026 · 11 mos · Naukri Campus',
  },
];

const projects = [
  {
    title: 'DineQR',
    role: 'Team Leader & Frontend Developer',
    summary:
      'Digital restaurant management system with QR menus, streamlined ordering, and a cleaner staff workflow for table operations.',
    stack: ['React', 'Node.js', 'MongoDB'],
    accent: 'blue',
  },
  {
    title: 'MICO Hospital Website',
    role: 'Team Leader & Frontend Developer',
    summary:
      'Hospital web experience with appointment booking and an AI chatbot flow for faster patient guidance.',
    stack: ['HTML', 'CSS', 'AI Chatbot'],
    accent: 'green',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Responsive UI', icon: MdCheckCircle },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: SiNodedotjs,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
];

const achievements = [
  '3-Star Badge in C++ and Problem Solving on HackerRank',
  '17 Specialist Badges on Coding Ninjas',
  'NPTEL Certification in Data Structures using C',
  'Selected for the semifinal round of Smart India Hackathon 2024',
  'Successfully concluded Build with AI Bootcamp 2026 with Emergians CEC-CGC',
];

const codingCardStats = [
  { label: 'Primary profile', value: 'Codolio' },
  { label: 'Problem solving', value: 'C++ / DSA' },
  { label: 'Badges', value: '17+ CN' },
  { label: 'HackerRank', value: '3-Star' },
];

const certifications = [
  'Introduction to Data Science - Simplilearn',
  'Career Essentials in Generative AI - Microsoft & LinkedIn',
  'Introduction to Artificial Intelligence - LinkedIn Learning',
];

const education = [
  {
    degree: 'B.Tech Computer Science Engineering',
    place: 'Chandigarh Group of Colleges, Landran',
    period: '2023 - 2027',
    score: '8.53 CGPA',
  },
  {
    degree: 'Intermediate',
    place: 'KK Public School',
    period: '2021 - 2023',
    score: '87.4%',
  },
  {
    degree: 'Matriculation',
    place: 'S.T. Thomas School',
    period: '2020 - 2021',
    score: '83.6%',
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || 'Unable to send message right now.');
      }

      setSubmitStatus({
        type: 'success',
        message: "Message sent successfully! (Note: If this is the first time, check your email inbox to confirm activation from FormSubmit).",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: `Failed to submit: ${error.message || 'Form service error'}. Opening your mail app...`,
      });
      
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1500);
      
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pageClass = darkMode ? 'theme-dark' : 'theme-light';

  return (
    <div className={`portfolio-shell ${pageClass}`}>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Vaibhav Mehta home">
          VM
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Open navigation"
            title="Menu"
          >
            <MdMenu />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                <MdLocationOn /> Khatauli, Muzaffarnagar
              </span>
              <h1>Vaibhav Mehta</h1>
              <p className="hero-lede">
                B.Tech CSE student building practical full-stack projects, clean interfaces,
                and steady problem-solving habits.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#contact">
                  <MdEmail /> Contact me
                </a>
                <a className="secondary-action" href="/Portfolio/Resume.pdf" target="_blank" rel="noreferrer">
                  <MdDownload /> Resume
                </a>
              </div>
              <div className="profile-links" aria-label="Profile links">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  <FaLinkedin /> LinkedIn <MdArrowOutward />
                </a>
                <a href={CODOLIO_URL} target="_blank" rel="noreferrer">
                  <FaCode /> Codolio <MdArrowOutward />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <MdEmail /> Email
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-panel"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="avatar-orbit">
                <div className="avatar-core">VM</div>
              </div>
              <div className="panel-text">
                <p>Current focus</p>
                <h2>DevOps, AI engineering, and System Design.</h2>
              </div>
              <div className="mini-stack">
                <span>DevOps</span>
                <span>AI</span>
                <span>System Design</span>
                <span>C++</span>
              </div>
            </motion.div>
          </div>

          <div className="stats-strip" aria-label="Profile highlights">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band about-band">
          <div className="section-heading">
            <span>About</span>
            <h2>Organized, collaborative, and serious about shipping.</h2>
          </div>
          <p className="about-copy">
            I am an undergraduate Computer Science student with a strong habit of planning
            work early, communicating clearly, and leading teams through project delivery.
            My best work sits at the intersection of usable interfaces, reliable logic, and
            consistent learning through coding platforms and certifications.
          </p>
        </section>

        <section className="section-wrap" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Beyond projects: leadership, outreach, and internship work.</h2>
          </div>
          <div className="experience-grid">
            {experienceHighlights.map((item) => {
              const ExperienceIcon = item.icon;
              return (
                <motion.article
                  className="experience-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="experience-icon">
                    <ExperienceIcon />
                  </div>
                  <h3>{item.title}</h3>
                  <strong>{item.organization}</strong>
                  <p>{item.summary}</p>
                  <small>{item.proof}</small>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section-wrap" id="work">
          <div className="section-heading">
            <span>Selected work</span>
            <h2>Projects with real user flows.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <motion.article
                className={`project-card accent-${project.accent}`}
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
              >
                <div className="project-icon">
                  <MdWorkOutline />
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <small>{project.role}</small>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-band coding-band" id="coding">
          <div className="codolio-card">
            <div className="codolio-card-header">
              <div>
                <span className="codolio-kicker">Coding profile</span>
                <h2>Vaibhav Mehta on Codolio</h2>
                <p>
                  A compact profile card for recruiters to jump into my coding progress,
                  badges, and problem-solving footprint.
                </p>
              </div>
              <div className="codolio-avatar">VM</div>
            </div>

            <div className="codolio-stat-grid">
              {codingCardStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="codolio-footer">
              <a href={CODOLIO_URL} target="_blank" rel="noreferrer">
                <FaCode /> Open full Codolio profile <MdArrowOutward />
              </a>
              <a href={CODOLIO_CARD_URL} target="_blank" rel="noreferrer">
                View Codolio card <MdArrowOutward />
              </a>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="skills">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Tools I use to build and solve.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-title">
                    <GroupIcon />
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-list">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span key={skill.name}>
                          <SkillIcon /> {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-wrap two-column-section" id="education">
          <div>
            <div className="section-heading compact">
              <span>Education</span>
              <h2>Academic path</h2>
            </div>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.degree}>
                  <FaGraduationCap />
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.place}</p>
                    <small>
                      {item.period} - {item.score}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="section-heading compact">
              <span>Proof points</span>
              <h2>Achievements</h2>
            </div>
            <div className="achievement-list">
              {achievements.map((achievement, index) => (
                <div className="achievement-item" key={achievement}>
                  {index < 2 ? <FaTrophy /> : <FaAward />}
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band">
          <div className="section-heading">
            <span>Certifications</span>
            <h2>Continuous learning record.</h2>
          </div>
          <div className="cert-row">
            {certifications.map((certification) => (
              <div className="cert-item" key={certification}>
                <FaCertificate />
                <span>{certification}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Let's build the next opportunity.</h2>
          </div>

          <div className="contact-grid">
            <aside className="contact-info">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <MdEmail />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <FaLinkedin />
                <span>LinkedIn profile</span>
              </a>
              <a href={CODOLIO_URL} target="_blank" rel="noreferrer">
                <FaCode />
                <span>Codolio coding profile</span>
              </a>
              <p>
                Open to internship conversations, project collaborations, and technical
                communities where I can contribute with consistency.
              </p>
            </aside>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus && (
                <div className={`form-status ${submitStatus.type}`}>{submitStatus.message}</div>
              )}
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about the role, project, or collaboration..."
                  rows="5"
                  required
                />
              </label>
              <button type="submit" disabled={isSubmitting}>
                <MdSend />
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>(c) 2026 Vaibhav Mehta</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
