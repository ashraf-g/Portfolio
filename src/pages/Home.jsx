import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../assets/images/avatar.png";
import Main from "../components/layouts/Main";

const techStack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
  },
  {
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Ant Design",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/antdesign/antdesign-original.svg",
  }, // unofficial
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "JWT",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jsonwebtokens.svg",
  },
  {
    name: "Socket.IO",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
  },
  {
    name: "NLP",
    icon: "https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png",
  }, // generic
  {
    name: "Web Hosting",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netlify.svg",
  }, // generic
];

const projects = [
  {
    title: "Voice | Text to Sign Language Converter",
    description:
      "Django-based web app translating voice/text to Indian Sign Language with NLP and animations.",
    link: "https://github.com/ashraf-g/voice-to-sign-language", // replace with actual repo if needed
    tags: ["Django", "NLP", "MySQL", "Accessibility"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "MERN stack chat app with JWT-secured WebSocket communication using Socket.IO.",
    // link: "https://github.com/ashraf-g/realtime-chat", // replace with actual repo if needed
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    title: "Online Code Editor",
    description:
      "Collaborative MERN stack-based code editor with support for Python, PHP, and JavaScript.",
    link: "https://github.com/ashraf-g/online-code-editor", // replace with actual repo if needed
    tags: ["MERN", "Real-time", "Web Editor"],
  },
  {
    title: "Event Management System",
    description:
      "Multi-role (Admin/Vendor/User) event platform built with PHP and MySQL.",
    // link: "https://github.com/ashraf-g/event-management", // replace with actual repo if needed
    tags: ["PHP", "MySQL", "Web App"],
  },
];

const packages = [
  {
    title: "api-response-utility",
    description:
      "Standardizes API success and error responses for clean backend architecture.",
    link: "https://www.npmjs.com/package/api-response-utility",
    tags: ["Node.js", "Express", "API"],
  },
  {
    title: "react-url-fetcher",
    description:
      "Custom React hook for simplified and consistent API requests.",
    link: "https://www.npmjs.com/package/react-url-fetcher",
    tags: ["React", "Hooks", "Fetch"],
  },
  {
    title: "health-chk",
    description:
      "Simple and effective Node.js middleware for service health checks.",
    link: "https://www.npmjs.com/package/health-chk",
    tags: ["Node.js", "Express", "Monitoring"],
  },
];

const experience = [
  {
    title: "Software Developer",
    company: "Verheffen Info-tech, Pune, India",
    duration: "Jun 2024 – Jun 2025",
    details: `
      • Developed scalable backend systems using Node.js and Express for platforms in ticket tracking, real estate, and HRMS domains.  
      • Designed and implemented RESTful APIs, integrated MongoDB, and optimized performance and security across services.  
      • Built secure, role-based authentication using JWT and Express middleware.  
      • Contributed to frontend enhancements using React.js, demonstrating full-stack development skills.  
      • Practiced modern development workflows: Git for version control, Postman for API documentation, and Docker for containerization.  
      • Actively participated in Agile ceremonies including sprint planning, code reviews, and continuous deployment via Jenkins.  
      • Integrated interactive EdTech tools into internal training modules and developed automation features for staff management.
    `,
  },
  {
    title: "Machine Learning & Web Intern",
    company: "Clifton IT Solutions, Pune, India",
    duration: "Jan 2024 – Mar 2025",
    details: `
      • Designed weather prediction models using ARIMA and Python for large datasets.  
      • Built a real-time chat web app with the MERN stack and Socket.IO, implementing JWT authentication for secure messaging.  
      • Applied Agile methodologies to iterate on feature design and enhance app responsiveness.
    `,
  },
];

const teaching = [
  {
    title: "Coding Instructor (Part-Time)",
    company: "Abeda Inamdar Senior College",
    duration: "Jul 2023 – Dec 2023",
    details: `• Taught Python, PHP, and JavaScript to undergraduate students.
• Conducted hands-on workshops on React.js, Git, and real-time communication with Socket.IO.
• Mentored final-year students on full stack projects and best coding practices.
• Assisted in curriculum development and practical lab sessions for CS courses.`,
  },
];

const research = [
  {
    title:
      "Voice | Text to Sign Language — Improving Communication for the Deaf Community",
    company: "JETIR, Volume 12, Issue 4, April 2025",
    duration: "",
    details: `Research on a web-based ISL converter using Django, MySQL, and NLP to aid communication accessibility for the Deaf community.`,
    link: "https://www.jetir.org/view?paper=JETIR2504353",
  },
];

const ProjectCard = ({ title, description, link, tags = [] }) => (
  <div className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition">
    <h4 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">
      {title}
    </h4>
    <p className="text-sm mb-3 text-text-light dark:text-text-dark">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs rounded-full bg-secondary-light dark:bg-secondary-dark bg-opacity-30 dark:bg-opacity-20 text-text-light dark:text-text-dark"
        >
          {tag}
        </span>
      ))}
    </div>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary-light dark:text-primary-dark hover:underline"
      >
        🔗 View
      </a>
    )}
  </div>
);

const Home = () => {
  const [showTechStack, setShowTechStack] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "experience", label: "💼 Experience" },
    { id: "projects", label: "🚀 Projects" },
    { id: "packages", label: "📦 NPM Packages" },
    { id: "teaching", label: "📚 Teaching & Academic" },
    { id: "research", label: "📝 Publications" },
  ];

  return (
    <Main>
      <main className="text-text-light dark:text-text-dark">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center bg-gradient-to-br 
      from-primary-light via-secondary-light to-background-light 
      dark:from-primary-dark dark:via-primary-dark dark:to-primary-dark"
        >
          <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Hi, I’m{" "}
                <span className="text-primary-light  dark:text-secondary-dark">
                  <Typewriter
                    options={{
                      strings: [
                        "Gulam Ashraf",
                        "Backend Engineer",
                        "Node.js Developer",
                        "Full Stack Developer",
                        "Educator",
                        "Open Source Enthusiast",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </span>
              </h1>
              <p className="text-lg max-w-xl text-text-light dark:text-text-dark">
                Turning complex problems into clean, scalable APIs — one line of
                code at a time.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-primary-light dark:bg-secondary-dark text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                >
                  🚀 View Projects
                </button>
                <button
                  onClick={() => setShowTechStack(!showTechStack)}
                  className="border border-primary-light dark:border-secondary-dark text-primary-light dark:text-white px-6 py-3 rounded-lg 
              hover:bg-primary-dark dark:hover:bg-secondary-light hover:bg-opacity-10 dark:hover:bg-opacity-20 transition"
                >
                  {showTechStack ? "Hide Tech" : "💻 Show Tech Stack"}
                </button>
              </div>
              {showTechStack && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-full text-sm font-medium 
                    bg-opacity-40 dark:bg-opacity-40 text-text-light dark:text-text-dark"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 
            border-primary-light dark:border-primary-dark bg-white/10 backdrop-blur-sm"
              >
                <img
                  src={avatar}
                  alt="Gulam Ashraf"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-20 bg-background-light dark:bg-background-dark"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              About Me
            </h2>
            <p className="text-lg mb-4 leading-relaxed max-w-3xl text-text-light dark:text-text-dark">
              I’m a backend-focused full stack developer with a strong
              foundation in performance, scalability, and developer experience.
              I specialize in building secure, production-ready applications
              using Node.js, Express.js, and Django, and have experience
              designing cloud-native systems with tools like Docker and Jenkins.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl text-text-light dark:text-text-dark">
              Beyond development, I’m passionate about EdTech, real-time
              communication, and open-source contributions. I’ve mentored
              students in full stack development, published NPM packages, and
              worked on accessibility-focused projects like voice-to-sign
              language converters — all with the goal of building technology
              that creates real impact.
            </p>
          </div>
        </section>

        {/* Projects / Packages / Experience Tabs */}
        <section
          id="projects"
          className="py-20 bg-secondary-light dark:bg-secondary-dark"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">Highlights</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full font-medium transition ${
                    activeTab === tab.id
                      ? "bg-primary-light text-white dark:bg-primary-dark"
                      : "border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Projects Tab  */}
              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                  ))}
                </motion.div>
              )}
              {/* NPM packages tab  */}
              {activeTab === "packages" && (
                <motion.div
                  key="packages"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {packages.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                  ))}
                </motion.div>
              )}
              {/* Experience Tab */}
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {experience.map((e) => (
                    <div
                      key={e.title}
                      className="p-5 bg-white dark:bg-background-dark rounded-lg shadow-md mb-6"
                    >
                      <h4 className="text-xl font-semibold">{e.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {e.company} &bull; {e.duration}
                      </span>
                      <p
                        className="mt-3 whitespace-pre-line text-gray-700 dark:text-gray-300"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {e.details}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
              {/* Teaching Tab  */}
              {activeTab === "teaching" && (
                <motion.div
                  key="teaching"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {teaching.map((t) => (
                    <div
                      key={t.title}
                      className="p-5 bg-white dark:bg-background-dark rounded-lg shadow-md mb-6"
                    >
                      <h4 className="text-xl font-semibold">{t.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {t.company} &bull; {t.duration}
                      </span>
                      <p
                        className="mt-3 whitespace-pre-line text-gray-700 dark:text-gray-300"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {t.details}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
              {activeTab === "research" && (
                <motion.div
                  key="research"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {research.map((r) => (
                    <div
                      key={r.title}
                      className="p-5 bg-white dark:bg-background-dark rounded-lg shadow-md mb-6"
                    >
                      <h4 className="text-xl font-semibold">{r.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {r.company} {r.duration && `• ${r.duration}`}
                      </span>
                      <p
                        className="mt-3 whitespace-pre-line text-gray-700 dark:text-gray-300"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {r.details}
                      </p>
                      {r.link && (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-light dark:text-primary-dark underline"
                        >
                          Read More
                        </a>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 bg-background-light dark:bg-background-dark text-center text-text-light dark:text-text-dark"
        >
          <div className="container mx-auto px-6 max-w-lg">
            <h2 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              Let’s Connect
            </h2>
            <p className="text-lg mb-6 max-w-xl mx-auto text-text-light dark:text-text-dark">
              Got an idea or want to collaborate? I'm open to freelance, remote,
              and full-time opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <a
                href="mailto:ashrafgulam2020@gmail.com"
                className="bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition"
              >
                📬 Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/gulam-ashraf-99633227b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light dark:text-primary-dark underline hover:opacity-80 transition"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/ashraf-g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light dark:text-primary-dark underline hover:opacity-80 transition"
              >
                💻 GitHub
              </a>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xqalzypn"
              method="POST"
              className="flex flex-col gap-6 text-left"
            >
              <label className="flex flex-col">
                <span className="mb-2 font-semibold">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="px-4 py-3 rounded-md border border-slate-400 dark:border-slate-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="px-4 py-3 rounded-md border border-slate-400 dark:border-slate-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-semibold">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message"
                  className="px-4 py-3 rounded-md border border-slate-400 dark:border-slate-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition resize-none"
                ></textarea>
              </label>

              <button
                type="submit"
                className="bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </Main>
  );
};

export default Home;
