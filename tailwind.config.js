const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#fdf5e6',
          dark: '#f5f0e6',
        },
        foreground: {
          DEFAULT: '#333333',
          dark: '#444444',
        },
        primary: {
          50: '#f5f0e6',
          100: '#f0e6d2',
          200: '#e6dcc5',
          300: '#d2c9b5',
          400: '#c2b8a5',
          500: '#8B4513',
          600: '#654321',
          700: '#503015',
          800: '#35200d',
          900: '#20150a',
          950: '#100a05',
        },
        secondary: {
          50: '#fdf5e6',
          100: '#f5f0e6',
          200: '#e6dcc5',
          300: '#d2c9b5',
          400: '#c2b8a5',
          500: '#8B4513',
          600: '#654321',
          700: '#503015',
          800: '#35200d',
          900: '#20150a',
          950: '#100a05',
        },
        border: '#d2c9b5',
        accent: {
          50: '#fdf5e6',
          100: '#f5f0e6',
          200: '#e6dcc5',
          300: '#d2c9b5',
          400: '#c2b8a5',
          500: '#8B4513',
          600: '#654321',
          700: '#503015',
          800: '#35200d',
          900: '#20150a',
          950: '#100a05',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#333333',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#333333',
        },
        muted: {
          DEFAULT: '#f0e6d2',
          foreground: '#444444',
        },
        destructive: {
          DEFAULT: '#ff5555',
          foreground: '#ffffff',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}