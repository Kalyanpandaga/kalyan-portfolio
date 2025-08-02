import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { personalInfo } from "../constants/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: personalInfo.socialLinks.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: personalInfo.socialLinks.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: personalInfo.socialLinks.email,
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold hover:text-secondary transition-colors duration-300"
            >
              {personalInfo.name}
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/80 mb-8 max-w-md mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-20 h-px bg-primary-foreground/30 mx-auto mb-8"
          ></motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-primary-foreground/70 text-sm"
          >
            <p className="flex items-center justify-center gap-2 mb-2">
              Made with <FaHeart className="text-red-400" /> by{" "}
              {personalInfo.name}
            </p>
            <p className="mt-2 text-sm text-primary-foreground/60 italic">
              No © copyright issues. Feel free to copy. If you need any help,
              ping me!
            </p>
          </motion.div>

          {/* Back to top hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <button
              onClick={scrollToTop}
              className="text-xs text-primary-foreground/50 hover:text-secondary transition-colors duration-300"
            >
              Click here to scroll to top ↑
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
