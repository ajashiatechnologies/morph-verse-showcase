import { Zap, Heart, Sparkles } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Precision Crafted',
      description: 'Every miniature is printed with state-of-the-art technology for incredible detail.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We share your love for anime, gaming, and collectible culture.',
    },
    {
      icon: Sparkles,
      title: 'Always Innovating',
      description: 'Constantly pushing boundaries with new designs and printing techniques.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-rajdhani mb-6">
              <span className="gradient-text">About MiniMorph</span> Studios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We bring big imagination into palm-sized collectibles. From anime legends to original characters, 
              every piece is printed with care and creativity in our futuristic studio.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 200}>
              <div className="glass-card tilt-card glow-hover text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-rajdhani">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="glass-card p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-rajdhani mb-6 gradient-text">
              Where Technology Meets Artistry
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Our studio combines cutting-edge 3D printing technology with artistic vision to create 
              collectibles that capture the essence of your favorite characters. Each piece tells a story, 
              from initial concept to the final detailed miniature in your hands.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                Resin 3D Printing
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                Custom Designs
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                Hand-Finished
              </span>
              <span className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                Limited Editions
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;