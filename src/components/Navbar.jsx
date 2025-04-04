"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import ThemeToggle from "./ThemeToggle"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      if (isOpen) setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-purple-900/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-purple-900 dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-white">
            <Home size={24} className="inline-block mr-2" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-white hover:text-purple-200 dark:hover:text-purple-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-white hover:bg-purple-800 dark:hover:bg-gray-800 transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-purple-900 dark:bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 text-base font-medium text-white hover:bg-purple-800 dark:hover:bg-gray-800 hover:text-purple-200 dark:hover:text-purple-400 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar

