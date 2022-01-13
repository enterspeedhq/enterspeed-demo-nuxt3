import { acceptHMRUpdate, defineStore } from "pinia";

export const useContent = defineStore({
  id: "content",

  state: () => ({
    pageContent: {
      meta: {},
      route: {},
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
