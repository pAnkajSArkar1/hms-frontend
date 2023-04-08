import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
        sortable: true,
      },
      {
        name: "priority",
        align: "left",
        label: "Priority",
        field: "priority",
        sortable: true,
      },
      {
        name: "createdby",
        align: "left",
        label: "Assigned By",
        field: (row) => row?.createdby?.name,
        sortable: true,
      },
      {
        name: "assigned_to_user",
        align: "left",
        label: "Assigned To",
        field: (row) => row?.assigned_to_user?.name,
        sortable: true,
      },
      {
        name: "deadline",
        align: "left",
        label: "Deadline",
        field: "deadline",
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: "status",
        sortable: true,
      },
      // {
      //   name: "recurrring_frequency",
      //   align: "left",
      //   label: "Frequency",
      //   field: "recurrring_frequency",
      //   sortable: true,
      // },
      // {
      //   name: "start_date",
      //   align: "left",
      //   label: "Start",
      //   field: "start_date",
      //   sortable: true,
      // },
      // {
      //   name: "end_date",
      //   align: "left",
      //   label: "End",
      //   field: "end_date",
      //   sortable: true,
      // },

      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      name: "",
      assigned_to: null,
      priority: "",
      status: "",
      deadline: null,
      description: "",
      // recurrring_frequency: "",
      // start_date: "",
      // end_date: "",
      // is_recurring: true,
    }),
    formData: reactive({
      name: "",
      assigned_to: null,
      priority: "",
      status: "",
      deadline: null,
      description: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
