
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        tech: {
          950: '#020617', // Deep slate/black
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          500: '#3b82f6', // Blue
          400: '#22d3ee', // Cyan
          300: '#67e8f9',
          100: '#cffafe',
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #22d3ee' },
          '100%': { boxShadow: '0 0 20px #22d3ee, 0 0 10px #3b82f6' },
        }
      }
    },
  },
  plugins: [],
}
