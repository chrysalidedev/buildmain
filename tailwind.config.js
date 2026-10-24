/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#070A10',
          900: '#0B0F19',
          850: '#101624',
          800: '#161F32',
          700: '#23304A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
          accent: {
            light: '#FBBF24',
            DEFAULT: '#F59E0B',
            dark: '#D97706',
          },
          emerald: {
            light: '#34D399',
            DEFAULT: '#10B981',
            dark: '#059669',
          },
          cyan: {
            light: '#38BDF8',
            DEFAULT: '#06B6D4',
            dark: '#0284C7',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.25)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
