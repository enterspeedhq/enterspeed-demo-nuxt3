import { defineNuxtConfig } from "nuxt3";

import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import postcssReporter from "postcss-reporter";
import postcssNested from "postcss-nested";

export default defineNuxtConfig({
  meta: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  publicRuntimeConfig: {
    DELIVERY_API_KEY: process.env.DELIVERY_API_KEY,
    DELIVERY_API_PATH: process.env.DELIVERY_API_PATH,
  },
  typescript: {
    strict: true,
  },
  loading: { color: "#0B0F89", throttle: 200 },
  css: ["assets/css/master.css"],
  buildModules: ["@pinia/nuxt"],
  build: {
    extractCSS: true,
    optimizeCSS: true,
  },
  pageTransition: {
    name: "home",
    mode: "out-in",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssImport(),
          postcssPresetEnv({
            stage: 2,
            preserve: false,
            importFrom: ["assets/css/_variables.css"],
            autoprefixer: {
              grid: true,
            },
            features: {
              "color-mod-function": { unresolved: "warn" },
              "custom-media-queries": {},
              "double-position-gradients": false,
            },
            browsers: [">= 5% in DK", "ie 11"],
          }),
          postcssNested(),
          postcssReporter({
            clearReportedMessages: true,
          }),
        ],
      },
    },
  },
});
