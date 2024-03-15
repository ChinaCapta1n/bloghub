import {defineStore} from "pinia";

export const useSearch = defineStore("search", {
    state: () => {
        search: [];
    },
    actions: {
        setSearch(payload) {
            this.search = payload;
        },
    },
    persist: true,
});
