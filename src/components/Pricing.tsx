import { Check, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '5 core components',
        'Basic documentation',
        'Community support',
        'MIT License'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'one-time',
      description: 'Everything you need to build',
      features: [
        '25+ components',
        'Layout templates',
        'Priority support',
        'Lifetime updates',
        'Advanced examples',
        'Figma files included'
      ],
      buttonText: 'Upgrade to Pro',
      popular: true
    },
    {
      name: 'Team',
      price: '$99',
      period: 'one-time',
      description: 'For teams and agencies',
      features: [
        'Everything in Pro',
        'Team license (up to 10 devs)',
        'Custom components',
        'Direct chat support',
        'Code review sessions',
        'White-label rights'
      ],
      buttonText: 'Get Team License',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Simple{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include commercial license.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card p-8 relative animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-orbitron font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'btn-glow' 
                    : 'border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            30-day money-back guarantee • No questions asked
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;