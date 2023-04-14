<template>
  <!-- <div class="row q-col-gutter-md"> -->
  <!-- TASK COUNT -->
  <!-- <div class="col-12 col-md-4 col-lg-4 q-gutter-md">
      <q-card>
        <q-card-section class="text-weight-bold q-pb-none">
          Completed Tasks
        </q-card-section>
        <q-card-section class="text-weight-bold">
          {{ complete_tasks }}
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="text-weight-bold q-pb-none">
          Incompleted Tasks
        </q-card-section>
        <q-card-section class="text-weight-bold">
          {{ incomplete_tasks }}
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="text-weight-bold q-pb-none">
          Overdue Tasks
        </q-card-section>
        <q-card-section class="text-weight-bold">
          {{ overdue }}
        </q-card-section>
      </q-card>
    </div> -->

  <!-- CHARTS -->
  <!-- <div class="col-12 col-md-8 col-lg-8">
      <q-card>
        <q-card-section>
          <BarChart
            class="task-management-barchart"
            :chartData="barChartData"
            chatTitle="Total task count"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-card>
        <q-card-section>
          <DoughnutChart
            :chartData="doughnutChartData"
            chartLabel="All task by completion status"
          />
        </q-card-section>
      </q-card>
    </div> -->

  <!-- QDATATABLE -->
  <q-page>
    <BedMenu />
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Bed Status"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr>
            <q-td key="floor">{{ bodyRow.row?.floor_details?.name }} </q-td>
            <q-td key="bedgroup"
              >{{ bodyRow.row?.bed_group_details?.name }}
            </q-td>
            <q-td key="bedtype"
              >{{ bodyRow.row?.bed_type_details?.name }}
            </q-td>
            <q-td key="bedList">{{ bodyRow.row.name }} </q-td>
            <q-td key="status">
              <span v-if="bodyRow.row.status === 'Free'">
                <q-chip color="green" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.status === 'Occupied'">
                <q-chip color="red" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
            </q-td>
            <!-- <q-td key="actions" align="right">
              <q-btn
                flat
                round
                dense
                color="accent"
                icon="edit"
                class="q-ml-sm"
                @click="onClickEdit(bodyRow.row)"
              >
                <q-tooltip> Edit </q-tooltip>
              </q-btn>
              <q-btn
                flat
                round
                dense
                color="negative"
                icon="clear"
                @click="onClickDelete(bodyRow.row)"
              >
                <q-tooltip> Delete </q-tooltip>
              </q-btn>
            </q-td> -->
          </q-tr>
        </template>
      </QDataTable>
    </div>
  </q-page>
  <!-- </div> -->
</template>

<script>
import {
  computed,
  defineAsyncComponent,
  getCurrentInstance,
  onBeforeMount,
  ref,
  onMounted,
  reactive,
} from "vue";
import { useBedListStore } from "stores/Beds/status";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

export default {
  name: "BedStatus",
  components: {},

  setup(props) {
    const useStore = useBedListStore();
    const $q = useQuasar();
    // const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    // const loading = ref([]);
    // const taskDetails = ref("");
    // const incomplete_tasks = ref(0);
    // const complete_tasks = ref(0);
    // const overdue = ref(0);

    // const onClickView = (params) => {
    //   router.push({ name: props.viewRoute, params: { id: params.id } });
    // };

    // const barChartData = reactive({
    //   labels: ["Complete", "Incomplete", "Overdue"],
    //   datasets: [
    //     {
    //       data: [0, 0, 0],
    //       backgroundColor: ["#38E54D", "#FFDE00", "#D2001A"],
    //       hoverOffset: 4,
    //     },
    //   ],
    // });

    // const doughnutChartData = reactive({
    //   labels: ["Complete", "Incomplete", "Overdue"],
    //   datasets: [
    //     {
    //       data: [0, 0, 0],
    //       backgroundColor: ["#38E54D", "#FFDE00", "#D2001A"],
    //       hoverOffset: 4,
    //     },
    //   ],
    // });

    // onBeforeMount(() => {
    //   fetchAllData();
    // });
    // const fetchAllData = () => {
    //   useStore.getItems({ all: true }).then((response) => {
    //     incomplete_tasks.value = 0;
    //     complete_tasks.value = 0;
    //     overdue.value = 0;

    //     response.data.map((single_data) => {
    //       if (single_data.status === "Incomplete") {
    //         incomplete_tasks.value++;
    //       }

    //       if (single_data.status === "Complete") {
    //         complete_tasks.value++;
    //       }

    //       if (single_data.status === "Overdue") {
    //         overdue.value++;
    //       }
    //     });

    //     barChartData.datasets[0].data = [];
    //     barChartData.datasets[0].data.push(complete_tasks.value);
    //     barChartData.datasets[0].data.push(incomplete_tasks.value);
    //     barChartData.datasets[0].data.push(overdue.value);

    //     doughnutChartData.datasets[0].data = [];
    //     doughnutChartData.datasets[0].data.push(complete_tasks.value);
    //     doughnutChartData.datasets[0].data.push(incomplete_tasks.value);
    //     doughnutChartData.datasets[0].data.push(overdue.value);
    //   });
    // };

    return {
      useStore,
      // onClickEdit,
      formData,
      // onClickDelete,
      // loading,
      // taskDetails,
      // onClickView,
      // barChartData,
      // doughnutChartData,
      // fetchAllData,
      // incomplete_tasks,
      // complete_tasks,
      // overdue,
    };
  },
};
</script>
