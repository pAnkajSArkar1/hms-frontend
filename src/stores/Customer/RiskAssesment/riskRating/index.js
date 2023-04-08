import { defineStore } from "pinia";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";

export const useRiskRatingStore = defineStore("riskRating", {
  state,
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
});
