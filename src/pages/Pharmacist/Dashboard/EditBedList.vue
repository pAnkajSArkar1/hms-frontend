<template>
  <QEditForm :useStore="useStore" :getItems="getItems" title="Edit Bed Status">
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
import { reactive, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useBedListStore } from "stores/Beds/bedList";

export default {
  name: "EditBedList",

  setup() {
    const useStore = useBedListStore();
    const { formData, getItems } = storeToRefs(useStore);

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
      formData,
      statusList: [
        { label: "Free", value: "Free" },
        { label: "Occupied", value: "Occupied" },
      ],
      // bedGroupOptions,
      // onFloorSelect,
      getItems,
    };
  },
};
</script>
