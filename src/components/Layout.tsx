import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import MouseFollower from './MouseFollower';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <MouseFollower />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
