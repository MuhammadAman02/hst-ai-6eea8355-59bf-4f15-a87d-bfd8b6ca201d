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
    <section className="py-24 px-4 bg-gradient-to-b from-joylo-darker to-joylo-dark relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-joylo-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-joylo-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Why Joylo? Because You're Not Alone.
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-gray-400 leading-relaxed">
            <p>
              This isn't a tool. This is a revolution.
            </p>
            <p>
              Joylo AI doesn't throw you in the deep end. It pairs your momentum with on-demand developer firepower — vetted, certified, and production-savvy.
            </p>
            <p className="text-joylo-accent font-semibold">
              Every app you build is one click away from expert execution.
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="w-10 h-10 text-joylo-purple mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2 text-sm">{benefit.title}</h3>
              <p className="text-gray-500 text-xs">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to build louder, faster, smarter?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Because coding should feel like dancing — and scaling should feel like breathing.
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-joylo-purple to-joylo-blue hover:from-joylo-blue hover:to-joylo-purple transition-all duration-300 px-8 py-4 text-base font-semibold mr-4"
            >
              Join Joylo
            </Button>
            <p className="text-joylo-accent font-semibold text-base">
              Vibe different. Build with joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoyloSection;