import { motion } from "framer-motion";
import {
  FaDownload,
  FaEye,
  FaFileAlt,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { personalInfo } from "../constants/portfolioData";

const Resume = () => {
  const resumeHighlights = [
    {
      icon: <FaBriefcase className="text-secondary" />,
      title: "1.6+ Years Professional Experience",
      description:
        "Backend development at NxtWave using Django REST API, building scalable APIs and integrating business features.",
    },
    {
      icon: <FaGraduationCap className="text-secondary" />,
      title: "Strong Full Stack Skillset",
      description:
        "MERN stack, Django, REST APIs, AI integrations, real-time apps with Socket.IO, and scalable database design.",
    },
    {
      icon: <FaFileAlt className="text-secondary" />,
      title: "Notable Projects",
      description:
        "AI Mock Interview Platform, DevTinder (real-time chat), Personal Expense Tracker API, and Nxt Trendz e-commerce clone.",
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Resume
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my experience and skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Resume highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  What's in my resume?
                </h3>
                <div className="space-y-6">
                  {resumeHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-card border border-border"
                    >
                      <div className="text-2xl mt-1">{highlight.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-accent p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">
                  Looking for:
                </h4>
                <p className="text-muted-foreground">
                  Full Stack Developer, MERN Stack Developer, or Backend
                  Developer positions where I can contribute to innovative
                  projects and continue growing my skills.
                </p>
              </div>
            </motion.div>

            {/* Right side - Resume preview and download */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Resume preview mockup */}
              <div className="relative mb-8">
                <div className="bg-card border-2 border-border rounded-lg shadow-card mx-auto w-64 h-80 overflow-hidden">
                  <div className="bg-hero-gradient h-20 flex items-center justify-center">
                    <div className="text-white font-bold text-lg">Kalyan</div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-2 bg-secondary/30 rounded"></div>
                    <div className="h-2 bg-secondary/20 rounded w-3/4"></div>
                    <div className="h-2 bg-secondary/20 rounded w-1/2"></div>
                    <div className="mt-4 space-y-1">
                      <div className="h-1 bg-muted rounded"></div>
                      <div className="h-1 bg-muted rounded w-4/5"></div>
                      <div className="h-1 bg-muted rounded w-3/5"></div>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="h-1 bg-muted rounded"></div>
                      <div className="h-1 bg-muted rounded w-2/3"></div>
                      <div className="h-1 bg-muted rounded w-4/5"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-secondary text-white p-2 rounded-full"
                >
                  <FaFileAlt className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Download buttons */}
              <div className="space-y-4">
                <motion.a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  download="Kalyan_Resume.pdf"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg gap-3 w-full shadow-teal"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download Resume (PDF)
                </motion.a>

                <motion.a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg gap-3 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye />
                  View Online
                </motion.a>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Last updated: July 2025 • PDF format • 2 pages
              </p>
            </motion.div>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-card p-8 rounded-xl shadow-card border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Full Stack Developer with 1.6+ years of experience specializing
                in backend development (Django REST API) and growing expertise
                in MERN stack applications. Experienced in building scalable
                APIs, AI-powered features, and responsive frontends with React.
                Proven track record of delivering user-centric solutions and
                maintaining clean, maintainable code.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
