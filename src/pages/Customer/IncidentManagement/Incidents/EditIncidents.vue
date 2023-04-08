<template>
  <QCreateForm :useStore="useStore" title="Add New Incident">
    <q-input
      outlined
      dense
      label="New Incident Name"
      v-model="formData.incidentname"
      :rules="[(val) => (val && val.length) || 'Please enter incident name']"
      :error-message="$getValidationErrors('incidentname')"
      :error="$hasValidationErrors('incidentname')"
    />
  </QCreateForm>
</template>

<script>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
export default {
  name: "EditIncident",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    return {
      formData,
    };
  },
};
</script>
