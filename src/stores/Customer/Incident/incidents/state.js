import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "incidentname",
        align: "left",
        label: "Incident Name",
        field: "incidentname",
        sortable: true,
      },  


    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
      incidentname: "",
      newincident:"",
  
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
