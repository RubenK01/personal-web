'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { technologies } from '@/data/technologies';
import { techIconMap, TechIconType } from '@/components/icons/TechIcons';
import { techMapping, techKeys } from '@/data/techMapping';

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const categories = [
    { name: 'Cloud & AWS', color: 'from-blue-500 to-blue-600' },
    { name: 'DevOps Tools', color: 'from-green-500 to-green-600' },
    { name: 'Monitoring', color: 'from-purple-500 to-purple-600' },
    { name: 'Security', color: 'from-red-500 to-red-600' }
  ];

  return (
    <section id="tecnologias" className="section-padding bg-dark-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-white">Tecnologías</span>
            <span className="text-gradient"> que domino</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experiencia con las herramientas más avanzadas del ecosistema cloud y DevOps 
            para construir infraestructuras robustas y escalables.
          </motion.p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {categories.map((category, categoryIndex) => {
            const categoryName = ['cloud', 'devops', 'monitoring', 'security'][categoryIndex];
            const categoryTechs = techKeys.filter(key => techMapping[key].category === categoryName);
            
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                  <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {categoryTechs.map((techKey, techIndex) => {
                    const IconComponent = techIconMap[techKey as TechIconType];
                    const techInfo = techMapping[techKey];
                    
                    return (
                      <motion.div
                        key={techKey}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: '#ef4444'
                        }}
                        className="tech-card group relative"
                        title={techInfo.fullName}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-dark-800 to-dark-700 rounded-lg flex items-center justify-center group-hover:from-dark-700 group-hover:to-dark-600 transition-all duration-200">
                          <IconComponent 
                            size={40} 
                            className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200" 
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                            {techInfo.name}
                          </span>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-dark-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
                          {techInfo.fullName}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-900"></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-gray-300">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">40%</div>
            <div className="text-gray-300">Ahorro Promedio en Costes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">24/7</div>
            <div className="text-gray-300">Soporte Disponible</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 