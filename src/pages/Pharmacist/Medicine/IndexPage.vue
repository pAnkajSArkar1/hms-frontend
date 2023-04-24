<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Medicine" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateMedicines">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-medicine :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditMedicines">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-medicine :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useMedicineStore } from "stores/MedicineManage/medicine";

const CreateMedicine = defineAsyncComponent(() =>
  import("./CreateMedicine.vue")
);
const EditMedicine = defineAsyncComponent(() => import("./EditMedicine.vue"));

export default {
  name: "MedicineManagement",
  components: {
    CreateMedicine,
    EditMedicine,
  },

  setup() {
    const useStore = useMedicineStore();
    const showCreateMedicines = computed(() => useStore.showCreateMedicines);
    const showEditMedicines = computed(() => useStore.showEditMedicines);

    return {
      useStore,
      showCreateMedicines,
      showEditMedicines,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 500px;
}
</style>
