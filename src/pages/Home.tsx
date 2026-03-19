import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Clock, DollarSign, Star, ChevronRight, Code2, Headphones } from 'lucide-react';
import { type PortfolioProject } from '../lib/supabase';
import Logo from '../components/Logo';

export default function Home() {
  const [featuredProjects] = useState<PortfolioProject[]>([]);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-navy">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2d5e] opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <Logo className="w-48 h-48 md:w-56 md:h-56 drop-shadow-[0_0_20px_rgba(0,191,255,0.5)]" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Web Builders—<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-cyan">
                Fast, Custom Web Design
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan font-semibold mb-8">
              Turning clicks into clients with sleek, results-driven sites.
            </p>
            <p className="text-lg text-neutral mb-10 max-w-2xl mx-auto">
              Professional designs that drive results. From landing pages to full e-commerce, we craft websites that convert and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border-2 border-cyan text-cyan font-bold rounded-lg hover:bg-cyan/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan mb-2">500+</div>
              <div className="text-neutral">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan mb-2">98%</div>
              <div className="text-neutral">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-cyan fill-cyan" />
                ))}
              </div>
              <div className="text-neutral">5-Star Rated</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-navy to-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Three pillars of excellence that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Code2,
                title: 'Custom Builds',
                description: 'Tailored solutions crafted specifically for your business needs—no templates, just pure innovation'
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                description: 'Launch in weeks, not months. We deliver professional websites at lightning speed without compromising quality'
              },
              {
                icon: Headphones,
                title: 'Pro Support',
                description: 'Dedicated support from start to finish and beyond. Your success is our mission'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-8 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan to-cyan p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0d2d5e] to-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Real results for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: 'ecommerce-site',
                title: 'E-commerce Site',
                category: 'Online Store',
                description: 'Modern e-commerce platform with cart, checkout, and payment integration',
                image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                id: 'landing-page',
                title: 'Landing Page',
                category: 'Marketing',
                description: 'High-converting landing page designed to capture leads and drive sales',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                id: 'business-hub',
                title: 'Business Hub',
                category: 'Corporate',
                description: 'Professional business website with portfolio, blog, and contact features',
                image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="group block bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl overflow-hidden hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-navy to-cyan/20 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-cyan text-sm font-semibold mb-2 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral mb-4 leading-relaxed">{project.description}</p>
                    <div className="text-cyan hover:text-cyan font-semibold inline-flex items-center transition-colors">
                      View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="px-8 py-4 border-2 border-cyan text-cyan font-bold rounded-lg hover:bg-cyan/10 transition-all duration-300 inline-flex items-center"
            >
              View All Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0d2d5e] to-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Advantages
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              We combine cutting-edge design with proven conversion strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized for speed and performance, your site loads in milliseconds'
              },
              {
                icon: Target,
                title: 'Conversion Focused',
                description: 'Strategic design that turns visitors into paying customers'
              },
              {
                icon: Clock,
                title: 'Quick Turnaround',
                description: 'Launch your website in weeks, not months'
              },
              {
                icon: DollarSign,
                title: 'Affordable Pricing',
                description: 'Premium quality without the premium price tag'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan to-cyan p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              See what we've built for clients like you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl overflow-hidden hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-navy to-cyan/20 relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-cyan text-sm font-semibold mb-2 uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral mb-4">{project.description}</p>
                  <Link
                    to="/portfolio"
                    className="text-cyan hover:text-cyan font-semibold inline-flex items-center transition-colors"
                  >
                    View Project <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="px-8 py-4 border-2 border-cyan text-cyan font-bold rounded-lg hover:bg-cyan/10 transition-all duration-300 inline-flex items-center"
            >
              View All Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0d2d5e] to-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "They delivered our e-commerce site in 3 weeks. Sales are up 250% since launch!",
                  author: "Sarah Chen",
                  company: "Urban Threads",
                  rating: 5
                },
                {
                  quote: "Best investment we made. The landing page converts at 45% - absolutely incredible.",
                  author: "Mike Rodriguez",
                  company: "TechStart Inc",
                  rating: 5
                },
                {
                  quote: "Professional, fast, and affordable. They understood our vision perfectly.",
                  author: "Emma Williams",
                  company: "Creative Studio",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cyan fill-cyan" />
                    ))}
                  </div>
                  <p className="text-neutral mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-cyan text-sm">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-cyan/10 to-cyan/10 border border-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-neutral mb-8">
              Get a free quote and consultation. No commitment required.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
