<template>
  <QCreateForm :useStore="useStore" title="Add Activity">
    <q-input
      dense
      outlined
      v-model="newData.name"
      placeholder="Activities"
      lazy-rules
      hint
      :rules="[(val) => (val && val.length) || 'Please enter activity']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "CreateActivity",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);

    return {
      newData,
    };
  },
};
</script>
