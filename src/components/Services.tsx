'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import {
  CloudArchitectureIcon,
  MigrationIcon,
  CiCdDevOpsIcon,
  CostOptimizationIcon,
  SecurityCloudIcon,
  MonitoringIcon,
} from '@/components/icons/ServiceIcons';

const iconByServiceId: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'cloud-architecture': CloudArchitectureIcon,
  'migration': MigrationIcon,
  'cicd': CiCdDevOpsIcon,
  'cost-optimization': CostOptimizationIcon,
  'security': SecurityCloudIcon,
  'monitoring': MonitoringIcon,
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
    <section id="servicios" className="section-padding bg-dark-900">
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
            <span className="text-white">Servicios</span>
            <span className="text-gradient"> especializados</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Soluciones completas de AWS y DevOps para optimizar tu infraestructura, 
            reducir costes y mejorar la seguridad de tus aplicaciones.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconByServiceId[service.id] ?? CloudArchitectureIcon;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                transition={{ y: { type: 'tween', ease: 'easeOut', duration: 0.3 } }}
                whileHover={{ y: -8, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out md:self-start self-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:ml-2">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 ease-out">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-6 flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300 ease-out"
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
          <div className="bg-gradient-to-r from-dark-800 to-dark-900 border border-dark-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Cada empresa es única. Analizo tu infraestructura actual y diseño 
              una estrategia específica para optimizar costes y rendimiento.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Solicitar Consulta Personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 