"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Junior Python Developer",
      company: "Meta Multiples Pvt. Ltd",
      period: "Jul 2024 – present",
      responsibilities: [
        "Developed, tested, and maintained RESTful APIs using Django and Django Rest Framework, ensuring scalability and reliability.",
        "Conducted API testing using tools like Postman to validate functionality, performance, and security.",
        "Debugged and resolved issues in development and production environments to ensure seamless application performance.",
      ],
    },
    {
      title: "Trust & Safety Associate",
      company: "Accenture Solutions Pvt. Ltd",
      period: "Jun 2022 – Aug 2023",
      responsibilities: [
        "Maintain the integrity, safety, and compliance of the platform or community.",
        "Worked with various teams to implement and enforce policies that protect users.",
        "Won the 'Encore Award' for best performance in the Team",
      ],
    },
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Briefcase className="text-purple-600 dark:text-purple-300" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  <p className="text-purple-600 dark:text-purple-300">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1.5 ml-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

