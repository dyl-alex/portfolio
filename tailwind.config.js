/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sliding-pattern': "url('../background.jpg')",
        'headshot': "url('../headshot.jpg')",
        'icon1': "url('../caring_for_friends_thumbnail.jpg')",
        'icon2': "url('../icon2.png')"
      },
      keyframes: {
        slide: {
          '0%': {transform: 'translate3d(-1200px,0,0)', overflow: 'hidden'},
          '100%': {transform: 'translate3d(0px, 0,0)', overflow: 'hidden'}
        },
        fade: {
          '0%': {opacity:0},
          '100%': {opacity: 1}
        },
        fadeBig: {
          '0%': {fontSize: '16px'},
          '100%': {fontSize: '19px'}
        }
      },
      animation: {
        slide: 'slide 60s linear infinite',
        fade: 'fade 0.3s ease-in-out',
        fadeBig: 'fadeBig 0.1s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

