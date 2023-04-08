import { defineStore } from "pinia";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";

export const useDashboardStore = defineStore("dashboard", {
  state,
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
});
