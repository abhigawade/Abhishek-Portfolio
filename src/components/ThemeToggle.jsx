"use client"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={20} className="text-gray-800" /> : <Sun size={20} className="text-yellow-300" />}
    </motion.button>
  )
}

export default ThemeToggle

