import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import galleryImage from '@/assets/gallery-miniatures.jpg';
import ScrollAnimation from './ScrollAnimation';

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const creations = [
    {
      id: 1,
      title: 'Anime Warrior Collection',
      category: 'Miniatures',
      status: 'Coming Soon',
      image: galleryImage,
      description: 'Highly detailed warrior figures from popular anime series.',
    },
    {
      id: 2,
      title: 'Kawaii Keychains',
      category: 'Keychains',
      status: 'Prototype',
      image: galleryImage,
      description: 'Cute character keychains perfect for daily carry.',
    },
    {
      id: 3,
      title: 'Mecha Desk Figures',
      category: 'Desk Gadgets',
      status: 'In Development',
      image: galleryImage,
      description: 'Futuristic robot figures that light up your workspace.',
    },
    {
      id: 4,
      title: 'Dragon Ball Legends',
      category: 'Collectibles',
      status: 'Coming Soon',
      image: galleryImage,
      description: 'Iconic characters in dynamic battle poses.',
    },
    {
      id: 5,
      title: 'Studio Ghibli Magic',
      category: 'Miniatures',
      status: 'Concept',
      image: galleryImage,
      description: 'Beloved characters from Ghibli films.',
    },
    {
      id: 6,
      title: 'Gaming Icons',
      category: 'Figures',
      status: 'Prototype',
      image: galleryImage,
      description: 'Legendary gaming characters brought to life.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(creations.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(creations.length / 3)) % Math.ceil(creations.length / 3));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Coming Soon': return 'bg-primary text-white';
      case 'Prototype': return 'bg-neon-blue text-white';
      case 'In Development': return 'bg-neon-cyan text-background';
      case 'Concept': return 'bg-neon-pink text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-rajdhani mb-6">
              Our <span className="gradient-text">Creations</span> Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of meticulously crafted 3D printed miniatures, keychains, 
              and collectibles. Each piece represents hours of design and printing perfection.
            </p>
          </div>
        </ScrollAnimation>

        {/* Gallery Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevSlide}
            className="btn-secondary p-3 interactive group"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(creations.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="btn-secondary p-3 interactive group"
            disabled={currentSlide === Math.ceil(creations.length / 3) - 1}
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(creations.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {creations
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((creation, index) => (
                      <ScrollAnimation key={creation.id} delay={index * 100}>
                        <div className="glass-card tilt-card glow-hover group overflow-hidden">
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={creation.image}
                              alt={creation.title}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                            
                            {/* Status Badge */}
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(creation.status)}`}>
                              {creation.status}
                            </div>
                            
                            {/* Expand Button */}
                            <button
                              onClick={() => setSelectedImage(creation.image)}
                              className="absolute top-4 right-4 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity interactive"
                            >
                              <Maximize2 size={16} />
                            </button>
                          </div>
                          
                          <div className="p-2">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold font-rajdhani text-lg">{creation.title}</h3>
                              <span className="text-sm text-primary font-medium">{creation.category}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{creation.description}</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <Maximize2 size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;