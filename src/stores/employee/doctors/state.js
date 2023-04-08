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
        name: "speciality",
        align: "left",
        label: "Speciality",
        field: "speciality",
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
      branch_id: null,
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      name: "",
      speciality: "",
      branch: {
        name: "",
      },
      branch_id: null,
      address: "",
      email: "",
      mobile_no: null,
      blood: "",
      type: "",
      gender: "",
      age: null,
      experience: "",
      salary: null,
    }),
    formData: reactive({
      name: "",
      speciality: "",
      branch: {
        name: "",
      },
      branch_id: null,
      address: "",
      email: "",
      mobile_no: null,
      blood: "",
      type: "",
      gender: "",
      age: "",
      experience: "",
      salary: "",
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
