/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        cyan: '#00BFFF',
        neutral: '#F0F4F8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-navy-cyan': 'linear-gradient(135deg, #0A1F44 0%, #0A1F44 50%, #004a6b 100%)',
        'gradient-navy-turquoise': 'linear-gradient(135deg, #0A1F44 0%, #0A1F44 50%, #1a4d4d 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 191, 255, 0.3), 0 0 40px rgba(0, 191, 255, 0.1)',
        'glow-cyan-lg': '0 0 30px rgba(0, 191, 255, 0.4), 0 0 60px rgba(0, 191, 255, 0.2)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
