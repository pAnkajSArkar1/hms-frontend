<template>
  <!-- QDATATABLE -->
  <q-page>
    <BloodAdmin />
    <!-- <div class="row q-pa-md">
      <div
        :class="
          $q.platform.is.desktop
            ? 'row q-col-gutter-md col-8'
            : 'row q-col-gutter-md col-12'
        "
      >
        <div class="col-12 col-md-6 col-lg-6">
          <q-card>
            <q-card-section class="q-pb-none text-weight-bold blood-type">
              Free Beds
            </q-card-section>
            <q-card-section
              class="blood-available text-weight-bold text-blue-9"
              v-if="free_beds > 0"
            >
              {{ free_beds }}
            </q-card-section>
            <q-card-section
              class="blood-available text-weight-bold text-red-6"
              v-else
              >No Beds Available
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-card>
            <q-card-section class="q-pb-none text-weight-bold blood-type">
              Occupied Beds
            </q-card-section>
            <q-card-section
              class="blood-available text-weight-bold text-blue-9"
              v-if="occupied_beds > 0"
            >
              {{ occupied_beds }}
            </q-card-section>
            <q-card-section
              class="blood-available text-weight-bold text-red-6"
              v-else
              >No Occupied Beds
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div> -->
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Donor Requests"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr v-if="bodyRow.row.status === 'No action'">
            <q-td key="donationid">{{ bodyRow.row?.id }} </q-td>
            <q-td key="donorname">{{ bodyRow.row?.donor_details?.name }} </q-td>
            <q-td key="donorno"
              >{{ bodyRow.row?.donor_details?.primary_contact }}
            </q-td>
            <q-td key="bloodgroup">{{ bodyRow.row.blood_group }} </q-td>
            <q-td key="unitsinml">{{ bodyRow.row.units_in_ml }} </q-td>
            <q-td key="disease">{{ bodyRow.row.disease }} </q-td>
            <q-td key="status">
              <span v-if="bodyRow.row.status === 'Approved'">
                <q-chip color="green" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.status === 'Rejected'">
                <q-chip color="red" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
              <span v-if="bodyRow.row.status === 'No action'">
                <q-chip color="grey" class="text-white">
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
    <!-- CREATE -->
    <q-dialog v-model="showCreateDonation">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <create-donation :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>

    <!-- EDIT -->
    <q-dialog v-model="showEditDonation">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-donation :useStore="useStore" v-bind:modal="true" />
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
  watch,
  onMounted,
  reactive,
} from "vue";
import { useDonationStore } from "stores/bloodbank/donation";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const CreateDonation = defineAsyncComponent(() =>
  import("./CreateDonation.vue")
);
const EditDonation = defineAsyncComponent(() => import("./EditDonation.vue"));

export default {
  name: "DonationManagement",
  components: {
    CreateDonation,
    EditDonation,
  },

  setup(props) {
    const useStore = useDonationStore();
    const showCreateDonation = computed(() => useStore.showCreateDonation);
    const showEditDonation = computed(() => useStore.showEditDonation);

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

    // onBeforeMount(() => {
    //   fetchAllData();
    // });
    // const fetchAllData = () => {
    //   useStore
    //     .getItems({
    //       all: true,
    //     })
    //     .then((response) => {
    //       occupied_beds.value = 0;
    //       free_beds.value = 0;

    //       response.data.map((single_data) => {
    //         if (single_data.status === "Approved") {
    //           occupied_beds.value++;
    //         }

    //         if (single_data.status === "Rejected") {
    //           free_beds.value++;
    //         }

    //         // if (single_data.status === "Overdue") {
    //         //   overdue.value++;
    //         // }
    //         // watch(
    //         //   () => {
    //         //     fetchAllData();
    //         //   },
    //         //   (first, second) => {
    //         //     occupied_beds.value = null;
    //         //     free_beds.value = null;
    //         //   }
    //         // );
    //       });

    //       //     // barChartData.datasets[0].data = [];
    //       //     // barChartData.datasets[0].data.push(free_beds.value);
    //       //     // barChartData.datasets[0].data.push(occupied_beds.value);
    //       //     // barChartData.datasets[0].data.push(overdue.value);

    //       //     // doughnutChartData.datasets[0].data = [];
    //       //     // doughnutChartData.datasets[0].data.push(free_beds.value);
    //       //     // doughnutChartData.datasets[0].data.push(occupied_beds.value);
    //       //     // doughnutChartData.datasets[0].data.push(overdue.value);
    //     });
    // };

    return {
      useStore,
      onClickEdit,
      formData,
      showCreateDonation,
      showEditDonation,
      // onClickDelete,
      // loading,
      // taskDetails,
      // onClickView,
      // barChartData,
      // doughnutChartData,
      // fetchAllData,
      // occupied_beds,
      // free_beds,
      // overdue,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 300px;
}
.blood-type {
  font-size: 25px;
  color: #146c2e;
}
.blood-available {
  font-size: 18px;
}
.units {
  font-size: 15px;
}
</style>
