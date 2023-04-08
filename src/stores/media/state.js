import { ref, reactive } from "vue";

export default function () {
  return {
    items: reactive([]),
    item: reactive({}),
  };
}
