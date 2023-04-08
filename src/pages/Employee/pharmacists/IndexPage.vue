<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="All Pharmacist" />

      <!-- CREATE -->
      <q-dialog v-model="showCreatePharmacists">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-pharmacists :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditPharmacists">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-pharmacists :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { usePharmacistStore } from "stores/employee/pharmacists";

const CreatePharmacists = defineAsyncComponent(() =>
  import("./CreatePharmacists.vue")
);
const EditPharmacists = defineAsyncComponent(() =>
  import("./EditPharmacists.vue")
);

export default {
  name: "ManagePharmacists",
  components: {
    CreatePharmacists,
    EditPharmacists,
  },

  setup() {
    const useStore = usePharmacistStore();
    const showCreatePharmacists = computed(
      () => useStore.showCreatePharmacists
    );
    const showEditPharmacists = computed(() => useStore.showEditPharmacists);

    return {
      useStore,
      showCreatePharmacists,
      showEditPharmacists,
    };
  },
};
</script>
