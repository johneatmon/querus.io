import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://querus.io",
	experimental: {
		integrations: true,
	},
	integrations: [
		astroImageTools,
		compress({
			html: false,
		}),
		tailwind(),
	],
});
