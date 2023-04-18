<template>
  <!-- QDATATABLE -->
  <q-page>
    <div class="row q-col-gutter-md q-pa-md">
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              Blood Requested
            </div>
            <div class="text-weight-bold units q-pt-sm">
              Total: {{ free_beds }} Units
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              Total Requests
            </div>
            <div class="text-weight-bold units q-pt-sm">
              Total: {{ free_beds }} Units
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              Requests Pending
            </div>
            <div class="text-weight-bold units q-pt-sm">
              Total: {{ free_beds }} Units
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              Requests Accepted
            </div>
            <div class="text-weight-bold units q-pt-sm">
              Total: {{ free_beds }} Units
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-card class="card">
          <q-card-section>
            <div class="text-weight-bold q-pb-none text-primary blood-type">
              Requests Rejected
            </div>
            <div class="text-weight-bold units q-pt-sm">
              Total: {{ free_beds }} Units
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
import { useBedListStore } from "stores/Beds/bedList";
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

<style scoped>
.blood-type {
  font-size: 30px;
}
.blood-available {
  font-size: 20px;
}
.units {
  font-size: 15px;
}

.card {
  height: 140px;
}
</style>
