import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";
import { timelineData } from "../constants/portfolioData";

const Timeline = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "graduation":
        return <FaGraduationCap className="text-secondary text-xl" />;
      case "briefcase":
        return <FaBriefcase className="text-secondary text-xl" />;
      case "rocket":
        return <FaRocket className="text-secondary text-xl" />;
      default:
        return <FaBriefcase className="text-secondary text-xl" />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic journey and professional experience that shaped my
            skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <ul className="timeline timeline-vertical">
              {timelineData.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {index !== 0 && <hr className="bg-border" />}
                  <div className="timeline-start">
                    <time className="font-mono italic text-secondary font-semibold">
                      {item.year}
                    </time>
                  </div>
                  <div className="timeline-middle">
                    <div className="bg-card border border-border rounded-full p-3 shadow-soft">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <div
                    className={`timeline-end ${
                      index % 2 === 0 ? "timeline-box" : "timeline-box"
                    }`}
                  >
                    <div className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-teal transition-shadow duration-300 min-w-80">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                      <div
                        className={`badge ${
                          item.type === "education"
                            ? "badge-secondary"
                            : item.type === "work"
                            ? "badge-primary"
                            : "badge-accent"
                        } mt-3 p-2`}
                      >
                        {item.type === "education"
                          ? "Education"
                          : item.type === "work"
                          ? "Work Experience"
                          : "Upskilling"}
                      </div>
                    </div>
                  </div>
                  {index !== timelineData.length - 1 && (
                    <hr className="bg-border" />
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-card border border-border rounded-full p-3 shadow-soft">
                    {getIcon(item.icon)}
                  </div>
                  {index !== timelineData.length - 1 && (
                    <div className="w-px bg-border h-16 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 bg-card p-6 rounded-lg shadow-card border border-border">
                  <time className="font-mono italic text-secondary font-semibold text-sm">
                    {item.year}
                  </time>
                  <h3 className="text-lg font-semibold text-primary mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  <div
                    className={`badge ${
                      item.type === "education"
                        ? "badge-secondary"
                        : item.type === "work"
                        ? "badge-primary"
                        : "badge-accent"
                    } mt-3 p-2`}
                  >
                    {item.type === "education"
                      ? "Education"
                      : item.type === "work"
                      ? "Work Experience"
                      : "Upskilling"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
