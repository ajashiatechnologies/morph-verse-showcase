import { useState } from 'react';
import { Mail, Gift, Star, ArrowRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const CollectorsClubSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Early Access',
      description: 'Get first dibs on limited edition drops before anyone else.',
    },
    {
      icon: Star,
      title: 'Member-Only Designs',
      description: 'Access to special collectibles created exclusively for club members.',
    },
    {
      icon: Mail,
      title: 'Behind-the-Scenes Updates',
      description: 'Weekly emails with design process videos and studio insights.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitted(true);
      // Here you would typically handle the form submission
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setName('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-neon-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Benefits */}
          <div>
            <ScrollAnimation>
              <h2 className="text-5xl md:text-6xl font-bold font-rajdhani mb-6">
                Join the <span className="gradient-text">Collectors</span> Club
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Get exclusive early access, limited drops, and behind-the-scenes reveals. 
                Be part of a community that shares your passion for incredible collectibles.
              </p>
            </ScrollAnimation>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={benefit.title} delay={index * 100}>
                  <div className="flex items-start gap-4 p-4 glass rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold font-rajdhani mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <ScrollAnimation delay={300}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-glow rounded-full blur-2xl opacity-30" />
              
              <div className="relative z-10">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold font-rajdhani mb-2">
                        Ready to Join?
                      </h3>
                      <p className="text-muted-foreground">
                        Sign up now and be the first to know about our drops!
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 bg-background-elevated border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-background-elevated border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-primary interactive group"
                      >
                        <span>Join the Club</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      No spam, ever. Just exclusive updates and early access to drops.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-rajdhani mb-2 gradient-text">
                      Welcome to the Club!
                    </h3>
                    <p className="text-muted-foreground">
                      Check your email for a special welcome message and your first exclusive peek 
                      at what's coming next.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CollectorsClubSection;