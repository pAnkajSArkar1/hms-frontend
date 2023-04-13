<template>
  <QEditForm :useStore="useStore" :getItems="getItems" title="Edit Bed List">
    <QSearch
      label="Select Floor"
      v-model="formData.floor_id"
      :useStore="floorStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('floor_id')"
      :error="$hasValidationErrors('floor_id')"
    />

    <!-- <q-select
      dense
      v-model="formData.bed_group_id"
      outlined
      :options="bedGroupOptions"
      label="Select Bed Group"
      optionValue="id"
      optionLabel="name"
      emit-value
      map-options
      :error-message="$getValidationErrors('bed_group_id')"
      :error="$hasValidationErrors('bed_group_id')"
    /> -->
    <QSearch
      label="Select Bed Group"
      v-model="formData.bed_group_id"
      :useStore="bedGroupStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('bed_group_id')"
      :error="$hasValidationErrors('bed_group_id')"
    />

    <QSearch
      label="Select Bed Type"
      v-model="formData.bed_type_id"
      :useStore="bedTypeStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('bed_type_id')"
      :error="$hasValidationErrors('bed_type_id')"
    />

    <q-input
      dense
      outlined
      v-model="formData.name"
      label="Name"
      :rules="[(val) => (val && val.length) || 'Please enter bed list name']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QEditForm>
</template>

<script>
import { reactive, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useBedListStore } from "stores/Beds/bedList";
import { useFloorStore } from "stores/Beds/floor";
import { useBedGroupStore } from "stores/Beds/bedGroup";
import { useBedTypeStore } from "stores/Beds/bedType";

export default {
  name: "EditBedList",

  setup() {
    const useStore = useBedListStore();
    const { formData, getItems } = storeToRefs(useStore);
    const floorStore = useFloorStore();
    const bedGroupStore = useBedGroupStore();
    const bedTypeStore = useBedTypeStore();

    // const bedGroupOptions = ref([]);

    // const { getItems: getBedGroup } = bedGroupStore;

    // const onFloorSelect = () => {
    //   console.log("formData.value.floor_id", formData.value.floor_id);

    //   if (formData.value.floor_id !== null) {
    //     getBedGroup({ all: true, floor_id: formData.value.floor_id }).then(
    //       (response) => {
    //         bedGroupOptions.value = response.data;
    //       }
    //     );
    //   }
    // };
    // watch(
    //   () => {
    //     return formData.value.floor_id;
    //   },
    //   (first, second) => {
    //     formData.value.bed_group_id = null;
    //   }
    // );

    return {
      floorStore,
      bedTypeStore,
      formData,
      bedGroupStore,
      // bedGroupOptions,
      // onFloorSelect,
      getItems,
    };
  },
};
</script>
