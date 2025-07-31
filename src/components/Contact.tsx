import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../constants/portfolioData';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-secondary" />,
      title: "Email",
      value: personalInfo.email,
      link: personalInfo.socialLinks.email,
      description: "Best for project inquiries"
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: personalInfo.socialLinks.linkedin,
      description: "Professional networking"
    },
    {
      icon: <FaGithub className="text-gray-800" />,
      title: "GitHub",
      value: "View my code",
      link: personalInfo.socialLinks.github,
      description: "Open source contributions"
    }
  ];

  const quickInfo = [
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      label: "Location",
      value: "India"
    },
    {
      icon: <FaPhone className="text-green-500" />,
      label: "Availability",
      value: "Open to opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, interesting projects, 
            or just have a chat about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left side - Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you have a project in mind, want to collaborate, 
                  or just want to say hello, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-xl">{info.icon}</div>
                      <div>
                        <span className="text-sm text-muted-foreground">{info.label}:</span>
                        <span className="ml-2 font-medium text-foreground">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                <h4 className="font-semibold text-primary mb-2">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to emails within 24 hours. 
                  For urgent matters, LinkedIn might be faster.
                </p>
              </div>
            </motion.div>

            {/* Right side - Contact methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Choose Your Preferred Method</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-teal transition-all duration-300 h-full group">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <h4 className="font-semibold text-primary mb-2">{method.title}</h4>
                      <p className="text-foreground font-medium mb-2">{method.value}</p>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-hero-gradient p-8 rounded-xl text-white text-center mt-12"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
                <p className="mb-6 opacity-90">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's build something amazing together!
                </p>
                <motion.a
                  href={personalInfo.socialLinks.email}
                  className="btn btn-ghost btn-lg text-white border-white hover:bg-white hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="mr-2" />
                  Send Message
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;