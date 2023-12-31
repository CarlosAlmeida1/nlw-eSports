/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      galaxy: "url('/backgroundGalaxy.png')",
      'nlw-gradient':
        'linear-gradient(90deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
      'game-gradient':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 67.08%)',
    },
  },
  plugins: [],
}
