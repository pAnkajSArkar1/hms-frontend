<template>
  <QCreateForm :useStore="useStore" title="New Equipment">
    <q-input
      dense
      outlined
      v-model="newData.name"
      placeholder="Equipment"
      lazy-rules
      hint
      :rules="[(val) => (val && val.length) || 'Please enter equipment']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "CreateEquipment",
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
