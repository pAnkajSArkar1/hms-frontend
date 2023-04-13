<template>
  <q-page>
    <BedMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Floor" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateFloor">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-floor :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditFloor">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-floor :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useFloorStore } from "stores/Beds/floor";

const CreateFloor = defineAsyncComponent(() => import("./CreateFloor.vue"));
const EditFloor = defineAsyncComponent(() => import("./EditFloor.vue"));

export default {
  name: "FloorManagement",
  components: {
    CreateFloor,
    EditFloor,
  },

  setup() {
    const useStore = useFloorStore();
    const showCreateFloor = computed(() => useStore.showCreateFloor);
    const showEditFloor = computed(() => useStore.showEditFloor);

    return {
      useStore,
      showCreateFloor,
      showEditFloor,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
