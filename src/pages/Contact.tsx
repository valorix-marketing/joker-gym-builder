import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success('Message envoyé! / Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setSending(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-primary text-glow mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-muted-foreground mb-4">{t('contact.subtitle')}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('contact.description')}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 bg-card/50 border border-border/50 rounded-2xl">
                <h3 className="font-display text-2xl text-foreground mb-6">{t('contact.address')}</h3>
                <div className="space-y-4">
                  <a href="https://maps.google.com/?q=Route+Sidi+Salem,+Bizerte+7000,+Tunisia" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <MapPin className="text-primary shrink-0 mt-1" size={24} />
                    <span>{t('contact.address.value')}</span>
                  </a>
                  <a href="tel:+21623401611" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="text-primary" size={24} />
                    <span>+216 23 401 611</span>
                  </a>
                  <a href="mailto:thejokergym21@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="text-primary" size={24} />
                    <span>thejokergym21@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-card/50 border border-border/50 rounded-2xl">
                <h3 className="font-display text-2xl text-foreground mb-6">{t('contact.social')}</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/p/The-JOKER-GYM-61554677015102/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                    <Facebook size={24} />
                    <span className="font-medium">The JOKER GYM</span>
                  </a>
                  <a href="https://www.instagram.com/official.jokergym/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-secondary/10 border border-secondary/30 rounded-xl text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                    <Instagram size={24} />
                    <span className="font-medium">@official.jokergym</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d9.8667!3d37.2667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd1a8b70b6e0e7%3A0x0!2sRoute%20Sidi%20Salem%2C%20Bizerte%2C%20Tunisia!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Joker Gym Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="p-8 bg-card/50 border border-border/50 rounded-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.form.message')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/40 transition-all disabled:opacity-50"
              >
                {sending ? t('contact.form.sending') : t('contact.form.send')}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
