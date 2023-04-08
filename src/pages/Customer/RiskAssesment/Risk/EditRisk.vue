<template>
  <QEditForm :useStore="useStore" title="Edit Risk">
    <QSearch
      label="Activity"
      v-model="formData.activity_id"
      :useStore="activityStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('activity_id')"
      :error="$hasValidationErrors('activity_id')"
    />
    <div class="colomn q-py-sm">
      <QSearch
        label="Hazard"
        v-model="formData.hazard_id"
        :useStore="hazardStore"
        optionValue="id"
        optionLabel="name"
        :error-message="$getValidationErrors('hazard_id')"
        :error="$hasValidationErrors('hazard_id')"
      />
    </div>
    <q-input
      dense
      outlined
      v-model="formData.name"
      label="Risk"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";
import { useHazardStore } from "stores/Customer/RiskAssesment/hazard";

export default {
  name: "EditRisk",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const activityStore = useActivityStore();
    const hazardStore = useHazardStore();

    return {
      activityStore,
      hazardStore,
      formData,
    };
  },
};
</script>
