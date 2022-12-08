/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}', 
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '650px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    backgroundColor: theme => ({
           'primary': '#000000',
           'secondary': '#ffed4a',
          'danger': '#e3342f',
          ...theme('colors'),
            }),
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2.5rem',
      '4xl': '3.441rem',
      '5xl': '5rem',
    },

    extend: {
      backgroundImage: {
        'runewaterfall': "url('../assets/images/Falls.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      spacing: {
        '100': '50vw',
      },
      fontFamily: {
        'serif': ['Cinzel', 'serif'],

      },
      margin: {
        '100vw': '100vw',
        '1000px': '1000px'
      },
      clipPath: {
        mypolygon: 'polygon(0 0, 100% 0, 0% 100%, 0 calc(100% - 6vw))',
        myoppositepolygon: 'polygon(100% 0, 100% 0, 100% 100%, 0 calc(100% - 0vw))',
        clipsides: 'polygon(calc(60% - 10vw) 0, 100% 0, 100% 100%, 22% calc(100% - 0vw))',
        mycorners: 'polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px)',
    },
      height: {
        '1000': '1000px',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
},
  plugins: [require('tailwindcss-elevation')(['responsive']), require('tw-elements/dist/plugin'), require("flowbite/plugin"), require('tailwind-clip-path'),],
}

