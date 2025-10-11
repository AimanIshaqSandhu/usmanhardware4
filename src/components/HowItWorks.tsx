
import { MessageSquare, Lightbulb, Video, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      description: "We dive deep into your goals, audience, and success metrics in a 30-minute strategy session.",
      timeline: "Day 1",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Script",
      description: "Our team creates a data-driven video strategy and compelling script tailored to your audience.",
      timeline: "Days 2-4",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Video,
      title: "Production & Edit",
      description: "We bring your vision to life with professional production, animation, and post-production.",
      timeline: "Days 5-12",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Rocket,
      title: "Launch & Optimize",
      description: "We help you deploy and track performance, making data-driven optimizations for maximum ROI.",
      timeline: "Days 13-14",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 cinematic-section overflow-hidden border-t border-primary/20">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blob-organic blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 blob-shape blur-3xl animate-blob-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blob-soft blur-2xl animate-blob-breathe" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cinematic-gradient-text">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto cinematic-text-shadow">
            Our proven 14-day process takes you from initial brief to high-converting video content. No surprises, just results.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-96 bg-gradient-to-b from-primary to-primary-glow"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center justify-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}>
                  <div className={`lg:w-1/2 space-y-6 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="space-y-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 blob-shape cinematic-cta text-sm font-medium`}>
                        <span>{step.timeline}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-auto flex-shrink-0">
                    <div className={`w-24 h-24 blob-shape cinematic-cta flex items-center justify-center shadow-cinematic relative z-10 animate-blob-pulse`}>
                      <Icon className="h-12 w-12 text-black" />
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="cinematic-card p-8 shadow-cinematic max-w-2xl mx-auto liquid-card">
            <h3 className="text-2xl font-bold cinematic-gradient-text mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Book a free strategy call and we'll create a custom video roadmap for your SaaS in just 30 minutes.
            </p>
            <a href="https://calendly.com/kvit/15-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cinematic-cta text-lg px-8 py-4 font-semibold shadow-glow hover:shadow-glow transition-all duration-300">
                Get Your First Video FREE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
