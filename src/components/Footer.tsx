import { Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#gallery' },
      { name: 'Community', href: '#community' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Shipping Info', href: '#shipping' },
      { name: 'Returns', href: '#returns' },
      { name: 'Size Guide', href: '#sizing' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Licensing', href: '#licensing' },
    ],
  };

  return (
    <footer className="relative overflow-hidden py-16 border-t border-primary/10">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MM</span>
              </div>
              <span className="text-2xl font-rajdhani font-bold gradient-text">
                MiniMorph Studios
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Bringing imagination to life through precision 3D printing. Every miniature tells a story, 
              crafted with passion for collectors who appreciate the extraordinary.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors interactive group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors interactive group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors interactive group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3">Stay in the Loop</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background-elevated border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors text-sm"
                />
                <button className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-transform interactive">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold font-rajdhani text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-rajdhani text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors interactive"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} MiniMorph Studios. Made with</span>
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span>for collectors</span>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-4 right-6 opacity-20">
          <div className="text-xs text-muted-foreground font-rajdhani">
            MiniMorph Studios™
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;