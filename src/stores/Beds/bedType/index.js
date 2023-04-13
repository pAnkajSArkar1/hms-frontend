import { defineStore } from "pinia";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";

export const useBedTypeStore = defineStore("BedTypeManagement", {
  state,
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
});
