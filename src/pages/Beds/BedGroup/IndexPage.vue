<template>
  <q-page>
    <BedMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Bed Group" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateBedGroup">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-bed-group :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditBedGroup">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-bed-group :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useBedGroupStore } from "stores/Beds/bedGroup";

const CreateBedGroup = defineAsyncComponent(() =>
  import("./CreateBedGroup.vue")
);
const EditBedGroup = defineAsyncComponent(() => import("./EditBedGroup.vue"));

export default {
  name: "BedGroupManagement",
  components: {
    CreateBedGroup,
    EditBedGroup,
  },

  setup() {
    const useStore = useBedGroupStore();
    const showCreateBedGroup = computed(() => useStore.showCreateBedGroup);
    const showEditBedGroup = computed(() => useStore.showEditBedGroup);

    return {
      useStore,
      showCreateBedGroup,
      showEditBedGroup,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
