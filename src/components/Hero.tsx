import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaEnvelope, FaCode } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { personalInfo } from "../constants/portfolioData";
import TypingTagline from "./TypingTagline";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex justify-center"
          >
            <Avatar className="w-28 h-28 md:w-36 md:h-36 border-4 border-secondary/20 shadow-teal">
              <AvatarImage
                src="/profile.jpg"
                alt={personalInfo.name}
                className="object-cover [object-position:center_28%]"
              />
              <AvatarFallback className="text-2xl font-bold bg-hero-gradient text-white">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <span className="text-secondary font-medium text-lg">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl pb-3 md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <TypingTagline taglines={personalInfo.taglines} />

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg gap-2 shadow-teal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("projects")}
              className="btn btn-outline btn-lg gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              View Projects
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="btn btn-ghost btn-lg gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <p className="text-xs mt-2">Scroll down</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
