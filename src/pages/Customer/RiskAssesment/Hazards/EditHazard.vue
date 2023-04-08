<template>
  <QEditForm :useStore="useStore" title="Edit Hazard">
    <div class="q-pb-md">
      <QSearch
        label="Activity"
        v-model="formData.activity.name"
        :useStore="activityStore"
        optionValue="id"
        optionLabel="name"
        :error-message="$getValidationErrors('activity_id')"
        :error="$hasValidationErrors('activity_id')"
      />
    </div>
    <q-input
      dense
      outlined
      v-model="formData.name"
      label="Hazard"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";

export default {
  name: "EditHazard",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const activityStore = useActivityStore();

    return {
      activityStore,
      formData,
    };
  },
};
</script>
