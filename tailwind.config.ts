/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
 './src/components/**/*.{js,ts,jsx,tsx,mdx}',
 './src/app/**/*.{js,ts,jsx,mdx}',],
  theme: {
    extend: {
       colors: {
   primary: '#248ecc',
   secondary: '#24427c',
   tertiary: '#6cbe45',
   accent: '#1f9245',
   // Add more custom colors as needed
 },

   fontFamily: {
    sans: ['var(--font-lato)', 'Lato'],
    heading: ['var(--font-poppins)', 'Poppins'],
  },
    },
  },
  plugins: [],
}
