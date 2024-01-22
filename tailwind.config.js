/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: '#ff7d1a',
        paleOrange: 'hsl(25, 100%, 94%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        black : 'hsl(0, 0%, 0%)',
      }
    },
  },
  plugins: [],
};
