import { ref, reactive } from "vue";

export default function () {
  return {
    requestBlood: {
      blood_group: "",
      units_in_ml: null,
      reason: "",
    },
  };
}
