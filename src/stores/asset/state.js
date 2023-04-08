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
        name: "asset_code",
        align: "left",
        label: "Asset Code",
        field: "asset_code",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Asset name",
        field: "name",
        sortable: true,
      },
      {
        name: "department",
        align: "left",
        label: "Department",
        field: (row) => row?.branch?.name,
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
      branch_id: null,
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      created_at: "",
      createdby: {
        name: "",
      },
      company_id: "",
      asset_code: "",
      name: "",
      branch: {
        name: "",
      },
      branch_id: "",
      serial_number: "",
      make: "",
      year_of_manufacture: "",
    }),
    formData: reactive({
      created_at: "",
      createdby: {
        name: "",
      },
      company_id: "",
      asset_code: "",
      name: "",
      branch: {
        name: "",
      },
      branch_id: "",
      serial_number: "",
      make: "",
      year_of_manufacture: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
