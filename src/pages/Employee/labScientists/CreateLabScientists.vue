<template>
  <QCreateForm :useStore="useStore" title="Add Lab Scientist">
    <div class="row q-col-gutter-md">
      <!-- Lab Scientist name -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Lab Scientist Name"
          dense
          outlined
          v-model="newData.name"
          :rules="[
            (val) =>
              (val && val.length) || 'Please enter the lab scientist name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <!-- category -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="categoryList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="category"
          outlined
          clearable
          v-model="newData.category"
          dense
          label="Category"
          :rules="[(val) => (val && val.length) || 'Please select category']"
          :error-message="$getValidationErrors('category')"
          :error="$hasValidationErrors('category')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- type -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="typeList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="type"
          outlined
          clearable
          v-model="newData.type"
          dense
          label="Type"
          :rules="[(val) => (val && val.length) || 'Please select type']"
          :error-message="$getValidationErrors('type')"
          :error="$hasValidationErrors('type')"
        />
      </div>
      <!-- experience -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Experience"
          dense
          outlined
          v-model="newData.experience"
          :rules="[
            (val) => (val && val.length) || 'Please enter the experience',
          ]"
          :error-message="$getValidationErrors('experience')"
          :error="$hasValidationErrors('experience')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- age -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          label="Age"
          dense
          outlined
          type="number"
          v-model="newData.age"
          :rules="[(val) => (val && val.length) || 'Please enter the age']"
          :error-message="$getValidationErrors('age')"
          :error="$hasValidationErrors('age')"
        />
      </div>
      <!-- Blood Type -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          :options="bloodList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="blood"
          outlined
          v-model="newData.blood"
          dense
          label="Blood Group"
          :rules="[(val) => (val && val.length) || 'Please select blood']"
          :error-message="$getValidationErrors('blood')"
          :error="$hasValidationErrors('blood')"
        />
      </div>
      <!-- gender -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          :options="genderList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="gender"
          outlined
          v-model="newData.gender"
          dense
          label="Gender"
          :rules="[(val) => (val && val.length) || 'Please select gender']"
          :error-message="$getValidationErrors('gender')"
          :error="$hasValidationErrors('gender')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- number -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Mobile Number"
          dense
          outlined
          type="number"
          v-model="newData.mobile_no"
          :rules="noRules"
          :error-message="$getValidationErrors('mobile_no')"
          :error="$hasValidationErrors('mobile_no')"
        />
      </div>
      <!-- email -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Email ID"
          dense
          outlined
          v-model="newData.email"
          :rules="[(val) => (val && val.length) || 'Please enter the email ID']"
          :error-message="$getValidationErrors('email')"
          :error="$hasValidationErrors('email')"
        />
      </div>
    </div>
    <!-- address -->
    <div class="q-pb-md">
      <q-input
        label="Address"
        dense
        outlined
        type="textarea"
        v-model="newData.address"
      />
    </div>
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useCompanyStore } from "stores/company";
import { useBranchStore } from "stores/branch";

export default {
  name: "CreateLabScientist",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const useCompany = useCompanyStore();
    const branchStore = useBranchStore();

    // watch: {
    //   mobile_no() {
    //     this.mobile_no = this.mobile_no.replace(/[^0-9]/g, '');
    //   }
    // };

    return {
      newData,
      branchStore,
      useCompany,
      noRules: [
        (val) => (val !== null && val !== "") || "Please Enter Your Number",
        (val) =>
          val.length === 10 || "Contact Number is less or more than 10 digits",
      ],
      categoryList: [
        "Cytogenetic technologists",
        "Pathologists Assistant",
        "Anesthesia Technician",
        "Clinical laboratory technician",
      ],
      genderList: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
      ],
      bloodList: [
        { label: "A+", value: "a_p" },
        { label: "A-", value: "a_n" },
        { label: "B+", value: "b_p" },
        { label: "B-", value: "b_n" },
        { label: "O+", value: "o_p" },
        { label: "O-", value: "o_n" },
        { label: "AB+", value: "ab_p" },
        { label: "AB-", value: "ab_n" },
      ],
      typeList: [
        "Lab Assistant",
        "Senior Lab Assistant",
        "Part-Time",
        "Trainee",
      ],
    };
  },
};
</script>
