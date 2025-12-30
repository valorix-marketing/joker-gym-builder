import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import logo from '@/assets/joker-gym-logo.jpg';
import gymFloor1 from '@/assets/gym-floor-1.jpg';
import gymFloor2 from '@/assets/gym-floor-2.jpg';
import gymCommunity from '@/assets/gym-community.jpg';
import equipment1 from '@/assets/equipment-1.jpg';
import equipment2 from '@/assets/equipment-2.jpg';
import equipment3 from '@/assets/equipment-3.jpg';
import equipment4 from '@/assets/equipment-4.jpg';
import equipment5 from '@/assets/equipment-5.jpg';
import decorativePillar from '@/assets/decorative-pillar.jpg';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [logo, gymFloor1, gymFloor2, gymCommunity, equipment1, equipment2, equipment3, equipment4, equipment5, decorativePillar];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-primary text-glow mb-4">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground mb-4">{t('gallery.subtitle')}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('gallery.description')}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              >
                <img src={img} alt={`Joker Gym ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Joker Gym" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
