import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShoppingCart, Briefcase, Search, Check, ChevronDown, ChevronUp, Video as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchNotionServices } from '../lib/notionService';
import { NotionService } from '../types/notion';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  ShoppingCart,
  Briefcase,
  Search,
};

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [notionServices, setNotionServices] = useState<NotionService[]>([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  useEffect(() => {
    async function loadServices() {
      const { services } = await fetchNotionServices();
      if (services.length > 0) {
        setNotionServices(services);
      }
      setIsLoadingServices(false);
    }
    loadServices();
  }, []);

  const fallbackServices = [
    {
      icon: Zap,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive sales',
      features: [
        'Custom responsive design',
        'A/B testing ready',
        'Form integration',
        'Analytics setup',
        'SEO optimized',
        'Fast load times'
      ],
      startingPrice: '$2,500'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Full-featured online stores with secure payment processing',
      features: [
        'Product catalog',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking',
        'Mobile optimized'
      ],
      startingPrice: '$5,000'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Sites',
      description: 'Showcase your work with stunning portfolio websites',
      features: [
        'Gallery & project pages',
        'Case study templates',
        'Contact forms',
        'Blog integration',
        'Client testimonials',
        'Social media links'
      ],
      startingPrice: '$1,800'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Drive organic traffic with SEO-optimized websites',
      features: [
        'Keyword research',
        'On-page SEO',
        'Technical optimization',
        'Content strategy',
        'Performance tracking',
        'Monthly reporting'
      ],
      startingPrice: '$3,500'
    }
  ];

  const services = notionServices.length > 0
    ? notionServices.map(ns => ({
        icon: iconMap[ns.icon] || Zap,
        title: ns.title,
        description: ns.description,
        features: ns.features,
        startingPrice: ns.startingPrice,
      }))
    : fallbackServices;

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,999',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '30 days support',
        'Social media integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      description: 'Ideal for growing businesses that need more features',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'Blog integration',
        'E-commerce (up to 50 products)',
        '90 days support',
        'Analytics & tracking',
        'Email marketing setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects with complex requirements',
      features: [
        'Unlimited pages',
        'Fully custom development',
        'Premium SEO package',
        'Advanced integrations',
        'E-commerce unlimited',
        '1 year support',
        'Dedicated account manager',
        'Priority support'
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and target audience'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create wireframes and mockups for your approval'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build your website with clean, modern code'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Deploy your site and monitor performance'
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and optimization'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most projects are completed within 2-6 weeks, depending on complexity. Landing pages can be ready in as little as 1-2 weeks, while complex e-commerce sites may take 6-8 weeks.'
    },
    {
      question: 'Do you provide hosting and maintenance?',
      answer: 'Yes! We offer hosting packages and ongoing maintenance plans. All our websites include initial hosting setup, and we provide monthly maintenance plans starting at $25/month.'
    },
    {
      question: 'Can I update the website myself?',
      answer: 'Yes—sort of. We give you easy access to change text, images, prices, or blog posts anytime through Notion (think simple editing, no code). Just edit in your Notion workspace, and changes appear on your site when you refresh. It\'s great for quick tweaks without waiting on us. But here\'s the deal: big stuff—like redesigns, new pages, or tech fixes—stays locked to keep things fast, secure, and converting. If you break layout or SEO by accident, we fix it (usually free for small stuff, hourly for big messes). Want full control? We can train you or hand over tools—just say the word. Bottom line: You handle the everyday, we handle the heavy lifting. Keeps your site pro and your life easy.'
    },
    {
      question: 'How do I update content through Notion?',
      answer: 'Simple! We set up a Notion workspace for you where you can edit your services, prices, descriptions, and features. Just update the text or images in Notion, make sure the Status is set to "Done," and refresh your website to see the changes live. No coding required—if you can type in Notion, you can update your site. The design and layout stay locked, so you can\'t accidentally break anything.'
    },
    {
      question: 'What if I need changes after launch?',
      answer: 'All packages include a support period with minor updates included. After that, you can purchase additional hours or sign up for a maintenance plan for ongoing changes.'
    },
    {
      question: 'Do you offer SEO services?',
      answer: 'Yes! All our websites include basic SEO setup. We also offer comprehensive SEO packages including keyword research, content optimization, and ongoing SEO management.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, Cashapp, Zelle, Venmo, and bank transfers. Projects are typically split into milestones with 50% upfront and 50% upon completion before site goes live.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Definitely! We specialize in website redesigns. We can modernize your current site while preserving your SEO rankings and improving conversion rates.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, we are happy to sign non-disclosure agreements to protect your business information and ideas. Just let us know during our initial consultation.'
    }
  ];

  return (
    <div className="min-h-screen bg-navy pt-20">
      <section className="py-20 bg-gradient-to-b from-navy to-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral">
              Professional web design solutions tailored to your business needs. From concept to launch, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-8 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan to-cyan p-4 rounded-lg w-fit mb-6">
                  <service.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral">
                      <Check className="w-5 h-5 text-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-cyan/20">
                  <div>
                    <div className="text-sm text-neutral">Starting at</div>
                    <div className="text-2xl font-bold text-cyan">{service.startingPrice}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-cyan text-navy font-semibold rounded-lg hover:shadow-glow-cyan transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pricing Packages
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Choose the perfect plan for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 relative ${
                  tier.popular
                    ? 'border-2 border-cyan shadow-glow-cyan'
                    : 'border border-cyan/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan to-cyan text-navy px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-cyan mb-4">{tier.price}</div>
                <p className="text-neutral mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-neutral">
                      <Check className="w-5 h-5 text-cyan mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-3 text-center font-semibold rounded-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-cyan text-navy hover:shadow-glow-cyan'
                      : 'border-2 border-cyan text-cyan hover:bg-cyan/10'
                  }`}
                >
                  Choose {tier.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0d2d5e] to-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              A proven workflow that delivers results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-cyan/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-neutral">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-navy to-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-cyan/10 to-cyan/10 border border-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral mb-8">
              Book a free consultation and let's discuss your project
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 inline-block"
            >
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
