const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: '#FCFCFC',
        body: '#333333',
        titleActive: '#000',
        label: '#555555',
        primary: '#DD8560',
      },
      fontFamily: {
        primary: ['Tenor Sans', 'sans-serif'],
        alternative: ['PT Sans Narrow', 'sans-serif'],
        secondary: ['Bodoni Moda', 'serif'],
      },
      fontSize: {
        title: '18px',
        subtitle: '16px',
        h3: '14px',
        bodyL: '16px',
        bodyM: '14px',
        bodyS: '12px',
      },
      lineHeight: {
        title: '40px',
        subtitle: '24px',
        h3: '20px',
        bodyL: '24px',
        bodyM: '24px',
        bodyS: '18px',
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}



