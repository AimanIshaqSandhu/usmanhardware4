
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingCTA from '@/components/pricing/PricingCTA';
import { useEffect } from 'react';

const Pricing = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen cinematic-section">
      <ModernHeader />
      
      <main className="pt-16">
        <PricingHero />
        <PricingPlans />
        <PricingFAQ />
        <PricingCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
