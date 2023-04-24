import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "id",
        align: "left",
        label: "Receiver ID",
        field: "id",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Full Name",
        field: "name",
        sortable: true,
      },
      {
        name: "primary_contact",
        align: "left",
        label: "Contact Number",
        field: "primary_contact",
        sortable: true,
      },
      {
        name: "bloodgroup",
        align: "left",
        label: "Blood Group",
        field: "blood_group",
        sortable: true,
      },
      {
        name: "gender",
        align: "left",
        label: "Gender",
        field: "gender",
        sortable: true,
      },
      {
        name: "disease",
        align: "left",
        label: "Disease",
        field: "disease",
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
        sortable: true,
      },
      // { name: "actions", align: "right", label: "Actions"},
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
