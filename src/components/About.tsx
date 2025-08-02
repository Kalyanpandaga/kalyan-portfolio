import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket, FaHeart } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { aboutInfo, personalInfo } from "../constants/portfolioData";

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-secondary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: <FaLightbulb className="text-secondary" />,
      title: "Problem Solving",
      description: "Finding innovative solutions to complex challenges",
    },
    {
      icon: <FaRocket className="text-secondary" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience",
    },
    {
      icon: <FaHeart className="text-secondary" />,
      title: "User-Centric",
      description: "Building applications that users love to interact with",
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image for About Section */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Avatar className="w-24 h-24 border-4 border-secondary/20 shadow-teal">
                <AvatarImage
                  src="/about-us-image.jpg"
                  alt={personalInfo.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-xl font-bold bg-hero-gradient text-white">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              My Developer Journey
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {aboutInfo.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-card border border-border">
                <div className="text-2xl font-bold text-secondary">
                  {aboutInfo.experience}
                </div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-card border border-border">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card border border-border">
              <h4 className="font-semibold text-primary mb-2">
                Current Focus:
              </h4>
              <p className="text-muted-foreground">{aboutInfo.focus}</p>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">
              What I Bring to the Table
            </h3>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-card border border-border hover:shadow-teal transition-shadow duration-300"
                >
                  <div className="text-2xl">{highlight.icon}</div>
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

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-hero-gradient p-6 rounded-lg text-white text-center"
            >
              <h4 className="font-semibold mb-2">Ready to collaborate?</h4>
              <p className="text-sm opacity-90">
                Let's build something amazing together! I'm always excited to
                work on innovative projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
