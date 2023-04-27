<template>
  <!-- QDATATABLE -->
  <q-page>
    <AppointmentMenu />
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        :canEdit="false"
        :canDelete="false"
        title="Appointments"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr
            v-if="
              bodyRow.row?.doctor_details?.name ===
              authUserStore?.authUser?.name
            "
          >
            <!-- <q-td key="appointmentid">{{ bodyRow.row?.id }} </q-td> -->
            <q-td key="patientname"
              >{{ bodyRow.row?.patient_details?.name }}
            </q-td>
            <q-td key="doctor">{{ bodyRow.row?.doctor_details?.name }} </q-td>
            <q-td key="appointmentdate"
              >{{ bodyRow.row?.appointment_date }}
            </q-td>
            <q-td key="donorno"
              >{{ bodyRow.row?.patient_details?.primary_contact }}
            </q-td>
            <q-td key="priority">{{ bodyRow.row.priority }} </q-td>
            <q-td key="consultantant_type"
              >{{ bodyRow.row.consultantant_type }}
            </q-td>
            <q-td key="message">{{ bodyRow.row.message }} </q-td>
            <q-td key="slot"
              >{{ bodyRow.row.from_time + " - " + bodyRow.row.to_time }}
            </q-td>
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
              <span v-if="bodyRow.row.status === 'Pending'">
                <q-chip color="grey" class="text-white">
                  {{ bodyRow.row.status }}
                </q-chip>
              </span>
            </q-td>
          </q-tr>
        </template>
      </QDataTable>
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
import { useAppointmentStore } from "src/stores/DoctorAppointment/makeAppointment";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth/index";

const CreateRequest = defineAsyncComponent(() => import("./CreateRequest.vue"));
const EditAppointment = defineAsyncComponent(() =>
  import("./EditAppointment.vue")
);

export default {
  name: "RequestManagement",
  components: {},

  setup(props) {
    const useStore = useAppointmentStore();
    const authUserStore = useAuthStore();
    const { fetchAuthUser } = authUserStore;
    onMounted(() => {
      fetchAuthUser();
    });
    const showCreateAppointment = computed(
      () => useStore.showCreateAppointment
    );
    const showEditAppointment = computed(() => useStore.showEditAppointment);

    const $q = useQuasar();
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const loading = ref([]);

    // const onClickShow = () => {
    //   if (formData.value.status === "No Action") {
    //     showType.value = "show";
    //   }
    // };

    return {
      useStore,
      authUserStore,
      formData,
      showCreateAppointment,
      showEditAppointment,
      // onClickDelete,
      // loading,
      // taskDetails,
      // onClickView,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
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
