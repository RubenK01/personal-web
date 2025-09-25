'use client';

import type { MouseEvent as ReactMouseEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '@/types';

const navigationItems: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  // abel: 'Testimonios', href: '#testimonios' },
  // { label: 'Contacto', href: '#contacto' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'));
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updatePathname = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', updatePathname);
    window.addEventListener('hashchange', updatePathname);
    return () => {
      window.removeEventListener('popstate', updatePathname);
      window.removeEventListener('hashchange', updatePathname);
    };
  }, []);

  const isHome = pathname === '/' || pathname === '/index.html';

  const resolveHref = (target: string) => {
    if (!target.startsWith('#')) {
      return target;
    }
    return isHome ? target : `/${target}`;
  };

  const handleInPageNavigation = (event: ReactMouseEvent<HTMLAnchorElement>, target: string) => {
    if (typeof window === 'undefined') return;
    if (!isHome || !target.startsWith('#')) return;

    event.preventDefault();
    const element = document.querySelector(target);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.history.replaceState(null, '', target);
  };

  const handleBrandClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (typeof window === 'undefined') return;
    if (!isHome) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '/');
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelRef.current && panelRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setIsOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={handleBrandClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="inline-flex items-center space-x-2">
              <span className="md:hidden flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white">Rubén Casado</span>
                <span className="text-gray-400 text-sm">DevSecOps & Cloud Engineer</span>
              </span>
              <span className="hidden md:inline font-extrabold text-2xl tracking-tight text-white">Rubén Casado</span>
              <span className="hidden md:inline text-gray-400 text-base">· DevSecOps & Cloud Engineer</span>
            </span>
          </motion.a>

          {/* Desktop Navigation + CTA (right aligned) */}
          <div className="hidden nav:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={resolveHref(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={(event) => handleInPageNavigation(event, item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1 group"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pl-2"
            >
              <a
                href={resolveHref('#contacto')}
                onClick={(event) => handleInPageNavigation(event, '#contacto')}
                className="btn-primary"
              >
                Contactar
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={toggleMenu}
            ref={buttonRef}
            className="nav:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay para cerrar al pulsar fuera */}
              <motion.button
                aria-label="Cerrar menú"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-[1px] nav:hidden z-40"
              />

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="nav:hidden border-t border-dark-800 bg-dark-950/95 backdrop-blur-sm z-50 relative"
                ref={panelRef}
              >
                <div className="px-4 py-6 space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={resolveHref(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={(event) => {
                        handleInPageNavigation(event, item.href);
                        setIsOpen(false);
                      }}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="pt-4"
                  >
                    <a
                      href={resolveHref('#contacto')}
                      onClick={(event) => {
                        handleInPageNavigation(event, '#contacto');
                        setIsOpen(false);
                      }}
                      className="btn-primary w-full text-center"
                    >
                      Contactar
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 
