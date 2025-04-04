import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

