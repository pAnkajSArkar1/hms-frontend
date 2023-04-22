<template>
  <!-- QDATATABLE -->
  <q-page>
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Visit History"
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
            <q-td
              key="actions"
              align="right"
              v-if="bodyRow.row.status === 'Pending'"
            >
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
          <edit-visitor :useStore="useStore" v-bind:modal="true" />
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

export default {
  name: "RequestManagement",
  components: {
    EditVisitor,
  },

  setup(props) {
    const useStore = useVisitorStore();
    const showEditAppointment = computed(() => useStore.showEditAppointment);

    const $q = useQuasar();
    const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const loading = ref([]);

    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
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
      onClickDelete,
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
  width: 500px;
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
