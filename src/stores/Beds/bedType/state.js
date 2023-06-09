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
        name: "bedtype",
        align: "left",
        label: "Bed Type",
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
    newData: reactive({
      name: "",
    }),
    formData: reactive({
      name: "",
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
