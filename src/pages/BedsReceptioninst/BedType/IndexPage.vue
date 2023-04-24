<template>
  <q-page>
    <BedMenuR />
    <div class="q-pa-md">
      <QDataTable
        :useStore="useStore"
        :canAdd="false"
        :canEdit="false"
        :canDelete="false"
        title="Bed Type"
      />

      <!-- CREATE -->
      <q-dialog v-model="showCreateBedType">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-bed-type :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditBedType">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-bed-type :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useBedTypeStore } from "stores/Beds/bedType";

const CreateBedType = defineAsyncComponent(() => import("./CreateBedType.vue"));
const EditBedType = defineAsyncComponent(() => import("./EditBedType.vue"));

export default {
  name: "BedTypeManagement",
  components: {
    CreateBedType,
    EditBedType,
  },

  setup() {
    const useStore = useBedTypeStore();
    const showCreateBedType = computed(() => useStore.showCreateBedType);
    const showEditBedType = computed(() => useStore.showEditBedType);

    return {
      useStore,
      showCreateBedType,
      showEditBedType,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
