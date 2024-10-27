/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // sm (mobile first) // 4 col - 16 margin
        md: '768px', // 8 col - 24 margin
        lg: '1024px', // 12 col - 24 margin
        xl: '1440px' // 12 col - 32 margin
      }
    }
  },
  plugins: []
}
