const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Calendas Plus", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
