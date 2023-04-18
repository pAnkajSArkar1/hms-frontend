<template>
  <div>
    <q-toolbar class="">
      <div class="text-h6">Blood Bank Management</div>
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="dashboard"
          label="Dashboard"
          no-caps
          to="/blood-admin"
        />
        <q-route-tab
          name="donors"
          label="Donors"
          no-caps
          to="/blood-admin/donors"
        />
        <q-route-tab
          name="receiver"
          label="Receivers"
          no-caps
          to="/blood-admin/receivers"
        />
        <q-route-tab
          name="donations"
          label="Donations"
          no-caps
          to="/blood-admin/donations"
        />
        <q-route-tab
          name="requests"
          label="Requests"
          no-caps
          to="/blood-admin/requests"
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
