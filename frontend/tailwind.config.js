/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B3C3D',
        secondary: '#959597',
        accent: '#959597',
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
