<template>
  <q-page v-if="dataLoading == false" class="q-pa-md">
    <q-card class="q-pa-md">
      <h1 class="text-weight-bold q-my-md">
        {{ assesmentData.assessment_name }}
      </h1>
      <h3 class="q-mt-none">Risk Assessment Report</h3>

      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-6">
          <p>
            <span class="text-weight-bold">Date: </span
            >{{ $dateConvert.format(assesmentData.created_at) }}
          </p>
          <p>
            <span class="text-weight-bold">Name: </span>
            {{ assesmentData.assessment_name }}
          </p>
          <p>
            <span class="text-weight-bold">Responsible Person: </span
            >{{ assesmentData.actioned_by }}
          </p>
          <p>
            <span class="text-weight-bold">Selected Hazard: </span
            >{{ assesmentData.hazards }}
          </p>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <p>
            <span class="text-weight-bold">Action Date: </span
            >{{ assesmentData.action_date }}
          </p>

          <p>
            <span class="text-weight-bold">Selected Activity: </span
            >{{ assesmentData.activity }}
          </p>
          <p>
            <span class="text-weight-bold">Risk: </span
            >{{ assesmentData.risks }}
          </p>
        </div>
      </div>
      <div class="">
        <div class="col-12 col-md-6 col-lg-6"></div>

        <div class="col-12">
          <p>
            <span class="text-weight-bold">Control Measures: </span
            >{{ assesmentData.controls }}
          </p>
        </div>

        <div class="col-">
          <p>
            <span class="text-weight-bold">Remarks: </span
            >{{ assesmentData.comment }}
          </p>
        </div>
      </div>
      <!-- RATING CODE STARTING -->
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <h2>Risk Rating Before Control</h2>
          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Likelyhood</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-linear-progress
                size="15px"
                :value="getValuePercentage(assesmentData.likelyhood)"
                color="primary"
                rounded
                style="max-width: 270px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    text-color="white"
                    :label="assesmentData.likelyhood"
                  />
                </div>
              </q-linear-progress>
            </div>
          </div>

          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Severity</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-linear-progress
                size="15px"
                :value="getValuePercentage(assesmentData.severity)"
                color="primary"
                rounded
                style="max-width: 270px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge text-color="white" :label="assesmentData.severity" />
                </div>
              </q-linear-progress>
            </div>
          </div>
          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Frequency</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-linear-progress
                size="15px"
                :value="getValuePercentage(assesmentData.frequency)"
                color="primary"
                rounded
                style="max-width: 270px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    text-color="white"
                    :label="assesmentData.frequency"
                  />
                </div>
              </q-linear-progress>
            </div>
          </div>
          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Risk Rating</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-chip icon="warning" color="red" text-color="white">{{
                assesmentData.risk_rating
              }}</q-chip>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <h2>Risk Rating After Control</h2>

          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Likelyhood</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-linear-progress
                size="15px"
                :value="
                  getValuePercentage(assesmentData.likelyhood_after_control)
                "
                color="primary"
                rounded
                style="max-width: 270px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    transparent
                    text-color="white"
                    :label="assesmentData.likelyhood_after_control"
                  />
                </div>
              </q-linear-progress>
            </div>
          </div>

          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Severity</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-linear-progress
                size="15px"
                :value="
                  getValuePercentage(assesmentData.severity_after_control)
                "
                color="primary"
                rounded
                style="max-width: 270px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    text-color="white"
                    :label="assesmentData.severity_after_control"
                  />
                </div>
              </q-linear-progress>
            </div>
          </div>
          <div class="row">
            <div class="col-3 col-md-2 col-lg-2">
              <p>Frequency</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10">
              <q-linear-progress
                size="15px"
                :value="
                  getValuePercentage(assesmentData.frequency_after_control)
                "
                color="primary"
                rounded
                style="max-width: 270px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    text-color="white"
                    :label="assesmentData.frequency_after_control"
                  />
                </div>
              </q-linear-progress>
            </div>
          </div>
          <div class="row flex items-center">
            <div class="col-3 col-md-2 col-lg-2 items-center">
              <p>Risk Rating</p>
            </div>
            <div class="col-9 col-md-10 col-lg-10 flex items-center">
              <q-chip icon="warning" color="red" text-color="white">{{
                assesmentData.risk_rating_after_control
              }}</q-chip>
            </div>
          </div>
        </div>
      </div>

      <!-- IMAGE CODE STARTING -->
      <div>
        <h2 class="q-ma-none">Image</h2>
        <div class="row">
          <div
            class="col-3 q-pt-sm q-pl-sm"
            v-for="image in assesmentData.image_media_ids"
            :key="image"
          >
            <div class="img-gallery">
              <div>
                <q-img :src="image?.url" :ratio="16 / 9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { useAssessmentStore } from "stores/Customer/RiskAssesment/assessment";
import { reactive, onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { dateConvert } from "src/boot/dateConvert";

export default {
  name: "AssessmentReport",
  components: {},

  setup(props) {
    const useAssessment = useAssessmentStore();
    const route = useRoute();

    const getValuePercentage = (val) => {
      return parseFloat(val * 10).toFixed(2) + "%";
    };
    const getValuePercentageTwo = (val) => {
      return parseFloat(val * 1000).toFixed(2) + "%";
    };

    const assesmentData = ref({});
    const dataLoading = ref(true);

    onMounted(() => {
      dataLoading.value = true;
      loadData(route.params.id);
    });

    const loadData = (id) => {
      useAssessment
        .getItem(id)
        .then((response) => {
          dataLoading.value = false;
          assesmentData.value = response.data;
        })
        .catch((err) => {
          dataLoading.value = false;
          console.log("err", err);
        })
        .finally(() => {});
    };
    return {
      assesmentData,
      dataLoading,
      getValuePercentage,
      getValuePercentageTwo,
    };
  },
};
</script>

<style scoped>
.img-gallery {
  border: 1px solid #b9b7b76c;
  padding: 6px;
  border-radius: 5px;
}
</style>
