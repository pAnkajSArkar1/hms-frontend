<template>
  <QCreateForm :useStore="useStore" title="Add Category">
    <q-input
      dense
      outlined
      v-model="formData.name"
      label="Category Name"
      :rules="[(val) => (val && val.length) || 'Please category name']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
    <q-input
      dense
      outlined
      type="textarea"
      v-model="formData.description"
      label="Description"
      :rules="[(val) => (val && val.length) || 'Please enter description']"
      :error-message="$getValidationErrors('description')"
      :error="$hasValidationErrors('description')"
    />
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "CreateHazard",
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
