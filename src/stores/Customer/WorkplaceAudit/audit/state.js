import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "branch_id",
        align: "left",
        label: "Branch",
        field: "branch_id",
        sortable: true,
      },
      {
        name: "business_name",
        align: "left",
        label: "Business Name",
        field: "business_name",
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
        name: "contact_number",
        align: "left",
        label: "Contact Number",
        field: "contact_number",
        sortable: true,
      },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      branch_id: null,
      business_name: "",
      address: "",
      contact_number: null,
      question_id: null,
      Audit_question_details: "",
      date_of_review: "",
      document_ids: [],
      comments: "",
    }),
    formData: reactive({
      branch_id: null,
      business_name: "",
      address: "",
      contact_number: null,
      question_id: null,
      Audit_question_details: "",
      date_of_review: "",
      document_ids: [],
      comments: "",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
