<template>
  <!-- QDATATABLE -->
  <q-page>
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Manage Visitors"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr>
            <!-- <q-td key="appointmentid">{{ bodyRow.row?.id }} </q-td> -->
            <q-td key="visitorname">{{ bodyRow.row?.name }} </q-td>
            <q-td key="email">{{ bodyRow.row?.email }} </q-td>
            <q-td key="phone">{{ bodyRow.row?.phone }} </q-td>
            <q-td key="address">
              <div class="row justify-center">
                <div style="width: 100px" class="custom-ellipsis">
                  {{ bodyRow.row?.address }}
                  <q-tooltip>
                    {{ bodyRow.row?.address }}
                  </q-tooltip>
                </div>
              </div>
            </q-td>
            <q-td key="purpose_of_visiting"
              >{{ bodyRow.row.purpose_of_visiting }}
            </q-td>
            <q-td key="date_of_visiting"
              >{{ bodyRow.row.date_of_visiting }}
            </q-td>
            <q-td key="from_time"
              >{{ bodyRow.row.from_time + " - " + bodyRow.row.to_time }}
            </q-td>
            <q-td key="aadhar_no">{{ bodyRow.row.aadhar_no }} </q-td>
            <q-td key="vaccination_status"
              >{{ bodyRow.row.vaccination_status }}
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
            </q-td>
          </q-tr>
        </template>
      </QDataTable>
    </div>
    <!-- EDIT -->
    <q-dialog v-model="showEditAppointment">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-visitor :useStore="useStore" v-bind:modal="true" />
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
import { useVisitorStore } from "src/stores/Visitor";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const EditVisitor = defineAsyncComponent(() => import("./EditVisitor.vue"));
const EmailReport = defineAsyncComponent(() => import("./EmailReport.vue"));

export default {
  name: "RequestManagement",
  components: {
    EditVisitor,
    EmailReport,
  },

  setup(props) {
    const useStore = useVisitorStore();
    const showEditAppointment = computed(() => useStore.showEditAppointment);
    const showEmailDialog = computed(() => useStore.showEmailDialog);

    const $q = useQuasar();
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
.custom-ellipsis {
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  overflow: hidden !important;
}
</style>
