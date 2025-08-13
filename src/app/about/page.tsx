"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Server,
  Database,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript"
      ]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        "Node.js",
        "Express.js",
        "Django",
        "FastAPI",
        "REST APIs",
        "GraphQL"
      ]
    },
    {
      category: "Languages",
      icon: Code,
      technologies: [
        "C++",
        "C",
        "Python",
        "Java",
        "Swift",
        "JavaScript",
        "TypeScript"
      ]
    },
    {
      category: "Database Systems",
      icon: Database,
      technologies: [
        "MongoDB",
        "SQL",
        "PostgreSQL",
        "Firebase",
        "Redis",
        "MySQL"
      ]
    }
  ];

  const experiences = [
    {
      company: "Hemut (YC X25)",
      position: "Software Engineer",
      period: "July 2025 - Present",
      location: "Rockford, IL",
      description: [
        "Building AWS-hosted micro-services (FastAPI + PostgreSQL back-end, Next.js front-end) that power Hemut’s unified trucking \
        management system(TMS): price quoting based off real time rates, optimized scheduling of drivers to loads, live progress tracking, \
        accounting, and AI-driven document parsing, for carriers operating 200+ trucks across the U.S.",
        "Automated dispatcher call handling with a real-time voice agent built on Twilio, OpenAI Whisper (multilingual speech-to-text), \
        LLM-driven orchestration, and ElevenLabs TTS, integrated with PostgreSQL, Redis, S3, and Pinecone for contextual retrieval \
        processing 1M+ events/day, cutting dispatcher administration time by 60%",
        "Implemented a real-time load tracking system by integrating trucks’ Electronic Logging Devices (ELDs) with Google Maps API \
        for geospatial visualization and WebSockets for live location updates, enabling dispatchers and customers to monitor shipments in \
        transit with minimal latency"
      ]
    },
    {
      company: "Tailorflow AI",
      position: "Software Engineer Intern",
      period: "2024",
      location: "Remote",
      description: [
        "Built FastAPI microservices for onboarding workflows; leveraged Redis for state management, reduced API latency by 40%",
        "Developed AI chatbot interface with shadcn/ui (dynamic checklists and progress tracking), boosted user engagement by 2x and \
        reduced UI-related bug reports by 40%."
      ]
    },
    {
      company: "OpenQQuantify",
      position: "Software Engineer Intern",
      period: "2023",
      location: "Remote",
      description: [
        "Optimized Python ETL pipelines (Pandas, SQLAlchemy) to ingest 10M+ records from APIs, normalize datasets, and load into \
        PostgreSQL, achieving 50% faster processing compared to legacy scripts",
        "Executed comprehensive validation suites using Jest and PyTest, ensuring 93% accuracy in LLM-processed outputs",
        "Increased data retrieval performance by 30% across 10,000+ records through PostgreSQL query optimization and indexing"
      ]
    },
    {
      company: "BruinLabs",
      position: "Lead Software Engineer",
      period: "2022-2023",
      location: "Los Angeles, CA",
      description: [
        "Built cross-platform application (React, Tailwind CSS, SwiftUI) that secured investor interest and validated product viability"
      ]
    }
  ];

  const education = {
    school: "University of California, Los Angeles (UCLA)",
    degree: "Bachelor of Science in Computer Science",
    period: "Sep 2021 - Dec 2025",
    location: "Los Angeles, CA",
    courses: [
      "Data Structures and Algorithms",
      "Programming Languages",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Software Engineering",
      "Machine Learning",
      "Computer Graphics"
    ],
    achievements: [
      "Dean's Honor List",
      "Computer Science Honors Program",
      "ACM Chapter Member",
      "UCLA DevX Member"
    ]
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-xl page-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <Image
                      src="/user.png"
                      alt="Andrew Zhang"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="gradient-text">Me</span>
                </h1>
                <div className="space-y-4 text-lg text-muted leading-relaxed">
                  <p>
                    My name is Andrew Zhang and I am currently a senior majoring
                    in Mathematics of Computation at the University of
                    California, Los Angeles (UCLA). I am a dedicated and
                    enthusiastic software engineer with a genuine passion for
                    solving complex problems through innovative software
                    solutions.
                  </p>
                  <p>
                    My academic journey at UCLA has provided me with a solid
                    foundation in math and computer science principles, allowing
                    me to hone my technical skills in various areas of software
                    development. Throughout my time as a student, I have had the
                    opportunity to work on a variety of projects that have
                    further developed my skills, expanded my knowledge base, and
                    taught me valuable lessons in teamwork, communication, and
                    problem-solving.
                  </p>
                  <p>
                    I am always eager to embrace new challenges and learn new
                    technologies. My adaptability and determination to succeed
                    have allowed me to thrive in project-based environments. I
                    invite you to explore my portfolio to learn more about how I
                    can contribute to your team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding-xl bg-card-bg/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-lg text-muted max-w-2xl !text-center">
                Explore my technical skills, professional experience, and
                educational background.
              </p>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-16 border-b border-border gap-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold text-lg transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "text-primary border-primary"
                    : "text-muted border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {/* Skills Tab */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card p-8 lg:p-10 h-full hover:border-primary/50"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <skill.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {skill.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card hover:border-primary/50"
                  >
                    <div className="p-10 lg:p-12 xl:p-16">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">
                            {exp.company}
                          </h3>
                          <h4 className="text-xl font-semibold text-foreground">
                            {exp.position}
                          </h4>
                        </div>
                        <div className="text-muted mt-2 md:mt-0 md:text-right">
                          <div className="flex items-center gap-2 justify-start md:justify-end">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 justify-start md:justify-end mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-3 mt-6">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-muted"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="pr-4">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <div className="card p-10 lg:p-12 max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {education.school}
                    </h3>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {education.degree}
                    </h4>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Relevant Courses
                      </h5>
                      <div className="space-y-2">
                        {education.courses.map((course) => (
                          <div key={course} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Achievements
                      </h5>
                      <div className="space-y-2">
                        {education.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-muted">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
