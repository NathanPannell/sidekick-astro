// @ts-check
import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://sidekickplayers.ca",
	base: "/",
	integrations: [
		tailwind(),
		alpinejs()
	],
	output: "static",
	devToolbar: {
		enabled: false,
	},
});
