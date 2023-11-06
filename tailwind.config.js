module.exports = {
  content: ["./src/**/*.{html,js, ts,tsx}"],
  theme: {
    extend: {},
    screen: {
      sm: { min: "320px", max: "480px" },
      // => @media (min-width: 640px and max-width: 767px) { ... } - mobile

      md: { min: "481px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "1023px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1024px", max: "1200px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1201px", max: "1536px" },
      // => @media (min-width: 1536px) { ... }

      "3xl": { min: "1537px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  // plugins: [
  //   plugin(function({ addVariant }) {
  //     addVariant('peer-optional', ':merge(.peer):optional ~ &')
  //   })]
};
