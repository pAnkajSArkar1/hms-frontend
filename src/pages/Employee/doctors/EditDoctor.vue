<template>
  <QEditForm :useStore="useStore" title="Edit Doctor">
    <!-- Doctor name -->
    <div class="col-12">
      <q-input
        label="Doctor Name"
        dense
        outlined
        v-model="formData.name"
        :rules="[
          (val) => (val && val.length) || 'Please enter the doctor name',
        ]"
        :error-message="$getValidationErrors('name')"
        :error="$hasValidationErrors('name')"
      />
    </div>
    <div class="row q-col-gutter-md">
      <!-- speciality -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="doctorList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="speciality"
          outlined
          clearable
          v-model="formData.speciality"
          dense
          label="Speciality"
          :rules="[(val) => (val && val.length) || 'Please select speciality']"
          :error-message="$getValidationErrors('speciality')"
          :error="$hasValidationErrors('speciality')"
        />
      </div>
      <!-- Department -->
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Department"
          v-model="formData.branch_id"
          :useStore="branchStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('branch_id')"
          :error="$hasValidationErrors('branch_id')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- type -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          :options="typeList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="type"
          outlined
          clearable
          v-model="formData.type"
          dense
          label="Type"
          :rules="[(val) => (val && val.length) || 'Please select type']"
          :error-message="$getValidationErrors('type')"
          :error="$hasValidationErrors('type')"
        />
      </div>
      <!-- experience -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          label="Experience"
          dense
          outlined
          v-model="formData.experience"
          :rules="[
            (val) => (val && val.length) || 'Please enter the experience',
          ]"
          :error-message="$getValidationErrors('experience')"
          :error="$hasValidationErrors('experience')"
        />
      </div>
      <!-- age -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          label="Age"
          dense
          outlined
          type="number"
          v-model="formData.age"
          :error-message="$getValidationErrors('age')"
          :error="$hasValidationErrors('age')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- Blood Type -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="bloodList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="blood"
          outlined
          clearable
          v-model="formData.blood"
          dense
          label="Blood Group"
          :rules="[(val) => (val && val.length) || 'Please select blood']"
          :error-message="$getValidationErrors('blood')"
          :error="$hasValidationErrors('blood')"
        />
      </div>
      <!-- gender -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="genderList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="gender"
          outlined
          v-model="formData.gender"
          dense
          clearable
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
          v-model="formData.mobile_no"
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
          v-model="formData.email"
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
        v-model="formData.address"
      />
    </div>
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useBranchStore } from "stores/branch";

export default {
  name: "EditDoctor",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const branchStore = useBranchStore();

    // watch: {
    //   mobile_no() {
    //     this.mobile_no = this.mobile_no.replace(/[^0-9]/g, '');
    //   }
    // };

    return {
      branchStore,
      formData,
      noRules: [
        (val) => (val !== null && val !== "") || "Please Enter Your Number",
        (val) =>
          val.length === 10 || "Contact Number is less or more than 10 digits",
      ],
      doctorList: [
        "Accident and emergency (A&E)",
        "Anesthetics",
        "Gastroenterology",
        "Cardiology",
        "Maternity",
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
        { label: "Visiting", value: "visiting" },
        { label: "Permanent", value: "permanent" },
        { label: "Trainee", value: "trainee" },
      ],
    };
  },
};
</script>
