import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      // {
      //   name: "appointmentid",
      //   align: "left",
      //   label: "Appointment ID",
      //   field: "id",
      //   sortable: true,
      // },
      {
        name: "visitorname",
        align: "left",
        label: "Visitor Name",
        field: (row) => row?.name,
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "email",
        field: "email",
        sortable: true,
      },
      {
        name: "phone",
        align: "left",
        label: "Contact Number",
        field: "phone",
        sortable: true,
      },
      {
        name: "address",
        align: "left",
        label: "Address",
        field: "address",
        sortable: true,
      },
      {
        name: "purpose_of_visiting",
        align: "left",
        label: "Purpose of visiting",
        field: "purpose_of_visiting",
        sortable: true,
      },
      {
        name: "date_of_visiting",
        align: "left",
        label: "Date of visiting",
        field: "date_of_visiting",
        sortable: true,
      },
      {
        name: "from_time",
        align: "left",
        label: "Time of Visiting",
        field: "from_time" + "to_time",
        sortable: true,
      },
      {
        name: "aadhar_no",
        align: "left",
        label: "Aadhar No",
        field: "aadhar_no",
        sortable: true,
      },
      {
        name: "vaccination_status",
        align: "left",
        label: "Covid Vaccination",
        field: "vaccination_status",
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
      name: "",
      email: "",
      phone: null,
      address: "",
      purpose_of_visiting: "",
      date_of_visiting: "",
      from_time: "",
      to_time: "",
      aadhar_no: null,
      vaccination_status: "",
    }),

    emailReport: reactive({
      subject: "",
    }),

    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
