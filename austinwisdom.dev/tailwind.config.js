/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 .75rem rgba(255, 0, 27, 1.5)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: {
        'aw-logo': "url('./assets/images/logo/aw.svg')"
      }
    },
  },
  plugins: [],
}

// colors: {
//   transparent: 'transparent',
//   current: 'currentColor',
//   'redwhite': '##FFEDEF',
//   'lightblack': '#1f1f1f',
//   'black': '#181818',
//   'red': '#ff001b',
// }

// dropShadow: {
//   '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
//   '4xl': [
//       '0 35px 35px rgba(0, 0, 0, 0.25)',
//       '0 45px 65px rgba(0, 0, 0, 0.15)'
//   ]
// }

