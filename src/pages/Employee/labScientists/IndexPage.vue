<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="All Lab Technician" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateLabScientists">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-lab-scientists :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditLabScientists">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-lab-scientists :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useLabScientistStore } from "stores/employee/labScientist";

const CreateLabScientists = defineAsyncComponent(() =>
  import("./CreateLabScientists.vue")
);
const EditLabScientists = defineAsyncComponent(() =>
  import("./EditLabScientists.vue")
);

export default {
  name: "ManageLabScientists",
  components: {
    CreateLabScientists,
    EditLabScientists,
  },

  setup() {
    const useStore = useLabScientistStore();
    const showCreateLabScientists = computed(
      () => useStore.showCreateLabScientists
    );
    const showEditLabScientists = computed(
      () => useStore.showEditLabScientists
    );

    return {
      useStore,
      showCreateLabScientists,
      showEditLabScientists,
    };
  },
};
</script>
