<template>
  <QEditForm :useStore="useStore" title="Edit Activity">
    <q-input
      dense
      outlined
      v-model="formData.name"
      label="Activities"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "EditActivityPage",
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
