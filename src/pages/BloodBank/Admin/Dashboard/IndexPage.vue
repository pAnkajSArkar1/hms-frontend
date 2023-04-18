<template>
  <!-- CHARTS -->
  <!-- <div class="col-12 col-md-8 col-lg-8">
      <q-card class="card">
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
    <BloodAdmin />
    <div class="row q-col-gutter-md q-pa-md">
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              A+
            </div>
            <div
              class="text-weight-bold units q-pt-sm"
              v-if="aPositive.stock > 0"
            >
              Total: {{ aPositive.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              A-
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="aNegative.stock > 0"
            >
              Total: {{ aNegative.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              B+
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="bPositive.stock > 0"
            >
              Total: {{ bPositive.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              B-
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="bNegative.stock > 0"
            >
              Total: {{ bNegative.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              AB+
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="abPositive.stock > 0"
            >
              Total: {{ abPositive.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              AB-
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="abNegative.stock > 0"
            >
              Total: {{ abNegative.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              O+
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="oPositive.stock > 0"
            >
              Total: {{ oPositive.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              O-
            </div>

            <div
              class="text-weight-bold units q-pt-sm"
              v-if="oNegative.stock > 0"
            >
              Total: {{ oNegative.stock }} Units
            </div>
            <div class="text-weight-bold units q-pt-sm text-red-6" v-else>
              No Units Available
            </div>
          </q-card-section>
        </q-card>
      </div>
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
import { useBloodDashboardStore } from "stores/bloodbank/adminDashboard";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

// const EditBedList = defineAsyncComponent(() =>
//   import("../BedList/EditBedList.vue")
// );

export default {
  name: "BedStatus",
  components: {
    // EditBedList,
  },

  setup(props) {
    const useStore = useBloodDashboardStore();
    const $q = useQuasar();
    // const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    // const loading = ref([]);
    // const taskDetails = ref("");
    const aPositive = ref("");
    const aNegative = ref("");
    const bPositive = ref("");
    const bNegative = ref("");
    const abPositive = ref("");
    const abNegative = ref("");
    const oPositive = ref("");
    const oNegative = ref("");

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

    onBeforeMount(() => {
      fetchAPoistive();
    });
    const fetchAPoistive = () => {
      useStore.getItems({ all: true }).then((response) => {
        if (response.data.length > 0) {
          aPositive.value = response.data[0];
          aNegative.value = response.data[1];
          bPositive.value = response.data[2];
          bNegative.value = response.data[3];
          abPositive.value = response.data[4];
          abNegative.value = response.data[5];
          oPositive.value = response.data[6];
          oNegative.value = response.data[7];
        }
      });
    };

    return {
      useStore,
      formData,
      // onClickDelete,
      // loading,
      // taskDetails,
      // onClickView,
      // barChartData,
      // doughnutChartData,
      // fetchAllData,
      fetchAPoistive,
      aPositive,
      aNegative,
      bPositive,
      bNegative,
      abPositive,
      abNegative,
      oPositive,
      oNegative,
      // free_beds,
      // overdue,
    };
  },
};
</script>

<style scoped>
.blood-type {
  font-size: 30px;
}
.blood-available {
  font-size: 20px;
}
.units {
  font-size: 20px;
}
.card {
  height: 130px;
}
</style>
