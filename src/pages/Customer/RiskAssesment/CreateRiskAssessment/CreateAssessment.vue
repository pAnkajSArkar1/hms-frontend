<template>
  <QCreateForm :useStore="useStore" title="New Risk Assessment">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          label="Assessment Name"
          clearable
          v-model="formData.assessment_name"
          :rules="[(val) => (val && val.length) || 'Please enter assessment']"
          :error-message="$getValidationErrors('assessment_name')"
          :error="$hasValidationErrors('assessment_name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          auto-load="false"
          label="Select Activity"
          v-model="formData.activity_id"
          :useStore="useActivity"
          optionValue="id"
          optionLabel="name"
          clearable
          @update:modelValue="onActivitySelect"
          :error-message="$getValidationErrors('activity_id')"
          :error="$hasValidationErrors('activity_id')"
        />
      </div>
    </div>

    <div class="col-12">
      <QSearch
        auto-load="false"
        label="Select Hazard"
        v-model="formData.hazard_ids"
        :useStore="useHazard"
        optionValue="id"
        optionLabel="name"
        :multiple="true"
        @update:modelValue="onHazardSelect"
        :error-message="$getValidationErrors('hazard_ids')"
        :error="$hasValidationErrors('hazard_ids')"
      />
    </div>

    <div v-if="formData.hazard_ids != ''">
      <div class="q-col-gutter-md q-py-md">
        <div>
          <q-list bordered separator>
            <q-item
              v-for="risk in riskOptions"
              :key="risk.id"
              clickable
              v-ripple
            >
              <q-checkbox
                v-model="formData.risk_ids"
                dense
                :val="risk.id"
                :label="risk.name"
              />
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- remarks -->
    <div>
      <q-input
        dense
        outlined
        type="textarea"
        label="Comments / Remarks"
        v-model="formData.comment"
      />
    </div>
    <div class="row q-col-gutter-md q-pt-md q-pb-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.action_date"
          label="Action Date"
          :rules="[
            (val) => (val && val.length) || 'Please choose the action date',
          ]"
          :error-message="$getValidationErrors('action_date')"
          :error="$hasValidationErrors('action_date')"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formData.action_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="Actioned_By"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="actioned_by"
          outlined
          v-model="formData.actioned_by"
          dense
          clearable
          label="Responsible Person"
          :rules="[
            (val) => (val && val.length) || 'Please select Responsible Person',
          ]"
          :error-message="$getValidationErrors('actioned_by')"
          :error="$hasValidationErrors('actioned_by')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md q-pb-md">
      <div class="col-12 col-md-6 col-lg-6">
        <!-- uploader -->
        <q-field>
          <q-uploader
            label="Upload Image"
            square
            flat
            multiple
            bordered
            no-thumbnails
            auto-upload
            accept="image/*"
            class="full-width"
            :factory="setAssessmentImg"
          />
        </q-field>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-field>
          <q-uploader
            label="Upload Document"
            square
            flat
            multiple
            bordered
            auto-upload
            accept=".pdf,.txt,.doc,.docx"
            class="full-width"
            :factory="setAssessmentDoc"
            @rejected="onRejected"
          />
        </q-field>
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive, ref, watch, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";
import { useHazardStore } from "stores/Customer/RiskAssesment/hazard";
import { useRiskStore } from "stores/Customer/RiskAssesment/risk";
import { useMediaStore } from "stores/media";
import { useAssessmentStore } from "stores/Customer/RiskAssesment/assessment";

export default {
  name: "CreateAssessment",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const hazardsOptions = ref([]);
    const riskOptions = ref([]);
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const useActivity = useActivityStore();
    const useHazard = useHazardStore();
    const useRisk = useRiskStore();

    const assessment = useAssessmentStore();
    const { setAssessmentImage } = assessment;
    const { setAssessmentDocument } = assessment;

    const { getItems } = useHazard;
    const { getItems: getRisks } = useRisk;

    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;

    //image uploader
    const setAssessmentImg = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "image");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            setAssessmentImage({ id: res.data.media_id });
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };
    //doc uploader
    const setAssessmentDoc = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "document");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            setAssessmentDocument({ id: res.data.media_id });
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };
    function onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      $q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    }

    function onActivitySelect(activity_id) {
      if (activity_id !== null) {
        getItems({ all: true, activity_id: activity_id }).then((response) => {
          hazardsOptions.value = response.data;
        });
      }
    }

    function onHazardSelect(hazard_ids) {
      console.error("onHazardSelect", hazard_ids);

      if (hazard_ids !== null) {
        getRisks({ all: true, filter: { hazard_ids: hazard_ids } }).then(
          (response) => {
            riskOptions.value = response.data;
          }
        );
      }
    }

    // watch(formData.activity_id, async (newValue, oldValue) => {
    //   if (newValue != oldValue) {
    //     onActivitySelect(newValue);
    //   }
    // });

    // watch(formData.hazard_ids, async (newValue, oldValue) => {
    //   console.info("Selected hazards", newValue);

    //   if (newValue != oldValue) {
    //     onHazardSelect(newValue);
    //   }
    // });

    // onHazardSelect

    return {
      formData,
      useActivity,
      useHazard,
      useRisk,
      setAssessmentImg,
      setAssessmentDoc,
      onRejected,
      assessment,
      onActivitySelect,
      onHazardSelect,
      hazardsOptions,
      riskOptions,
      Actioned_By: [
        { label: "Manager", value: "Manager" },
        { label: "Safety Officer", value: "Safety Officer" },
        { label: "CEO", value: "CEO" },
      ],
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>
