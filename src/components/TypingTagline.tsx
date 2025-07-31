import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingTagline = ({ taglines }: { taglines: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = taglines[tagIndex];

    let typingSpeed = isDeleting ? 5 : 40;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentTagline.length) {
        setDisplayText(currentTagline.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTagline.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTagline.length) {
        setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTagIndex((tagIndex + 1) % taglines.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, tagIndex, taglines]);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9 }}
      className="text-xl md:text-2xl text-muted-foreground mb-8 font-light h-8"
    >
      {displayText}
      <span className="border-r-2 border-secondary animate-pulse ml-1"></span>
    </motion.h2>
  );
};

export default TypingTagline;
