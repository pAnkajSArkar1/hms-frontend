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
              Total: {{ useStore?.authUser.blood_requests }} Units
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
              {{ useStore?.authUser.total_requests }}
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
              {{ useStore?.authUser.request_pending }}
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
              {{ useStore?.authUser.request_accepted }}
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
              {{ useStore?.authUser.request_rejected }}
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
import { useReceiverDashboardStore } from "stores/bloodbank/receiverDashboard";
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
    const useStore = useReceiverDashboardStore();
    const showEditBedList = computed(() => useStore.showEditBedList);
    const $q = useQuasar();
    // const { deleteItem } = useStore;
    const { fetchAuthUser } = useStore;

    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    // const loading = ref([]);
    // const taskDetails = ref("");
    const aPositive = ref("");
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

    // onBeforeMount(() => {
    //   fetchDashboard();
    // });
    // const fetchDashboard = () => {
    //   useStore.getItems({ all: true }).then((response) => {
    //     if (response.data.length > 0) {
    //       aPositive.value = response.data;
    //     }
    //   });
    // };
    onMounted(() => {
      fetchAuthUser();
    });

    return {
      useStore,
      onClickEdit,
      // formData,
      showEditBedList,
      // onClickDelete,
      // loading,
      // taskDetails,
      // onClickView,
      // barChartData,
      // doughnutChartData,
      // fetchDashboard,
      aPositive,
      // overdue,
    };
  },
};
</script>

<style scoped>
.blood-type {
  font-size: 26px;
}
.units {
  font-size: 18px;
}
.card {
  height: 130px;
}
</style>
