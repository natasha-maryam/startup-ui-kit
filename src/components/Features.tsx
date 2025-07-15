import { Zap, Smartphone, Gem, Building } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Tailwind-Ready',
      description: 'Built with utility-first best practices.',
      color: 'text-yellow-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Optimized',
      description: 'Perfect across all screen sizes.',
      color: 'text-green-400'
    },
    {
      icon: Gem,
      title: 'Clean Design',
      description: 'Minimalist, modern, and beautiful.',
      color: 'text-purple-400'
    },
    {
      icon: Building,
      title: 'Modular Components',
      description: 'Use what you need, skip what you don\'t.',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Kit?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern, responsive interfaces that users love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;