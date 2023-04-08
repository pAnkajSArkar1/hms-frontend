import { ref, reactive } from "vue";
import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    columns: [
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
        name: "riskRating",
        align: "left",
        label: "Risk Rating",
        field: "risk_rating",
        sortable: true,
      },
      {
        name: "riskRating",
        align: "left",
        label: "Risk Rating(After)",
        field: "risk_rating_after_control",
        sortable: true,
      },
      {
        name: "controls",
        align: "left",
        label: "Controls",
        field: "controls",
        sortable: true,
      },
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
      signed_by: [],
      comment: "",
      action_date: "",
      actioned_by: "",
      signed_by: [],
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
      viewItem: true,
    }),
    lastUpdated: "",
  };
}
