<template>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-2 col-lg-2">
      <q-card>
        <q-card-section class="text-weight-bold q-pb-none">
          Count of Checklists
        </q-card-section>
        <q-card-section class="text-weight-bold">10</q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-10 col-lg-10">
      <q-card>
        <q-card-section>
          <BarChart
            class="checklist-barchart"
            :chartData="chartData"
            chatTitle="Equipment/Assets"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-card>
        <q-card-section>
          <PieChart
            class="checklist-piechart"
            :chartData="chartData"
            chatTitle="Equipment"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-8 col-lg-8">
      <QDataTable
        :aditionalActions="true"
        :useStore="useStore"
        title="All Checklists"
      >
        <template> </template>
        <template v-slot:aditionalActions="bodyRow">
          <q-btn
            flat
            round
            dense
            color="secondary"
            icon="email"
            class="q-ml-sm"
            @click="onClickEmail(bodyRow.row)"
          >
            <q-tooltip> Email Report </q-tooltip>
          </q-btn>
          <span @click="onTableRowClick(bodyRow.row)"></span>
          <q-btn
            flat
            round
            dense
            color="secondary"
            icon="file_download"
            class="q-ml-sm"
            @click="onClickDownload(bodyRow.row)"
          >
            <q-tooltip> Download </q-tooltip>
          </q-btn>
        </template>
      </QDataTable>
    </div>
  </div>

  <!-- CREATE -->
  <q-dialog v-model="showCreateDashboard">
    <q-card class="" style="width: 600px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <create-dashboard :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>

  <!-- email report -->
  <q-dialog v-model="showEmailDialog">
    <q-card class="" style="width: 600px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <EmailReport :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>

  <!-- EDIT -->
  <q-dialog v-model="showEditDashboard">
    <q-card class="" style="width: 600px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <edit-dashboard :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineAsyncComponent, reactive, ref } from "vue";
import { useDashboardStore } from "stores/Customer/Inspection/dashboard";
import { storeToRefs } from "pinia";

const CreateDashboard = defineAsyncComponent(() =>
  import("./CreateDashboard.vue")
);

const EditDashboard = defineAsyncComponent(() => import("./EditDashboard.vue"));
const EmailReport = defineAsyncComponent(() => import("./EmailReport.vue"));

export default {
  name: "InspectionDashboard",
  components: {
    CreateDashboard,
    EditDashboard,
    EmailReport,
  },
  setup() {
    const useStore = useDashboardStore();
    const showCreateDashboard = computed(() => useStore.showCreateDashboard);
    const showEditDashboard = computed(() => useStore.showEditDashboard);
    const showEmailDialog = computed(() => useStore.showEmailDialog);
    const { generateReportDownloadURL } = useStore;
    const checklistDetails = ref("");

    const onClickView = (params) => {
      router.push({ name: props.viewRoute, params: { id: params.id } });
    };

    const onClickDownload = (row) => {
      generateReportDownloadURL({ id: row.id }).then((response) => {
        window.open(response.tempUrl);
      });
    };

    const onClickEmail = (row) => {
      useStore.emailReport.id = row.id;
      useStore.dialogs.emailReport = true;
    };
    const barChartData = reactive({
      labels: ["Fire Equipment", "Safety Equipment", "Health Equipment"],
      datasets: [
        {
          data: [],
          backgroundColor: ["#F70606", "#F4F706", "#2ADF06"],
          hoverOffset: 4,
        },
      ],
    });

    const onTableRowClick = (props) => {
      useStore.getItem(props.id).then((response) => {
        checklistDetails.value = response.data;

        barChartData.datasets[0].data = [];
        barChartData.datasets[0].data.push(response.data.risk_rating);
        barChartData.datasets[0].data.push(response.data.frequency);
        barChartData.datasets[0].data.push(response.data.severity);
        barChartData.datasets[0].data.push(response.data.likelyhood);
      });
    };

    return {
      useStore,
      showCreateDashboard,
      showEditDashboard,
      onClickDownload,
      showEmailDialog,
      onClickEmail,
      onClickView,
      onTableRowClick,
      checklistDetails,
      chartData: {
        labels: ["Fire Equipment", "Safety Equipment", "Health Equipment"],
        datasets: [
          {
            data: [11, 16, 7],
            labels: ["Fire Equipment", "Safety Equipment", "Health Equipment"],
            backgroundColor: ["#F70606", "#F4F706", "#2ADF06"],
          },
        ],
      },
    };
  },
};
</script>
