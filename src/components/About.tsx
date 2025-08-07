'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const stats = [
    {
      icon: Award,
      value: '8+',
      label: 'Años de Experiencia',
      description: 'En arquitectura cloud y DevOps'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Clientes Satisfechos',
      description: 'Startups y empresas establecidas'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Soporte Disponible',
      description: 'Durante todo el proceso'
    }
  ];

  return (
    <section id="sobre-mi" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content - Personal Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="text-white">Sobre</span>
                <span className="text-gradient"> mí</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Soy un consultor freelance especializado en AWS y DevOps con más de 8 años 
                de experiencia ayudando a empresas a optimizar sus infraestructuras cloud.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Mi enfoque:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-300 font-medium">Análisis exhaustivo</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Evaluación completa de tu infraestructura actual para identificar oportunidades de mejora.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-300 font-medium">Soluciones personalizadas</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Cada empresa es única. Diseño estrategias específicas para tus necesidades.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-300 font-medium">Implementación gradual</span>
                      <p className="text-gray-400 text-sm mt-1">
                        Migraciones sin interrupciones, minimizando riesgos y maximizando beneficios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contacto"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Conoce mi trabajo</span>
                <CheckCircle className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl flex items-center justify-center border border-dark-600">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Tu Nombre</h3>
                    <p className="text-gray-400">Consultor AWS & DevOps</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="text-center p-6 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-300 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.description}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 