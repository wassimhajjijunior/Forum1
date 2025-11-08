/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if needed
  ],
      safelist: [
  'hidden', 'block', 'md:block', 'md:hidden', 'lg:block', 'lg:hidden'
],
  theme: {
    extend: {
      fontFamily: {
        hazmat: ['Hazmat', 'sans-serif'],  
        mistrully: ['Mistrully', 'serif'],
      },
    },
  },
  plugins: [],
};
