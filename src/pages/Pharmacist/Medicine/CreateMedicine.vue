<template>
  <QCreateForm :useStore="useStore" title="Add Medicine">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.code"
          label="Code"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter code']"
          :error-message="$getValidationErrors('code')"
          :error="$hasValidationErrors('code')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Select Category"
          v-model="formData.category_id"
          :useStore="catStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('category_id')"
          :error="$hasValidationErrors('category_id')"
        />
      </div>
      <div class="col-12">
        <q-input
          dense
          outlined
          v-model="formData.name"
          label="Name"
          lazy-rules
          hint
          :rules="[
            (val) => (val && val.length) || 'Please enter medicine name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.type"
          label="Type"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter type']"
          :error-message="$getValidationErrors('type')"
          :error="$hasValidationErrors('type')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.strength"
          label="Strength"
          lazy-rules
          hint
          :rules="[
            (val) => (val && val.length) || 'Please enter medicine strength',
          ]"
          :error-message="$getValidationErrors('strength')"
          :error="$hasValidationErrors('strength')"
        />
      </div>
      <div class="col-12">
        <q-input
          dense
          outlined
          type="textarea"
          v-model="formData.description"
          label="Description"
          lazy-rules
          hint
          :rules="[
            (val) => (val && val.length) || 'Please enter medicine description',
          ]"
          :error-message="$getValidationErrors('description')"
          :error="$hasValidationErrors('description')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.manufacturer"
          label="Manufacturer"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter manufacturer']"
          :error-message="$getValidationErrors('manufacturer')"
          :error="$hasValidationErrors('manufacturer')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          readonly
          label="Manufacture Date"
          v-model="formData.mfg_date"
          mask="date"
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
                <q-date v-model="formData.mfg_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          readonly
          label="Expiry Date"
          v-model="formData.exp_date"
          mask="date"
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
                <q-date v-model="formData.exp_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.unit_price"
          label="Unit price"
          v-on:keypress="NumbersOnly"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter unit price']"
          :error-message="$getValidationErrors('unit_price')"
          :error="$hasValidationErrors('unit_price')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.quantity_in_stock"
          label="Quantity in stock"
          lazy-rules
          v-on:keypress="NumbersOnly"
          hint
          :rules="[
            (val) => (val && val.length) || 'Please enter quantity in stock',
          ]"
          :error-message="$getValidationErrors('quantity_in_stock')"
          :error="$hasValidationErrors('quantity_in_stock')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.cost_price"
          label="Cost price"
          lazy-rules
          v-on:keypress="NumbersOnly"
          hint
          :rules="[(val) => (val && val.length) || 'Please enter cost price']"
          :error-message="$getValidationErrors('cost_price')"
          :error="$hasValidationErrors('cost_price')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.selling_price"
          label="Selling price"
          lazy-rules
          v-on:keypress="NumbersOnly"
          hint
          :rules="[
            (val) => (val && val.length) || 'Please enter selling price',
          ]"
          :error-message="$getValidationErrors('selling_price')"
          :error="$hasValidationErrors('selling_price')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="statusList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="status"
          outlined
          v-model="formData.status"
          dense
          label="Status"
          :rules="[(val) => (val && val.length) || 'Please select status']"
          :error-message="$getValidationErrors('status')"
          :error="$hasValidationErrors('status')"
        />
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "stores/MedicineManage/category";

export default {
  name: "CreateBedType",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const catStore = useCategoryStore();
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const NumbersOnly = (evt) => {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    return {
      formData,
      statusList: [
        { label: "Available", value: "Available" },
        { label: "Not Available", value: "Not Available" },
      ],
      NumbersOnly,
      catStore,
    };
  },
};
</script>
