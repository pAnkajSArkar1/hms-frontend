<template>
  <QEditForm :useStore="useStore" title="Edit Speciality">
    <q-input
      dense
      outlined
      v-model="formData.name"
      placeholder="Bed Type"
      lazy-rules
      hint
      :rules="[(val) => (val && val.length) || 'Please enter speciality']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "EditBedType",
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
