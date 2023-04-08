<template>
  <QCreateForm :useStore="useStore" title="Create Workplace Checklist">
    <div class="col-12 text-h6">Business Details</div>
    <q-separator></q-separator>
    <div class="row q-col-gutter-md q-pt-md">
      <!-- business name -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          label="Business Name"
          v-model="newData.business_name"
          :rules="[
            (val) => (val && val.length) || 'Please enter Business Name',
          ]"
          :error-message="$getValidationErrors('business_name')"
          :error="$hasValidationErrors('business_name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <!-- list of branch dropdown -->
        <QSearch
          label="Department Name"
          v-model="newData.branch_id"
          optionValue="id"
          optionLabel="name"
          :useStore="branchStore"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md q-pt-md">
      <!-- Address -->
      <div class="col-12 col-lg-6 col-md-6 col-sm-6">
        <q-input dense outlined label="Address" v-model="newData.address" />
      </div>
      <!-- contact number -->
      <div class="col-12 col-lg-6 col-md-6 col-sm-6">
        <q-input
          dense
          outlined
          label="Contact Number"
          type="number"
          v-model="newData.contact_number"
          :rules="[
            (val) => (val && val.length) || 'Please enter Contact Number',
          ]"
          :error-message="$getValidationErrors('contact_number')"
          :error="$hasValidationErrors('contact_number')"
        />
      </div>
    </div>
    <q-separator />
    <q-select
      v-model="newData.category"
      class="q-pt-md"
      :options="categorylist"
      map-options
      emit-value
      option-label="label"
      option-value="value"
      type="category"
      outlined
      dense
      :multiple="true"
      use-chips
      label="Question Category"
      :rules="[(val) => (val && val.length) || 'Please select category']"
      :error-message="$getValidationErrors('category')"
      :error="$hasValidationErrors('category')"
    />
    <!-- <div v-if="newData.category === 'Fire and Emergencies'"></div> -->

    <!-- <div v-if="newData.category === 'First Aid'"> -->
    <div class="col-12 text-subtitle1 q-py-sm">Fire and Emergencies</div>
    <!-- question category 1-->
    <div class="category q-pb-md">
      <div class="row q-col-gutter-md">
        <!-- question 1-->
        <div class="col-12 col-lg-9 col-md-9">
          <q-select
            dense
            outlined
            map-options
            emit-value
            label="Have you conducted an Emergency Drill in the last 6 months"
            v-model="newData.Audit_question_details1"
            :options="review"
            :rules="[(val) => (val && val.length) || 'Please select a review']"
          />
        </div>
        <div class="col-12 col-lg-3 col-md-3">
          <!-- review date -->
          <q-input
            dense
            outlined
            v-model="newData.review_date1"
            label="Review Date"
            :rules="[
              (val) => (val && val.length) || 'Please choose the review date',
            ]"
            :error-message="$getValidationErrors('review_date1')"
            :error="$hasValidationErrors('review_date1')"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="newData.review_date1">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <!-- question 2-->
        <div class="col-12 col-lg-9 col-md-9">
          <q-select
            dense
            outlined
            map-options
            emit-value
            label="Do you have an Emergency escape route plan displayed at your facility"
            v-model="newData.Audit_question_details"
            :options="review"
            :rules="[(val) => (val && val.length) || 'Please select a review']"
          />
        </div>
        <div class="col-12 col-lg-3 col-md-3">
          <!-- review date -->
          <q-input
            dense
            outlined
            v-model="newData.review_date"
            label="Review Date"
            :rules="[
              (val) => (val && val.length) || 'Please choose the review date',
            ]"
            :error-message="$getValidationErrors('review_date')"
            :error="$hasValidationErrors('review_date')"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="newData.review_date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <!-- uploader -->
      <div class="col-12">
        <UploaderFile
          v-model="newData.document_ids"
          label="Upload Document"
          :multiple="true"
          acceptFileType=".pdf,.txt,.doc,.docx"
          attachmentType="document"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md q-pt-md">
      <!-- comments -->
      <div class="col-12">
        <q-input
          outlined
          label="Comments"
          v-model="newData.comments"
          type="textarea"
          dense
        />
      </div>
      <div class="col-12 col-lg-4 col-md-4">
        <q-radio v-model="state" val="completed" label="Audit Completed" />
      </div>
      <div class="col-12 col-lg-4 col-md-4">
        <q-radio v-model="state" val="inprogress" label="Audit In Progress" />
      </div>
      <div class="col-12 col-lg-4 col-md-4">
        <!-- action date -->
        <q-input
          dense
          outlined
          v-model="newData.action_date"
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
                <q-date v-model="newData.action_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <!-- Recommendations -->
    <div class="col-12 q-pb-md">
      <q-input
        outlined
        label="Recommendations"
        v-model="newData.recommendations"
        type="textarea"
        dense
      />
    </div>
  </QCreateForm>
</template>

<script>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useBranchStore } from "stores/branch";
export default {
  name: "CreateWorkplaceChecklist",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const branchStore = useBranchStore();

    return {
      newData,
      state: ref(""),
      branch_name: [
        { label: "Delhi", value: "delhi" },
        { label: "Kolkata", value: "kolkata" },
      ],
      review: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "Not Required", value: "not_required" },
        { label: "In Progress", value: "in_progress" },
      ],
      categorylist: [
        { label: "Fire and Emergencies", value: "fire_and_emergencies" },
        { label: "First Aid", value: "first_aid" },
      ],
      branchStore,
    };
  },
};
</script>
