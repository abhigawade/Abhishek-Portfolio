"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Heart, FileText, Download } from "lucide-react"
import ResumeModal from "./ResumeModal"

const Footer = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-3">Abhishek Gawade</h3>
            <p className="text-gray-400 mb-3 max-w-md text-sm">
              Python Developer passionate about building robust web applications and RESTful APIs.
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:abhishekgawade102@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+918652315283"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-gawade-361289238"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/abhigawade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <h4 className="text-base font-semibold mb-2 text-purple-400">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-2 text-purple-400">More</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#certificates" className="text-gray-400 hover:text-white transition-colors">
                    Certificates
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsResumeModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span>View Resume</span>
                    <FileText size={12} />
                  </button>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    download="Abhishek_Gawade_Resume.pdf"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Download Resume</span>
                    <Download size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="pt-4 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p className="flex items-center justify-center gap-1">
            <span>© {currentYear} Abhishek Gawade. Made with</span>
            <Heart size={12} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

