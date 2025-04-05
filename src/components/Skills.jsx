"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Database, Layout, Server } from "lucide-react"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: <Code2 size={20} />,
      title: "Languages",
      skills: ["Python", "JavaScript"],
    },
    {
      icon: <Server size={20} />,
      title: "Backend",
      skills: ["Django", "Django Rest Framework", "FastAPI", "Flask"],
    },
    {
      icon: <Layout size={20} />,
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React.js"],
    },
    {
      icon: <Database size={20} />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Firebase"],
    },
  ]

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.05 + idx * 0.02 }}
                    className="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-xs"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

