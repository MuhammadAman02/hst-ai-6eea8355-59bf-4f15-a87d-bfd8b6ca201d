import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyJoyloSection from '@/components/WhyJoyloSection';
import FloatingNav from '@/components/FloatingNav';

const Index = () => {
  console.log('Index page rendered');

  return (
    <div className="min-h-screen bg-joylo-dark">
      <FloatingNav />
      <HeroSection />
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