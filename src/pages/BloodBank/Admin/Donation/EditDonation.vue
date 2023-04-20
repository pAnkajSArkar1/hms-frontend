<template>
  <QEditForm :useStore="useStore" title="Edit Donation Request">
    <q-select
      :options="statusList"
      map-options
      emit-value
      option-label="label"
      option-value="value"
      type="status"
      outlined
      v-model="formData.status"
      dense
      label="Status"
      :rules="[(val) => (val && val.length) || 'Please select status']"
      :error-message="$getValidationErrors('status')"
      :error="$hasValidationErrors('status')"
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
      statusList: [
        { label: "Approve", value: "Approved" },
        { label: "Reject", value: "Rejected" },
      ],
    };
  },
};
</script>
