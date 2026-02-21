/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom color palette based on OrthoAI themes
      colors: {
        // Blue-Cyan theme
        'ortho-blue': {
          50: '#ecfeff',
          100: '#cffafe', 
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Purple theme
        'ortho-purple': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        // Custom gradients as utilities
        'gradient-start': '#2563eb',
        'gradient-end': '#0891b2',
      },
      
      // Typography scale
      fontSize: {
        'heading-xl': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-md': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-sm': ['1.875rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xs': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
      },
      
      // Spacing system (8px base)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      
      // Border radius
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      // Box shadows
      boxShadow: {
        'ortho': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'ortho-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'ortho-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      
      // Animation
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    // Custom plugin for gradient text utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-text-blue': {
          background: 'linear-gradient(to right, #0f172a, #2563eb, #0f172a)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.gradient-text-purple': {
          background: 'linear-gradient(to right, #0f172a, #9333ea, #0f172a)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.gradient-text-accent-blue': {
          background: 'linear-gradient(to right, #0891b2, #3b82f6, #2563eb)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.gradient-text-accent-purple': {
          background: 'linear-gradient(to right, #9333ea, #ec4899, #9333ea)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.gradient-bg-blue': {
          background: 'linear-gradient(to right, #2563eb, #0891b2)',
        },
        '.gradient-bg-purple': {
          background: 'linear-gradient(to right, #9333ea, #ec4899)',
        },
        '.hover-lift': {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            'box-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}