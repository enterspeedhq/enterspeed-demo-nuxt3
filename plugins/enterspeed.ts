import { defineNuxtPlugin } from "#app";
import { useContent } from "~/stores/content";

export default defineNuxtPlugin(() => {
  const contentStore = useContent();

  return {
    provide: {
      content: () => contentStore.content,
    },
  };
});
