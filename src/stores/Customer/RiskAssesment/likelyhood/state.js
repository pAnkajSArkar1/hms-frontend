import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "hazard",
        align: "left",
        label: "Hazards",
        field: "name",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      name: "",
      value: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
