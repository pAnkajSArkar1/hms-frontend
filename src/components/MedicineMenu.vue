<template>
  <div>
    <q-toolbar class="">
      <div class="text-h6">Medicine Management</div>
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="status"
          label="Medicine Status"
          no-caps
          to="/medicine-management"
        />
        <q-route-tab
          name="category"
          label="Category"
          no-caps
          to="/medicine-management/category"
        />
        <q-route-tab
          name="medicine"
          label="Medicine"
          no-caps
          to="/medicine-management/medicine"
        />
        <q-route-tab
          name="medicinesales"
          label="Medicine sales"
          no-caps
          to="/medicine-management/medicine-sales"
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
