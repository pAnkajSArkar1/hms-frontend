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
        name: "mfg date",
        align: "left",
        label: "Manufacture date",
        field: "mfg_date",
        sortable: true,
      },
      {
        name: "exp date",
        align: "left",
        label: "Expiry date",
        field: "exp_date",
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
        name: "price",
        align: "left",
        label: "Price",
        field: "price",
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
      brand: "",
      price: "",
      description: "",
      instruction: "",
      mfg_date: "",
      exp_date: "",
    }),
    formData: reactive({
      name: "",
      brand: "",
      price: "",
      description: "",
      instruction: "",
      mfg_date: "",
      exp_date: "",
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
