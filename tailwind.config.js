module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        "primary-blue": "#3563E9",
        "secondary-blue": "#5CAFFC",
        "custom-grey": "#90A3BF",
        "custom-black": "#1A202C",
        "custom-dark-grey": "#3D5278",
        "custom-slide-grey": "#C3D4E9",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
