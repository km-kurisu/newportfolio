/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'swing': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-up-slow': 'fade-in-up 1s ease-out forwards',
        blob: 'blob 7s infinite',
        'pulse-slow': 'pulse-slow 4s infinite ease-in-out',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'swing': 'swing 1s ease-in-out infinite',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards', // bouncy pop
        'float': 'float 3s ease-in-out infinite',
      },
      // Define custom color palettes
      colors: {
        // Default light mode colors (Cupcake inspired)
        light: {
          'primary': '#65C3C8', // A light blue/cyan
          'secondary': '#EF9FBC', // A soft pink
          'accent': '#EEAF3A',    // A warm yellow/orange
          'neutral': '#F3F4F6',   // Very light gray for backgrounds
          'base-100': '#FFFFFF',  // Pure white for card backgrounds
          'base-200': '#F9FAFB',  // Slightly off-white for alternate section backgrounds
          'base-300': '#E5E7EB',  // Light gray for borders/dividers
          'content': '#3A4750',   // Dark text on light background
          'content-alt': '#6B7280', // Slightly lighter text for secondary info
        },
        // Dark mode colors (Night inspired)
        dark: {
          'primary': '#38B2AC', // Teal-ish blue
          'secondary': '#F6AD55', // Orange
          'accent': '#81E6D9',    // Light teal
          'neutral': '#2D3748',   // Dark gray for backgrounds
          'base-100': '#1A202C',  // Darkest gray for card backgrounds
          'base-200': '#2D3748',  // Slightly lighter dark gray for alternate section backgrounds
          'base-300': '#4A5568',  // Darker gray for borders/dividers
          'content': '#CBD5E0',   // Light text on dark background
          'content-alt': '#A0AEC0', // Slightly darker text for secondary info
        },
      },
    },
  },
  plugins: [],
};