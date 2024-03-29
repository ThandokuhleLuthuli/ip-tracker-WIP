/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-background-desktop': "url('../../src/app/assets/images/pattern-bg-desktop.png')",
        'hero-background-mobile': "url('/assets/images/pattern-bg-mobile.png')",
      },
      colors: {
        'very-dark-grey': 'hsl(0, 0%, 17%)',
        'dark-grey': 'hsl(0, 0%, 59%)'
      },width: {
        '900': '900px'
      }, height: {
        '500': '500px',
        '900': '900px',
        '100vh': '100vh'
      },zIndex: {
        '999': '999',
      },maxWidth: {
        'lg': '68rem'
      }
    },
  },
  plugins: [],
}
