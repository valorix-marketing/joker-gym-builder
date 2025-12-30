import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const Classes: React.FC = () => {
  const { t } = useLanguage();

  const schedule = [
    { day: t('classes.monday'), classes: [{ name: '100% Femmes', time: '18h-19h', women: true }, { name: 'Tae Bo', time: '19h-20h' }] },
    { day: t('classes.tuesday'), classes: [{ name: 'Step F', time: '18h-19h' }, { name: 'Step F', time: '19h-20h' }] },
    { day: t('classes.wednesday'), classes: [{ name: '100% Femmes', time: '18h-19h', women: true }, { name: 'Cardio Mix', time: '19h-20h' }] },
    { day: t('classes.thursday'), classes: [{ name: 'Street F', time: '18h-19h' }, { name: 'Street F', time: '19h-20h' }] },
    { day: t('classes.friday'), classes: [{ name: '100% Femmes', time: '18h-19h', women: true }, { name: 'Cardio Boxing', time: '19h-20h' }] },
    { day: t('classes.saturday'), classes: [{ name: 'Street Fight', time: '12h-13:30h' }, { name: 'Dance', time: '13:30h-15h' }, { name: 'Gymnastique', time: '15h-17h' }, { name: 'Karate', time: '17h-18h' }] },
    { day: t('classes.sunday'), classes: [{ name: 'Dance', time: '13:30h-15h' }, { name: 'Gymnastique', time: '15h-17h' }, { name: 'Karate', time: '17h-18h' }] },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-primary text-glow mb-4">{t('classes.title')}</h1>
          <p className="text-xl text-muted-foreground mb-4">{t('classes.subtitle')}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('classes.description')}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            {schedule.map((day, index) => (
              <div key={index} className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-2xl text-primary mb-4">{day.day}</h3>
                <div className="flex flex-wrap gap-3">
                  {day.classes.map((cls, i) => (
                    <div key={i} className={`px-4 py-2 rounded-xl ${cls.women ? 'bg-secondary/20 border border-secondary/50 text-secondary' : 'bg-primary/10 border border-primary/30 text-foreground'}`}>
                      <span className="font-semibold">{cls.name}</span>
                      <span className="text-muted-foreground ml-2">{cls.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            <span className="inline-block w-3 h-3 rounded-full bg-secondary/50 mr-2" />
            {t('classes.women')}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Classes;
