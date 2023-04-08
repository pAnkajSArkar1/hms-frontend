<template>
  <QCreateForm :useStore="useStore" title="Add Asset">
    <div class="row q-col-gutter-md">
      <!-- Department -->
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Select Department"
          v-model="newData.branch_id"
          :useStore="branchStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('branch_id')"
          :error="$hasValidationErrors('branch_id')"
        />
      </div>
      <!-- asset code -->
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          label="Asset Code"
          v-model="newData.asset_code"
          :rules="[(val) => (val && val.length) || 'Please enter Asset Code']"
          :error-message="$getValidationErrors('asset_code')"
          :error="$hasValidationErrors('asset_code')"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          label="Asset Name"
          v-model="newData.name"
          :rules="[(val) => (val && val.length) || 'Please enter Asset Name']"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          label="Serial Number"
          v-model="newData.serial_number"
          :rules="[
            (val) => (val && val.length) || 'Please enter serial_number',
          ]"
          :error-message="$getValidationErrors('serial_number')"
          :error="$hasValidationErrors('serial_number')"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          label="Manufacture name"
          v-model="newData.make"
          :rules="[
            (val) => (val && val.length) || 'Please enter manufacture name',
          ]"
          :error-message="$getValidationErrors('make')"
          :error="$hasValidationErrors('make')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="newData.year_of_manufacture"
          label="Date of manufacture"
          :rules="[
            (val) =>
              (val && val.length) || 'Please choose the year of manufacture',
          ]"
          :error-message="$getValidationErrors('year_of_manufacture')"
          :error="$hasValidationErrors('year_of_manufacture')"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="newData.year_of_manufacture">
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
import { useBranchStore } from "stores/branch";

export default {
  name: "CreateAsset",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const branchStore = useBranchStore();
    return {
      branchStore,
      newData,
    };
  },
};
</script>
