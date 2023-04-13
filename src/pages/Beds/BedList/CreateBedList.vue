<template>
  <QCreateForm :useStore="useStore" :getItems="getItems" title="Add Bed List">
    <QSearch
      label="Select Floor"
      v-model="newData.floor_id"
      :useStore="floorStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('floor_id')"
      :error="$hasValidationErrors('floor_id')"
    />

    <!-- <q-select
      dense
      v-model="newData.bed_group_id"
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
      v-model="newData.bed_group_id"
      :useStore="bedGroupStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('bed_group_id')"
      :error="$hasValidationErrors('bed_group_id')"
    />

    <QSearch
      label="Select Bed Type"
      v-model="newData.bed_type_id"
      :useStore="bedTypeStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('bed_type_id')"
      :error="$hasValidationErrors('bed_type_id')"
    />

    <q-input
      dense
      outlined
      v-model="newData.name"
      label="Name"
      :rules="[(val) => (val && val.length) || 'Please enter bed list name']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QCreateForm>
</template>

<script>
import { reactive, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useBedListStore } from "stores/Beds/bedList";
import { useFloorStore } from "stores/Beds/floor";
import { useBedGroupStore } from "stores/Beds/bedGroup";
import { useBedTypeStore } from "stores/Beds/bedType";

export default {
  name: "CreateBedList",

  setup() {
    const useStore = useBedListStore();
    const { newData, getItems } = storeToRefs(useStore);
    const floorStore = useFloorStore();
    const bedGroupStore = useBedGroupStore();
    const bedTypeStore = useBedTypeStore();

    // const bedGroupOptions = ref([]);

    // const { getItems: getBedGroup } = bedGroupStore;

    // const onFloorSelect = () => {
    //   console.log("newData.value.floor_id", newData.value.floor_id);

    //   if (newData.value.floor_id !== null) {
    //     getBedGroup({ all: true, floor_id: newData.value.floor_id }).then(
    //       (response) => {
    //         bedGroupOptions.value = response.data;
    //       }
    //     );
    //   }
    // };
    // watch(
    //   () => {
    //     return newData.value.floor_id;
    //   },
    //   (first, second) => {
    //     newData.value.bed_group_id = null;
    //   }
    // );

    return {
      floorStore,
      bedTypeStore,
      newData,
      bedGroupStore,
      // bedGroupOptions,
      // onFloorSelect,
      getItems,
    };
  },
};
</script>
