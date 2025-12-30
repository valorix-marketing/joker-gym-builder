import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/joker-gym-logo.jpg';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/classes', label: t('nav.classes') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="relative bg-card border-t border-border/50 pt-16 pb-8">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all">
                <img src={logo} alt="Joker Gym" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-3xl text-primary">JOKER GYM</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">{t('footer.quicklinks')}</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Route+Sidi+Salem,+Bizerte+7000,+Tunisia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{t('contact.address.value')}</span>
              </a>
              <a 
                href="tel:+21623401611" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone size={18} className="shrink-0 text-primary" />
                <span>+216 23 401 611</span>
              </a>
              <a 
                href="mailto:thejokergym21@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={18} className="shrink-0 text-primary" />
                <span>thejokergym21@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/The-JOKER-GYM-61554677015102/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/official.jokergym/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/30"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Joker Gym. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/p/The-JOKER-GYM-61554677015102/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              The JOKER GYM
            </a>
            <span className="text-border">|</span>
            <a
              href="https://www.instagram.com/official.jokergym/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              @official.jokergym
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
