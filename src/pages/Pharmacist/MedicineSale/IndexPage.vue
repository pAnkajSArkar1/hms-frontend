<template>
  <q-page>
    <!-- QDATATABLE -->
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Medicine Sales"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr>
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
                v-if="bodyRow.row.status === 'No action'"
                @click="onClickEdit(bodyRow.row)"
              >
                <q-tooltip> Edit </q-tooltip>
              </q-btn>
              <q-btn
                flat
                round
                dense
                v-if="bodyRow.row.status === 'No action'"
                color="negative"
                icon="clear"
                @click="onClickDelete(bodyRow.row)"
              >
                <q-tooltip> Delete </q-tooltip>
              </q-btn>
              <q-btn
                flat
                round
                dense
                color="secondary"
                v-if="bodyRow.row.status === 'Approved'"
                icon="file_download"
                class="q-ml-sm"
                @click="onClickDownload(bodyRow.row)"
              >
                <q-tooltip> Download </q-tooltip>
              </q-btn>
            </q-td>
          </q-tr>
        </template>
      </QDataTable>
    </div>

    <!-- CREATE -->
    <q-dialog v-model="showCreateMedicineSales">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <create-sales :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>

    <!-- EDIT -->
    <q-dialog v-model="showEditMedicineSales">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-sales :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent, getCurrentInstance, ref } from "vue";
import { useMedicineSalesStore } from "stores/MedicineManage/medicineSales";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

const CreateSales = defineAsyncComponent(() => import("./CreateSales.vue"));
const EditSales = defineAsyncComponent(() => import("./EditSales.vue"));

export default {
  name: "BedListManagement",
  components: {
    CreateSales,
    EditSales,
  },

  setup() {
    const useStore = useMedicineSalesStore();
    const { deleteItem, generateReportDownloadURL } = useStore;
    const $q = useQuasar();
    // const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const loading = ref([]);
    const router = useRouter();

    const showCreateMedicineSales = computed(
      () => useStore.showCreateMedicineSales
    );
    const showEditMedicineSales = computed(
      () => useStore.showEditMedicineSales
    );

    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
    };

    const onClickDownload = (row) => {
      generateReportDownloadURL({ id: row.id }).then((response) => {
        window.open(response.tempUrl);
      });
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

    return {
      useStore,
      showCreateMedicineSales,
      showEditMedicineSales,
      onClickDownload,
      onClickEdit,
      onClickDelete,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
