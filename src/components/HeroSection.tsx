import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Paperclip, Send } from 'lucide-react';

const HeroSection = () => {
  const [prompt, setPrompt] = useState('');

  console.log('HeroSection rendered');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Prompt submitted:', prompt);
    // Handle prompt submission
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-joylo-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-joylo-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-joylo-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto pt-20">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-white">
            Joylo AI
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Your AI powered assistant for building web applications.
          </p>
        </div>

        {/* Main tagline */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            The Assistant. The Architect. The Amplifier.
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Joylo AI isn't just another app builder.<br />
            It's your shortcut from idea to launch — without limits, without waiting, without being alone.
          </p>
        </div>

        {/* AI Prompt Interface */}
        <div className="mb-16 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col space-y-4">
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask Joylo AI to create an ecommerce store, a dashboard, or anything you can imagine..."
                  className="bg-transparent border-0 text-white placeholder:text-gray-500 text-base h-14 focus:ring-0 focus:outline-none"
                />
                <div className="flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <Paperclip className="w-4 h-4 mr-2" />
                    Attach
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-joylo-purple to-joylo-blue hover:from-joylo-blue hover:to-joylo-purple transition-all duration-300 px-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Build
                  </Button>
                </div>
              </div>
            </div>
          </form>

          {/* Tech stack icons */}
          <div className="flex justify-center space-x-4 mt-8">
            {[
              { name: 'React', color: '#61dafb' },
              { name: 'Python', color: '#3776ab' },
              { name: '.NET', color: '#512bd4' },
              { name: 'GitHub', color: '#181717' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{tech.name.slice(0, 2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <p className="text-gray-400 text-base">
            While others hand you a sandbox, we hand you a rocket.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-joylo-purple to-joylo-blue hover:from-joylo-blue hover:to-joylo-purple transition-all duration-300 px-8 py-4 text-base font-semibold"
          >
            Start Building Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;