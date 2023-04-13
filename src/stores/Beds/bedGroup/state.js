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
        name: "bedgroup",
        align: "left",
        label: "Bed Group",
        field: "name",
        sortable: true,
      },
      // {
      //   name: "roomnumber",
      //   align: "left",
      //   label: "Number of rooms",
      //   field: (row) => row?.activity?.name,
      //   sortable: true,
      // },
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
    newData: reactive({
      name: "",
      floor_id: null,
      description: "",
    }),
    formData: reactive({
      name: "",
      floor_id: null,
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
