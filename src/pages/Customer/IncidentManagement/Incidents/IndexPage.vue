<template>
  <QDataTable :setCreateModal="false" :useStore="useStore" title="All Incidents" />

  <!-- CREATE -->
  <q-dialog v-model="showCreateIncident">
    <q-card class="" style="width: 500px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <create-incident :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>

  <!-- EDIT -->
  <q-dialog v-model="showEditIncident">
    <q-card class="" style="width: 500px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <edit-incident :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineAsyncComponent, ref } from "vue";
import { useIncidentStore } from "stores/Customer/Incident/incidents";

const CreateIncident = defineAsyncComponent(() => import("./CreateIncidents.vue"));
const EditIncident = defineAsyncComponent(() => import("./EditIncidents.vue"));

export default {
  name: "AllIncident",
  components: {
    CreateIncident,
    EditIncident,
  },
  setup() {
    const useStore = useIncidentStore();
    const showCreateIncident = computed(() => useStore.showCreateIncident);
    const showEditIncident = computed(() => useStore.showEditIncident);

    return {
      useStore,
      showCreateIncident,
      showEditIncident,
    };
  },
};
</script>
