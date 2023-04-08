<template>
  <QEditForm :useStore="useStore" title="Edit Pharmacists">
    <div class="row q-col-gutter-md">
      <!-- Pharmacist name -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Pharmacist Name"
          dense
          outlined
          v-model="formData.name"
          :rules="[
            (val) => (val && val.length) || 'Please enter the pharmacist name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <!-- age -->
      <div class="col-12 col-md-6 col-lg-6">
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
import { useCompanyStore } from "stores/company";
import { useBranchStore } from "stores/branch";

export default {
  name: "EditPharmacists",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const useCompany = useCompanyStore();
    const branchStore = useBranchStore();

    // watch: {
    //   mobile_no() {
    //     this.mobile_no = this.mobile_no.replace(/[^0-9]/g, '');
    //   }
    // };

    return {
      formData,
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
