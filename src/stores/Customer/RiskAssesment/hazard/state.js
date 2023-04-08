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
        name: "hazard",
        align: "left",
        label: "Hazards",
        field: "name",
        sortable: true,
      },
      {
        name: "activity",
        align: "left",
        label: "Activities",
        field: (row) => row?.activity?.name,
        // field: "name",
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
      activity_id: null,
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      activity_id: null,
      name: "",
    }),
    formData: reactive({
      activity: {
        name: "",
      },
      hazard_id: "",
      activity_id: "",
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
