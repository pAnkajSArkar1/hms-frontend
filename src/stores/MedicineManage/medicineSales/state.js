import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "code",
        align: "left",
        label: "Code",
        field: "code",
        sortable: true,
      },
      {
        name: "category_id",
        align: "left",
        label: "Category",
        field: (row) => row.category_details.name,
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
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
        name: "strength",
        align: "left",
        label: "Strength",
        field: "strength",
        sortable: true,
      },
      {
        name: "description",
        align: "left",
        label: "Description",
        field: "description",
        sortable: true,
      },
      {
        name: "manufacturer",
        align: "left",
        label: "Manufacturer",
        field: "manufacturer",
        sortable: true,
      },
      {
        name: "mfg_date",
        align: "left",
        label: "Manufacture Date",
        field: "mfg_date",
        sortable: true,
      },
      {
        name: "exp_date",
        align: "left",
        label: "Expiry date",
        field: "exp_date",
        sortable: true,
      },
      {
        name: "unit_price",
        align: "left",
        label: "Unit price",
        field: "unit_price",
        sortable: true,
      },
      {
        name: "quantity_in_stock",
        align: "left",
        label: "Quantity in stock",
        field: "quantity_in_stock",
        sortable: true,
      },
      {
        name: "cost_price",
        align: "left",
        label: "Cost price",
        field: "cost_price",
        sortable: true,
      },
      {
        name: "selling_price",
        align: "left",
        label: "Selling price",
        field: "selling_price",
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
