import { ref, reactive } from "vue";

export default function () {
  return {
    donateBlood: {
      blood_group: "",
      units_in_ml: null,
      disease: "",
    },
  };
}
