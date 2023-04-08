import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "created at",
        align: "left",
        label: "Date",
        field: (row) => dateConvert.format(row.created_at),
        sortable: true,
      },
      {
        name: "equipments",
        align: "left",
        label: "Equipments",
        field: "name",
        sortable: true,
      },
      {
        name: "created_by",
        align: "left",
        label: "Created By",
        field: (row) => row?.created_by?.name,
        sortable: true,
      },

      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      name: "",
    }),
    created_by: {
      name: "",
    },
    formData: reactive({
      name: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
