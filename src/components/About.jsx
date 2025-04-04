"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Profile</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Junior Python Developer with expertise in Python, Django, Django Rest Framework, and SQL, and a foundational
            understanding of JavaScript and React.js. Skilled in developing, testing, and maintaining APIs, building
            robust backend systems, and creating scalable, secure web applications. Passionate about continuous learning
            and delivering reliable software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

