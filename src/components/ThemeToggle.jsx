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
      className="p-2 rounded-full bg-white/20 dark:bg-gray-800/30 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={18} className="text-white" /> : <Sun size={18} className="text-yellow-300" />}
    </motion.button>
  )
}

export default ThemeToggle

