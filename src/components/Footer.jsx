"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ExternalLink, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Abhishek Gawade</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Python Django Developer passionate about building robust web applications and RESTful APIs.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:abhishekgawade102@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+918652315283"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-gawade-361289238"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-2">
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
              <h4 className="text-lg font-semibold mb-4 text-purple-400">More</h4>
              <ul className="space-y-2">
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Resume</span>
                    <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            <span>© {currentYear} Abhishek Gawade. Made with</span>
            <Heart size={14} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

