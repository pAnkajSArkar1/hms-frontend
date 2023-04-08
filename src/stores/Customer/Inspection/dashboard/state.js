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
        name: "checklists",
        align: "left",
        label: "Checklists",
        field: "title",
        sortable: true,
      },
      {
        name: "asset_inspection_template_id",
        align: "left",
        label: "Template",
        field: (row) => row?.template_details?.title,
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: "status",
        sortable: true,
      },
      {
        name: "created_by",
        align: "left",
        label: "Actioned By",
        field: (row) => row?.created_by_user?.name,
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
      asset_inspection_template_id: null,
      title: "",
      action_date: "",
      actioned_by: "",
      description: "",
      remarks: "",
      assets: [],
    }),
    formData: reactive({
      id: null,
      asset_inspection_template_id: null,
      title: "",
      action_date: "",
      actioned_by: "",
      description: "",
      remarks: "",
      assets: [],
    }),

    emailReport:  reactive({
      id: null,
      user_id: null,
      email: '',
      message: '',
      subject: ''
    }),

    dialogs: reactive({
      createItem: false,
      editItem: false,
      emailReport: false,
    }),
    lastUpdated: "",
  };
}
