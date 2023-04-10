import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "created_at",
        align: "left",
        label: "Created At",
        field: (row) => dateConvert.format(row.created_at),
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
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
        sortable: true,
      },
      // {
      //   name: "role",
      //   align: "left",
      //   label: "Role",
      //   field: (row) => row.user_role.role.role,
      //   sortable: true,
      // },
      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
      company_id: "",
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      name: "",
      email: "",
      role: "",
      password: "",
      confirm_password: "",
      company_id: null,
      primary_contact: null,
      signed_by: "",
      user_details: [
        {
          address: "",
          gender: "",
          disease: "",
          assigned_to_room: null,
          identity_proof: [],
          blood_group: "",
          date_of_addmission: "",
          age: null,
          blood_pressure_level: "",
          heart_beat: "",
          sugar_level: "",
          height: "",
          weight: "",
          salary: null,
          experience: "",
        },
      ],
    }),
    formData: reactive({
      name: "",
      email: "",
      role: "",
      old_password: "",
      password: "",
      confirm_password: "",
      company_id: null,
      signed_by: "",
    }),
    created_at: "",
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
