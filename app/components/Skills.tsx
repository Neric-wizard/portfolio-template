"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 85, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, level: 95, color: "#06B6D4" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 75, color: "#339933" },
      { name: "Prisma", icon: SiPrisma, level: 70, color: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 65, color: "#4169E1" },
    ]
  },
  {
    name: "Tools & Workflow",
    skills: [
      { name: "Docker", icon: SiDocker, level: 60, color: "#2496ED" },
      { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 90, color: "#181717" },
      { name: "Vercel", icon: SiVercel, level: 85, color: "#000000" },
      { name: "Figma", icon: SiFigma, level: 70, color: "#F24E1E" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center"
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
                    >
                      <Icon 
                        className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" 
                        style={{ color: skill.color }}
                      />
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full h-1.5"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}