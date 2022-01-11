import { acceptHMRUpdate, defineStore } from "pinia";

export const useNavigation = defineStore({
  id: "navigation",

  state: () => ({
    navigationOpen: false,
    navigationItems: null,
  }),

  getters: {
    hasItems: (state) => !!state.navigationItems,
    items: (state) => state.navigationItems,
    isOpen: (state) => state.navigationOpen,
  },

  actions: {
    setOpen(open: boolean) {
      this.navigationOpen = open;
    },
    setItems(items: any) {
      this.navigationItems = items;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigation, import.meta.hot));
}
