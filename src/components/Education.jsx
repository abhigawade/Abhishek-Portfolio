"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap } from "lucide-react"

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "Full Stack Development",
      institution: "Develearn Institute Thane",
      period: "Dec 2023 – Jan 2025",
    },
    {
      degree: "Master Of Science (Information Technology)",
      institution: "Mumbai University",
      period: "Jun 2023 – Apr 2025",
    },
    {
      degree: "Bachelor Of Science (Information Technology)",
      institution: "Mumbai University",
      period: "Jun 2019 – Apr 2022",
      grade: "CGPI : 9.15",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <GraduationCap className="text-purple-600 dark:text-purple-300" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <p className="text-purple-600 dark:text-purple-300">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
                  {edu.grade && <p className="text-green-600 dark:text-green-400 font-semibold mt-1">{edu.grade}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

