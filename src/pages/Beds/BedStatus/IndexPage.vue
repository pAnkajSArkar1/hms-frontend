<template>
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
    <div class="row q-pa-md">
      <div
        :class="
          $q.platform.is.desktop
            ? 'row q-col-gutter-md col-8'
            : 'row q-col-gutter-md col-12'
        "
      >
        <div class="col-12 col-md-6 col-lg-6">
          <q-card>
            <q-card-section class="text-weight-bold q-pb-none">
              Free Beds
            </q-card-section>
            <q-card-section class="text-weight-bold">
              {{ free_beds }}
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-card>
            <q-card-section class="text-weight-bold q-pb-none">
              Occupied Beds
            </q-card-section>
            <q-card-section class="text-weight-bold">
              {{ occupied_beds }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
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
              <!-- <q-btn
                flat
                round
                dense
                color="negative"
                icon="clear"
                @click="onClickDelete(bodyRow.row)"
              >
                <q-tooltip> Delete </q-tooltip>
              </q-btn> -->
            </q-td>
          </q-tr>
        </template>
      </QDataTable>
    </div>
    <!-- EDIT -->
    <q-dialog v-model="showEditBedList">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-bed-list :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>
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
import { useBedListStore } from "stores/Beds/bedList";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const EditBedList = defineAsyncComponent(() =>
  import("../BedList/EditBedList.vue")
);

export default {
  name: "BedStatus",
  components: {
    EditBedList,
  },

  setup(props) {
    const useStore = useBedListStore();
    const showEditBedList = computed(() => useStore.showEditBedList);
    const $q = useQuasar();
    // const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    // const loading = ref([]);
    // const taskDetails = ref("");
    const occupied_beds = ref(0);
    const free_beds = ref(0);
    // const overdue = ref(0);

    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
    };

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

    onBeforeMount(() => {
      fetchAllData();
    });
    const fetchAllData = () => {
      useStore.getItems({ all: true }).then((response) => {
        occupied_beds.value = 0;
        free_beds.value = 0;

        response.data.map((single_data) => {
          if (single_data.status === "Occupied") {
            occupied_beds.value++;
          }

          if (single_data.status === "Free") {
            free_beds.value++;
          }

          // if (single_data.status === "Overdue") {
          //   overdue.value++;
          // }
        });

        // barChartData.datasets[0].data = [];
        // barChartData.datasets[0].data.push(free_beds.value);
        // barChartData.datasets[0].data.push(occupied_beds.value);
        // barChartData.datasets[0].data.push(overdue.value);

        // doughnutChartData.datasets[0].data = [];
        // doughnutChartData.datasets[0].data.push(free_beds.value);
        // doughnutChartData.datasets[0].data.push(occupied_beds.value);
        // doughnutChartData.datasets[0].data.push(overdue.value);
      });
    };

    return {
      useStore,
      onClickEdit,
      formData,
      showEditBedList,
      // onClickDelete,
      // loading,
      // taskDetails,
      // onClickView,
      // barChartData,
      // doughnutChartData,
      fetchAllData,
      occupied_beds,
      free_beds,
      // overdue,
    };
  },
};
</script>
