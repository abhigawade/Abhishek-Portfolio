"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden bg-purple-900 dark:bg-gray-900 text-white pt-20 pb-12"
      id="home"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 dark:bg-purple-600 blur-3xl" />
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-indigo-400 dark:bg-indigo-600 blur-3xl" />
        <div className="absolute bottom-5 left-1/2 w-40 h-40 rounded-full bg-purple-300 dark:bg-purple-500 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <motion.h1
            className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 dark:from-white dark:to-purple-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Abhishek Gawade
          </motion.h1>
          <motion.div
            className="relative inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-4">
              <span className="font-normal">Python Django</span> Developer
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-transparent mx-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <a
            href="mailto:abhishekgawade102@gmail.com"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            <Mail size={16} />
            <span className="text-sm">abhishekgawade102@gmail.com</span>
          </a>
          <a
            href="tel:+918652315283"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            <Phone size={16} />
            <span className="text-sm">+91 8652315283</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-gawade-361289238"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            <Linkedin size={16} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            <Github size={16} />
            <span className="text-sm">GitHub</span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header

