import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "createdat",
        align: "left",
        label: "Created At",
        field: (row) => dateConvert.format(row.created_at),
        sortable: true,
      },
      {
        name: "activity",
        align: "left",
        label: "Activity",
        field: (row) => row?.activity?.name,
        sortable: true,
      },
      {
        name: "hazard",
        align: "left",
        label: "Hazard",
        field: (row) => row?.hazard_id?.name,
        sortable: true,
      },
      {
        name: "risk",
        align: "left",
        label: "Risk",
        field: (row) => row?.risk_id?.name,
        sortable: true,
      },
      {
        name: "likelyhood",
        align: "left",
        label: "Likelyhood",
        field: "likelyhood_before_control_value",
        sortable: true,
      },
      {
        name: "severity",
        align: "left",
        label: "Severity",
        field: "severity_before_control_value",
        sortable: true,
      },
      {
        name: "frequency",
        align: "left",
        label: "Frequency",
        field: "frequency_before_control_value",
        sortable: true,
      },
      {
        name: "riskRating",
        align: "left",
        label: "Risk Rating",
        field: "riskrating",
        sortable: true,
      },
      {
        name: "control",
        align: "left",
        label: "Control",
        field: "control_measures",
        sortable: true,
      },
      {
        name: "likelyhood",
        align: "left",
        label: "Livelyhood(After)",
        field: "likelyhood_after_control_value",
        sortable: true,
      },
      {
        name: "severity",
        align: "left",
        label: "Severity(After)",
        field: "severity_after_control_value",
        sortable: true,
      },
      {
        name: "frequency",
        align: "left",
        label: "Frequency(After)",
        field: "frequency_after_control_value",
        sortable: true,
      },
      {
        name: "riskRating",
        align: "left",
        label: "Risk Rating(After)",
        field: "riskrating_after",
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
      activity_id: "",
      hazard_id: "",
      risk_id: null,
      control_measures: "",
      likelyhood_before_control_value: "",
      severity_before_control_value: "",
      frequency_before_control_value: "",
      riskrating: "",
      likelyhood_after_control_value: "",
      severity_after_control_value: "",
      frequency_after_control_value: "",
      riskrating_after: "",
    }),

    formData: reactive({
      created_at: "",
      activity: {
        name: "",
      },
      hazard_id: {
        name: "",
      },
      risk_id: {
        name: "",
      },
      control_measures: "",
      likelyhood_before_control_value: "",
      severity_before_control_value: "",
      frequency_before_control_value: "",
      riskrating: "",
      likelyhood_after_control_value: "",
      severity_after_control_value: "",
      frequency_after_control_value: "",
      riskrating_after: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
