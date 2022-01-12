import { acceptHMRUpdate, defineStore } from "pinia";

export const useContent = defineStore({
  id: "content",

  state: () => ({
    pageContent: {
      meta: null,
      route: null,
    },
  }),

  getters: {
    content: (state) => state.pageContent,
  },

  actions: {
    setContent(content: any) {
      this.pageContent = content;
    },
  },
});
