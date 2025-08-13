"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Download,
  GithubIcon,
  LinkedinIcon,
  ExternalLink
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden page-padding">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
              <Image
                src="/user.png"
                alt="Andrew Zhang"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted mb-4"
          >
            Computer Science Student @ UCLA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text animate-gradient">Andrew</span>
            <br />
            Zhang!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed !text-center"
          >
            A passionate software engineer dedicated to solving complex problems
            through innovative solutions and cutting-edge technology.
          </motion.p>
          <div className="h-12 md:h-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/portfolio"
              className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
            >
              View My Work
              <ExternalLink className="w-5 h-5" />
            </Link>
            <Link
              href="/AndrewZhang2025Resume.pdf"
              download
              className="btn-outline flex items-center gap-2 px-8 py-4 text-lg"
            >
              Download CV
              <Download className="w-5 h-5" />
            </Link>
          </motion.div>
          <div className="h-12 md:h-14"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center gap-x-5 md:space-x-16"
          >
            <motion.a
              href="https://github.com/zhangandrew2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:scale-120 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon className="w-6 h-6 text-foreground" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/zhangandrew2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:scale-120 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon className="w-6 h-6 text-foreground" />
            </motion.a>
          </motion.div>
          <div className="h-12 md:h-16"></div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            onClick={scrollToNext}
            className="animate-bounce p-4 rounded-full hover:bg-primary/20 transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.button>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="section-padding-xl bg-card-bg/50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-lg text-muted max-w-3xl leading-relaxed !text-center">
                I&apos;m a senior at UCLA majoring in Computer Science with a
                genuine passion for solving complex problems through innovative
                software solutions. My academic journey has provided me with a
                solid foundation in computer science principles and allowed me
                to hone my technical skills across various areas of software
                development.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            <AnimatedSection delay={0.2} className="text-center">
              <div className="glass rounded-lg p-10 card hover:border-primary/50">
                <div className="text-4xl font-bold gradient-text mb-4">20+</div>
                <h3 className="text-xl font-semibold mb-2">
                  Projects Completed
                </h3>
                <p className="text-muted">
                  From web applications to mobile apps and everything in
                  between.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="text-center">
              <div className="glass rounded-lg p-10 card hover:border-primary/50">
                <div className="text-4xl font-bold gradient-text mb-4">3+</div>
                <h3 className="text-xl font-semibold mb-2">Internships</h3>
                <p className="text-muted">
                  Professional experience at leading tech companies and
                  startups.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6} className="text-center">
              <div className="glass rounded-lg p-10 card hover:border-primary/50">
                <div className="text-4xl font-bold gradient-text mb-4">4+</div>
                <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                <p className="text-muted">
                  Continuously learning and growing in the field of software
                  development.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding-xl">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-lg text-muted max-w-2xl text-center">
                Here are some of my recent projects that showcase my skills and
                experience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {[
              {
                title: "Contact Organizer API",
                description:
                  "Backend API for secure contact management with user authentication",
                image: "/work-1.png",
                link: "https://github.com/zhangandrew2/ContactOrganizer"
              },
              {
                title: "Wordle Web Game",
                description: "Interactive game of Wordle with modern UI/UX",
                image: "/work-2.png",
                link: "https://github.com/ArvinDing/Ranked-Wordle"
              },
              {
                title: "B-Link Social Media App",
                description:
                  "Twitter-like social media platform for UCLA community",
                image: "/work-3.png",
                link: "https://github.com/illiashkirko/CS35LProject"
              }
            ].map((project, index) => (
              <AnimatedSection
                key={project.title}
                delay={index * 0.2}
                className="group"
              >
                <div className="card p-6 h-full">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors duration-300 flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="h-12 md:h-10"></div>
            <Link
              href="/portfolio"
              className="btn-primary px-8 py-4 text-lg inline-block"
            >
              View All Projects
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto !text-center">
                I&apos;m always excited to take on new challenges and
                collaborate on innovative projects. Let&apos;s create something
                amazing together!
              </p>
            </div>
            <div className="h-12 md:h-10"></div>
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 text-lg inline-block"
            >
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
