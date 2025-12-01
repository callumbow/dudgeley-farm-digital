import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-earth-dark/60 via-earth-dark/40 to-earth-dark/60" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 animate-fade-in font-display text-5xl font-bold text-cream md:text-7xl lg:text-8xl">
          Dudgeley Farm
        </h1>
        <p className="mb-8 max-w-2xl animate-slide-up text-lg text-cream/90 md:text-xl" style={{ animationDelay: '0.2s' }}>
          A timeless countryside venue where your most cherished moments come to life, 
          nestled among rolling hills and natural beauty
        </p>
        <div className="flex animate-slide-up flex-wrap gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium">
            View Our Venue
          </Button>
          <Button size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-earth-dark shadow-medium">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
