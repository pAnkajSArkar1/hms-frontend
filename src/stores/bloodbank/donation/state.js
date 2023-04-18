import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "donationid",
        align: "left",
        label: "Donation ID",
        field: "id",
        sortable: true,
      },
      {
        name: "donorname",
        align: "left",
        label: "Donor Name",
        field: (row) => row?.donor_details?.name,
        sortable: true,
      },
      {
        name: "donorno",
        align: "left",
        label: "Contact Number",
        field: (row) => row?.donor_details?.primary_contact,
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
        name: "disease",
        align: "left",
        label: "Disease",
        field: "disease",
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
      disease: "",
      status: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
