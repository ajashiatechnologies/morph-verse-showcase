import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-3d-printing.jpg';
import ScrollAnimation from './ScrollAnimation';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="3D Printing Studio"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60 animate-float"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="inline-block mb-6 px-4 py-2 glass-card">
            <span className="text-primary font-medium text-sm">
              🎯 Put your Accounting on Autopilot
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <h1 className="text-6xl md:text-8xl font-bold font-rajdhani mb-6 leading-tight">
            <span className="gradient-text">Miniature Art.</span>
            <br />
            <span className="text-white">Engineered to Impress.</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore 3D printed collectibles like never before. From anime legends to original characters, 
            every piece is crafted with precision and creativity.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary interactive group">
              <span>Shop Soon</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary interactive group flex items-center">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Our Process</span>
            </button>
          </div>
        </ScrollAnimation>

        {/* Scroll Indicator */}
        <ScrollAnimation delay={800}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-glow rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;