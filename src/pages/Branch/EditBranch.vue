<template>
  <QEditForm :useStore="useStore" title="Edit Department">
    <div class="row q-col-gutter-md">
      <!-- Department name -->
      <div class="col-12">
        <q-input
          label="Department Name"
          dense
          outlined
          v-model="formData.name"
          :rules="[
            (val) => (val && val.length) || 'Please enter the department name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <!-- Department code -->
      <div class="col-12">
        <q-input
          label="Department Code"
          dense
          type="text"
          outlined
          v-model="formData.code"
          :rules="[
            (val) => (val && val.length) || 'Please enter the department code',
          ]"
          :error-message="$getValidationErrors('code')"
          :error="$hasValidationErrors('code')"
        />
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useCompanyStore } from "stores/company";
import { useAuthStore } from "stores/auth/index";

export default {
  name: "EditDepartment",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const useCompany = useCompanyStore();
    const authUserStore = useAuthStore();

    return {
      formData,
      authUserStore,
      useCompany,
      noRules: [
        (val) => (val !== null && val !== "") || "Please Enter Your Number",
        (val) =>
          val.length === 10 || "Contact Number is less or more than 10 digits",
      ],
    };
  },
};
</script>
