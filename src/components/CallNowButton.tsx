import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallNowButton() {
  console.log('CallNowButton component rendered');

  const handleCall = () => {
    console.log('Call Now button clicked');
    window.location.href = 'tel:+18632762414';
  };

  return (
    <motion.button
    onClick={() => window.open('tel:+18632762414', '_self')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-6 z-50 bg-cyan hover:bg-cyan/90 text-navy px-6 py-4 rounded-full shadow-2xl shadow-cyan/50 hover:shadow-cyan/70 transition-all duration-300 flex items-center space-x-2 font-bold text-lg group"
      aria-label="Call now"
      style={{ position: 'fixed', zIndex: 9999 }}
    >
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      <span>Call Now</span>
    </motion.button>
  );
}
