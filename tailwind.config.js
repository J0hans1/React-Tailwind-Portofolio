module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend :{
      height: {
        fit: 'fit-content(20em)',
      },
      colors: {
        purple: {
          100: "#A29BFE",
          200: "#897CEB",
          300: "#6C5CE7",
        },
        ntnu: {
          normal: '#044494',
          light: '#0F5B9F',
        },
        sand: '#f2d2a9',
        white: {
          ivory:'#FFFCF3',
          light:'rgb(255, 255, 255)',
        },
        weakTransparent: 'rgba(255, 255, 255, 0.15)',
        blackTransparent:{
          weak: 'rgba(0, 0, 0, 0.2)',
          strong: 'rgba(0, 0, 0, 0.6)',
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}