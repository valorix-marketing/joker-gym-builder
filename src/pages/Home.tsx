import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Users, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import logo from '@/assets/joker-gym-logo.jpg';
import gymFloor1 from '@/assets/gym-floor-1.jpg';
import gymCommunity from '@/assets/gym-community.jpg';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Dumbbell, title: t('highlights.equipment.title'), desc: t('highlights.equipment.desc'), color: 'primary' },
    { icon: Calendar, title: t('highlights.classes.title'), desc: t('highlights.classes.desc'), color: 'secondary' },
    { icon: Users, title: t('highlights.community.title'), desc: t('highlights.community.desc'), color: 'accent' },
    { icon: MapPin, title: t('highlights.location.title'), desc: t('highlights.location.desc'), color: 'primary' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={gymFloor1} alt="Joker Gym Interior" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10 text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/30 animate-pulse-glow">
              <img src={logo} alt="Joker Gym Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary text-glow mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
          </h1>
          
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/classes"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {t('hero.cta2')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-16">
            {t('highlights.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`text-${item.color}`} size={28} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-joker-gradient rounded-3xl opacity-20 blur-2xl" />
              <img src={gymCommunity} alt="Joker Gym Community" className="relative rounded-2xl shadow-2xl w-full" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                {t('about.values.community')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('about.description1')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                {t('nav.about')} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
