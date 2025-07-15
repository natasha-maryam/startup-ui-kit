import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import buttonsPreview from '../assets/buttons-preview.jpg';
import cardsPreview from '../assets/cards-preview.jpg';
import formsPreview from '../assets/forms-preview.jpg';

const ComponentGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const components = [
    {
      title: 'Buttons',
      category: 'Forms',
      image: buttonsPreview,
      description: 'Beautiful gradient and outline buttons with hover effects'
    },
    {
      title: 'Cards',
      category: 'Cards',
      image: cardsPreview,
      description: 'Glassmorphic cards with subtle shadows and transparency'
    },
    {
      title: 'Login Form',
      category: 'Forms',
      image: formsPreview,
      description: 'Clean authentication forms with validation states'
    },
    {
      title: 'Pricing Card',
      category: 'Cards',
      image: cardsPreview,
      description: 'Professional pricing tables with highlighted features'
    },
    {
      title: 'Modal Preview',
      category: 'Blocks',
      image: buttonsPreview,
      description: 'Responsive modals with smooth animations'
    },
    {
      title: 'CTA Banner',
      category: 'Blocks',
      image: formsPreview,
      description: 'Eye-catching call-to-action sections'
    },
    {
      title: 'Dashboard Widget',
      category: 'Blocks',
      image: cardsPreview,
      description: 'Data visualization components and charts'
    },
    {
      title: 'Navigation',
      category: 'Forms',
      image: buttonsPreview,
      description: 'Responsive navigation menus and breadcrumbs'
    },
    {
      title: 'Tables',
      category: 'Blocks',
      image: formsPreview,
      description: 'Sortable and filterable data tables'
    }
  ];

  const filters = ['All', 'Forms', 'Cards', 'Blocks'];

  const filteredComponents = activeFilter === 'All' 
    ? components 
    : components.filter(comp => comp.category === activeFilter);

  return (
    <section id="components" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Component{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Preview our carefully crafted components with live examples and interactive demos.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`px-6 py-2 ${
                  activeFilter === filter 
                    ? 'btn-glow' 
                    : 'border-primary/30 hover:border-primary hover:bg-primary/10'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredComponents.map((component, index) => (
            <div 
              key={index}
              className="glass-card group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <Button size="sm" className="btn-glow">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {component.title}
                  </h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {component.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentGallery;