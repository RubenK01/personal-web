'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

const pngByServiceId: Record<string, string> = {
  'cloud-architecture': 'arquitectura-cloud',
  'migration': 'migracion-cloud',
  'cicd': 'cicd-devops',
  'cost-optimization': 'optimizacion-costes',
  'security': 'seguridad-cloud',
  'monitoring': 'monitoring-observability',
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="servicios" className="section-padding bg-slate-900">
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
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            <span className="text-white">Servicios especializados en</span>
            <span className="text-red-500"> AWS y DevOps</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Soluciones a medida para migrar, optimizar y proteger tu infraestructura cloud, reduciendo costes y aumentando la eficiencia de tus aplicaciones.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                transition={{ y: { type: 'tween', ease: 'easeOut', duration: 0.3 } }}
                whileHover={{ y: -8, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } }}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm p-6 group cursor-pointer hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="w-24 h-24 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ease-in-out self-center mb-4">
                    <img 
                      src={`/service-icons/${pngByServiceId[service.id]}.png`}
                      alt={service.title}
                      className="w-full h-full drop-shadow-md object-contain" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors duration-300 ease-out">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-6 flex items-center text-red-500 font-medium group-hover:text-red-400 transition-colors duration-300 ease-out"
                >
                  <span className="text-sm">Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Cada empresa es única. Analizo tu infraestructura actual y diseño 
              una estrategia específica para optimizar costes y rendimiento.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl px-5 py-3 inline-flex items-center space-x-2 transition-colors duration-200"
            >
              <span>Solicitar consulta personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 