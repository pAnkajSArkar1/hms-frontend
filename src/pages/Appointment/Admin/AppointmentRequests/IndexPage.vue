<template>
  <!-- QDATATABLE -->
  <q-page>
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Appointment Requests"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr v-if="bodyRow.row.status === 'Pending'">
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
            <q-td key="source">{{ bodyRow.row.source }} </q-td>
            <q-td key="priority">{{ bodyRow.row.priority }} </q-td>
            <q-td key="consultantant_type"
              >{{ bodyRow.row.consultantant_type }}
            </q-td>
            <q-td key="message">{{ bodyRow.row.message }} </q-td>
            <q-td key="slot">{{ bodyRow.row.slot }} </q-td>
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
            </q-td>
          </q-tr>
        </template>
      </QDataTable>
    </div>
    <!-- EDIT -->
    <q-dialog v-model="showEditAppointment">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-appointment :useStore="useStore" v-bind:modal="true" />
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
import { useAppointmentStore } from "src/stores/Appointment/makeAppointment";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const EditAppointment = defineAsyncComponent(() =>
  import("./EditAppointment.vue")
);

export default {
  name: "RequestManagement",
  components: {
    EditAppointment,
  },

  setup(props) {
    const useStore = useAppointmentStore();
    const showEditAppointment = computed(() => useStore.showEditAppointment);

    const $q = useQuasar();
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
    };

    // const onClickShow = () => {
    //   if (formData.value.status === "No Action") {
    //     showType.value = "show";
    //   }
    // };

    return {
      useStore,
      onClickEdit,
      formData,
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
