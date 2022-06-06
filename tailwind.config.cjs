const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			inherit: "inherit",
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray.neutral,
			background: "#fefafb",
			copy: "#3b586a",
			primary: "#5b826d",
		},
		extend: {
			fontFamily: {
				serif: ["Calendas Plus", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
