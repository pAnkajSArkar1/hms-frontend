<template>
  <QEditForm :useStore="useStore" title="Edit Visitor Request">
    <div class="col-12">
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
        label="Priority"
        :rules="[(val) => (val && val.length) || 'Please select a status']"
        :error-message="$getValidationErrors('status')"
        :error="$hasValidationErrors('status')"
      />
    </div>
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "EditAppointmentRequest",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);

    return {
      formData,
      statusList: [
        { label: "Approved", value: "Approved" },
        { label: "Rejected", value: "Rejected" },
      ],
    };
  },
};
</script>
