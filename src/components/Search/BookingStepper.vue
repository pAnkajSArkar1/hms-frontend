<template>
  <q-stepper
    v-model="step"
    ref="stepper"
    flat
    :done-color="$q.platform.is.desktop ? 'white' : 'blue-grey-9'"
    :active-color="$q.platform.is.desktop ? 'blue-grey-3' : 'primary'"
    :inactive-color="$q.platform.is.desktop ? 'white' : 'blue-grey-9'"
    :dark="$q.platform.is.desktop"
  >
    <q-step :name="1" prefix="1" title="Coustomer information"> </q-step>

    <q-step :name="2" prefix="2" title="Payment information"> </q-step>

    <q-step :name="3" prefix="3" title="Booking is comfirmed!"> </q-step>
  </q-stepper>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

export default {
  name: "PropertyPage",
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  setup() {
    return {
      step: ref(1),
    };
  },
};
</script>

<style scope>
.q-stepper__header--standard-labels .q-stepper__tab {
  min-height: auto !important;
}
.q-stepper {
  background: transparent;
}
.q-stepper__step-inner {
  display: none !important;
}
</style>
