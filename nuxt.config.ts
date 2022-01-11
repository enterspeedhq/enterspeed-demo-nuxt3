import { defineNuxtConfig } from "nuxt3";

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
});
