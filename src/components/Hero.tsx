import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Startup
              </span>
              <br />
              <span className="text-foreground">UI Kit</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Pixel-perfect UI. Ready to ship.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              A modern, responsive, developer-friendly component kit — built with Tailwind CSS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-glow text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection('components')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white"
                onClick={() => scrollToSection('components')}
              >
                View Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div>Components</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div>Responsive</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">0</div>
                <div>Dependencies</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="UI Kit Preview" 
                className="w-full h-auto rounded-2xl shadow-glow glass-card p-4"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;