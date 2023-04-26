<template>
  <div>
    <q-toolbar class="">
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="patientdashboard"
          label="Visit"
          no-caps
          to="/visit"
        />
        <q-route-tab
          name="requestblood"
          label="Visit History"
          no-caps
          to="/visit/visit-history"
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
