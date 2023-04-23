<template>
  <q-page
    class="admin-bg"
    :class="$q.platform.is.mobile ? 'q-px-md' : 'admin-container'"
  >
    <div :class="$q.platform.is.mobile ? 'q-py-md' : 'q-py-md'">
      <section>
        <q-card flat bordered rounded>
          <q-card-section class="row justify-between">
            <div class="col-12 col-sm-auto col-md-auto col-lg-auto column">
              <h1 class="main-heading">
                Welcome {{ authStore.authUser.name }} to your dashboard!
              </h1>
              <div class="q-pt-sm">
                Find out all the details about your hospital and analyze it
                without any complexity.
              </div>
            </div>
            <div
              class="col-12 col-sm-auto col-md-auto col-lg-auto flex justify-center"
            >
              <q-img
                src="~assets\images\hotel\dashboard.svg"
                spinner-color="white"
                style="width: 150px"
              />
            </div>
          </q-card-section>
        </q-card>
      </section>
      <section class="row q-col-gutter-md q-pt-md">
        <div class="col-12 col-md-4 col-lg-4">
          <q-card flat bordered rounded>
            <q-card-section class="q-pb-none text-weight-bold blood-type">
              Number Of Free Beds
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
        <div class="col-12 col-md-4 col-lg-4">
          <q-card flat bordered rounded>
            <q-card-section class="q-pb-none text-weight-bold blood-type">
              Number Of Occupied Beds
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
              >No Beds Occupied
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-card flat bordered rounded>
            <q-card-section class="q-pb-none text-weight-bold blood-type">
              Total Number Of Beds
            </q-card-section>
            <q-card-section
              class="blood-available text-weight-bold text-blue-9"
            >
              {{ tot_beds }}
            </q-card-section>
          </q-card>
        </div>
      </section>
      <section class="q-pt-md">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-card flat bordered rounded>
              <q-card-section class="flex flex-center">
                <BarChart
                  style="max-width: 310px !important"
                  chatTitle="Blood Availability"
                  :chartData="bloodData"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-card flat bordered rounded>
              <q-card-section class="flex flex-center">
                <BarChart
                  style="max-width: 310px !important"
                  chatTitle="Appointment"
                  :chartData="appointmentData"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-card flat bordered rounded>
              <q-card-section class="flex flex-center">
                <BarChart
                  style="max-width: 310px !important"
                  chatTitle="Visitor"
                  :chartData="visitorData"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
    </div>
  </q-page>
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
import { useBedListStore } from "stores/Beds/bedList";
import { useBloodDashboardStore } from "stores/bloodbank/adminDashboard";
import { useAppointmentStore } from "stores/Appointment/makeAppointment/index";
import { useVisitorStore } from "src/stores/Visitor";
import { useAuthStore } from "stores/auth";

export default {
  name: "BedStatus",
  components: {},

  setup(props) {
    const useStore = useBedListStore();
    const authStore = useAuthStore();
    const { fetchAuthUser } = authStore;
    const useBloodStore = useBloodDashboardStore();
    const appointmentStore = useAppointmentStore();
    const visitorStore = useVisitorStore();

    const occupied_beds = ref(0);
    const free_beds = ref(0);
    const tot_beds = ref(0);
    const aPositive = ref("");
    const aNegative = ref("");
    const bPositive = ref("");
    const bNegative = ref("");
    const abPositive = ref("");
    const abNegative = ref("");
    const oPositive = ref("");
    const oNegative = ref("");
    const pending = ref("");
    const approved = ref("");
    const rejected = ref("");
    const pendingvisits = ref("");
    const approvedvisits = ref("");
    const rejectedvisits = ref("");

    onBeforeMount(() => {
      fetchBedData();
      fetchBloodData();
      fetchAppointmentData();
      fetchVisitorData();
      fetchAuthUser();
    });

    const fetchBedData = () => {
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
          tot_beds.value = occupied_beds.value + free_beds.value;
        });
      });
    };

    const fetchAppointmentData = () => {
      appointmentStore.getItems({ all: true }).then((response) => {
        pending.value = 0;
        approved.value = 0;
        rejected.value = 0;

        response.data.map((single_data) => {
          if (single_data.status === "Pending") {
            pending.value++;
          }

          if (single_data.status === "Approved") {
            approved.value++;
          }

          if (single_data.status === "Rejected") {
            rejected.value++;
          }
        });
        appointmentData.datasets[0].data = [];
        appointmentData.datasets[0].data.push(pending.value);
        appointmentData.datasets[0].data.push(approved.value);
        appointmentData.datasets[0].data.push(rejected.value);
      });
    };

    const fetchVisitorData = () => {
      visitorStore.getItems({ all: true }).then((response) => {
        pendingvisits.value = 0;
        approvedvisits.value = 0;
        rejectedvisits.value = 0;

        response.data.map((single_data) => {
          if (single_data.status === "Pending") {
            pendingvisits.value++;
          }

          if (single_data.status === "Approved") {
            approvedvisits.value++;
          }

          if (single_data.status === "Rejected") {
            rejectedvisits.value++;
          }
        });
        visitorData.datasets[0].data = [];
        visitorData.datasets[0].data.push(pendingvisits.value);
        visitorData.datasets[0].data.push(approvedvisits.value);
        visitorData.datasets[0].data.push(rejectedvisits.value);
      });
    };

    const fetchBloodData = () => {
      useBloodStore.getItems({ all: true }).then((response) => {
        aPositive.value = 0;
        aNegative.value = 0;
        bPositive.value = 0;
        bNegative.value = 0;
        abPositive.value = 0;
        abNegative.value = 0;
        oPositive.value = 0;
        oNegative.value = 0;

        response.data.map((single_data) => {
          if (single_data.blood_group === "A+") {
            aPositive.value = single_data.stock;
          }
          if (single_data.blood_group === "A-") {
            aNegative.value = single_data.stock;
          }
          if (single_data.blood_group === "B+") {
            bPositive.value = single_data.stock;
          }
          if (single_data.blood_group === "B-") {
            bNegative.value = single_data.stock;
          }
          if (single_data.blood_group === "AB+") {
            abPositive.value = single_data.stock;
          }
          if (single_data.blood_group === "AB-") {
            abNegative.value = single_data.stock;
          }
          if (single_data.blood_group === "O+") {
            oPositive.value = single_data.stock;
          }
          if (single_data.blood_group === "O-") {
            oNegative.value = single_data.stock;
          }
        });

        bloodData.datasets[0].data = [];
        bloodData.datasets[0].data.push(aPositive.value);
        bloodData.datasets[0].data.push(aNegative.value);
        bloodData.datasets[0].data.push(bPositive.value);
        bloodData.datasets[0].data.push(bNegative.value);
        bloodData.datasets[0].data.push(abPositive.value);
        bloodData.datasets[0].data.push(abNegative.value);
        bloodData.datasets[0].data.push(oPositive.value);
        bloodData.datasets[0].data.push(oNegative.value);
      });
    };

    const bloodData = reactive({
      labels: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#36a2eb",
            "#4bc0c0",
            "#ff9f40",
            "#9966ff",
            "#ffcd56",
          ],
          hoverOffset: 4,
        },
      ],
    });

    const appointmentData = reactive({
      labels: ["Pending", "Approved", "Rejected"],
      datasets: [
        {
          data: [],
          backgroundColor: ["#fb8c00", "#5EDE2B", "#f44336"],
          hoverOffset: 4,
        },
      ],
    });

    const visitorData = reactive({
      labels: ["Pending", "Approved", "Rejected"],
      datasets: [
        {
          data: [],
          backgroundColor: ["#fb8c00", "#5EDE2B", "#f44336"],
          hoverOffset: 4,
        },
      ],
    });

    return {
      useStore,
      authStore,
      visitorStore,
      bloodData,
      appointmentData,
      visitorData,
      useBloodStore,
      appointmentStore,
      fetchAppointmentData,
      fetchVisitorData,
      fetchBedData,
      fetchBloodData,
      occupied_beds,
      free_beds,
      tot_beds,
      pending,
      approved,
      rejected,
      pendingvisits,
      approvedvisits,
      rejectedvisits,
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.main-heading {
  font-size: 21px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}

.form-heading {
  font-size: 18px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}

.comments-container {
  margin: 0 auto;
  padding: 0 38px;
}
.tags {
  font-size: 21px;
  font-weight: 600;
  font-family: inherit;
}
.active-value {
  font-size: 40px;
}
.inactive-value {
  font-size: 20px;
}
.card-width {
  width: 300px;
}
.blood-type {
  font-size: 21px;
  color: #146c2e;
}
.blood-available {
  font-size: 17px;
}
</style>
