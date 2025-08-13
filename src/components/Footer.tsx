"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/zhangandrew2",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      href: "https://github.com/zhangandrew2",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      href: "https://facebook.com/zhangandrew03",
      icon: Facebook,
      label: "Facebook",
      color: "hover:text-blue-600"
    },
    {
      href: "mailto:zhangandrew2@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      href: "tel:+19495298128",
      icon: Phone,
      label: "Phone",
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer className="bg-card-bg border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Andrew Zhang
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Computer Science Student @ UCLA
              <br />
              Software Engineer & Full-Stack Developer
              <br />
              Building innovative solutions through code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="inline-grid grid-cols-2 gap-x-5 justify-items-start mx-auto md:mx-0">
              <Link
                href="/"
                className="text-muted hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-muted hover:text-primary transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-muted hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
              <a
                href="/AndrewZhang2025Resume.pdf"
                download
                className="text-muted hover:text-primary transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="h-12 md:h-2"></div>
            <div className="flex justify-center md:justify-end mb-4 gap-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-border/50 text-muted transition-all duration-300 hover:scale-110 hover:bg-primary/20 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-muted space-y-2 mt-4">
              <p>zhangandrew2@gmail.com</p>
              <p>(949) 529-8128</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Andrew Zhang. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
