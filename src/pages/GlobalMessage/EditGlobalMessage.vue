<template>
  <QEditForm :useStore="useStore" title="Edit Global Message">
    <q-input
      outlined
      v-model="formData.subject"
      square
      dense
      label="Subject"
      :error-message="$getValidationErrors('subject')"
      :error="$hasValidationErrors('subject')"
    />
    <q-input
      v-model="formData.message"
      dense
      outlined
      square
      type="textarea"
      label="Message"
      :error-message="$getValidationErrors('message')"
      :error="$hasValidationErrors('message')"
    />
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "EditMessage",
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
