import { ref, reactive } from "vue";

export default function () {
  return {
    columns: [
      {
        name: "date",
        align: "left",
        label: "Date",
        field: "date",
        sortable: true,
      },
      {
        name: "incidentnumber",
        align: "left",
        label: "IncidentNumber",
        field: "incidentnumber",
        sortable: true,
      },
      {
        name: "businessname",
        align: "left",
        label: "BusinessName",
        field: "businessname",
        sortable: true,
      },
      {
        name: "incidenttype",
        align: "left",
        label: "IncidentType",
        field: "incidenttype",
        sortable: true,
      },


    ],
    filter: {
      search: "",
    },
    items: reactive([]),
    item: reactive({}),
    formData: reactive({
    date: "",
    incidentnumber: "",
    businessname: "",
    incidenttype:"",
    branch:"",
    address:"",
    personname:"",
    desig:"",
    contactnumber:"",
    email:"",
    placeofincident:"",
    dateofincident:"",
    timeofincident:"",
    numofemp:"",
    nameofemp:"",
    dept:"",
    manager:"",
    causeofinjury:"",
    natureofinjury:"",
    rootcause:"",
    dayslostfrom:"",
    dayslostto:"",
    dayslost:"",
    }),
    dialogs: reactive({
      createItem: false,
      editItem: false,
    }),
    lastUpdated: "",
  };
}
