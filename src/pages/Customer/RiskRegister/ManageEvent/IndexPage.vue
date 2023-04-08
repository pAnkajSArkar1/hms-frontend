<template>
  <div class="row q-col-gutter-md">
    <!-- TASK COUNT -->
    <div class="col-12 col-md-4 col-lg-4 q-gutter-md">
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
    </div>

    <!-- CHARTS -->
    <div class="col-12 col-md-8 col-lg-8">
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
    </div>

    <!-- QDATATABLE -->
    <div class="col-12 col-sm-8 col-md-8">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        title="Task Management"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr>
            <q-td key="name">{{ bodyRow.row.name }} </q-td>
            <q-td key="priority">
              <span v-if="bodyRow.row.priority === 'Very High'">
                <q-chip color="negative" class="text-white">
                  {{ bodyRow.row.priority }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.priority === 'High'">
                <q-chip color="red-5" class="text-white">
                  {{ bodyRow.row.priority }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.priority === 'Medium'">
                <q-chip color="grey" class="text-white">
                  {{ bodyRow.row.priority }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.priority === 'Low'">
                <q-chip color="positive" class="text-white">
                  {{ bodyRow.row.priority }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.priority === 'Very Low'">
                <q-chip color="green-10" class="text-white">
                  {{ bodyRow.row.priority }}
                </q-chip>
              </span>
            </q-td>
            <q-td key="name">{{ bodyRow.row?.createdby?.name }} </q-td>
            <q-td key="name">{{ bodyRow.row?.assigned_to_user?.name }} </q-td>
            <q-td key="deadline">
              {{ $dateConvert.format(bodyRow.row.deadline) }}
            </q-td>
            <q-td key="status">
              <span v-if="bodyRow.row.status === 'Incomplete'">
                <q-chip color="yellow-7" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.status === 'Complete'">
                <q-chip color="green" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.status === 'Overdue'">
                <q-chip color="red" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
            </q-td>
            <q-td key="actions" align="right">
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
            </q-td>
          </q-tr>
        </template>
      </QDataTable>
    </div>
  </div>

  <!-- CREATE -->
  <q-dialog v-model="showCreatetaskManage">
    <q-card class="full-width">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <create-task-manage :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>

  <!-- EDIT -->
  <q-dialog v-model="showEdittaskManage">
    <q-card class="card-width">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <edit-task-manage :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>
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
import { useManageEvent } from "stores/Customer/RiskRegister/ManageEvent";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const CreateTaskManage = defineAsyncComponent(() =>
  import("./CreateTaskManage.vue")
);
const EditTaskManage = defineAsyncComponent(() =>
  import("./EditTaskManage.vue")
);

export default {
  name: "ManageEvents",
  components: {
    CreateTaskManage,
    EditTaskManage,
  },

  setup(props) {
    const useStore = useManageEvent();
    const $q = useQuasar();
    const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const showCreatetaskManage = computed(() => useStore.showCreatetaskManage);
    const showEdittaskManage = computed(() => useStore.showEdittaskManage);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const loading = ref([]);
    const taskDetails = ref("");
    const incomplete_tasks = ref(0);
    const complete_tasks = ref(0);
    const overdue = ref(0);

    const onClickView = (params) => {
      router.push({ name: props.viewRoute, params: { id: params.id } });
    };

    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
    };

    const onClickDelete = (param) => {
      $q.dialog({
        title: "Delete Confirmation",
        message: "Are you sure you want to Delete",
        ok: {
          label: "Delete",
          unelevated: true,
          color: "red-5",
        },
        cancel: {
          unelevated: true,
          color: "",
          textColor: "black",
        },
        persistent: true,
      }).onOk(() => {
        loading.value = true;
        deleteItem(param)
          .then((response) => {
            Qnotify({
              message: response.data.message,
              type: "positive",
            });
          })
          .catch((error) => {
            Qnotify({
              message: error.message,
              type: "negative",
            });
          })
          .finally(() => {
            loading.value = false;
          });
      });
    };

    const barChartData = reactive({
      labels: ["Complete", "Incomplete", "Overdue"],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: ["#38E54D", "#FFDE00", "#D2001A"],
          hoverOffset: 4,
        },
      ],
    });

    const doughnutChartData = reactive({
      labels: ["Complete", "Incomplete", "Overdue"],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: ["#38E54D", "#FFDE00", "#D2001A"],
          hoverOffset: 4,
        },
      ],
    });

    onBeforeMount(() => {
      fetchAllData();
    });
    const fetchAllData = () => {
      useStore.getItems({ all: true }).then((response) => {
        incomplete_tasks.value = 0;
        complete_tasks.value = 0;
        overdue.value = 0;

        response.data.map((single_data) => {
          if (single_data.status === "Incomplete") {
            incomplete_tasks.value++;
          }

          if (single_data.status === "Complete") {
            complete_tasks.value++;
          }

          if (single_data.status === "Overdue") {
            overdue.value++;
          }
        });

        barChartData.datasets[0].data = [];
        barChartData.datasets[0].data.push(complete_tasks.value);
        barChartData.datasets[0].data.push(incomplete_tasks.value);
        barChartData.datasets[0].data.push(overdue.value);

        doughnutChartData.datasets[0].data = [];
        doughnutChartData.datasets[0].data.push(complete_tasks.value);
        doughnutChartData.datasets[0].data.push(incomplete_tasks.value);
        doughnutChartData.datasets[0].data.push(overdue.value);
      });
    };

    return {
      useStore,
      showCreatetaskManage,
      showEdittaskManage,
      onClickEdit,
      formData,
      onClickDelete,
      loading,
      taskDetails,
      onClickView,
      barChartData,
      doughnutChartData,
      fetchAllData,
      incomplete_tasks,
      complete_tasks,
      overdue,
    };
  },
};
</script>
