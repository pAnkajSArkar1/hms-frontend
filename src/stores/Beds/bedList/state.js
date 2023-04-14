import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "floor",
        align: "left",
        label: "Floor",
        field: (row) => row?.floor_details?.name,
        sortable: true,
      },
      {
        name: "bedgroup",
        align: "left",
        label: "Bed Group",
        field: (row) => row?.bed_group_details?.name,
        sortable: true,
      },
      {
        name: "bedtype",
        align: "left",
        label: "Bed Type",
        field: (row) => row?.bed_type_details?.name,
        sortable: true,
      },
      {
        name: "bedList",
        align: "left",
        label: "Bed",
        field: "name",
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: "status",
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
      floor_id: null,
      bed_group_id: null,
      bed_type_id: null,
      name: "",
    }),
    formData: reactive({
      floor_id: null,
      bed_group_id: null,
      bed_type_id: null,
      name: "",
      status: "",
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
