<template>
  <q-page>
    <PpeMenu />
    <div class="q-pa-md">
      <QDataTable
        :canEdit="false"
        :useStore="useStore"
        title="All PPE Equipments"
      />

      <!-- CREATE -->
      <q-dialog v-model="showCreateEquipment">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-equipment :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { usePpeEquipmentStore } from "stores/Customer/PpeInspection/ppeEquipment";

const PpeMenu = defineAsyncComponent(() =>
  import("src/pages/Customer/PpeInspection/components/PpeMenu.vue")
);
const createEquipment = defineAsyncComponent(() =>
  import("./CreateEquipment.vue")
);

export default {
  name: "PpeEquipment",
  components: {
    createEquipment,
    PpeMenu,
  },

  setup() {
    const useStore = usePpeEquipmentStore();
    const showCreateEquipment = computed(() => useStore.showCreateEquipment);

    return {
      useStore,
      showCreateEquipment,
    };
  },
};
</script>
