import { defineStore } from "pinia";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";

export const useMediaStore = defineStore("media", {
  state,
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
});
