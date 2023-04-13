<template>
  <QCreateForm :useStore="useStore" title="Add Bed Group">
    <div>
      <QSearch
        label="Select Floor"
        v-model="newData.floor_id"
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
      v-model="newData.name"
      label="Bed Group Name"
      :rules="[(val) => (val && val.length) || 'Please enter bed group']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
    <q-input
      dense
      outlined
      type="textarea"
      v-model="newData.description"
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
import { useFloorStore } from "stores/Beds/floor";

export default {
  name: "CreateHazard",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const floorStore = useFloorStore();
    return {
      floorStore,
      newData,
    };
  },
};
</script>
