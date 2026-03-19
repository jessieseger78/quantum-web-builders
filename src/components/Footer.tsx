import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { supabase, type ClientLogo } from '../lib/supabase';
import Logo from './Logo';

export default function Footer() {
  const [clientLogos, setClientLogos] = useState<ClientLogo[]>([]);

  useEffect(() => {
    async function fetchLogos() {
      const { data, error } = await supabase
        .from('client_logos')
        .select('*')
        .eq('active', true)
        .order('display_order');

      if (!error && data) {
        setClientLogos(data);
      }
    }

    fetchLogos();
  }, []);

  return (
    <footer className="bg-navy border-t border-cyan/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h3 className="text-center text-neutral text-sm font-semibold uppercase tracking-wider mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={logo.logo_url}
                    alt={logo.company_name}
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <Logo className="w-12 h-12" />
              <span className="text-xl font-bold text-white">
                Quantum Web <span className="text-cyan">Builders</span>
              </span>
            </Link>
            <p className="text-neutral text-sm leading-relaxed">
              Building websites that convert. Fast, custom, and affordable web design solutions for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral hover:text-cyan transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral hover:text-cyan transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral hover:text-cyan transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral hover:text-cyan transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral hover:text-cyan transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-neutral text-sm">Landing Pages</li>
              <li className="text-neutral text-sm">E-Commerce</li>
              <li className="text-neutral text-sm">Portfolio Sites</li>
              <li className="text-neutral text-sm">SEO & Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-neutral text-sm">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:info@quantumwebbuilders.com" className="hover:text-cyan transition-colors">
                  info@quantumwebbuilders.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-neutral text-sm">
                <MapPin className="w-4 h-4 text-cyan" />
                <span>Lakeland, FL 33811</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral text-sm">
              © {new Date().getFullYear()} Quantum Web Builders. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral hover:text-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral hover:text-cyan transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
