import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'ar';

type TranslationKey = keyof typeof translations.fr;

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.classes': 'Cours',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'JOKER GYM',
    'hero.subtitle': 'Libérez Votre Force Intérieure',
    'hero.description': 'La salle de sport premium de Bizerte. Équipements modernes, cours variés, communauté motivante.',
    'hero.cta': 'Découvrir Nos Cours',
    'hero.cta2': 'Nous Contacter',
    
    // Highlights
    'highlights.title': 'Pourquoi Choisir Joker Gym?',
    'highlights.equipment.title': 'Équipements Modernes',
    'highlights.equipment.desc': 'Machines de dernière génération, poids libres, et zones dédiées pour tous types d\'entraînement.',
    'highlights.classes.title': 'Cours Variés',
    'highlights.classes.desc': 'Du Karaté au Cardio Boxing, en passant par la Dance et la Gymnastique. Trouvez votre passion.',
    'highlights.community.title': 'Communauté Motivante',
    'highlights.community.desc': 'Rejoignez une famille de passionnés de fitness. Sessions 100% Femmes disponibles.',
    'highlights.location.title': 'Emplacement Idéal',
    'highlights.location.desc': 'Situé à Route Sidi Salem, Bizerte. Facilement accessible avec parking disponible.',
    
    // About
    'about.title': 'À PROPOS DE JOKER GYM',
    'about.subtitle': 'Votre Destination Fitness à Bizerte',
    'about.description1': 'Joker Gym est bien plus qu\'une simple salle de sport. C\'est un lieu où la passion du fitness rencontre l\'excellence. Situé au cœur de Bizerte, nous offrons un environnement unique qui inspire et motive chaque membre à atteindre ses objectifs.',
    'about.description2': 'Notre équipe passionnée vous accompagne dans votre parcours fitness, que vous soyez débutant ou athlète confirmé. Avec nos équipements de pointe et nos cours collectifs dynamiques, chaque visite est une nouvelle opportunité de vous dépasser.',
    'about.values.title': 'Nos Valeurs',
    'about.values.inclusivity': 'Inclusivité',
    'about.values.inclusivity.desc': 'Sessions 100% Femmes et programmes adaptés à tous les niveaux.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Équipements premium et encadrement professionnel.',
    'about.values.community': 'Communauté',
    'about.values.community.desc': 'Une famille de passionnés qui se soutiennent mutuellement.',
    
    // Classes
    'classes.title': 'NOS COURS',
    'classes.subtitle': 'Programme Hebdomadaire',
    'classes.description': 'Découvrez notre planning de cours collectifs. Des sessions dynamiques pour tous les goûts et tous les niveaux.',
    'classes.women': '100% Femmes',
    'classes.monday': 'Lundi',
    'classes.tuesday': 'Mardi',
    'classes.wednesday': 'Mercredi',
    'classes.thursday': 'Jeudi',
    'classes.friday': 'Vendredi',
    'classes.saturday': 'Samedi',
    'classes.sunday': 'Dimanche',
    
    // Gallery
    'gallery.title': 'GALERIE',
    'gallery.subtitle': 'Découvrez Notre Univers',
    'gallery.description': 'Explorez nos installations, notre équipement et l\'énergie unique de Joker Gym.',
    
    // Contact
    'contact.title': 'CONTACTEZ-NOUS',
    'contact.subtitle': 'Nous Sommes Là Pour Vous',
    'contact.description': 'Une question? Besoin d\'informations? N\'hésitez pas à nous contacter.',
    'contact.address': 'Adresse',
    'contact.address.value': 'Route Sidi Salem, Bizerte 7000, Tunisie',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.social': 'Réseaux Sociaux',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.message': 'Votre Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.map.title': 'Nous Trouver',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.follow': 'Suivez-nous',
    'footer.quicklinks': 'Liens Rapides',
    'footer.contact': 'Contact',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.classes': 'Classes',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'JOKER GYM',
    'hero.subtitle': 'Unleash Your Inner Strength',
    'hero.description': 'Bizerte\'s premium fitness center. Modern equipment, diverse classes, motivating community.',
    'hero.cta': 'Discover Our Classes',
    'hero.cta2': 'Contact Us',
    
    // Highlights
    'highlights.title': 'Why Choose Joker Gym?',
    'highlights.equipment.title': 'Modern Equipment',
    'highlights.equipment.desc': 'Latest generation machines, free weights, and dedicated zones for all types of training.',
    'highlights.classes.title': 'Diverse Classes',
    'highlights.classes.desc': 'From Karate to Cardio Boxing, Dance and Gymnastics. Find your passion.',
    'highlights.community.title': 'Motivating Community',
    'highlights.community.desc': 'Join a family of fitness enthusiasts. Women-only sessions available.',
    'highlights.location.title': 'Ideal Location',
    'highlights.location.desc': 'Located on Route Sidi Salem, Bizerte. Easily accessible with parking available.',
    
    // About
    'about.title': 'ABOUT JOKER GYM',
    'about.subtitle': 'Your Fitness Destination in Bizerte',
    'about.description1': 'Joker Gym is more than just a gym. It\'s a place where fitness passion meets excellence. Located in the heart of Bizerte, we offer a unique environment that inspires and motivates every member to achieve their goals.',
    'about.description2': 'Our passionate team supports you on your fitness journey, whether you\'re a beginner or an experienced athlete. With our state-of-the-art equipment and dynamic group classes, every visit is a new opportunity to push your limits.',
    'about.values.title': 'Our Values',
    'about.values.inclusivity': 'Inclusivity',
    'about.values.inclusivity.desc': 'Women-only sessions and programs adapted to all levels.',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Premium equipment and professional coaching.',
    'about.values.community': 'Community',
    'about.values.community.desc': 'A family of enthusiasts who support each other.',
    
    // Classes
    'classes.title': 'OUR CLASSES',
    'classes.subtitle': 'Weekly Schedule',
    'classes.description': 'Discover our group class schedule. Dynamic sessions for all tastes and levels.',
    'classes.women': 'Women Only',
    'classes.monday': 'Monday',
    'classes.tuesday': 'Tuesday',
    'classes.wednesday': 'Wednesday',
    'classes.thursday': 'Thursday',
    'classes.friday': 'Friday',
    'classes.saturday': 'Saturday',
    'classes.sunday': 'Sunday',
    
    // Gallery
    'gallery.title': 'GALLERY',
    'gallery.subtitle': 'Discover Our World',
    'gallery.description': 'Explore our facilities, equipment, and the unique energy of Joker Gym.',
    
    // Contact
    'contact.title': 'CONTACT US',
    'contact.subtitle': 'We Are Here For You',
    'contact.description': 'Have a question? Need information? Don\'t hesitate to contact us.',
    'contact.address': 'Address',
    'contact.address.value': 'Route Sidi Salem, Bizerte 7000, Tunisia',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.social': 'Social Media',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.map.title': 'Find Us',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.follow': 'Follow Us',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.classes': 'الحصص',
    'nav.gallery': 'المعرض',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'جوكر جيم',
    'hero.subtitle': 'أطلق قوتك الداخلية',
    'hero.description': 'صالة الرياضة المتميزة في بنزرت. معدات حديثة، حصص متنوعة، مجتمع محفز.',
    'hero.cta': 'اكتشف حصصنا',
    'hero.cta2': 'اتصل بنا',
    
    // Highlights
    'highlights.title': 'لماذا تختار جوكر جيم؟',
    'highlights.equipment.title': 'معدات حديثة',
    'highlights.equipment.desc': 'آلات من أحدث جيل، أوزان حرة، ومناطق مخصصة لجميع أنواع التدريب.',
    'highlights.classes.title': 'حصص متنوعة',
    'highlights.classes.desc': 'من الكاراتيه إلى الكارديو بوكسينغ، الرقص والجمباز. اعثر على شغفك.',
    'highlights.community.title': 'مجتمع محفز',
    'highlights.community.desc': 'انضم إلى عائلة من عشاق اللياقة البدنية. حصص للنساء فقط متاحة.',
    'highlights.location.title': 'موقع مثالي',
    'highlights.location.desc': 'يقع في طريق سيدي سالم، بنزرت. سهل الوصول مع توفر مواقف السيارات.',
    
    // About
    'about.title': 'عن جوكر جيم',
    'about.subtitle': 'وجهتك الرياضية في بنزرت',
    'about.description1': 'جوكر جيم أكثر من مجرد صالة رياضية. إنه مكان يلتقي فيه شغف اللياقة البدنية بالتميز. يقع في قلب بنزرت، نقدم بيئة فريدة تلهم وتحفز كل عضو لتحقيق أهدافه.',
    'about.description2': 'فريقنا المتحمس يرافقك في رحلتك الرياضية، سواء كنت مبتدئًا أو رياضيًا متمرسًا. مع معداتنا المتطورة وحصصنا الجماعية الديناميكية، كل زيارة هي فرصة جديدة لتجاوز حدودك.',
    'about.values.title': 'قيمنا',
    'about.values.inclusivity': 'الشمولية',
    'about.values.inclusivity.desc': 'حصص للنساء فقط وبرامج مكيفة لجميع المستويات.',
    'about.values.excellence': 'التميز',
    'about.values.excellence.desc': 'معدات متميزة وتدريب احترافي.',
    'about.values.community': 'المجتمع',
    'about.values.community.desc': 'عائلة من المتحمسين يدعمون بعضهم البعض.',
    
    // Classes
    'classes.title': 'حصصنا',
    'classes.subtitle': 'البرنامج الأسبوعي',
    'classes.description': 'اكتشف جدول حصصنا الجماعية. جلسات ديناميكية لجميع الأذواق والمستويات.',
    'classes.women': 'للنساء فقط',
    'classes.monday': 'الاثنين',
    'classes.tuesday': 'الثلاثاء',
    'classes.wednesday': 'الأربعاء',
    'classes.thursday': 'الخميس',
    'classes.friday': 'الجمعة',
    'classes.saturday': 'السبت',
    'classes.sunday': 'الأحد',
    
    // Gallery
    'gallery.title': 'المعرض',
    'gallery.subtitle': 'اكتشف عالمنا',
    'gallery.description': 'استكشف مرافقنا ومعداتنا والطاقة الفريدة لجوكر جيم.',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن هنا من أجلك',
    'contact.description': 'لديك سؤال؟ تحتاج معلومات؟ لا تتردد في الاتصال بنا.',
    'contact.address': 'العنوان',
    'contact.address.value': 'طريق سيدي سالم، بنزرت 7000، تونس',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.social': 'وسائل التواصل الاجتماعي',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'بريدك الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.map.title': 'موقعنا',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.follow': 'تابعنا',
    'footer.quicklinks': 'روابط سريعة',
    'footer.contact': 'اتصل',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || key;
  }, [language]);

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
