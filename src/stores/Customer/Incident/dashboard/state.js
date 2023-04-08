import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "branchname",
        align: "left",
        label: "Branch Name",
        field: "branchname",
        sortable: true,
      },
    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      branchname:"",
      reportfrom:"",
      reportto:"",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
