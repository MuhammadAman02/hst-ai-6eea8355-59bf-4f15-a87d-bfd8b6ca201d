import { Rocket, RotateCcw, MessageCircle } from 'lucide-react';

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
    <section className="py-24 px-4 bg-hst-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-hst-text-primary mb-6">
            Built Different. Built Daring.
          </h2>
          <p className="text-lg text-hst-text-secondary max-w-3xl mx-auto">
            Vibe code your app into existence, then bring in a certified Joylo Architect — in one click.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="hst-card p-8 hover:border-hst-accent-blue/30 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-hst-text-primary mb-2">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-hst-text-muted leading-relaxed mb-6 text-sm">
                {feature.description}
              </p>
              
              <div className="border-t border-hst-border pt-6">
                <p className="hst-text-gradient font-semibold text-center text-sm">
                  {feature.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;