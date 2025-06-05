import { Button } from '@/components/ui/button';
import { Users, Zap, Shield, Sparkles } from 'lucide-react';

const WhyJoyloSection = () => {
  console.log('WhyJoyloSection rendered');

  const benefits = [
    {
      icon: Users,
      title: "Expert Execution",
      description: "Vetted, certified, and production-savvy developers"
    },
    {
      icon: Zap,
      title: "Zero Friction", 
      description: "One click away from professional development"
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Scale, deploy, polish, and push to production"
    },
    {
      icon: Sparkles,
      title: "Co-Creation",
      description: "They don't just help, they co-create with you"
    }
  ];

  return (
    <section className="py-24 px-4 bg-hst-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-hst-text-primary mb-8">
            Why Joylo? Because You're Not Alone.
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-hst-text-secondary leading-relaxed">
            <p>
              This isn't a tool. This is a revolution.
            </p>
            <p>
              Joylo AI doesn't throw you in the deep end. It pairs your momentum with on-demand developer firepower — vetted, certified, and production-savvy.
            </p>
            <p className="hst-text-gradient font-semibold">
              Every app you build is one click away from expert execution.
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="hst-card p-6 text-center hover:border-hst-accent-purple/30 transition-all duration-300"
            >
              <benefit.icon className="w-10 h-10 text-hst-accent-blue mx-auto mb-4" />
              <h3 className="text-hst-text-primary font-semibold mb-2 text-sm">{benefit.title}</h3>
              <p className="text-hst-text-muted text-xs">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-hst-text-primary mb-6">
            Ready to build louder, faster, smarter?
          </h3>
          <p className="text-lg text-hst-text-secondary mb-8 max-w-3xl mx-auto">
            Because coding should feel like dancing — and scaling should feel like breathing.
          </p>
          <div className="space-y-4">
            <Button className="hst-button-primary px-8 py-4 text-base font-semibold mr-4 rounded-lg">
              Join Joylo
            </Button>
            <p className="hst-text-gradient font-semibold text-base">
              Vibe different. Build with joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoyloSection;