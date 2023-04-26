<template>
  <QEditForm :useStore="useStore" :getItems="getItems" title="Edit Sales">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Select Patient"
          v-model="formData.patient_id"
          :useStore="usePatientStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('patient_id')"
          :error="$hasValidationErrors('patient_id')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          v-model="formData.amount_paid"
          label="Amount paid"
          v-on:keypress="NumbersOnly"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter amount paid']"
          :error-message="$getValidationErrors('amount_paid')"
          :error="$hasValidationErrors('amount_paid')"
        />
      </div>
    </div>
    <div
      class="row q-col-gutter-md col-12 q-pb-md"
      v-for="(
        categories_and_medicine, index
      ) in formData.categories_and_medicines"
      :key="categories_and_medicine"
    >
      <div class="col-10">
        <p class="form-heading">Medicine Details</p>
      </div>
      <div class="col-2 col-md-2 col-lg-2">
        <q-btn
          flat
          round
          class="deleterow"
          color="red"
          icon="delete"
          @click="remove(index)"
        >
          <q-tooltip> Delete Medicine </q-tooltip>
        </q-btn>
      </div>

      <div class="col-12">
        <QSearch
          label="Select Category"
          v-model="categories_and_medicine.category_id"
          :useStore="useCatStore"
          optionValue="id"
          optionLabel="name"
          @update:modelValue="onCategorySelect(index)"
          :error-message="$getValidationErrors('category_id')"
          :error="$hasValidationErrors('category_id')"
        />
      </div>
      <div class="col-12 col-md-7 col-lg-7">
        <q-select
          dense
          v-model="categories_and_medicine.medicine_id"
          outlined
          :options="medsOptions"
          label="Select Medicine"
          optionValue="id"
          optionLabel="name"
          emit-value
          map-options
          :error-message="$getValidationErrors('medicine_id')"
          :error="$hasValidationErrors('medicine_id')"
        />
      </div>
      <div class="col-12 col-md-5 col-lg-5">
        <q-input
          dense
          outlined
          v-model="categories_and_medicine.quantity"
          label="Quantity"
          v-on:keypress="NumbersOnly"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter quantity']"
          :error-message="$getValidationErrors('quantity')"
          :error="$hasValidationErrors('quantity')"
        />
      </div>
    </div>
    <div class="flex flex-center q-pb-md">
      <div>
        <q-btn
          flat
          round
          class="addrow bg-cyan-1"
          color="primary"
          @click="add"
          icon="add"
        >
          <q-tooltip> Add Medicine </q-tooltip>
        </q-btn>
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "stores/MedicineManage/category";
import { useMedicineStore } from "stores/MedicineManage/medicine";
import { useMedicineSalesStore } from "stores/MedicineManage/medicineSales";
import { useShowPatientStore } from "stores/showPatient/index";

export default {
  name: "EditBedList",

  setup() {
    const useCatStore = useCategoryStore();
    const useMedStore = useMedicineStore();
    const useStore = useMedicineSalesStore();
    const usePatientStore = useShowPatientStore();
    const { formData, getItems } = storeToRefs(useStore);
    const { getItems: getMeds } = useMedStore;

    const medsOptions = ref([]);

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

    const add = () => {
      formData.value.categories_and_medicines.push({
        category_id: null,
        medicine_id: null,
        quantity: null,
      });
    };
    const remove = (index) => {
      formData.value.categories_and_medicines.splice(index, 1);
    };

    const onCategorySelect = (index) => {
      if (formData.value.categories_and_medicines[index].category_id !== null) {
        getMeds({
          all: true,
          category_id:
            formData.value.categories_and_medicines[index].category_id,
        }).then((response) => {
          medsOptions.value = response.data;
          console.log("option", medsOptions.value);
        });
      }
    };
    watch(
      () => {
        return formData.value.category_id;
      },
      (first, second) => {
        formData.value.medicine_id = null;
      }
    );

    return {
      useCatStore,
      useMedStore,
      onCategorySelect,
      formData,
      useStore,
      medsOptions,
      getItems,
      usePatientStore,
      NumbersOnly,
      add,
      remove,
    };
  },
};
</script>

<style scoped>
.form-heading {
  font-size: 18px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
</style>
