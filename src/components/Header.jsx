"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 text-white py-20"
    >
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 dark:bg-purple-600 blur-3xl" />
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-indigo-400 dark:bg-indigo-600 blur-3xl" />
        <div className="absolute bottom-5 left-1/2 w-40 h-40 rounded-full bg-purple-300 dark:bg-purple-500 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 dark:from-white dark:to-purple-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Abhishek Gawade
          </motion.h1>
          <motion.div
            className="relative inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl font-light mb-6">
              <span className="font-normal">Python Django</span> Developer
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-transparent mx-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="mailto:abhishekgawade102@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            <span className="text-sm">abhishekgawade102@gmail.com</span>
          </a>
          <a
            href="tel:+918652315283"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Phone size={18} />
            <span className="text-sm">+91 8652315283</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-gawade-361289238"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header

