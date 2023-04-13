<template>
  <QEditForm :useStore="useStore" title="Edit Bed Group">
    <div>
      <QSearch
        label="Select Floor"
        v-model="formData.floor_id"
        :useStore="floorStore"
        optionValue="id"
        optionLabel="name"
        :error-message="$getValidationErrors('floor_id')"
        :error="$hasValidationErrors('floor_id')"
      />
    </div>
    <q-input
      dense
      outlined
      v-model="formData.name"
      label="Bed Group Name"
      :rules="[(val) => (val && val.length) || 'Please enter bed group']"
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
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useFloorStore } from "stores/Beds/floor";

export default {
  name: "EditHazard",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const floorStore = useFloorStore();
    return {
      floorStore,
      formData,
    };
  },
};
</script>
