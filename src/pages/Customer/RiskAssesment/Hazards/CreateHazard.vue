<template>
  <QCreateForm :useStore="useStore" title="Add Hazard">
    <div class="q-pb-md">
      <QSearch
        label="Activity"
        v-model="newData.activity_id"
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
      v-model="newData.name"
      label="Hazards"
      :rules="[(val) => (val && val.length) || 'Please enter hazard']"
      :error-message="$getValidationErrors('name')"
      :error="$hasValidationErrors('name')"
    />
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";

export default {
  name: "CreateHazard",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const activityStore = useActivityStore();
    return {
      activityStore,
      newData,
    };
  },
};
</script>
