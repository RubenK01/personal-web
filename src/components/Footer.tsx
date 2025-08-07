'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/tu-usuario',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/tu-perfil',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/tu-usuario',
      icon: Twitter
    },
    {
      name: 'Email',
      href: 'mailto:tu@email.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-white font-bold text-xl">AWS Consultant</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Consultor freelance especializado en AWS y DevOps. 
                Ayudo a empresas a optimizar sus infraestructuras cloud, 
                reducir costes y mejorar la seguridad.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500 transition-all duration-200"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Arquitectura Cloud
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Migración AWS
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-200">
                    CI/CD & DevOps
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Optimización de Costes
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Seguridad Cloud
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:tu@email.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                    tu@email.com
                  </a>
                </li>
                <li>
                  <a href="tel:+34600000000" className="text-gray-400 hover:text-white transition-colors duration-200">
                    +34 600 000 000
                  </a>
                </li>
                <li className="text-gray-400">
                  España (Remoto)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} AWS Consultant. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 