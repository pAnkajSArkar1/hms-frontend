<template>
  <q-page class="container">
    <h2 class="text-weight-bold q-ma-none">Setting</h2>
    <q-separator />
    <div class="q-pt-md">
      <q-checkbox
        v-model="right"
        label="Enable email notification for overdue task"
      />
    </div>

    <div class="q-py-md">
      <p class="q-ma-none">Interval:</p>
      <q-select outlined dense v-model="model" :options="options" />
      <div class="q-pt-md">
        <q-btn color="primary" label="Save" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      right: ref(false),
      model: ref(null),
      options: [
        "Daily Once",
        "Daily Twice",
        "Every Six Hour",
        "Every Two Hour",
        "Hourly",
      ],
    };
  },
};
</script>
