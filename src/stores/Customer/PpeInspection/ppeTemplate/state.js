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
        name: "templates",
        align: "left",
        label: "Templates",
        field: "name",
        sortable: true,
      },
      {
        name: "frequency",
        align: "left",
        label: "Frequency",
        field: "frequency",
        sortable: true,
      },
      {
        name: "department",
        align: "left",
        label: "Department",
        field: (row) => row?.branch?.name,
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
      frequency: "",
      branch: {
        name: "",
      },
      branch_id: null,
      equipments: [
        {
          equipment_id: null,
        },
      ],
    }),
    created_by: "",
    formData: reactive({
      name: "",
      frequency: "",
      branch_id: null,
      equipments: [
        {
          equipment_id: null,
        },
      ],
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
