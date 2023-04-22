<template>
  <QEditForm :useStore="useStore" title="Edit Appointment">
    <div class="row q-col-gutter-md q-pb-md">
      <div class="col-12">
        <QSearch
          label="Select Doctor"
          :useStore="docStore"
          optionValue="id"
          optionLabel="name"
          v-model="formData.doctor_id"
          outlined
          dense
          square
          :error-message="$getValidationErrors('doctor_id')"
          :error="$hasValidationErrors('doctor_id')"
        />
      </div>
      <div class="col-12">
        <q-input
          outlined
          dense
          readonly
          label="Date for Appointment"
          v-model="formData.appointment_date"
          mask="date"
          :rules="[
            (val) =>
              (val && val.length) || 'Please enter date for the appointment',
          ]"
          :error-message="$getValidationErrors('appointment_date')"
          :error="$hasValidationErrors('appointment_date')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formData.appointment_date">
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
        <q-select
          :options="priorityList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="priority"
          outlined
          clearable
          v-model="formData.priority"
          dense
          label="Priority"
          :rules="[(val) => (val && val.length) || 'Please select a priority']"
          :error-message="$getValidationErrors('priority')"
          :error="$hasValidationErrors('priority')"
        />
      </div>
      <div class="col-12">
        <q-select
          :options="modeList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="mode"
          outlined
          clearable
          v-model="formData.consultantant_type"
          dense
          label="Mode"
          :rules="[(val) => (val && val.length) || 'Please select a Mode']"
          :error-message="$getValidationErrors('consultantant_type')"
          :error="$hasValidationErrors('consultantant_type')"
        />
      </div>
      <div class="col-12">
        <q-input
          dense
          outlined
          square
          v-model="formData.message"
          label="Message"
        />
      </div>
      <!-- <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          square
          label="From"
          readonly
          v-model="formData.slot_from"
          mask="time"
          :rules="['time']"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="formData.slot_from">
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
          v-model="formData.slot_to"
          mask="time"
          :rules="['time']"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="formData.slot_to">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div> -->
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

    return {
      formData,
      docStore,
      priorityList: [
        { label: "No Urgency", value: "No Urgency" },
        { label: "Urgent", value: "Urgent" },
        { label: "Emergency", value: "Emergency" },
      ],
      modeList: [
        { label: "Online", value: "Online" },
        { label: "Offline", value: "Offline" },
      ],
    };
  },
};
</script>
