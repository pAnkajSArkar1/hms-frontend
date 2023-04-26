<template>
  <div>
    <q-toolbar class="">
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="patientdashboard"
          label="Appointment"
          no-caps
          to="/appointment"
        />
        <q-route-tab
          name="requestblood"
          label="Appointment History"
          no-caps
          to="/appointment/appointment-history"
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
