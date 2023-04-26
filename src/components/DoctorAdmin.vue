<template>
  <div>
    <q-toolbar class="">
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="donordashboard"
          label="Manage Doctors"
          no-caps
          to="/doctor"
        />
        <q-route-tab
          name="donate"
          label="Speciality"
          no-caps
          to="/doctor/speciality"
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
