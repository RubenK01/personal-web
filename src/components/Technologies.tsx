'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { technologies } from '@/data/technologies';
import IconTile from '@/components/icons/IconTile';

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        ease: 'easeOut'
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const categories = [
    { name: 'Cloud & AWS', color: 'from-blue-500 to-blue-600' },
    { name: 'DevOps Tools', color: 'from-green-500 to-green-600' },
    { name: 'Monitoring', color: 'from-purple-500 to-purple-600' },
    { name: 'Security', color: 'from-red-500 to-red-600' }
  ];

  // Mapeo directo a archivos SVG presentes en public/icons-pack
  const iconFileMap: Record<string, string> = {
    // Cloud & AWS
    'AWS': 'Arch_AWS-Backup_48.svg',
    'EC2': 'Arch_Amazon-EC2_48.svg',
    'S3': 'Arch_Amazon-S3-on-Outposts_48.svg',
    'Lambda': 'Arch_AWS-Lambda_48.svg',
    'RDS': 'Arch_Amazon-RDS_48.svg',
    'EKS': 'Arch_Amazon-Elastic-Kubernetes-Service_48.svg',
    'ECS': 'Arch_Amazon-Elastic-Container-Service_48.svg',
    'EFS': 'Arch_Amazon-EFS_48.svg',
    'Aurora': 'Arch_Amazon-Aurora_48.svg',
    'DocumentDB': 'Arch_Amazon-DocumentDB_48.svg',

    // DevOps
    'Docker': 'docker-mark-blue.svg',
    'Kubernetes': 'kubernetes-icon-color.svg',
    'Terraform': 'terraform-original-logo.svg',
    'Ansible': 'ansible.svg',
    'Jenkins': 'jenkins.svg',
    'GitHub': 'github.svg',
    'GitLab': 'gitlab.svg',

    // Monitoring
    'Prometheus': 'prometheus-icon-color.svg',
    // Nota: Faltan Grafana/Datadog/New Relic en el pack actual

    // Otros ejemplos disponibles en el pack
    'Azure DevOps': 'azuredevops-original-logo.svg',
    'Apache Airflow': 'airflow-icon-logo.svg',
  };

  return (
    <section id="tecnologias" className="section-padding bg-dark-950">
      <div className="container-custom px-3 sm:px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-12"
        >
          {categories.map((category, categoryIndex) => {
            const slug = ['cloud', 'devops', 'monitoring', 'security'][categoryIndex];
            const categoryTechs = technologies.filter(tech => tech.category === slug);
            const visibleTechs = categoryTechs.filter(tech => Boolean(iconFileMap[tech.name]));

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
                  className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                >
                  {visibleTechs.map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.04 }}
                      className="group relative"
                      title={tech.name}
                    >
                      <IconTile label={tech.name}>
                        <img src={`/icons-pack/${iconFileMap[tech.name]}`} alt={tech.name} />
                      </IconTile>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
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