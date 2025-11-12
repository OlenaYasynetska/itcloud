/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1000px',
      },
      colors: {
        background: '#F9FAFB',
        'background-dark': '#0D1117',
        surface: '#FFFFFF',
        'surface-dark': '#161B22',
        primary: '#1F2937',
        'primary-dark': '#E5E7EB',
        secondary: '#6B7280',
        'secondary-dark': '#9CA3AF',
        accent: '#00B7C2',
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 23, 42, 0.10)',
        glow: '0 0 25px rgba(0, 183, 194, 0.45)',
      },
      backgroundImage: {
        'grid-light':
          'radial-gradient(circle at 1px 1px, rgba(0, 183, 194, 0.12) 1px, transparent 0)',
        'grid-dark':
          'radial-gradient(circle at 1px 1px, rgba(0, 183, 194, 0.25) 1px, transparent 0)',
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          '"Poppins"',
          '"Space Grotesk Variable"',
          'ui-sans-serif',
          'system-ui',
        ],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', '"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

