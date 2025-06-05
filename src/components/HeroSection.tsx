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
      <div className="text-center max-w-4xl mx-auto pt-20">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-hst-text-primary leading-tight">
            Meet Joylo AI
          </h1>
          <p className="text-xl md:text-2xl text-hst-text-secondary mb-4">
            The Assistant. The Architect. The Amplifier.
          </p>
          <p className="text-lg text-hst-text-muted max-w-3xl mx-auto leading-relaxed">
            Joylo AI isn't just another app builder. It's your shortcut from idea to launch — without limits, without waiting, without being alone.
          </p>
        </div>

        {/* AI Prompt Interface */}
        <div className="mb-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="hst-glass rounded-2xl p-6">
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
        </div>

        {/* Value proposition */}
        <div className="space-y-6">
          <p className="text-lg text-hst-text-secondary">
            While others hand you a sandbox, we hand you a rocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hst-button-primary px-8 py-3 rounded-lg text-base">
              Start Building Now
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-lg text-base border-hst-border text-hst-text-primary hover:bg-hst-surface">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;