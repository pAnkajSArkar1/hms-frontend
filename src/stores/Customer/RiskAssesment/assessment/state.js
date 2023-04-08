import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
      {
        name: "action date",
        align: "left",
        label: "Action Date",
        field: (row) => dateConvert.format(row.action_date),
        sortable: true,
      },
      {
        name: "actioned_by",
        align: "left",
        label: "Actioned By",
        field: "actioned_by",
        sortable: true,
      },
      {
        name: "assessment",
        align: "left",
        label: "Assessments",
        field: "assessment_name",
        sortable: true,
      },
      {
        name: "activity_id",
        align: "left",
        label: "Activities",
        field: "activity",
        sortable: true,
      },
      {
        name: "hazard_id",
        align: "left",
        label: "Hazards",
        field: "hazards",
        sortable: true,
      },
      {
        name: "risk_id",
        align: "left",
        label: "Risks",
        field: "risks",
        sortable: true,
      },
      {
        name: "likelyhood",
        align: "left",
        label: "Likelyhood",
        field: "likelyhood",
        sortable: true,
      },
      {
        name: "severity",
        align: "left",
        label: "Severity",
        field: "severity",
        sortable: true,
      },
      {
        name: "frequency",
        align: "left",
        label: "Frequency",
        field: "frequency",
        sortable: true,
      },
      {
        name: "riskRating",
        align: "left",
        label: "Risk Rating",
        field: "risk_rating",
        sortable: true,
      },
      {
        name: "controls",
        align: "left",
        label: "Controls",
        field: "controls",
        sortable: true,
      },
      {
        name: "likelyhood",
        align: "left",
        label: "Likelyhood(After)",
        field: "likelyhood_after_control",
        sortable: true,
      },
      {
        name: "severity",
        align: "left",
        label: "Severity(After)",
        field: "severity_after_control",
        sortable: true,
      },

      {
        name: "frequency",
        align: "left",
        label: "Frequency(After)",
        field: "frequency_after_control",
        sortable: true,
      },
      {
        name: "riskRating",
        align: "left",
        label: "Risk Rating(After)",
        field: "risk_rating_after_control",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      created_at: "",
      assessment_name: "",
      activity_id: "",
      hazard_ids: [],
      risk_ids: [],
      document_media_ids: [],
      image_media_ids: [],
      comment: "",
      action_date: "",
      actioned_by: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
      viewItem: true,
    }),
    lastUpdated: "",
  };
}
