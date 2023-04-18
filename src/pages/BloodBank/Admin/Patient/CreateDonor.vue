<template>
  <QCreateForm :useStore="useStore" title="Add Donor">
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-12">
        <q-input
          outlined
          v-model="formData.name"
          dense
          label="Name"
          :rules="[(val) => (val && val.length) || 'Please enter name']"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          type="email"
          outlined
          v-model="formData.email"
          dense
          label="Email"
          :rules="[(val) => (val && val.length) || 'Please enter email']"
          :error-message="$getValidationErrors('email')"
          :error="$hasValidationErrors('email')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.primary_contact"
          dense
          type="number"
          label="Primary Contact"
          :rules="[
            (val) => (val && val.length) || 'Please enter primary contact',
          ]"
          :error-message="$getValidationErrors('primary_contact')"
          :error="$hasValidationErrors('primary_contact')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          type="password"
          outlined
          v-model="formData.password"
          dense
          label="New Password"
          :rules="[(val) => (val && val.length) || 'Please enter password']"
          :error-message="$getValidationErrors('password')"
          :error="$hasValidationErrors('password')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.confirm_password"
          dense
          type="password"
          label="Confirm Password"
          :rules="[(val) => (val && val.length) || 'Please confirm password']"
          :error-message="$getValidationErrors('confirm_password')"
          :error="$hasValidationErrors('confirm_password')"
        >
        </q-input>
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "CreateDonor",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);

    return {
      formData,
    };
  },
};
</script>
