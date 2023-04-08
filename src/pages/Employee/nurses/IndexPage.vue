<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="All Nurses" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateNurses">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-nurses :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditNurses">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-nurses :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useNurseStore } from "stores/employee/nurses";

const CreateNurses = defineAsyncComponent(() => import("./CreateNurses.vue"));
const EditNurses = defineAsyncComponent(() => import("./EditNurses.vue"));

export default {
  name: "ManageDoctor",
  components: {
    CreateNurses,
    EditNurses,
  },

  setup() {
    const useStore = useNurseStore();
    const showCreateNurses = computed(() => useStore.showCreateNurses);
    const showEditNurses = computed(() => useStore.showEditNurses);

    return {
      useStore,
      showCreateNurses,
      showEditNurses,
    };
  },
};
</script>
