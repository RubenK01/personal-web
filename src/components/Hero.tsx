'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { LeadForm } from '@/types';
import IconTile from '@/components/icons/IconTile';
// Removed OfficialIcons usage; using static SVGs from public/icons-pack

export default function Hero() {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-950">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">Arquitectura cloud</span>
                <br />
                <span className="text-gradient">eficiente</span>
                <br />
                <span className="text-white">para escalar sin límites</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Te ayudo a migrar, automatizar y optimizar tu infraestructura en AWS. 
                Reduzco costes hasta un 40% mientras mejoro la seguridad y escalabilidad.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6, ease: 'easeOut' }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">Migración sin interrupciones</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">Ahorro de costes garantizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">Soporte 24/7 durante la transición</span>
              </div>
            </motion.div>

            {/* Lead Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8, ease: 'easeOut' }}
              className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'tween', ease: 'easeOut' }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Auditoría Gratuita</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-3"
                >
                  <CheckCircle className="w-12 h-12 text-primary-500 mx-auto" />
                  <h3 className="text-xl font-semibold text-white">¡Gracias!</h3>
                  <p className="text-gray-300">
                    Te contactaré en las próximas 24 horas para programar tu auditoría gratuita.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Content - Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-3 sm:gap-4 mt-6 md:mt-0 justify-items-center mb-8"
          >
            {([
              // Top row (más relevantes)
              { name: 'AWS', file: 'aws.svg' },
              { name: 'Docker', file: 'docker-mark-blue.svg' },
              { name: 'Apache Airflow', file: 'airflow-icon-logo.svg' },
              { name: 'Kubernetes', file: 'kubernetes-icon-color.svg' },
              // Segunda fila
              { name: 'AWS Lambda', file: 'Arch_AWS-Lambda_48.svg' },
              { name: 'AWS EC2', file: 'Arch_Amazon-EC2_48.svg' },
              { name: 'AWS S3', file: 'Arch_Amazon-S3-on-Outposts_48.svg' },
              { name: 'Terraform', file: 'terraform-original-logo.svg' },
              // Tercera fila
              { name: 'GitHub', file: 'github.svg' },
              { name: 'GitLab', file: 'gitlab.svg' },
              { name: 'Jenkins', file: 'jenkins.svg' },
              { name: 'Prometheus', file: 'prometheus-icon-color.svg' },
            ]).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 + index * 0.05 }}
              >
                <IconTile label={item.name}>
                  <img src={`/icons-pack/${item.file}`} alt={item.name} />
                </IconTile>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 