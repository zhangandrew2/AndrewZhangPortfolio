"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Code,
  Server,
  Database,
  Smartphone
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Contact Organizer Back-End API",
      description:
        "A comprehensive backend API for secure contact management featuring user authentication, CRUD operations, and robust data validation. Built with Node.js and Express.js with MongoDB integration.",
      image: "/work-1.png",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      category: "Backend",
      icon: Server,
      links: {
        github: "https://github.com/zhangandrew2/ContactOrganizer",
        live: null
      },
      features: [
        "User authentication and authorization",
        "RESTful API design",
        "Data validation and sanitization",
        "Error handling and logging",
        "MongoDB integration"
      ]
    },
    {
      id: 2,
      title: "Wordle Web Game",
      description:
        "An interactive implementation of the popular Wordle game with modern UI/UX design, real-time feedback, and engaging animations. Features leaderboards and social sharing capabilities.",
      image: "/work-2.png",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Local Storage"],
      category: "Frontend",
      icon: Code,
      links: {
        github: "https://github.com/ArvinDing/Ranked-Wordle",
        live: null
      },
      features: [
        "Interactive game mechanics",
        "Real-time feedback system",
        "Responsive design",
        "Local storage for progress",
        "Social sharing features"
      ]
    },
    {
      id: 3,
      title: "B-Link Social Media App",
      description:
        "A comprehensive social media platform designed for the UCLA community (Bruin Link). Features include real-time messaging, post creation, user profiles, and community engagement tools.",
      image: "/work-3.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
      category: "Full-Stack",
      icon: Database,
      links: {
        github: "https://github.com/illiashkirko/CS35LProject",
        live: null
      },
      features: [
        "Real-time messaging",
        "User authentication",
        "Post creation and interaction",
        "Community features",
        "AWS deployment"
      ]
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "A modern task management application with team collaboration features, real-time updates, and project tracking. Built with React and Firebase for seamless user experience.",
      image: "/work-1.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript", "PWA"],
      category: "Frontend",
      icon: Code,
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Team collaboration",
        "Real-time synchronization",
        "Project tracking",
        "Responsive design",
        "Offline support"
      ]
    },
    {
      id: 5,
      title: "E-Commerce API",
      description:
        "A scalable e-commerce backend API with payment integration, inventory management, and order processing. Features comprehensive admin dashboard and analytics.",
      image: "/work-2.png",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Stripe"],
      category: "Backend",
      icon: Server,
      links: {
        github: "#",
        live: null
      },
      features: [
        "Payment processing",
        "Inventory management",
        "Order tracking",
        "Admin dashboard",
        "Analytics and reporting"
      ]
    },
    {
      id: 6,
      title: "Mobile Fitness Tracker",
      description:
        "A comprehensive fitness tracking mobile application with workout planning, progress monitoring, and social features. Built with React Native for cross-platform compatibility.",
      image: "/work-3.png",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io"
      ],
      category: "Mobile",
      icon: Smartphone,
      links: {
        github: "#",
        live: null
      },
      features: [
        "Workout planning",
        "Progress tracking",
        "Social features",
        "Cross-platform support",
        "Real-time updates"
      ]
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Full-Stack", "Mobile"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg page-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Here&apos;s a collection of projects I&apos;ve worked on,
              showcasing my skills in full-stack development, API design, mobile
              applications, and more. Each project represents a unique challenge
              and learning experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding-sm">
        <div className="container-custom">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card-bg text-muted hover:text-foreground hover:bg-primary/20 border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding-lg bg-card-bg/30">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="card h-full overflow-hidden hover:border-primary/50">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full">
                        <project.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-6 h-6 text-white" />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-6 h-6 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-foreground">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex space-x-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary transition-colors duration-300"
                            title="View Source Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary transition-colors duration-300"
                            title="View Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <span className="text-xs text-muted">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-muted">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding-lg">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in{" "}
              <span className="gradient-text">Collaborating?</span>
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and bring
              innovative ideas to life. Let&apos;s create something amazing
              together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary px-8 py-4 text-lg">
                Get In Touch
              </a>
              <a
                href="/AndrewZhang2025Resume.pdf"
                download
                className="btn-outline px-8 py-4 text-lg"
              >
                Download Resume
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
