<template>
  <!-- QDATATABLE -->
  <q-page>
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        :useStore="useStore"
        :canAdd="false"
        title="Donor Requests"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr>
            <q-td key="created_at"
              >{{ $dateConvert.format(bodyRow.row.created_at) }}
            </q-td>
            <q-td key="subject">{{ bodyRow.row?.subject }} </q-td>
            <q-td key="message">{{ bodyRow.row?.message }} </q-td>

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
    <!-- <q-dialog v-model="showCreateDonation">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <create-donation :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog> -->

    <!-- EDIT -->
    <q-dialog v-model="showEditModal">
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
import { useGlobalStore } from "stores/globalMessage";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

// const CreateDonation = defineAsyncComponent(() =>
//   import("./CreateDonation.vue")
// );
const EditDonation = defineAsyncComponent(() =>
  import("./EditGlobalMessage.vue")
);

export default {
  name: "DonationManagement",
  components: {
    // CreateDonation,
    EditDonation,
  },

  setup(props) {
    const useStore = useGlobalStore();
    const { deleteItem } = useStore;

    // const showCreateDonation = computed(() => useStore.showCreateDonation);

    const showEditModal = computed(() => useStore.showEditModal);
    const $q = useQuasar();
    // const { deleteItem } = useStore;
    const { formData, dialogs } = storeToRefs(useStore);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const loading = ref([]);
    const router = useRouter();

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

    return {
      useStore,
      onClickEdit,
      formData,
      loading,
      showEditModal,
      onClickDelete,
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
