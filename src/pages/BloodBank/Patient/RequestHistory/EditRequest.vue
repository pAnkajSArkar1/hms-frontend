<template>
  <QEditForm :useStore="useStore" title="Edit Donation">
    <q-select
      :options="bloodList"
      map-options
      emit-value
      v-model="formData.blood_group"
      option-label="label"
      option-value="value"
      type="blood"
      outlined
      dense
      square
      label="Blood Group"
      :error-message="$getValidationErrors('blood_group')"
      :error="$hasValidationErrors('blood_group')"
    />
    <q-input
      dense
      v-on:keypress="NumbersOnly"
      outlined
      v-model="formData.units_in_ml"
      square
      placeholder="Example: 10"
      :error-message="$getValidationErrors('primary_contact')"
      :error="$hasValidationErrors('primary_contact')"
    />
    <q-input
      v-model="formData.reason"
      dense
      outlined
      square
      type="textarea"
      label="Disease"
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
      bloodList: [
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "AB+", value: "AB+" },
        { label: "AB-", value: "AB-" },
      ],
    };
  },
};
</script>
