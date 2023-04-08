<template>
  <QEditForm :useStore="useStore" title="Edit Checklist">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="dd-mm-yyyy"
          mask="date"
          :error-message="$getValidationErrors('')"
          :error="$hasValidationErrors('')"
        >
          <template v-slot:append>
            <q-icon name="event" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Site Checked By"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Supervisor/Quality Inspector"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Business Name"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Branch"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Address"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Contact Number"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Project Name"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Employee Name"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "EditPpeInspection",
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
