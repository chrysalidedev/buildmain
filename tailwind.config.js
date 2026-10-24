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
          950: '#06070C',
          900: '#0A0D16',
          850: '#0F1422',
          800: '#161E33',
          700: '#232E4D',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(168, 85, 247, 0.35)',
          accent: {
            light: '#C084FC',
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
          },
          purple: {
            light: '#C084FC',
            DEFAULT: '#A855F7',
            dark: '#9333EA',
          },
          violet: {
            light: '#A78BFA',
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
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
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.4)',
        'glow-violet': '0 0 45px -5px rgba(139, 92, 246, 0.45)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
