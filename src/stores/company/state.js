import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Hospital Name",
        field: "name",
        sortable: true,
      },
      {
        name: "company email",
        align: "left",
        label: "Hospital Email",
        field: "company_email",
        sortable: true,
      },
      {
        name: "primary contact",
        align: "left",
        label: "Contact No.",
        field: "primary_contact",
        sortable: true,
      },

      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
    },
    allItems: reactive([]),
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      created_at: "",
      name: "",
      country: "",
      company_email: "",
      primary_contact: null,
      secondary_contact: null,
      city: "",
      postcode: null,
      street: "",
      address: "",
      com_logo: null,
      logo: null,
    }),
    formData: reactive({
      created_at: "",
      name: "",
      country: "",
      company_email: "",
      primary_contact: null,
      secondary_contact: null,
      city: "",
      postcode: null,
      street: "",
      address: "",
      com_logo: null,
      logo: null,
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
