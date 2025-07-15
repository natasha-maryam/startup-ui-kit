import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Indie Developer',
      content: 'The best kit I\'ve used to speed up my frontend workflow. The glassmorphic design is absolutely stunning and the components are so well crafted.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Designer at TechCorp',
      content: 'Our team productivity increased by 40% after switching to Startup UI Kit. The consistency and quality of components is unmatched.',
      avatar: 'MR',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Frontend Engineer',
      content: 'Finally, a UI kit that doesn\'t feel like every other bootstrap template. The modern design and attention to detail is impressive.',
      avatar: 'EJ',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            What Developers{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who are building faster with our component kit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground text-sm">Happy Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;