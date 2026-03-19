import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, TrendingUp, Code, Linkedin, Settings, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & Lead Designer',
      bio: '10+ years crafting digital experiences. Obsessed with clean design and user psychology.',
      image: 'https://placehold.co/400x400/0A1F44/00BFFF?text=AM',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      bio: 'Full-stack wizard who turns designs into pixel-perfect, lightning-fast websites.',
      image: 'https://placehold.co/400x400/0A1F44/40E0D0?text=SC',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'SEO Specialist',
      bio: 'Data-driven SEO expert. Gets your site to the top of Google and keeps it there.',
      image: 'https://placehold.co/400x400/0A1F44/00BFFF?text=MR',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Emily Thompson',
      role: 'Project Manager',
      bio: 'Keeps projects on track, on budget, and clients happy. Your main point of contact.',
      image: 'https://placehold.co/400x400/0A1F44/40E0D0?text=ET',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'David Kim',
      role: 'E-Commerce Developer',
      bio: 'Specializes in building high-converting online stores that drive sales.',
      image: 'https://placehold.co/400x400/0A1F44/00BFFF?text=DK',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Lisa Martinez',
      role: 'Content Strategist',
      bio: 'Creates compelling copy that connects with audiences and drives conversions.',
      image: 'https://placehold.co/400x400/0A1F44/40E0D0?text=LM',
      linkedin: 'https://linkedin.com'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by your success. Every decision is focused on driving real business results.'
    },
    {
      icon: Code,
      title: 'Quality Code',
      description: 'Clean, maintainable code that performs. No shortcuts, no technical debt.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your goals become our goals. We\'re partners in your success, not just vendors.'
    },
    {
      icon: Heart,
      title: 'Passion & Craft',
      description: 'We love what we do and it shows in every pixel, every line of code.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Founded Quantum Web Builders', description: 'Started with a mission to make premium web design accessible' },
    { year: '2019', event: 'Reached 100 Clients', description: 'Hit our first major milestone with consistent 5-star reviews' },
    { year: '2021', event: 'Expanded Team', description: 'Grew to 6 full-time specialists to better serve our clients' },
    { year: '2022', event: 'Award Recognition', description: 'Named "Best Web Design Agency" by Design Awards' },
    { year: '2023', event: '500+ Projects', description: 'Completed over 500 successful website projects' },
    { year: '2024', event: 'Industry Leaders', description: 'Recognized as thought leaders in conversion-focused design' }
  ];

  const stats = [
    { label: 'Years in Business', value: '6+' },
    { label: 'Team Members', value: '12' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Industry Awards', value: '15' }
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
              About Us
            </h1>
            <p className="text-xl text-neutral leading-relaxed">
              We're a team of designers, developers, and digital strategists on a mission to build websites that actually work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral leading-relaxed mb-6">
                Too many businesses struggle with websites that look good but don't convert. We exist to change that. Our mission is simple: build beautiful, fast, conversion-focused websites that help businesses grow.
              </p>
              <p className="text-lg text-neutral leading-relaxed">
                We believe great web design shouldn't cost a fortune or take months to launch. By combining proven design principles with modern technology, we deliver premium websites at prices small businesses can actually afford.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-cyan/20 via-navy to-cyan/10">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 200C50 150 100 100 150 120C200 140 250 200 300 180C350 160 375 140 400 160V400H0V200Z"
                      fill="url(#wave1)"
                      opacity="0.3"
                    />
                    <path
                      d="M0 240C60 200 120 160 180 180C240 200 280 240 340 220C360 210 380 200 400 210V400H0V240Z"
                      fill="url(#wave2)"
                      opacity="0.4"
                    />
                    <path
                      d="M0 280C80 260 140 240 200 250C260 260 300 280 360 270C380 265 390 260 400 265V400H0V280Z"
                      fill="url(#wave3)"
                      opacity="0.5"
                    />
                    <defs>
                      <linearGradient id="wave1" x1="0" y1="0" x2="400" y2="400">
                        <stop offset="0%" stopColor="#00BFFF" />
                        <stop offset="100%" stopColor="#40E0D0" />
                      </linearGradient>
                      <linearGradient id="wave2" x1="0" y1="0" x2="400" y2="400">
                        <stop offset="0%" stopColor="#40E0D0" />
                        <stop offset="100%" stopColor="#00BFFF" />
                      </linearGradient>
                      <linearGradient id="wave3" x1="0" y1="0" x2="400" y2="400">
                        <stop offset="0%" stopColor="#00BFFF" />
                        <stop offset="100%" stopColor="#0A1F44" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-lg text-neutral leading-relaxed">
                    Quantum Web Builders started with a simple goal: cut the fluff, build sites that work. Founded by Jessie Seger, we blend tech smarts with real-world results. No templates, just solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Us
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              What sets us apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-8 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300 text-center"
            >
              <div className="bg-cyan/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Settings className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Builds</h3>
              <p className="text-neutral">Tailored to your vision</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-8 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300 text-center"
            >
              <div className="bg-cyan/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Clock className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Turnaround</h3>
              <p className="text-neutral">Live in weeks, not months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-8 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300 text-center"
            >
              <div className="bg-cyan/10 p-4 rounded-full w-fit mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pro Support</h3>
              <p className="text-neutral">24/7 expert help</p>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan to-cyan p-3 rounded-lg w-fit mb-4">
                  <value.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-neutral">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0d2d5e] to-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Talented people who love building great websites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl overflow-hidden hover:border-cyan/50 hover:shadow-glow-cyan transition-all duration-300 group"
              >
                <div className="aspect-square bg-gradient-to-br from-navy to-cyan/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <div className="text-cyan text-sm font-semibold mb-3">{member.role}</div>
                  <p className="text-neutral text-sm mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan hover:text-cyan transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    <span className="text-sm">Connect</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              From startup to industry leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-cyan to-cyan"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-xl p-6">
                      <div className="text-3xl font-bold text-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                      <p className="text-neutral">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan rounded-full border-4 border-navy"></div>
                </motion.div>
              ))}
            </div>
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
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-cyan/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <Award className="w-12 h-12 text-cyan flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Why Our Team Loves It Here</h3>
                  <p className="text-neutral italic">
                    "Working at Quantum Web has been incredible. We get to solve interesting problems, work with amazing clients, and actually make a difference in their businesses. The team culture is supportive, creative, and we're always pushing each other to level up."
                  </p>
                  <div className="mt-4">
                    <div className="text-white font-semibold">Sarah Chen</div>
                    <div className="text-cyan text-sm">Senior Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0d2d5e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-cyan/10 to-cyan/10 border border-cyan/30 rounded-2xl p-12"
          >
            <TrendingUp className="w-16 h-16 text-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-neutral mb-8">
              We're always looking for talented designers, developers, and strategists who share our passion for great web design.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 inline-block"
            >
              View Open Positions
            </Link>
            <a
              href="#"
              className="mt-6 px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 inline-block"
            >
              Schedule a Call
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
