<template>
  <QEditForm :useStore="useStore" title="Edit Floor">
    <q-input
      dense
      outlined
      v-model="formData.name"
      placeholder="Name"
      lazy-rules
      hint
      :rules="[(val) => (val && val.length) || 'Please enter name']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
    <q-input
      dense
      outlined
      v-on:keypress="NumbersOnly"
      v-model="formData.no_of_rooms"
      placeholder="Number of rooms"
      lazy-rules
      hint
      :rules="[(val) => (val && val.length) || 'Please enter number of rooms']"
      :error-message="$getValidationErrors('no_of_rooms')"
      :error="$hasValidationErrors('no_of_rooms')"
    />
    <q-input
      dense
      outlined
      type="textarea"
      v-model="formData.description"
      placeholder="Description"
      lazy-rules
      hint
      :rules="[(val) => (val && val.length) || 'Please enter description']"
      :error-message="$getValidationErrors('description')"
      :error="$hasValidationErrors('description')"
    />
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "EditFloor",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const NumbersOnly = (evt) => {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    return {
      formData,
      NumbersOnly,
    };
  },
};
</script>
