<template>
  <!-- QDATATABLE -->
  <q-page>
    <BloodPatient />

    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Receiver Requests"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr>
            <q-td key="donationid">{{ bodyRow.row?.id }} </q-td>
            <q-td key="donorname"
              >{{ bodyRow.row?.blood_request_person_details?.name }}
            </q-td>
            <q-td key="donorno"
              >{{ bodyRow.row?.blood_request_person_details?.primary_contact }}
            </q-td>
            <q-td key="bloodgroup">{{ bodyRow.row.blood_group }} </q-td>
            <q-td key="unitsinml">{{ bodyRow.row.units_in_ml }} </q-td>
            <q-td key="disease">{{ bodyRow.row.reason }} </q-td>
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
            <q-td
              key="actions"
              align="right"
              v-if="bodyRow.row.status === 'No action'"
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
    <!-- CREATE -->
    <q-dialog v-model="showCreateRequest">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <create-request :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>

    <!-- EDIT -->
    <q-dialog v-model="showEditRequest">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-request :useStore="useStore" v-bind:modal="true" />
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
import { useRequestStore } from "src/stores/bloodbank/request";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const CreateRequest = defineAsyncComponent(() => import("./CreateRequest.vue"));
const EditRequest = defineAsyncComponent(() => import("./EditRequest.vue"));

export default {
  name: "RequestManagement",
  components: {
    CreateRequest,
    EditRequest,
  },

  setup(props) {
    const useStore = useRequestStore();
    const showCreateRequest = computed(() => useStore.showCreateRequest);
    const showEditRequest = computed(() => useStore.showEditRequest);

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
      showCreateRequest,
      showEditRequest,
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
