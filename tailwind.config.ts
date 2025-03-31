/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#ffffff',
          heading: '#24177a',
          text: '#030013',
          button: '#3E29D8',
          hover: '#2ca2eb',
        },
        secondary: {
          background: '#f6f6ff',
          text: '#F9F8FD',
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
