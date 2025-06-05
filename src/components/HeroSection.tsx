import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Paperclip, Send, Sparkles } from 'lucide-react';

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
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-hst-text-primary leading-tight tracking-tight">
            Meet Joylo AI
          </h1>
          
          {/* The statement-making tagline - more compact */}
          <div className="mb-6">
            <div className="text-2xl md:text-4xl font-bold hst-text-gradient leading-tight">
              The Assistant. The Architect. The Amplifier.
            </div>
          </div>

          <p className="text-lg md:text-xl text-hst-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
            Joylo AI isn't just another app builder. It's your shortcut from idea to launch — without limits, without waiting, without being alone.
          </p>
        </div>

        {/* Main AI Prompt Interface - Bigger and Central */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-hst-text-primary mb-2">
              Start Building Your Vision
            </h2>
            <p className="text-hst-text-secondary">
              Describe your app idea and watch it come to life
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className="hst-glass rounded-3xl p-8 border border-hst-accent-purple/30 shadow-2xl">
              <div className="flex flex-col space-y-4">
                <div className="flex-1">
                  <Input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask Joylo AI to create an ecommerce store, a dashboard, or anything you can imagine..."
                    className="bg-transparent border-0 text-hst-text-primary placeholder:text-hst-text-muted text-lg h-16 focus:ring-0 focus:outline-none text-center"
                  />
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-hst-text-muted hover:text-hst-text-primary p-3"
                  >
                    <Paperclip className="w-5 h-5" />
                    <span className="ml-2 hidden sm:inline">Attach</span>
                  </Button>
                  <Button
                    type="submit"
                    className="hst-button-primary px-8 py-3 rounded-xl text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Build with Joylo AI
                  </Button>
                </div>
              </div>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-hst-text-muted mb-2">
              Then get a certified architect with one click to scale, deploy, and polish
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-hst-text-muted">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Live AI Assistant Ready</span>
            </div>
          </div>
        </div>

        {/* Compact value proposition */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="hst-glass rounded-2xl p-6 border border-hst-accent-blue/20">
            <p className="text-lg text-hst-text-primary mb-2">
              <span className="hst-text-gradient font-semibold">While others hand you a sandbox, we hand you a rocket.</span>
            </p>
            <p className="text-hst-text-secondary">
              Vibe code your app into existence, then bring in a certified Joylo Architect — in one click.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hst-button-primary px-8 py-3 rounded-lg text-base font-semibold">
              Start Building Now
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-lg text-base border-hst-border text-hst-text-primary hover:bg-hst-surface">
              Meet Our Architects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;