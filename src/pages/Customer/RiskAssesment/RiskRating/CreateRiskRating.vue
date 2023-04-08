<template>
  <div>
    <q-toolbar
      class="text-subtitle1 text-bold q-py-none text-primary flex justify-between"
    >
      <q-toolbar> Add Risk Rating </q-toolbar>
      <q-btn
        flat
        round
        dense
        icon="close"
        @click="this.$router.push({ name: 'riskRating' })"
      />
    </q-toolbar>
  </div>
  <QCreateForm
    title="Add Risk Rating"
    :dialog="false"
    :useStore="useStore"
    :getItems="getItems"
  >
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-md-4 col-lg-4">
        <QSearch
          label="Select Activity"
          v-model="newData.activity_id"
          :useStore="useActivity"
          optionValue="id"
          optionLabel="name"
          @update:modelValue="onActivitySelect"
          :error-message="$getValidationErrors('activity_id')"
          :error="$hasValidationErrors('activity_id')"
        />
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <!-- <QSearch
          label="Select Hazard"
          v-model="newData.hazard_id"
          :useStore="useHazard"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('hazard_id')"
          :error="$hasValidationErrors('hazard_id')"
        /> -->

        <q-select
          dense
          v-model="newData.hazard_id"
          outlined
          :options="hazardsOptions"
          label="Select Hazard"
          optionValue="id"
          optionLabel="name"
          emit-value
          map-options
        />
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <!-- <QSearch
          label="Select Risk"
          v-model="newData.risk_id"
          :useStore="useRisk"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('risk_id')"
          :error="$hasValidationErrors('risk_id')"
        /> -->

        <q-select
          dense
          v-model="newData.risk_id"
          outlined
          :options="risksOptions"
          label="Select Risk"
          optionValue="id"
          optionLabel="name"
          emit-value
          map-options
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- RISK RATTINGS BEFORE -->
      <div class="col-12 col-md-6 col-lg-6">
        <div class="column">
          <h6 class="q-my-sm">Risk Indexes before control</h6>

          <q-select
            outlined
            dense
            clearable
            v-model="newData.likelyhood_before_control_value"
            :options="ratingOptions"
            label="Select Likelyhood"
            :rules="[
              (val) => !!val || 'Please enter Severity',
              (val) => val > 0 || 'Severity should be more than 0',
              (val) => val < 11 || 'Severity cannot be more than 10',
            ]"
            :error-message="
              $getValidationErrors('likelyhood_before_control_value')
            "
            :error="$hasValidationErrors('likelyhood_before_control_value')"
          />

          <q-select
            outlined
            dense
            clearable
            v-model="newData.severity_before_control_value"
            :options="ratingOptions"
            label="Select Severity"
            :rules="[
              (val) => !!val || 'Please enter Severity',
              (val) => val > 0 || 'Severity should be more than 0',
              (val) => val < 11 || 'Severity cannot be more than 10',
            ]"
            :error-message="
              $getValidationErrors('severity_before_control_value')
            "
            :error="$hasValidationErrors('severity_before_control_value')"
          />

          <q-select
            outlined
            dense
            clearable
            v-model="newData.frequency_before_control_value"
            :options="ratingOptions"
            label="Select Frequency"
            :rules="[
              (val) => !!val || 'Please enter Frequency',
              (val) => val > 0 || 'Frequency should be more than 0',
              (val) => val < 11 || 'Frequency cannot be more than 10',
            ]"
            :error-message="
              $getValidationErrors('frequency_before_control_value')
            "
            :error="$hasValidationErrors('frequency_before_control_value')"
          />
        </div>
      </div>

      <!-- RISK RATTINGS AFTER -->
      <div class="col-12 col-md-6 col-lg-6">
        <div class="column">
          <h6 class="q-my-sm">Risk Indexes after control</h6>

          <q-select
            outlined
            dense
            clearable
            v-model="newData.likelyhood_after_control_value"
            :options="ratingOptions"
            label="Select Likelyhood"
            :rules="[
              (val) => !!val || 'Please enter Likelyhood',
              (val) => val > 0 || 'Likelyhood should be more than 0',
              (val) => val < 11 || 'Likelyhood cannot be more than 10',
            ]"
            :error-message="
              $getValidationErrors('likelyhood_after_control_value')
            "
            :error="$hasValidationErrors('likelyhood_after_control_value')"
          />

          <q-select
            outlined
            dense
            clearable
            v-model="newData.severity_after_control_value"
            :options="ratingOptions"
            label="Select Severity"
            :rules="[
              (val) => !!val || 'Please enter Severity',
              (val) => val > 0 || 'Severity should be more than 0',
              (val) => val < 11 || 'Severity cannot be more than 10',
            ]"
            :error-message="
              $getValidationErrors('severity_after_control_value')
            "
            :error="$hasValidationErrors('severity_after_control_value')"
          />

          <q-select
            outlined
            dense
            clearable
            v-model="newData.frequency_after_control_value"
            :options="ratingOptions"
            label="Select Frequency"
            :rules="[
              (val) => !!val || 'Please enter Frequency',
              (val) => val > 0 || 'Frequency should be more than 0',
              (val) => val < 11 || 'Frequency cannot be more than 10',
            ]"
            :error-message="
              $getValidationErrors('frequency_after_control_value')
            "
            :error="$hasValidationErrors('frequency_after_control_value')"
          />
        </div>
      </div>
    </div>
    <div class="q-pb-md">
      <q-input
        outlined
        type="textarea"
        v-model="newData.control_measures"
        label="Control Measures"
        :rules="[
          (val) => (val && val.length) || 'Please write control measure',
        ]"
        :error-message="$getValidationErrors('control_measures')"
        :error="$hasValidationErrors('control_measures')"
      />
    </div>
  </QCreateForm>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRiskRatingStore } from "stores/Customer/RiskAssesment/riskRating";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";
import { useHazardStore } from "stores/Customer/RiskAssesment/hazard";
import { useRiskStore } from "stores/Customer/RiskAssesment/risk";

export default {
  name: "CreateRating",

  setup() {
    const useStore = useRiskRatingStore();
    const { newData, filter, getItems } = storeToRefs(useStore);
    const useActivity = useActivityStore();
    const useHazard = useHazardStore();
    const useRisk = useRiskStore();

    // const useHazard = useHazard;

    const hazardsOptions = ref([]);
    const risksOptions = ref([]);

    const { getItems: getHazards } = useHazard;
    const { getItems: getRisks } = useRisk;

    const onActivitySelect = () => {
      console.log("newData.value.activity_id", newData.value.activity_id);

      if (newData.value.activity_id !== null) {
        getHazards({ all: true, activity_id: newData.value.activity_id }).then(
          (response) => {
            hazardsOptions.value = response.data;
          }
        );
      }
    };

    const onHazardSelect = () => {
      if (newData.value.hazard_id !== null) {
        getRisks({
          all: true,
          filter: { hazard_id: newData.value.hazard_id },
        }).then((response) => {
          risksOptions.value = response.data;
        });
      }
    };

    watch(
      () => {
        return newData.value.hazard_id;
      },
      (first, second) => {
        onHazardSelect();
        newData.value.risk_id = null;
      }
    );

    watch(
      () => {
        return newData.value.activity_id;
      },
      (first, second) => {
        newData.value.hazard_id = null;
      }
    );

    return {
      newData,
      useStore,
      useActivity,
      useHazard,
      useRisk,
      ratingOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      onActivitySelect,
      hazardsOptions,
      risksOptions,
      getItems,
    };
  },
};
</script>
