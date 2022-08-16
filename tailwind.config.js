module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        "primary-blue": "#3563E9",
        "secondary-blue": "#5CAFFC",
        "custom-grey": "#90A3BF",
        "custom-black": "#1A202C",
      },
    },
  },
  plugins: [],
};
