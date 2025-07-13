import { Rocket, Calendar, Instagram } from 'lucide-react';
import labImage from '@/assets/lab-workspace.jpg';
import ScrollAnimation from './ScrollAnimation';

const LaunchingSoonSection = () => {
  const upcomingFeatures = [
    {
      title: 'Custom Character Service',
      description: 'Turn your favorite characters or original designs into 3D printed reality.',
      timeline: 'Q2 2025',
    },
    {
      title: 'Limited Edition Drops',
      description: 'Exclusive monthly releases of trending anime and gaming collectibles.',
      timeline: 'Q1 2025',
    },
    {
      title: 'Interactive Design Studio',
      description: 'Collaborate with us on custom poses, colors, and modifications.',
      timeline: 'Q3 2025',
    },
  ];

  return (
    <section id="coming-soon" className="py-24 relative overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <img
          src={labImage}
          alt="3D Printing Lab"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-30" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <Rocket className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-medium">Coming Soon</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold font-rajdhani mb-6">
              Our <span className="gradient-text">3D Lab</span> is Heating Up
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're working around the clock to bring you the most incredible 3D printed collectibles. 
              New creations are arriving soon, and trust us - you don't want to miss these drops.
            </p>
          </div>
        </ScrollAnimation>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {upcomingFeatures.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 200}>
              <div className="glass-card glow-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-primary">{feature.timeline}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-rajdhani mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation delay={400}>
          <div className="glass-card p-8 md:p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce-slow" />
            
            <h3 className="text-3xl md:text-4xl font-bold font-rajdhani mb-6 gradient-text">
              Don't Miss the Launch
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be the first to know when new collections drop. Follow us on Instagram for 
              exclusive behind-the-scenes content, sneak peeks, and early access to limited editions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary interactive group">
                <Instagram className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Follow for First Looks</span>
              </button>
              
              <button className="btn-secondary interactive">
                <span>Join VIP List</span>
              </button>
            </div>
            
            {/* Progress Indicator */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Lab Setup Progress</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-glow rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default LaunchingSoonSection;