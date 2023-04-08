<template>
  <QCreateForm :useStore="useStore" title="Add Medicine">
    <div class="row q-col-gutter-md">
      <!-- Medicine name -->
      <div class="col-12 col-md-5 col-lg-5">
        <q-input
          label="Medicine Name"
          dense
          outlined
          v-model="newData.name"
          :rules="[
            (val) => (val && val.length) || 'Please enter medicine name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <!-- brand -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          label="Brand"
          dense
          outlined
          type
          v-model="newData.brand"
          :rules="[(val) => (val && val.length) || 'Please enter the brand']"
          :error-messbrand="$getValidationErrors('brand')"
          :error="$hasValidationErrors('brand')"
        />
      </div>
      <!-- price -->
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          label="Price"
          dense
          outlined
          type="number"
          step="0.01"
          v-model="newData.price"
          :rules="[(val) => (val && val.length) || 'Enter the price']"
          :error-messprice="$getValidationErrors('price')"
          :error="$hasValidationErrors('price')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- description  -->
      <div class="col-12">
        <q-input
          label="Description"
          dense
          outlined
          type="textarea"
          v-model="newData.description"
          :error-messdescription="$getValidationErrors('description')"
          :error="$hasValidationErrors('description')"
        />
      </div>
      <!-- instruction  -->
      <div class="col-12">
        <q-input
          label="Instruction"
          dense
          outlined
          v-model="newData.instruction"
          :error-messinstruction="$getValidationErrors('instruction')"
          :error="$hasValidationErrors('instruction')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <!-- mfg_date -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          readonly
          v-model="newData.mfg_date"
          label="Date of manufacture"
          :rules="[
            (val) => (val && val.length) || 'Please choose manufacture date',
          ]"
          :error-message="$getValidationErrors('mfg_date')"
          :error="$hasValidationErrors('mfg_date')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="newData.mfg_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <!-- exp_date -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          readonly
          v-model="newData.exp_date"
          label="Date of Expiry"
          :rules="[(val) => (val && val.length) || 'Please choose expiry date']"
          :error-message="$getValidationErrors('exp_date')"
          :error="$hasValidationErrors('exp_date')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="newData.exp_date">
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
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useCompanyStore } from "stores/company";
import { useBranchStore } from "stores/branch";

export default {
  name: "CreateMedicine",
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
