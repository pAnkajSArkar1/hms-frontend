<template>
  <QDataTable :setCreateModal="false" :useStore="useStore" title="Incident Report" />

  <!-- CREATE -->
  <q-dialog v-model="showCreateIncidentReport">
    <q-card class="" style="max-width: 1000px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <create-incidentreport :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>

  <!-- EDIT -->
  <q-dialog v-model="showEditIncidentReport">
    <q-card class="" style="max-width: 1000px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <edit-incidentreport :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useIncidentReportStore } from "stores/Customer/Incident/incidentsreports";

const CreateIncidentreport = defineAsyncComponent(() =>
  import("./CreateIncidentReport.vue")
);
const EditIncidentreport = defineAsyncComponent(() => import("./EditIncidentReport.vue"));

export default {
  name: "IncidentsReport",
  components: {
    CreateIncidentreport,
    EditIncidentreport,
  },
  setup() {
    const useStore = useIncidentReportStore();
    const showCreateIncidentReport = computed(() => useStore.showCreateIncidentReport);
    const showEditIncidentReport = computed(() => useStore.showEditIncidentReport);

    return {
      useStore,
      showCreateIncidentReport,
      showEditIncidentReport,
    };
  },
};
</script>

<style></style>
