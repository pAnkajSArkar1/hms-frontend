<template>
  <q-page>
    <BedMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Bed List" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateBedList">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-bed-list :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditBedList">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-bed-list :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useBedListStore } from "stores/Beds/bedList";

const CreateBedList = defineAsyncComponent(() => import("./CreateBedList.vue"));
const EditBedList = defineAsyncComponent(() => import("./EditBedList.vue"));

export default {
  name: "BedListManagement",
  components: {
    CreateBedList,
    EditBedList,
  },

  setup() {
    const useStore = useBedListStore();
    const showCreateBedList = computed(() => useStore.showCreateBedList);
    const showEditBedList = computed(() => useStore.showEditBedList);

    return {
      useStore,
      showCreateBedList,
      showEditBedList,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
