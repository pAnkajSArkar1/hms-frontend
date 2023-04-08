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
        name: "category",
        align: "left",
        label: "Category",
        field: "category",
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
        name: "experience",
        align: "left",
        label: "Experience",
        field: "experience",
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
      address: "",
      email: "",
      mobile_no: null,
      blood: "",
      type: "",
      category: "",
      gender: "",
      age: null,
      experience: "",
      salary: null,
    }),
    formData: reactive({
      name: "",
      address: "",
      email: "",
      mobile_no: null,
      blood: "",
      type: "",
      category: "",
      gender: "",
      age: null,
      experience: "",
      salary: null,
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
