/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
 './src/components/**/*.{js,ts,jsx,tsx,mdx}',
 './src/app/**/*.{js,ts,jsx,mdx}',],
  theme: {
    extend: {
        colors: {
        primary: {
          background: "#070b10", 
          cyan: "#05f3fc", 
          graphite: "#1C1C1C", 
          gray: "#a7b3ba",
        },
        secondary: {
          purple: "#3e29d8", 
          silver: "#d9dbdd", 
          teal: "#006D77", 
        },
      },

   fontFamily: {
    heading: ['var(--font-heading)', 'Inter'],
    body: ['var(--font-body)', 'Inter'],
  },
    },
  },
  plugins: [],
}
