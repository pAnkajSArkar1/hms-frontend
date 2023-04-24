import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Category",
        field: "name",
        sortable: true,
      },
      {
        name: "description",
        align: "left",
        label: "Description",
        field: "description",
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
      description: "",
    }),
    createdby: {
      name: "",
    },
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
