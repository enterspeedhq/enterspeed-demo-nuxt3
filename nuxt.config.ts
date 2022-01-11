import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
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
  buildModules: ["@pinia/nuxt"],
});
