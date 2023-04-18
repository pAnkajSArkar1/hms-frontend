import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "requestid",
        align: "left",
        label: "Request ID",
        field: "id",
        sortable: true,
      },
      {
        name: "receivername",
        align: "left",
        label: "Receiver Name",
        field: (row) => row?.blood_request_person_details?.name,
        sortable: true,
      },
      {
        name: "donorno",
        align: "left",
        label: "Contact Number",
        field: (row) => row?.blood_request_person_details?.primary_contact,
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
        name: "unitsinml",
        align: "left",
        label: "Units (ml)",
        field: "units_in_ml",
        sortable: true,
      },
      {
        name: "reason",
        align: "left",
        label: "Reason",
        field: "reason",
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
      status: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      blood_group: "",
      units_in_ml: null,
      reason: "",
      status: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
