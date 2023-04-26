<template>
  <div>
    <q-toolbar class="">
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="donordashboard"
          label="Dashboard"
          no-caps
          to="/donor"
        />
        <q-route-tab
          name="donate"
          label="Donate Blood"
          no-caps
          to="/donor/blood-donate"
        />
        <q-route-tab
          name="doantehistory"
          label="Donate History"
          no-caps
          to="/donor/donation-history"
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
