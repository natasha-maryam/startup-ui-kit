import { useState } from 'react';
import { Github, Twitter, Mail, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form - just show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-orbitron font-bold mb-6">
              Let's{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Build Together
              </span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Have questions about our component kit? Need custom components for your project? 
              Drop us a message and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="glass-card border-border/50 bg-card/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="glass-card border-border/50 bg-card/50"
                    required
                  />
                </div>
              </div>
              
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="glass-card border-border/50 bg-card/50 min-h-32"
                required
              />
              
              <Button type="submit" className="btn-glow w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Company Info & Links */}
          <div className="space-y-8">
            {/* Brand */}
            <div>
              <div className="text-3xl font-orbitron font-bold text-primary mb-4">
                &lt;NM/&gt;
              </div>
              <p className="text-muted-foreground max-w-md">
                Crafting beautiful, modern UI components that help developers build faster 
                and ship better products.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-orbitron font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('components')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Components
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Pricing
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-orbitron font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary hover:bg-primary/10">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary hover:bg-primary/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary hover:bg-primary/10">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Built with 💖 by{' '}
            <span className="text-primary font-medium">Natasha Maryam</span>
          </p>
          <p className="text-muted-foreground text-sm">
            © 2025 Startup UI Kit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;