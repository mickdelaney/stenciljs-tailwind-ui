import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import cssnano from "cssnano";

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx","./src/**/*.css", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  globalStyle: "src/global/styles.css",
  namespace: 'tailwind-ui',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        purgecss,
        cssnano()
      ]
    })
  ]
};
