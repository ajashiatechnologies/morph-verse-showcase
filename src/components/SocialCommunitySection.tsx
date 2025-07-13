import { Instagram, Youtube, Users, MessageCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const SocialCommunitySection = () => {
  // Mock Instagram feed data
  const instagramPosts = [
    { id: 1, image: '/api/placeholder/300/300', likes: 432, comments: 28 },
    { id: 2, image: '/api/placeholder/300/300', likes: 651, comments: 45 },
    { id: 3, image: '/api/placeholder/300/300', likes: 289, comments: 19 },
    { id: 4, image: '/api/placeholder/300/300', likes: 523, comments: 37 },
    { id: 5, image: '/api/placeholder/300/300', likes: 398, comments: 24 },
    { id: 6, image: '/api/placeholder/300/300', likes: 445, comments: 32 },
  ];

  const socialStats = [
    { platform: 'Instagram', followers: '12.5K', growth: '+15%', icon: Instagram },
    { platform: 'YouTube', subscribers: '8.2K', growth: '+23%', icon: Youtube },
    { platform: 'Community', members: '3.1K', growth: '+31%', icon: Users },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-neon-cyan rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-rajdhani mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with fellow collectors, share your collections, and be part of the 
              MiniMorph Studios family. We love seeing your creativity and passion!
            </p>
          </div>
        </ScrollAnimation>

        {/* Social Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialStats.map((stat, index) => (
            <ScrollAnimation key={stat.platform} delay={index * 100}>
              <div className="glass-card text-center glow-hover group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-rajdhani mb-2">{stat.followers || stat.subscribers || stat.members}</h3>
                <p className="text-muted-foreground mb-2">{stat.platform}</p>
                <span className="text-sm text-primary font-semibold">{stat.growth} this month</span>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Instagram Feed */}
          <ScrollAnimation>
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Instagram className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold font-rajdhani">Latest from Instagram</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {instagramPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="aspect-square bg-background-elevated rounded-lg overflow-hidden group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-full h-full bg-gradient-primary opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white opacity-60" />
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full btn-secondary interactive group">
                <Instagram className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Follow @MiniMorphStudios</span>
              </button>
            </div>
          </ScrollAnimation>

          {/* Community Engagement */}
          <ScrollAnimation delay={200}>
            <div className="space-y-8">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold font-rajdhani">Get in Touch</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Have questions about our process? Want to suggest a character for our next drop? 
                  Or just want to share your collection? We'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <button className="w-full btn-secondary interactive group">
                    <Instagram className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>DM us on Instagram</span>
                  </button>
                  
                  <button className="w-full btn-secondary interactive group">
                    <Youtube className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Subscribe to Our Channel</span>
                  </button>
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="glass-card p-6">
                <h4 className="font-bold font-rajdhani mb-4 text-lg">Community Guidelines</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Share your collections with #MiniMorphMini</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Suggest characters you'd love to see</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Ask questions about our process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Be respectful and supportive</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SocialCommunitySection;