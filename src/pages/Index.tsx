import HeroSection from '@/components/HeroSection';
import ArchitectSection from '@/components/ArchitectSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyJoyloSection from '@/components/WhyJoyloSection';

const Index = () => {
  console.log('Index page rendered');

  return (
    <div className="min-h-screen bg-hst-bg">
      <HeroSection />
      <div id="architects">
        <ArchitectSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="why-joylo">
        <WhyJoyloSection />
      </div>
    </div>
  );
};

export default Index;