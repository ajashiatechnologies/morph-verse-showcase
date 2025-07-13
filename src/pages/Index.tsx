import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingMascot from '@/components/FloatingMascot';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import LaunchingSoonSection from '@/components/LaunchingSoonSection';
import CollectorsClubSection from '@/components/CollectorsClubSection';
import SocialCommunitySection from '@/components/SocialCommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Interactive Elements */}
      <CustomCursor />
      <ParticleBackground />
      <FloatingMascot />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <LaunchingSoonSection />
        <CollectorsClubSection />
        <SocialCommunitySection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
