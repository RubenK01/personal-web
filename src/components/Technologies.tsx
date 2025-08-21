'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import IconTile from '@/components/icons/IconTile';

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: 'easeOut'
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Solo 6 tecnologías principales
  const mainTechnologies = [
    { name: 'AWS', file: 'aws.svg' },
    { name: 'Docker', file: 'docker-mark-blue.svg' },
    { name: 'Kubernetes', file: 'kubernetes-icon-color.svg' },
    { name: 'Terraform', file: 'terraform-original-logo.svg' },
    { name: 'Jenkins', file: 'jenkins.svg' },
    { name: 'Prometheus', file: 'prometheus-icon-color.svg' },
  ];

  return (
    <section id="tecnologias" className="section-padding bg-slate-950">
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
            <span className="text-white">Tecnologías</span>
            <span className="text-red-500"> principales</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Trabajo con las herramientas más sólidas del ecosistema AWS y DevOps para garantizar infraestructuras robustas, seguras y escalables.
          </motion.p>
        </motion.div>

        {/* Main Technologies Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex justify-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {mainTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative"
                title={tech.name}
              >
                <IconTile label={tech.name}>
                  <img src={`/icons-pack/${tech.file}`} alt={tech.name} />
                </IconTile>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 