/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Blue & White Theme
        'beige-bg': '#F0F7FF',
        'beige-light': '#FFFFFF',
        'beige-lighter': '#FAFCFF',
        'beige-dark': '#E3F0FF',
        'yellow-primary': '#2563EB',
        'yellow-dark': '#1D4ED8',
        'yellow-deeper': '#1E40AF',
        'yellow-light': '#3B82F6',
        'gold': '#1E3A8A',
        'border-beige': '#BFDBFE',
        'border-light': '#DBEAFE',

        // Text Colors
        'charcoal': '#1E3A8A',
        'charcoal-light': '#1E40AF',
        'charcoal-lighter': '#3B82F6',
        'text-muted': '#60A5FA',

        // Accent Colors
        'cream-50': '#FAFCFF',
        'warm-white': '#FFFFFF',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        'beige-gradient': 'linear-gradient(to bottom, #FAFCFF 0%, #F0F7FF 50%, #E3F0FF 100%)',
        'gold-shine': 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.3), transparent)',
      },
      boxShadow: {
        'yellow-glow': '0 4px 20px rgba(37, 99, 235, 0.3)',
        'yellow-glow-lg': '0 8px 30px rgba(37, 99, 235, 0.4)',
        'gold-glow': '0 4px 20px rgba(29, 78, 216, 0.35)',
        'soft-shadow': '0 2px 10px rgba(30, 58, 138, 0.1)',
        'card-shadow': '0 4px 15px rgba(30, 58, 138, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in',
        'float-rotate-3d': 'float-rotate-3d 8s ease-in-out infinite',
        'cube-rotate': 'cube-rotate 20s linear infinite',
        'orbit-icon': 'orbit-icon 15s linear infinite',
        'orbit-icon-reverse': 'orbit-icon-reverse 18s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'twinkle-star': 'twinkle-star 4s ease-in-out infinite',
        'hand-sway': 'hand-sway 5s ease-in-out infinite',
        'float-subtle': 'float-subtle 3s ease-in-out infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'float-rotate-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(5deg) rotateY(0deg)' },
          '25%': { transform: 'translateY(-15px) rotateX(8deg) rotateY(5deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(10deg) rotateY(0deg)' },
          '75%': { transform: 'translateY(-15px) rotateX(8deg) rotateY(-5deg)' },
        },
        'cube-rotate': {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(360deg)' },
        },
        'orbit-icon': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        'orbit-icon-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(150px) rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.5)' },
        },
        'twinkle-star': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'hand-sway': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(5px) translateY(-10px)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.95 },
        },
      },
      fontFamily: {
        'title': ['M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'sans-serif'],
        'subtitle': ['M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'sans-serif'],
        'sans': ['M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'Yu Gothic UI', 'Meiryo UI', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
      borderRadius: {
        'modern-xl': '20px',
        'modern-lg': '16px',
        'modern-md': '12px',
      },
    },
  },
  plugins: [],
};
