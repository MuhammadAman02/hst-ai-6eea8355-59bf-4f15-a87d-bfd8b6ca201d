import { Button } from '@/components/ui/button';
import { Users, Zap, Code, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const ArchitectSection = () => {
  console.log('ArchitectSection rendered');

  const architectBenefits = [
    "Scale your app to production",
    "Deploy with zero downtime", 
    "Polish UI/UX to perfection",
    "Optimize performance",
    "Add enterprise features",
    "Handle complex integrations"
  ];

  return (
    <section className="py-24 px-4 bg-hst-bg">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-hst-text-primary mb-6">
            Your Secret Weapon:
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold hst-text-gradient mb-8">
            One-Click Certified Architects
          </h3>
          <p className="text-xl text-hst-text-secondary max-w-4xl mx-auto leading-relaxed">
            They don't just help, they co-create. Scale. Deploy. Polish. Push to prod. Your code. Their brains. Zero friction.
          </p>
        </div>

        {/* The Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="hst-card p-8 mb-6 hover:border-hst-accent-blue/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-hst-accent-blue to-hst-accent-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hst-text-primary mb-4">1. Vibe Code</h3>
              <p className="text-hst-text-muted">
                Create your app with our AI-powered vibe-based coding experience. No limits, just pure creativity.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-hst-accent-blue" />
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="hst-card p-8 mb-6 hover:border-hst-accent-purple/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-hst-accent-purple to-hst-accent-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hst-text-primary mb-4">2. One Click</h3>
              <p className="text-hst-text-muted">
                Instantly connect with a certified Joylo Architect. Vetted, production-savvy, ready to amplify your vision.
              </p>
            </div>
          </div>
        </div>

        {/* What Architects Do */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-hst-text-primary mb-6">
              What Our Architects Bring
            </h3>
            <div className="space-y-4">
              {architectBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-hst-accent-blue flex-shrink-0" />
                  <span className="text-hst-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="hst-button-primary px-8 py-3 rounded-lg mr-4">
                Meet Our Architects
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-lg border-hst-border text-hst-text-primary hover:bg-hst-surface">
                See Success Stories
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Architect Profile Cards */}
            <div className="hst-glass p-6 rounded-xl border border-hst-accent-blue/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-hst-accent-blue to-hst-accent-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JA</span>
                </div>
                <div>
                  <h4 className="text-hst-text-primary font-semibold">Joylo Architect</h4>
                  <p className="text-hst-text-muted text-sm">Full-Stack Expert • 5+ years</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                    Available
                  </span>
                </div>
              </div>
              <p className="text-hst-text-secondary text-sm">
                "I specialize in scaling React apps to production. Let's turn your prototype into a robust, enterprise-ready application."
              </p>
            </div>

            <div className="hst-glass p-6 rounded-xl border border-hst-accent-purple/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-hst-accent-purple to-hst-accent-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JA</span>
                </div>
                <div>
                  <h4 className="text-hst-text-primary font-semibold">Joylo Architect</h4>
                  <p className="text-hst-text-muted text-sm">DevOps & Backend • 7+ years</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                    Available
                  </span>
                </div>
              </div>
              <p className="text-hst-text-secondary text-sm">
                "From database optimization to cloud deployment, I'll make sure your app performs flawlessly at scale."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center hst-glass p-12 rounded-3xl border border-hst-accent-blue/20">
          <h3 className="text-2xl md:text-4xl font-bold text-hst-text-primary mb-4">
            Ready to 10x Your Development?
          </h3>
          <p className="text-lg text-hst-text-secondary mb-8 max-w-3xl mx-auto">
            Stop being a solo developer. Start being a co-creator with world-class architects.
          </p>
          <Button className="hst-button-primary px-12 py-4 text-lg font-semibold rounded-lg">
            <Rocket className="w-5 h-5 mr-2" />
            Launch with an Architect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArchitectSection;