/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        background: '#050816',
        card: 'rgba(255,255,255,0.05)',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        muted: '#A1A1AA'
      },
      boxShadow: {
        glow: '0 0 60px rgba(59, 130, 246, 0.14)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(59,130,246,0.22), transparent 35%), radial-gradient(circle at 20% 30%, rgba(139,92,246,0.16), transparent 25%), radial-gradient(circle at 80% 10%, rgba(6,182,212,0.18), transparent 20%)'
      }
    }
  },
  plugins: []
}

export default config
