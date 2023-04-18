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
        name: "bloodgroup",
        align: "left",
        label: "Blood Group",
        field: "blood_group",
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
        sortable: true,
      },
      {
        name: "role",
        align: "left",
        label: "Role",
        field: (row) => row.user_role.role.role,
        sortable: true,
      },
      // { name: "actions", align: "right", label: "Actions" },
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
