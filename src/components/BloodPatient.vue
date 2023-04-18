<template>
  <div>
    <q-toolbar class="">
      <div class="text-h6">Receive Blood</div>
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="patientdashboard"
          label="Dashboard"
          no-caps
          to="/patient"
        />
        <q-route-tab
          name="requestblood"
          label="Request Blood"
          no-caps
          to="/patient/request-blood"
        />
        <q-route-tab
          name="requesthistory"
          label="Request History"
          no-caps
          to="/patient/request-history"
        />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref(""),
    };
  },
};
</script>
