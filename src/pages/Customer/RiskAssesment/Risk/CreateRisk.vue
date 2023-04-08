<template>
  <QCreateForm :useStore="useStore" title="Add Risk">
    <QSearch
      label="Activity"
      v-model="newData.activity_id"
      :useStore="activityStore"
      optionValue="id"
      optionLabel="name"
      :error-message="$getValidationErrors('activity_id')"
      :error="$hasValidationErrors('activity_id')"
    />
    <div class="colomn q-py-sm">
      <QSearch
        label="Hazard"
        v-model="newData.hazard_id"
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
      v-model="newData.name"
      label="Risk"
      :rules="[(val) => (val && val.length) || 'Please enter risk']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";
import { useHazardStore } from "stores/Customer/RiskAssesment/hazard";

export default {
  name: "CreateRisk",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const activityStore = useActivityStore();
    const hazardStore = useHazardStore();

    return {
      activityStore,
      hazardStore,
      newData,
    };
  },
};
</script>
