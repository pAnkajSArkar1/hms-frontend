<template>
  <QEditForm :useStore="useStore" title="Edit Appointment">
    <div class="row q-col-gutter-md q-pb-md">
      <div class="col-12">
        <QSearch
          label="Select Speciality"
          :useStore="specialityStore"
          optionValue="id"
          disable
          optionLabel="name"
          v-model="formData.doctors_speciality_id"
          outlined
          dense
          square
          @update:modelValue="onSpecialitySelect"
          :error-message="$getValidationErrors('doctors_speciality_id')"
          :error="$hasValidationErrors('doctors_speciality_id')"
        />
      </div>
      <div class="col-12">
        <q-select
          dense
          v-model="formData.doctor_id"
          outlined
          :options="doctorOptions"
          label="Select Doctor"
          optionValue="id"
          optionLabel="name"
          emit-value
          map-options
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
            :rules="['time']"
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
            :rules="['time']"
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
import { reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useShowDoctorStore } from "stores/showDoctors";
import { useUserStore } from "stores/doctorManage";
import { useSpecialityStore } from "stores/doctorSpeciality";

export default {
  name: "EditBedType",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const specialityStore = useSpecialityStore();
    const doctorOptions = ref([]);
    const docStore = useShowDoctorStore();
    const showdocStore = useUserStore();
    const { getItems: getDoctor } = showdocStore;
    const { formData } = storeToRefs(useStore);

    const onSpecialitySelect = () => {
      console.log("floor_id", formData.value.doctors_speciality_id);
      // console.log("ds", formData.value.doctors_speciality_id);
      if (formData.value.doctors_speciality_id !== null) {
        getDoctor({
          all: true,
          doctors_speciality_id: formData.value.doctors_speciality_id,
        }).then((response) => {
          doctorOptions.value = response.data;
          console.log("option", doctorOptions.value);
        });
      }
    };
    watch(
      () => {
        return formData.value.doctors_speciality_id;
      },
      (first, second) => {
        formData.value.doctor_id = null;
      }
    );
    return {
      formData,
      showdocStore,
      doctorOptions,
      specialityStore,
      onSpecialitySelect,
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
