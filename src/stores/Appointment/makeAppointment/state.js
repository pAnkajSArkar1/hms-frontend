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
        name: "patientname",
        align: "left",
        label: "Patient Name",
        field: (row) => row?.patient_details?.name,
        sortable: true,
      },
      {
        name: "doctor",
        align: "left",
        label: "Doctor Name",
        field: (row) => row?.doctor_details?.name,
        sortable: true,
      },
      {
        name: "appointmentdate",
        align: "left",
        label: "Appointment Date",
        field: (row) => row?.appointment_date,
        sortable: true,
      },
      {
        name: "donorno",
        align: "left",
        label: "Contact Number",
        field: (row) => row?.patient_details?.primary_contact,
        sortable: true,
      },
      {
        name: "source",
        align: "left",
        label: "Source",
        field: "source",
        sortable: true,
      },
      {
        name: "priority",
        align: "left",
        label: "Priority",
        field: "priority",
        sortable: true,
      },
      {
        name: "consultantant_type",
        align: "left",
        label: "Consultantant Type",
        field: "consultantant_type",
        sortable: true,
      },
      {
        name: "message",
        align: "left",
        label: "Message",
        field: "message",
        sortable: true,
      },
      {
        name: "slot",
        align: "left",
        label: "Time Slot",
        field: "from_time" + "to_time",
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
      appointment_date: "",
      doctor_id: null,
      source: "",
      priority: "",
      consultantant_type: "",
      message: "",
      from_time: "",
      to_time: "",
      status: "",
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
