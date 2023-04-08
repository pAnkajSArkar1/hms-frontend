import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "question",
        align: "left",
        label: "Question",
        field: "question",
        sortable: true,
      },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    newData: reactive({
      category: "",
      questions: [
        {
          question: "",
        },
      ],
    }),
    formData: reactive({
      category: "",
      questions: [
        {
          question: "",
        },
      ],
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
