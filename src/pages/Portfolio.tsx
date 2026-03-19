import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { supabase, type PortfolioProject } from '../lib/supabase';

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('portfolio_projects')
          .select('*')
          .order('display_order');

        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }

        if (data) {
          setProjects(data);
          setFilteredProjects(data);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    }

    fetchProjects();
  }, []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  const featuredProjects = projects.filter(p => p.featured);

  const nextSlide = useCallback(() => {
    if (featuredProjects.length > 0) {
      setCarouselIndex((prev) => (prev + 1) % featuredProjects.length);
    }
  }, [featuredProjects.length]);

  const prevSlide = useCallback(() => {
    if (featuredProjects.length > 0) {
      setCarouselIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    }
  }, [featuredProjects.length]);

  // Disabled auto-carousel temporarily
  // useEffect(() => {
  //   if (featuredProjects.length === 0) return;
  //   const timer = setInterval(nextSlide, 5000);
  //   return () => clearInterval(timer);
  // }, [featuredProjects.length, nextSlide]);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Landing Pages', value: 'landing' },
    { label: 'E-Commerce', value: 'ecommerce' },
    { label: 'Portfolios', value: 'portfolio' },
    { label: 'SEO', value: 'seo' }
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
              Our Portfolio
            </h1>
            <p className="text-xl text-neutral">
              Real results for real businesses. See what we've built for clients across industries.
            </p>
          </motion.div>

          {featuredProjects.length > 0 && (
            <div className="relative max-w-5xl mx-auto mb-16">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-cyan/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={featuredProjects[carouselIndex]?.image_url}
                      alt={featuredProjects[carouselIndex]?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="text-cyan text-sm font-semibold mb-2 uppercase">
                        {featuredProjects[carouselIndex]?.category}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {featuredProjects[carouselIndex]?.title}
                      </h3>
                      <p className="text-neutral">
                        {featuredProjects[carouselIndex]?.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === carouselIndex
                        ? 'bg-cyan w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => filterProjects(filter.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-cyan text-navy shadow-glow-cyan'
                    : 'bg-white/5 text-neutral hover:bg-white/10 hover:text-white border border-cyan/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl overflow-hidden hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-gradient-to-br from-navy to-cyan/20 relative overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-cyan text-sm font-semibold mb-2 uppercase">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack?.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan/10 text-cyan text-xs rounded-full border border-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/95 backdrop-blur-sm z-50 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto bg-[#0d2d5e] border border-cyan/30 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="aspect-video bg-gradient-to-br from-navy to-cyan/20">
                  <img
                    src={selectedProject.image_url}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="text-cyan text-sm font-semibold mb-2 uppercase">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-neutral text-lg mb-6">
                    {selectedProject.description}
                  </p>

                  {selectedProject.tech_stack && (
                    <div className="mb-6">
                      <h3 className="text-white font-semibold mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech_stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-cyan/10 text-cyan rounded-full border border-cyan/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.case_study && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-semibold mb-2">Client</h3>
                        <p className="text-neutral">{selectedProject.case_study.client}</p>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Challenge</h3>
                        <p className="text-neutral">{selectedProject.case_study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Solution</h3>
                        <p className="text-neutral">{selectedProject.case_study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Results</h3>
                        <p className="text-cyan font-semibold">
                          {selectedProject.case_study.results}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedProject.live_url && (
                    <div className="mt-8">
                      <a
                        href={selectedProject.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-cyan text-navy font-semibold rounded-lg hover:shadow-glow-cyan transition-all duration-300"
                      >
                        View Live Site
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
