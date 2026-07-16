/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'primary-amber': '#F59E0B',
        'accent-rose': '#F43F5E',
        'accent-violet': '#8B5CF6',
        'dark-bg': '#0F172A',
      },
    },
  },
  plugins: [],
}
