<template>
  <h1 class="">Dashboard</h1>
  <div class="row flex justify-center q-col-gutter-md">
    <!-- Reports from -->
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        outlined
        dense
        readonly
        label="Incidents From"
        v-model="reportfrom"
        mask="date"
        :rules="[(val) => (val && val.length) || 'Please enter reportfrom']"
        :error-message="$getValidationErrors('reportfrom')"
        :error="$hasValidationErrors('reportfrom')"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="reportfrom">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <!-- Reports to -->
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        outlined
        dense
        readonly
        label="Incidents To"
        v-model="reportto"
        mask="date"
        :rules="[(val) => (val && val.length) || 'Please enter reportto']"
        :error-message="$getValidationErrors('reportto')"
        :error="$hasValidationErrors('reportto')"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="reportto">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <!-- submit Btn -->
    <div class="col-12 col-md-4 col-lg-4">
      <q-btn color="primary"> Submit </q-btn>
    </div>
    <div class="col-12 q-mt-md">
      <QDataTable :canAdd="false" :useStore="useStore" title="All Incidents" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useDashboardStore } from "stores/Customer/Incident/dashboard";

export default {
  name: "InspectionDashboard",
  components: {},
  setup() {
    const useStore = useDashboardStore();

    return {
      useStore,
      reportfrom: ref({ from: null, to: null }),
      reportto: ref(""),
    };
  },
};
</script>
