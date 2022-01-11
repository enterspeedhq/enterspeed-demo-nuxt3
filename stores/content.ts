import { acceptHMRUpdate, defineStore } from "pinia";

export const useContent = defineStore({
  id: "content",

  state: () => ({
    pageContent: null,
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContent, import.meta.hot));
}
