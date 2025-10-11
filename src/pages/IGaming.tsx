import { useState } from 'react';
import ModernHeader from '@/components/ModernHeader';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  ArrowRight, 
  Target, 
  Shield, 
  Palette, 
  Settings,
  TrendingUp,
  Users,
  Clock,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

const IGaming = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  const partners = [
    {
      name: "UPlatform",
      url: "https://uplatform.com/",
      alt: "UPlatform logo"
    },
    {
      name: "POSE Promotions", 
      url: "https://pose-promotions.com/",
      alt: "POSE Promotions logo"
    },
    {
      name: "Betcore",
      url: "https://www.betcore.eu/",
      alt: "Betcore logo"
    },
    {
      name: "WinWin676",
      url: "https://winwin676.bet/",
      alt: "WinWin676 logo"
    },
    {
      name: "True Label",
      url: "https://true-label.io/",
      alt: "True Label logo"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Acquisition & CRM",
      description: "Lifecycle journeys, segmentation, and retention campaigns."
    },
    {
      icon: TrendingUp,
      title: "Promotions & Bonuses", 
      description: "Offer design, T&Cs, and fraud-aware mechanics."
    },
    {
      icon: Palette,
      title: "Creative & Localization",
      description: "On-brand assets across markets and languages."
    },
    {
      icon: Settings,
      title: "Partnerships & Tech",
      description: "Integrations and road-mapping with leading providers."
    }
  ];

  const kpis = [
    {
      value: "+38%",
      label: "first-time deposits (FTDs)"
    },
    {
      value: "22%",
      label: "uplift in Week-4 retention"
    },
    {
      value: "30%",
      label: "faster promo deployment"
    }
  ];

  const useCases = [
    {
      title: "New market entry",
      description: "Strategic launch planning with compliance-first approach for new jurisdictions."
    },
    {
      title: "Bonus optimization",
      description: "Data-driven bonus mechanics and T&C optimization to maximize player value."
    },
    {
      title: "CRM re-architecture", 
      description: "Complete customer lifecycle redesign with advanced segmentation and automation."
    },
    {
      title: "Platform migration",
      description: "Seamless transition to new platforms with minimal downtime and data integrity."
    }
  ];

  const faqs = [
    {
      question: "Which markets do you support?",
      answer: "We work across regulated markets including UK, Malta, Netherlands, and emerging jurisdictions. Our compliance-first approach ensures adherence to local regulations."
    },
    {
      question: "How do you ensure compliance?",
      answer: "We maintain up-to-date knowledge of licensing requirements, geo-targeting rules, ad standards, KYC/AML protocols, and responsible gambling frameworks across all markets."
    },
    {
      question: "What's the typical project timeline?",
      answer: "Project timelines vary based on scope. New market entry typically takes 8-12 weeks, while bonus optimization can be completed in 3-4 weeks."
    },
    {
      question: "Do we retain ownership of our data?",
      answer: "Absolutely. You maintain full ownership and control of all your data. We provide transparent reporting and can facilitate data exports at any time."
    },
    {
      question: "Can you work with our existing platform?",
      answer: "Yes, we integrate with all major iGaming platforms and can work within your current tech stack while recommending optimizations."
    },
    {
      question: "What reporting do you provide?",
      answer: "We provide comprehensive analytics including player acquisition costs, lifetime value, retention metrics, and compliance reporting with real-time dashboards."
    }
  ];

  const anchors = [
    { id: "overview", label: "Overview" },
    { id: "what-we-do", label: "What we do" },
    { id: "compliance", label: "Compliance" },
    { id: "results", label: "Results" },
    { id: "use-cases", label: "Use cases" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="IGaming Services | ContentFarm"
        description="IGaming strategy, promotions, and platform partnerships. See our partners and what we deliver for operators and affiliates."
        keywords="igaming marketing, casino marketing, sports betting, igaming compliance, player acquisition, igaming CRM"
      />
      
      <StructuredData 
        type="service" 
        data={{
          name: "IGaming Services",
          description: "Comprehensive iGaming marketing and platform services for operators and affiliates",
          provider: {
            "@type": "Organization",
            name: "ContentFarm"
          }
        }} 
      />

      <ModernHeader />

      {/* Sticky Navigation */}
      <nav className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-full p-2 shadow-lg">
          {anchors.map((anchor) => (
            <a
              key={anchor.id}
              href={`#${anchor.id}`}
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 rounded-full hover:bg-accent/50"
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            IGaming
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            We help operators and affiliates grow through data-driven marketing, compliant promotion, and best-in-class platform partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/kvit/15-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-gradient text-lg px-8 py-4 font-semibold">
                Talk to us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-semibold">
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener"
                aria-label={`Visit ${partner.name} (opens in new tab)`}
                className="group relative"
                onMouseEnter={() => setHoveredLogo(index)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className={`
                  w-full h-16 bg-muted rounded-lg border border-border/50 flex items-center justify-center
                  transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1
                  ${hoveredLogo === index ? 'grayscale-0' : 'grayscale'}
                `}>
                  <div className="text-muted-foreground font-semibold text-sm text-center px-4">
                    {partner.name}
                  </div>
                  <ExternalLink className="absolute top-2 right-2 h-3 w-3 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why IGaming with ContentFarm
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              We blend compliance-first strategy with sharp creative and analytics. From promos to platform selection, we help operators and affiliates launch faster, acquire efficiently, and retain longer.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              What we do
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Compliance & Responsible Play
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Our compliance-first approach ensures your operations meet the highest regulatory standards while maintaining exceptional player experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Licensing awareness across all jurisdictions",
                "Precise geo-targeting and market restrictions", 
                "Advertising standards compliance",
                "KYC/AML alignment and reporting",
                "Responsible gambling messaging frameworks",
                "Data protection and privacy compliance"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Results that matter
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center bg-background rounded-lg p-8 shadow-sm border border-border/50">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">{kpi.value}</div>
                <p className="text-muted-foreground">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Use cases
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {useCase.title}
                </AccordionTrigger>
                <AccordionContent>
                  {useCase.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Frequently asked questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ready to level up your IGaming growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's discuss how we can help you acquire players more efficiently and build lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/kvit/15-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-gradient text-lg px-8 py-4 font-semibold">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-semibold">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IGaming;