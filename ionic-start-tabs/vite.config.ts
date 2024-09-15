/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		/* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		// devtools(),
		solidPlugin(),
		legacy(),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
		server: {
			deps: {
				inline: ["@ionic/core", "@ionic/ionicons"],
			},
		},
	},
});
