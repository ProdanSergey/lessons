import { resolve } from "node:path";

const mapToSrcResource = (res = "./") => {
  return resolve(__dirname, "./src", res);
};

const mapToDistResource = (res = "./") => {
  return resolve(__dirname, "./dist", res);
};

import typescript from "@rollup/plugin-typescript";
import clear from "rollup-plugin-clear";
import html2 from "rollup-plugin-html2";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const isDev = () => {
  return process.env.ENVIRONMENT === "development";
};

export default {
  input: mapToSrcResource("./index.ts"),
  output: {
    file: mapToDistResource("./bundle.js"),
    format: "esm",
  },
  plugins: [
    clear({
      targets: [mapToDistResource()],
    }),
    typescript(),
    html2({
      template: mapToSrcResource("./index.html"),
    }),
    ...(isDev()
      ? [
          serve({
            port: 8000,
            contentBase: mapToDistResource(),
            historyApiFallback: true,
            open: true,
          }),
          livereload({
            delay: 300,
            exts: ["html", "css", "js"],
            watch: mapToDistResource(),
          }),
        ]
      : []),
  ],
};
