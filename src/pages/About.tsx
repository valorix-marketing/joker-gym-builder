import React from 'react';
import { Heart, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import gymFloor2 from '@/assets/gym-floor-2.jpg';
import gymCommunity from '@/assets/gym-community.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t('about.values.inclusivity'), desc: t('about.values.inclusivity.desc'), color: 'secondary' },
    { icon: Award, title: t('about.values.excellence'), desc: t('about.values.excellence.desc'), color: 'primary' },
    { icon: Users, title: t('about.values.community'), desc: t('about.values.community.desc'), color: 'accent' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={gymFloor2} alt="Joker Gym" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-primary text-glow mb-4">{t('about.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('about.description1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('about.description2')}</p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-joker-gradient rounded-3xl opacity-20 blur-2xl" />
              <img src={gymCommunity} alt="Joker Gym Community" className="relative rounded-2xl shadow-2xl w-full" />
            </div>
          </div>

          {/* Values */}
          <h2 className="font-display text-4xl text-center text-foreground mb-12">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-card/50 border border-border/50 rounded-2xl text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-${value.color}/10 flex items-center justify-center mb-6`}>
                  <value.icon className={`text-${value.color}`} size={32} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
