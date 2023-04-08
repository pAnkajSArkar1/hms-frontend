import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "created_at",
        align: "left",
        label: "Date",
        field: (row) => dateConvert.format(row.created_at),
        sortable: true,
      },
      {
        name: "title",
        align: "left",
        label: "Title",
        field: "title",
        sortable: true,
      },
      {
        name: "type",
        align: "left",
        label: "Type",
        field: "type",
        sortable: true,
      },
      {
        name: "department",
        align: "left",
        label: "Department",
        field: (row) => row?.branch_details?.name,
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
    newData: reactive({
      title: "",
      type: "",
      branch_id: null,
      assets: [
        {
          asset_id: null,
        },
      ],
      description: "",
    }),
    formData: reactive({
      title: "",
      type: "",
      branch_id: null,
      department: "",
      assets: [
        {
          asset_id: null,
        },
      ],
      description: "",
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
