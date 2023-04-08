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
        name: "problem",
        align: "left",
        label: "Problem",
        field: "problem",
        sortable: true,
      },
      {
        name: "assigned to room",
        align: "left",
        label: "Assigned to Room",
        field: "assigned_to_room",
        sortable: true,
      },
      {
        name: "date of addmission",
        align: "left",
        label: "Date of Addmission",
        field: "date_of_addmission",
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
      mobile: null,
      address: "",
      gender: "",
      problem: "",
      assigned_to_room: "",
      // identity_proof:"",
      blood_group: "",
      date_of_addmission: "",
      age: "",
    }),
    formData: reactive({
      name: "",
      mobile: null,
      address: "",
      gender: "",
      problem: "",
      assigned_to_room: "",
      // identity_proof:"",
      blood_group: "",
      date_of_addmission: "",
      age: "",
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
