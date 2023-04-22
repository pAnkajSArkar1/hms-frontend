<template>
  <QEditForm :useStore="useStore" title="Edit Appointment">
    <div class="row q-col-gutter-md q-pb-md">
      <div class="col-12">
        <q-input
          label="Name"
          v-model="formData.name"
          outlined
          dense
          square
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12">
        <q-input
          label="Email"
          type="email"
          v-model="formData.email"
          outlined
          dense
          square
          :error-message="$getValidationErrors('email')"
          :error="$hasValidationErrors('email')"
        />
      </div>
      <div class="col-12">
        <q-input
          label="Address"
          v-model="formData.address"
          outlined
          type="textarea"
          dense
          square
          :error-message="$getValidationErrors('address')"
          :error="$hasValidationErrors('address')"
        />
      </div>
      <div class="col-12">
        <q-input
          label="Purpose of visiting"
          v-model="formData.purpose_of_visiting"
          outlined
          dense
          square
          :error-message="$getValidationErrors('purpose_of_visiting')"
          :error="$hasValidationErrors('purpose_of_visiting')"
        />
      </div>

      <div class="col-12">
        <q-input
          outlined
          dense
          readonly
          label="Date of visiting"
          v-model="formData.date_of_visiting"
          mask="date"
          :error-message="$getValidationErrors('date_of_visiting')"
          :error="$hasValidationErrors('date_of_visiting')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formData.date_of_visiting">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <q-input
          dense
          outlined
          v-on:keypress="NumbersOnly"
          maxlength="12"
          minlength="12"
          v-model="formData.aadhar_no"
          square
          placeholder="Adhaar No"
          :error-message="$getValidationErrors('aadhar_no')"
          :error="$hasValidationErrors('aadhar_no')"
        />
      </div>
      <div class="col-12">
        <q-select
          :options="vaccinationList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="vaccination"
          outlined
          clearable
          v-model="formData.vaccination_status"
          dense
          label="Vaccination Status"
          :error-message="$getValidationErrors('vaccination_status')"
          :error="$hasValidationErrors('vaccination_status')"
        />
      </div>

      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            dense
            outlined
            square
            label="From"
            readonly
            v-model="formData.from_time"
            mask="time"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="formData.from_time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            dense
            outlined
            square
            label="To"
            readonly
            v-model="formData.to_time"
            mask="time"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="formData.to_time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useShowDoctorStore } from "stores/showDoctors";

export default {
  name: "EditBedType",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const docStore = useShowDoctorStore();
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
      NumbersOnly,
      docStore,
      vaccinationList: [
        { label: "1st Dose", value: "1st Dose" },
        { label: "2nd Dose", value: "2nd Dose" },
        { label: "Both Doses", value: "Both Doses" },
      ],
    };
  },
};
</script>
