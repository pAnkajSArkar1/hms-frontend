<template>
  <q-list bordered separator>
    <q-item clickable v-ripple>
      <q-checkbox
        v-model="optOne"
        dense
        label="If you do not close the gas burner lead from the knob it will leak propane, butane, 
        propylene, butylene, and isobutane gas. Propane, butane, propylene, butylene, and isobutane gas is combustible gas."
      />
    </q-item>
    <q-item clickable v-ripple class="q-pb-sm">
      <q-checkbox
        v-model="optTwo"
        dense
        label="Propane, butane, propylene, butylene, and isobutane gas is combustible gas."
      />
    </q-item>
    <q-item clickable v-ripple class="q-pb-sm">
      <q-checkbox
        v-model="optThree"
        dense
        label="If you do not close the gas burner lead from the knob it will leak propane, butane, 
        propylene, butylene, and isobutane gas. If you do not close the gas burner lead from the knob it will leak propane, butane, 
        propylene, butylene, and isobutane gas. Propane, butane, propylene, butylene, and isobutane gas is combustible gas."
      />
    </q-item>
  </q-list>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      optOne: ref(false),
      optTwo: ref(false),
      optThree: ref(false),
      optfour: ref(false),
    };
  },
};
</script>
