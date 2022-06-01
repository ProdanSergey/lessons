import { resolve } from "node:path";

const mapSrcPath = (resource = "./") => {
	return resolve(__dirname, "./src", resource);
};

const mapDistPath = (resource = "./") => {
	return resolve(__dirname, "./dist", resource);
};

const isDev = () => {
	return process.env.ENVIRONMENT === "development";
};

import clear from "rollup-plugin-clear";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import html2 from "rollup-plugin-html2";

export default {
	input: mapSrcPath("./index.ts"),
	output: {
		file: mapDistPath("./bundle.js"),
		format: "esm",
	},
	plugins: [
		clear({
			targets: [mapDistPath()],
			watch: isDev(),
		}),
		typescript(),
		html2({
			template: mapSrcPath("./index.html"),
		}),
		...(isDev()
			? [
					serve({
						port: 8000,
						contentBase: mapDistPath(),
						historyApiFallback: true,
						open: true,
					}),
					livereload({
						delay: 300,
						exts: ["html", "css", "js"],
						watch: mapDistPath(),
					}),
			  ]
			: []),
	],
};
