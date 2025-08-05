"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  Download,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Simulate form submission - replace with actual form handling
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the form data to your backend or form service
      console.log("Form submitted:", formData);

      setFormStatus("success");
      setStatusMessage(
        "Thank you for your message! I&apos;ll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zhangandrew2@gmail.com",
      href: "mailto:zhangandrew2@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(949) 529-8128",
      href: "tel:+19495298128",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Los Angeles, CA",
      href: null,
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/zhangandrew2",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/zhangandrew2",
      color: "hover:text-gray-400"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/zhangandrew03",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-xl page-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              I&apos;m always excited to connect with fellow developers,
              potential collaborators, and anyone interested in discussing
              technology, opportunities, or innovative projects. Let&apos;s
              start a conversation!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding-xl bg-card-bg/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Let&apos;s <span className="gradient-text">Connect</span>
                </h2>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-lg glass hover:border-primary/50 transition-colors duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-primary/20`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {info.label}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-border/50 text-muted transition-all duration-300 hover:scale-110 hover:bg-primary/20 ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <a
                    href="/AndrewZhang2025Resume.pdf"
                    download
                    className="btn-outline flex items-center gap-2 w-fit"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                {/* Status Message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-lg mb-6 ${
                      formStatus === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {formStatus === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: formStatus === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === "loading" ? 1 : 0.98 }}
                  >
                    {formStatus === "loading" ? (
                      <>
                        <div className="loading-spinner w-5 h-5 border-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding-xl">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What types of projects do you work on?",
                answer:
                  "I work on a wide range of projects including web applications, mobile apps, APIs, and full-stack solutions. I&apos;m particularly interested in projects involving React, Node.js, Python, and modern web technologies."
              },
              {
                question: "Are you available for freelance work?",
                answer:
                  "Yes! I&apos;m open to freelance opportunities, especially during breaks from my studies. I&apos;m particularly interested in projects that allow me to learn new technologies and work with innovative teams."
              },
              {
                question: "What&apos;s your preferred tech stack?",
                answer:
                  "I enjoy working with React/Next.js for frontend, Node.js/Express or Python/Django for backend, and various databases like MongoDB and PostgreSQL. However, I&apos;m always eager to learn and adapt to new technologies based on project requirements."
              },
              {
                question: "How can we collaborate?",
                answer:
                  "I&apos;m open to various forms of collaboration including internships, part-time work, open source contributions, and project partnerships. Feel free to reach out through the contact form or email to discuss opportunities!"
              }
            ].map((faq, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {faq.question}
                </h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
