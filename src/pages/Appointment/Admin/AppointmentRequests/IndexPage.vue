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
          <q-tr>
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
            <q-td key="actions" align="right">
              <q-btn
                flat
                round
                dense
                color="accent"
                icon="edit"
                v-if="bodyRow.row.status === 'Pending'"
                class="q-ml-sm"
                @click="onClickEdit(bodyRow.row)"
              >
                <q-tooltip> Edit </q-tooltip>
              </q-btn>
              <q-btn
                flat
                round
                dense
                color="secondary"
                icon="email"
                class="q-ml-sm"
                @click="onClickEmail(bodyRow.row)"
              >
                <q-tooltip> Email Report </q-tooltip>
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
    <!-- EDIT -->
    <q-dialog v-model="showEditAppointment">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-appointment :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>

    <!-- email report -->
    <q-dialog v-model="showEmailDialog">
      <q-card class="" style="width: 600px">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <email-report :useStore="useStore" v-bind:modal="true" />
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
const EmailReport = defineAsyncComponent(() => import("./EmailReport.vue"));

export default {
  name: "RequestManagement",
  components: {
    EditAppointment,
    EmailReport,
  },

  setup(props) {
    const useStore = useAppointmentStore();
    const showEditAppointment = computed(() => useStore.showEditAppointment);
    const showEmailDialog = computed(() => useStore.showEmailDialog);

    const $q = useQuasar();
    const { deleteItem } = useStore;
    const loading = ref([]);

    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
    };

    const onClickEmail = (row) => {
      useStore.emailReport.id = row.id;
      useStore.dialogs.emailReport = true;
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
      onClickEmail,
      showEmailDialog,
      onClickDelete,
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
