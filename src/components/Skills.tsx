import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiPostman,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";
import { skills } from "../constants/portfolioData";

const Skills = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    FaReact: <FaReact className="text-blue-500" />,
    FaJs: <FaJs className="text-yellow-500" />,
    FaHtml5: <FaHtml5 className="text-orange-500" />,
    FaCss3Alt: <FaCss3Alt className="text-blue-600" />,
    SiTailwindcss: <SiTailwindcss className="text-cyan-500" />,
    SiTypescript: <SiTypescript className="text-blue-600" />,
    FaNodeJs: <FaNodeJs className="text-green-600" />,
    SiExpress: <SiExpress className="text-gray-600" />,
    SiDjango: <SiDjango className="text-green-700" />,
    FaServer: <FaServer className="text-gray-600" />,
    FaPython: <FaPython className="text-blue-500" />,
    SiSocketdotio: <SiSocketdotio className="text-gray-800" />,
    SiMongodb: <SiMongodb className="text-green-500" />,
    SiPostgresql: <SiPostgresql className="text-blue-600" />,
    SiSqlite: <SiSqlite className="text-blue-400" />,
    FaGitAlt: <FaGitAlt className="text-orange-600" />,
    FaGithub: <FaGithub className="text-gray-800" />,
    SiVisualstudiocode: <FaServer className="text-blue-500" />,
    SiPostman: <SiPostman className="text-orange-500" />,
    FaDocker: <FaDocker className="text-blue-500" />,
    SiJsonwebtokens: <SiJsonwebtokens className="text-purple-500" />,
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: skills.frontend,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: skills.backend,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database",
      skills: skills.database,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life and
            create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="text-center">
                <div
                  className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-card p-4 rounded-lg shadow-card border border-border hover:shadow-teal transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {iconMap[skill.icon] || <FaServer />}
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring
              new frameworks, tools, and best practices to stay at the forefront
              of web development. Currently diving deeper into AI integrations
              and cloud technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
