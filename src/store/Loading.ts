import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoading = defineStore("loadingStatus", {
  state: () => {
    return { loading: ref(false) };
  },
  actions: {
    doUpdateLoading(status: boolean) {
      this.loading = status;
    },
  },
});
