<template>
  <q-page>
    <div class="container q-pb-none">
      <h1 class="text-weight-bold q-mt-none">
        INCIDENT MANAGEMENT - SAFETTRANS
      </h1>
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        active-color="primary"
      >
        <q-tab name="DashBoard" label="Dashboard" />
        <q-tab name="incidentsreport" label="Incident Report" />
        <q-tab name="branches" label="Branches" />
        <q-tab name="incidents" label="Incidents" />
      </q-tabs>
    </div>
    <div class="q-gutter-y-sm q-pt-none">
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="scale"
        transition-next="scale"
      >
        <q-tab-panel name="DashBoard">
          <incidentDashboard />
        </q-tab-panel>

        <q-tab-panel name="incidentsreport">
          <incidentReport />
        </q-tab-panel>

        <q-tab-panel name="branches">
          <branches />
        </q-tab-panel>

        <q-tab-panel name="incidents">
          <incidents />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import incidentDashboard from "./DashBoard/IndexPage.vue";
import incidentReport from "./IncidentReport/IndexPage.vue";
import incidents from "./Incidents/IndexPage.vue";
export default {
  components: {
    incidentDashboard,
    incidentReport,
    incidents,
  },
  setup() {
    return {
      tab: ref("DashBoard"),
    };
  },
};
</script>
