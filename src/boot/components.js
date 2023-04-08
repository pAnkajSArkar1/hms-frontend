import QDataTable from "components/CRUD/QDataTable.vue";
import QCreateForm from "components/CRUD/QCreateForm.vue";
import QEditForm from "components/CRUD/QEditForm.vue";
import QSearch from "components/CRUD/QSearch.vue";
import BarChart from "components/CHART/BarChart.vue";
import DoughnutChart from "components/CHART/DoughnutChart.vue";
import PieChart from "components/CHART/PieChart.vue";
import PolarAreaChart from "components/CHART/PolarAreaChart.vue";
import UploaderFile from "components/CRUD/UploaderFile.vue";

export default ({ app }) => {
  app.component("QDataTable", QDataTable);
  app.component("QCreateForm", QCreateForm);
  app.component("QEditForm", QEditForm);
  app.component("QSearch", QSearch);
  app.component("BarChart", BarChart);
  app.component("DoughnutChart", DoughnutChart);
  app.component("PieChart", PieChart);
  app.component("PolarAreaChart", PolarAreaChart);
  app.component("UploaderFile", UploaderFile);
};
