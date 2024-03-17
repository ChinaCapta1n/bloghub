import {defineStore} from "pinia";

export const useTodosLists = defineStore("todolists", {
    state: () => ({
        lists: [
            {
                item: "sessionStorage和localStorage整理",
                status: false,
            },
            {
                item: "this指向",
                status: true,
            },
        ],
    }),
    persist: true,
});
