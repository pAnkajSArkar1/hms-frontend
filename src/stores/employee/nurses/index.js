import { defineStore } from "pinia";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";

export const useNurseStore = defineStore("nurse", {
  state,
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
});
