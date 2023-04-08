import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "code",
        align: "left",
        label: "Code",
        field: "code",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Hospital Name",
        field: (row) => row?.company_name?.name,
        sortable: true,
      },
      {
        name: "department_name",
        align: "left",
        label: "Department Name",
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
      company_id: null,
      name: "",
      code: null,
      company_name: {
        name: "",
      },
    }),
    formData: reactive({
      name: "",
      code: null,
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
