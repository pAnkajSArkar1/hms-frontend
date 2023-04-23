import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "created_at",
        align: "left",
        label: "Created_at",
        field: (row) => dateConvert.format(row.created_at),
        sortable: true,
      },
      {
        name: "subject",
        align: "left",
        label: "Subject",
        field: "subject",
        sortable: true,
      },
      {
        name: "message",
        align: "left",
        label: "Message",
        field: "message",
        sortable: true,
      },

      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
      company_id: "",
      name: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      subject: "",
      message: "",
    }),
    sendMessage: {
      subject: "",
      message: "",
    },
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
