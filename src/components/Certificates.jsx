"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, CheckCircle2 } from "lucide-react"

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificates = [
    {
      title: "Python Programming",
      status: "Completed",
      icon: <CheckCircle2 className="text-green-500 dark:text-green-400" size={18} />,
    },
    {
      title: "SQL",
      status: "Completed",
      icon: <CheckCircle2 className="text-green-500 dark:text-green-400" size={18} />,
    },
    {
      title: "Frontend Development",
      status: "Ongoing",
      icon: <CheckCircle2 className="text-blue-500 dark:text-blue-400" size={18} />,
    },
    {
      title: "MS-CIT",
      status: "Completed",
      icon: <CheckCircle2 className="text-green-500 dark:text-green-400" size={18} />,
    },
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Certificates & Awards</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Certificates */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Award className="text-purple-600 dark:text-purple-300" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Certifications</h3>
              </div>
              <div className="space-y-2">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">{cert.title}</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-xs ${cert.status === "Ongoing" ? "text-blue-500 dark:text-blue-400" : "text-green-500 dark:text-green-400"}`}
                      >
                        {cert.status}
                      </span>
                      {cert.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Award className="text-purple-600 dark:text-purple-300" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Awards</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2 }}
                className="p-3 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg"
              >
                <h4 className="text-base font-semibold text-purple-800 dark:text-purple-300 mb-1">Encore Award</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Accenture Solutions Pvt. Ltd</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Recognized as the Best Performer in the Team
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates

