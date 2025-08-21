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
      value: '9+',
      label: 'Años de Experiencia',
      description: 'En arquitectura cloud y DevOps'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Proyectos Completados',
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
    <section id="sobre-mi" className="section-padding bg-slate-900">
      <div className="container-custom px-3 sm:px-4">
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
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              >
                <span className="text-white">Sobre</span>
                <span className="text-red-500"> mí</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-300 leading-relaxed"
              >
                Soy Rubén Casado, ingeniero de software especializado en DevOps y Cloud, con certificación AWS Architect Associate y más de 9 años de experiencia ayudando a startups y PYMEs a reducir costes, mejorar la seguridad y escalar sus sistemas.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Mi enfoque es simple:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔎</span>
                    <div>
                      <span className="text-slate-300 font-medium">Analizo tu infraestructura para identificar oportunidades de mejora.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <span className="text-slate-300 font-medium">Propongo soluciones prácticas y personalizadas.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <span className="text-slate-300 font-medium">Te acompaño de principio a fin, con soporte post-implementación.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contacto"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl px-5 py-3 inline-flex items-center space-x-2 transition-colors duration-200"
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
              <div className="w-80 h-80 mx-auto rounded-2xl border border-dark-600 overflow-hidden">
                <img 
                  src="/foto.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
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
                    className="text-center p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm hover:border-red-500/50 transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-300 mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.description}</div>
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