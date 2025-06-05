import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Paperclip, Send, Sparkles, ArrowRight, Users } from 'lucide-react';

const HeroSection = () => {
  const [prompt, setPrompt] = useState('');

  console.log('HeroSection rendered');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Prompt submitted:', prompt);
  };

  return (
    <div className="min-h-screen hst-gradient-bg flex flex-col items-center justify-center px-4 relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-hst-accent-blue" />
            <span className="text-xl font-bold text-hst-text-primary">Joylo AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-hst-text-secondary hover:text-hst-text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-hst-text-secondary hover:text-hst-text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-hst-text-secondary hover:text-hst-text-primary transition-colors">About</a>
            <Button className="hst-button-primary px-4 py-2 rounded-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="text-center max-w-6xl mx-auto pt-20">
        {/* Main heading */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-hst-text-primary leading-tight tracking-tight">
            Meet Joylo AI
          </h1>
          
          {/* The statement-making tagline */}
          <div className="mb-8 space-y-2">
            <div className="text-3xl md:text-6xl font-bold hst-text-gradient leading-tight">
              The Assistant.
            </div>
            <div className="text-3xl md:text-6xl font-bold hst-text-gradient leading-tight">
              The Architect.
            </div>
            <div className="text-3xl md:text-6xl font-bold hst-text-gradient leading-tight">
              The Amplifier.
            </div>
          </div>

          <p className="text-xl md:text-2xl text-hst-text-secondary mb-6 max-w-4xl mx-auto leading-relaxed">
            Joylo AI isn't just another app builder. It's your shortcut from idea to launch — without limits, without waiting, without being alone.
          </p>
        </div>

        {/* The Moat - One-Click Architect Feature */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="hst-glass rounded-3xl p-8 md:p-12 border border-hst-accent-blue/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-hst-text-primary mb-4">
                  While others hand you a sandbox,
                </h2>
                <h2 className="text-2xl md:text-4xl font-bold hst-text-gradient mb-6">
                  we hand you a rocket.
                </h2>
                <p className="text-lg text-hst-text-secondary mb-6 leading-relaxed">
                  Vibe code your app into existence, then bring in a certified Joylo Architect — in one click.
                </p>
                <div className="flex items-center space-x-4 p-4 bg-hst-surface rounded-xl border border-hst-border">
                  <Users className="w-8 h-8 text-hst-accent-blue" />
                  <div>
                    <p className="text-hst-text-primary font-semibold">Certified Joylo Architect</p>
                    <p className="text-hst-text-muted text-sm">One click. Expert execution. Zero friction.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-hst-accent-purple" />
                </div>
              </div>
              <div className="text-center">
                <div className="hst-card p-6 mb-4">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-hst-text-primary mb-2">Your Code</h3>
                  <p className="text-hst-text-muted text-sm">Vibe-based creation</p>
                </div>
                <div className="text-2xl text-hst-accent-blue mb-4">+</div>
                <div className="hst-card p-6">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-hst-text-primary mb-2">Their Brains</h3>
                  <p className="text-hst-text-muted text-sm">Expert architects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Prompt Interface */}
        <div className="mb-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="hst-glass rounded-2xl p-6 border border-hst-accent-purple/20">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask Joylo AI to create an ecommerce store, a dashboard, or anything you can imagine..."
                    className="bg-transparent border-0 text-hst-text-primary placeholder:text-hst-text-muted text-base h-12 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-hst-text-muted hover:text-hst-text-primary p-2"
                  >
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button
                    type="submit"
                    className="hst-button-primary px-6 py-2 rounded-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Build
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <p className="text-sm text-hst-text-muted mt-3 text-center">
            Then get a certified architect with one click to scale, deploy, and polish
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hst-button-primary px-8 py-4 rounded-lg text-lg font-semibold">
              Start Building Now
            </Button>
            <Button variant="outline" className="px-8 py-4 rounded-lg text-lg border-hst-border text-hst-text-primary hover:bg-hst-surface">
              Meet Our Architects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;