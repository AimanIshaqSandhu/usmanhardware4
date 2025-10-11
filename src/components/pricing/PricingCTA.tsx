
import { Button } from '@/components/ui/button';

const PricingCTA = () => {
  return (
    <section className="py-20 cinematic-section relative overflow-hidden">
      <div className="absolute inset-0 cinematic-grain opacity-20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
          Ready to Transform Your Product Story?
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Let&apos;s discuss your project and create a video that drives results for your SaaS business.
        </p>
        <a href="https://calendly.com/kvit/15-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="cinematic-cta text-lg px-10 py-6 font-semibold">
            Schedule Free Consultation
          </Button>
        </a>
      </div>
    </section>
  );
};

export default PricingCTA;
