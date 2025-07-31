import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa";
import { projects } from "../constants/portfolioData";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "fullstack"
  >("fullstack");

  const tabConfig = {
    fullstack: {
      icon: <FaLayerGroup />,
      label: "Full Stack",
      projects: projects.fullstack,
    },
    frontend: {
      icon: <FaCode />,
      label: "Frontend",
      projects: projects.frontend,
    },
    backend: {
      icon: <FaServer />,
      label: "Backend",
      projects: projects.backend,
    },
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl shadow-card border border-border overflow-hidden hover:shadow-teal transition-all duration-300 group"
    >
      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
            {project.name}
          </h3>
          <div className="flex space-x-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </motion.a>
            )}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-medium text-primary mb-3">Key Features:</h4>
          <ul className="space-y-1">
            {project.features
              .slice(0, 3)
              .map((feature: string, index: number) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            {project.features.length > 3 && (
              <li className="text-sm text-secondary font-medium">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="font-medium text-primary mb-3">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Here's a showcase of my recent work spanning full-stack
            applications, frontend interfaces, and backend services. Each
            project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div
            className="
      flex bg-card rounded-xl p-1 shadow-card border border-border
      space-x-1 sm:space-x-2
    "
          >
            {(Object.keys(tabConfig) as Array<keyof typeof tabConfig>).map(
              (tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
          flex items-center space-x-1 sm:space-x-2
          px-3 py-2 sm:px-6 sm:py-3
          rounded-lg font-medium transition-all duration-300
          text-xs sm:text-sm md:text-base
          ${
            activeTab === tab
              ? "bg-secondary text-white shadow-md"
              : "text-muted-foreground hover:text-primary"
          }
        `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hide icon on extra small screens */}
                  <span className="hidden sm:inline text-lg">
                    {tabConfig[tab].icon}
                  </span>
                  <span>{tabConfig[tab].label}</span>
                  <span
                    className="
            px-1 sm:px-2 py-0.5 bg-current/20 rounded-full text-[10px] sm:text-xs
          "
                  >
                    {tabConfig[tab].projects.length}
                  </span>
                </motion.button>
              )
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tabConfig[activeTab].projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-hero-gradient p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="mb-6 opacity-90">
              Check out my GitHub for more projects and open source
              contributions.
            </p>
            <motion.a
              href="https://github.com/kalyanpandaga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg text-white border-white hover:bg-white hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
