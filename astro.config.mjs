import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://querus.io",
	experimental: {
		integrations: true,
	},
	integrations: [
		compress({
			html: false,
		}),
		tailwind(),
	],
});
