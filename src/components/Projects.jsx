"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Database, Pizza, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedProject, setExpandedProject] = useState(null)

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

  const projects = [
    {
      icon: <Globe size={20} />,
      title: "NewsWave – Advanced News Aggregator",
      description:
        "A full-stack news aggregation platform with real-time data fetching and personalized news recommendations.",
      technologies: ["React.js", "Tailwind CSS", "Django", "Django Rest Framework", "Celery", "PostgreSQL"],
      features: [
        "Integrated article summarization (NLP) and multilingual support for better accessibility",
        "Implemented features like news saving, sharing, and translation",
        "Used Celery for background tasks and scheduled news updates",
        "Designed a responsive UI and optimized backend for scalability and performance",
      ],
      deployment: "Vercel & Render",
    },
    {
      icon: <Database size={20} />,
      title: "Social Media APIs",
      description: "RESTful APIs with JWT authentication for secure user access in a social media platform.",
      technologies: ["Django", "Django Rest Framework", "PostgreSQL", "Postman"],
      features: [
        "Implemented follow, like, and comment functionalities for user interaction",
        "Designed a feed system that displays posts based on user followings",
        "Built efficient post creation and retrieval APIs with optimized queries",
      ],
      deployment: "Self-hosted",
    },
    {
      icon: <Pizza size={20} />,
      title: "Pizza Delivery API",
      description: "A fully functional RESTful API for a Pizza Delivery application using FastAPI.",
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "Pydantic", "Alembic"],
      features: [
        "JWT-based Authentication for secure user login and role-based access",
        "Order Management: Users can place, track, and cancel pizza orders",
        "Admin Access: Admins can add, update, and delete pizza items with proper authorization",
        "Schema Validation: Used Pydantic models to validate API requests and responses",
        "Database ORM: Managed database models and operations using SQLAlchemy ORM",
        "API Testing: Thoroughly tested all API endpoints using Postman for functionality and error handling",
      ],
      deployment: "Heroku",
    },
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="max-w-4xl mx-auto space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
            >
              <div className="p-4 cursor-pointer" onClick={() => toggleProject(index)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  </div>
                  <button
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label={expandedProject === index ? "Collapse project details" : "Expand project details"}
                  >
                    {expandedProject === index ? (
                      <ChevronUp size={18} className="text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700 pt-3">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1.5 text-sm">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-0.5 text-gray-600 dark:text-gray-300 text-sm">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Deployed on:</span>
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                            {project.deployment}
                          </span>
                        </div>

                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                        >
                          <span>View Project</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

