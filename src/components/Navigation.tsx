import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/joker-gym-logo.jpg';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/classes', label: t('nav.classes') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'glass-strong py-3 shadow-2xl shadow-primary/10' 
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
            <img 
              src={logo} 
              alt="Joker Gym Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display text-2xl text-primary hidden sm:block group-hover:text-glow transition-all">
            JOKER GYM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                relative font-medium text-sm uppercase tracking-wider transition-all duration-300
                ${location.pathname === link.to 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
                }
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5
                after:bg-primary after:transform after:origin-left after:transition-transform after:duration-300
                ${location.pathname === link.to ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden fixed inset-x-0 top-[72px] glass-strong border-t border-border/50
          transition-all duration-500 ease-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }
        `}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                font-display text-2xl py-3 border-b border-border/30 transition-all duration-300
                ${location.pathname === link.to 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary hover:pl-4'
                }
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
