import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "date",
        align: "left",
        label: "Date",
        field: "name",
        sortable: true,
      },
      {
        name: "siteChecked",
        align: "left",
        label: "Checked By",
        field: "name",
        sortable: true,
      },
      {
        name: "inspector",
        align: "left",
        label: "Inspector",
        field: "name",
        sortable: true,
      },
      {
        name: "business",
        align: "left",
        label: "Business Name",
        field: "name",
        sortable: true,
      },
      {
        name: "project",
        align: "left",
        label: "Project Name",
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
      checked_by: "",
      supervisor: "",
      address: "",
      primary_number: "",
      secondary_number: "",
      action_date: "",
      branch_id: null,
      user: [
        {
          user_id: null,
        },
      ],
      assets: [
        {
          asset_id: null,
        },
      ],
      comment: "",
    }),
    formData: reactive({
      name: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
