import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

const projectsData = {
  'ecommerce-site': {
    title: 'E-commerce Site',
    category: 'Online Store',
    client: 'Urban Threads',
    duration: '3 weeks',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A modern e-commerce platform built for a growing fashion retailer. Features include seamless shopping cart, secure checkout, payment integration, and an intuitive admin dashboard.',
    challenge: 'The client needed a fast, mobile-responsive online store that could handle high traffic during sales events while providing a premium shopping experience.',
    solution: 'We built a lightning-fast e-commerce platform using modern frameworks, optimized images, and implemented a robust payment system with Stripe integration.',
    results: [
      'Sales increased by 250% in the first month',
      'Page load time under 1.5 seconds',
      'Mobile conversion rate improved by 180%',
      '45% average cart completion rate'
    ],
    features: [
      'Product catalog with filtering and search',
      'Shopping cart and wishlist functionality',
      'Secure payment processing (Stripe)',
      'Order tracking and email notifications',
      'Admin dashboard for inventory management',
      'Responsive design for all devices'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Supabase']
  },
  'landing-page': {
    title: 'Landing Page',
    category: 'Marketing',
    client: 'TechStart Inc',
    duration: '1 week',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A high-converting landing page designed to capture qualified leads for a SaaS startup. Built with conversion optimization and A/B testing in mind.',
    challenge: 'The client needed to quickly validate their product-market fit and capture early adopter emails with a limited marketing budget.',
    solution: 'We created a focused, single-page experience with compelling copy, clear CTAs, and integrated analytics to track conversion metrics.',
    results: [
      '45% conversion rate on email signups',
      '2,500+ qualified leads in first month',
      'Featured on ProductHunt with 500+ upvotes',
      'Average time on page: 3.5 minutes'
    ],
    features: [
      'Hero section with value proposition',
      'Feature showcase with animations',
      'Social proof and testimonials',
      'Email capture form with validation',
      'Analytics and conversion tracking',
      'Mobile-optimized experience'
    ],
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Supabase', 'Google Analytics']
  },
  'business-hub': {
    title: 'Business Hub',
    category: 'Corporate',
    client: 'Creative Studio',
    duration: '2 weeks',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A professional business website for a creative agency showcasing their portfolio, team, services, and client testimonials.',
    challenge: 'The agency needed a sophisticated web presence that reflected their creative capabilities while being easy to update and maintain.',
    solution: 'We designed a clean, modern website with an integrated CMS for easy content updates, portfolio management, and blog publishing.',
    results: [
      'Client inquiries increased by 320%',
      'Average session duration: 4.2 minutes',
      'Featured in design showcase sites',
      '92% mobile satisfaction score'
    ],
    features: [
      'Dynamic portfolio gallery',
      'Team member profiles',
      'Service pages with detailed descriptions',
      'Blog with CMS integration',
      'Contact form with lead tracking',
      'SEO optimization'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion']
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-cyan hover:text-cyan transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-cyan hover:text-cyan transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-cyan text-sm font-semibold mb-4 uppercase tracking-wide">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-neutral mb-12">
              <div>
                <span className="font-semibold text-white">Client:</span> {project.client}
              </div>
              <div>
                <span className="font-semibold text-white">Duration:</span> {project.duration}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden mb-16 border border-cyan/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                <p className="text-lg text-neutral leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-lg text-neutral leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
                <p className="text-lg text-neutral leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-neutral">
                      <CheckCircle2 className="w-5 h-5 text-cyan mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan/10 border border-cyan/30 rounded-full text-cyan text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="bg-gradient-to-br from-cyan/10 to-cyan/10 border border-cyan/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready for Similar Results?
                </h3>
                <p className="text-neutral mb-6">
                  Let's discuss how we can build something amazing for your business.
                </p>
                <Link
                  to="/contact"
                  className="w-full px-6 py-3 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
