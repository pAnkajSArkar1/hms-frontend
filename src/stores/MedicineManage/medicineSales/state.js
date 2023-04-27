import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "donationid",
        align: "left",
        label: "Id",
        field: "id",
        sortable: true,
      },
      {
        name: "invoice_no",
        align: "left",
        label: "Invoice No",
        field: (row) => row.invoice_no,
        sortable: true,
      },
      {
        name: "total_price",
        align: "left",
        label: "Total price",
        field: "total_price",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      amount_paid: "",
      patient_id: null,
      categories_and_medicines: [],
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
