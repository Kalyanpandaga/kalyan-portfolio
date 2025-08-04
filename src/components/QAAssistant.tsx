import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaRedo, FaSpinner } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import {
  personalInfo,
  placeholderExampleQuestions,
} from "../constants/portfolioData";
import { P } from "node_modules/framer-motion/dist/types.d-Bq-Qm38R";

const QAAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  // Rotate placeholder text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder(
        (prev) => (prev + 1) % placeholderExampleQuestions.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const PRIVATE_KEY = import.meta.env.VITE_QA_ASSISTANT_PRIVATE_KEY;
      if (!BASE_URL || !PRIVATE_KEY) {
        throw new Error("API base URL or private key is not defined");
      }

      const response = await fetch(`${BASE_URL}/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": PRIVATE_KEY, // <-- Add API key here
        },
        body: JSON.stringify({ question: question.trim() }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnswer(
        data.answer ||
          "Sorry, I received an empty response. Please try again. If the issue persists, contact Kalyan at " +
            personalInfo.email
      );
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer(
        `Sorry, I'm unable to answer this. Please contact Kalyan at ${personalInfo.email} or reach out directly through the contact section.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setQuestion("");
    setAnswer("");
    setIsLoading(false);
  };

  return (
    <section id="qa-assistant" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Q & A AI Assistant
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ask any questions about my skills, experience, or career journey —
            and get instant AI answers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Question Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="shadow-card border border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder={
                        placeholderExampleQuestions[currentPlaceholder]
                      }
                      className="text-base h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading || !question.trim()}
                    className="h-12 px-6 shadow-teal"
                  >
                    {isLoading ? (
                      <FaSpinner className="w-4 h-4 animate-spin" />
                    ) : (
                      <FaPaperPlane className="w-4 h-4" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Answer Display */}
          <AnimatePresence>
            {answer && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-6"
              >
                <Card className="shadow-card border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        AI Answer
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleReset}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <FaRedo className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {answer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-4 bg-accent/30 rounded-lg border border-border">
                <h4 className="font-medium text-primary text-sm mb-1">
                  💼 Career
                </h4>
                <p className="text-xs text-muted-foreground">
                  Ask about experience, skills, or projects
                </p>
              </div>
              <div className="p-4 bg-accent/30 rounded-lg border border-border">
                <h4 className="font-medium text-primary text-sm mb-1">
                  🚀 Technical
                </h4>
                <p className="text-xs text-muted-foreground">
                  Inquire about technologies and expertise
                </p>
              </div>
              <div className="p-4 bg-accent/30 rounded-lg border border-border">
                <h4 className="font-medium text-primary text-sm mb-1">
                  📈 Journey
                </h4>
                <p className="text-xs text-muted-foreground">
                  Learn about career path and growth
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QAAssistant;
