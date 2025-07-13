import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import mascotImage from '@/assets/mascot-hologram.jpg';

const FloatingMascot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  
  const tips = [
    "Welcome to MiniMorph Studios! 🎯",
    "Check out our latest 3D creations below! ✨",
    "Join our collectors club for exclusive drops! 🚀",
    "Follow us on Instagram for behind-the-scenes! 📸",
    "New miniatures dropping soon! 🎮"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tip Bubble */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-64 mb-4 animate-fade-in-up">
          <div className="glass-card relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 hover:bg-primary/20 rounded-full transition-colors"
            >
              <X size={16} />
            </button>
            <p className="text-sm pr-6">{tips[tipIndex]}</p>
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-glass-border"></div>
          </div>
        </div>
      )}
      
      {/* Mascot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full overflow-hidden glow-hover interactive group"
        style={{
          background: `url(${mascotImage}) center/cover`,
          boxShadow: '0 0 30px hsl(var(--primary) / 0.5)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        
        {/* Floating notification indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan rounded-full flex items-center justify-center animate-pulse">
          <MessageCircle size={10} />
        </div>
        
        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
              style={{
                top: `${20 + i * 15}%`,
                left: `${30 + i * 20}%`,
                animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
};

export default FloatingMascot;