import { Rocket, RotateCcw, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  console.log('FeaturesSection rendered');

  const features = [
    {
      icon: Rocket,
      title: "Create from Scratch",
      emoji: "🚀",
      description: "Zero code? A little code? A lot of imagination? Joylo gets you live, fast — with real-time previews and a vibe-based coding experience designed to let creatives, founders, and non-devs actually build.",
      highlight: "Stop pitching ideas. Start launching them."
    },
    {
      icon: RotateCcw,
      title: "Remix Your Existing App",
      emoji: "🔄",
      description: "Already got code? Even better. Plug it in. Preview instantly. Tweak. Test. Iterate. Now your product manager, CTO, even your CEO can co-create with the dev team — live.",
      highlight: "No more blockers. No more \"waiting on the devs.\" Build. Show. Ship."
    },
    {
      icon: MessageCircle,
      title: "Talk to Your Data",
      emoji: "💬",
      description: "Connect your database. Ask it anything in plain English. Watch insights surface, dashboards evolve, and decisions get smarter — all without a single line of SQL.",
      highlight: "From \"I wonder...\" to \"Here's the answer\" in seconds."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-joylo-dark to-joylo-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built Different. Built Daring.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Vibe code your app into existence, then bring in a certified Joylo Architect — in one click.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass border-white/5 hover:border-joylo-purple/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {feature.description}
                </p>
                
                <div className="border-t border-white/5 pt-6">
                  <p className="text-joylo-accent font-semibold text-center text-sm">
                    {feature.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;