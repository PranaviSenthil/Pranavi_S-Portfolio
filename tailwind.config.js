/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070605',
          900: '#0B0908',
          850: '#100D0B',
          800: '#16120F',
          750: '#1C1613',
          700: '#251E19',
          600: '#352B24',
          500: '#4A3C33',
        },
        copper: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#E07A43',
          600: '#D97736',
          700: '#C8652D',
          800: '#9A3412',
          900: '#7C2D12',
          DEFAULT: '#E07A43',
          dark: '#C8652D',
          light: '#FFA25B',
          glow: 'rgba(224, 122, 67, 0.35)',
        },
        frost: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
        },
        ink: {
          950: '#070605',
          900: '#0B0908',
          800: '#16120F',
          700: '#251E19',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
        },
        cobalt: {
          DEFAULT: '#E07A43',
          hover: '#C8652D',
          light: '#FFA25B',
          soft: '#251E19',
        },
        coral: {
          DEFAULT: '#E07A43',
          hover: '#D97736',
          soft: '#1C1613',
        },
        mint: {
          DEFAULT: '#E07A43',
          hover: '#C8652D',
          soft: '#1C1613',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'fresh': '0 8px 30px -6px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(224, 122, 67, 0.16)',
        'fresh-hover': '0 16px 40px -8px rgba(0, 0, 0, 0.85), 0 0 25px rgba(224, 122, 67, 0.28), 0 0 0 1px rgba(224, 122, 67, 0.38)',
        'copper-glow': '0 0 25px -4px rgba(224, 122, 67, 0.35)',
        'copper-glow-lg': '0 0 45px -6px rgba(224, 122, 67, 0.5)',
        'copper-card': '0 8px 32px -8px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(224, 122, 67, 0.16)',
        'copper-card-hover': '0 16px 40px -8px rgba(0, 0, 0, 0.9), 0 0 28px rgba(224, 122, 67, 0.28), 0 0 0 1px rgba(224, 122, 67, 0.4)',
        'cobalt-glow': '0 8px 25px -4px rgba(224, 122, 67, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-spin': 'spin 30s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
