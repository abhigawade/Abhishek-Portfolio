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
      icon: <Globe size={24} />,
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
      icon: <Database size={24} />,
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
      icon: <Pizza size={24} />,
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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
            >
              <div className="p-6 cursor-pointer" onClick={() => toggleProject(index)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  </div>
                  <button
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label={expandedProject === index ? "Collapse project details" : "Expand project details"}
                  >
                    {expandedProject === index ? (
                      <ChevronUp size={20} className="text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Deployed on:</span>
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            {project.deployment}
                          </span>
                        </div>

                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                        >
                          <span>View Project</span>
                          <ExternalLink size={14} />
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

