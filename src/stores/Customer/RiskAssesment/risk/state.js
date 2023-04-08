import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "createdat",
        align: "left",
        label: "Created At",
        field: (row) => dateConvert.format(row.created_at),
        sortable: true,
      },
      {
        name: "risk",
        align: "left",
        label: "Risks",
        field: "name",
        sortable: true,
      },
      {
        name: "hazard",
        align: "left",
        label: "Hazards",
        field: (row) => row?.hazard?.name,
        sortable: true,
      },
      {
        name: "createdby",
        align: "left",
        label: "Created By",
        field: (row) => row?.createdby?.name,
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
      activity_id: null,
      hazard_id: null,
      name: "",
    }),
    formData: reactive({
      hazard: {
        name: "",
      },
      name: "",
    }),
    createdby: {
      name: "",
    },
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
