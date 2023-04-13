<template>
  <div>
    <q-toolbar class="">
      <div class="text-h6">Bed Management</div>
      <q-space />
      <q-tabs v-model="tab">
        <q-route-tab
          name="status"
          label="Bed Status"
          no-caps
          to="/bed-management"
        />
        <q-route-tab
          name="floor"
          label="Floor"
          no-caps
          to="/bed-management/floor"
        />
        <q-route-tab
          name="group"
          label="Bed Group"
          no-caps
          to="/bed-management/bed-group"
        />
        <q-route-tab
          name="type"
          label="Bed Type"
          no-caps
          to="/bed-management/bed-type"
        />
        <q-route-tab
          name="list"
          label="Bed List"
          no-caps
          to="/bed-management/bed-list"
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
