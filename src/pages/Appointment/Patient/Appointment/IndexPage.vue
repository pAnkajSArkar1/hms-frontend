<template>
  <q-page class="container">
    <div class="q-py-md">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <h1 class="main-heading">Book an appointment</h1>
          <div>You can book an appointment with a doctor of your choice.</div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-4 col-lg-4 flex"
          :class="$q.platform.is.mobile ? 'justify-center' : 'justify-end'"
        >
          <q-img
            src="~assets/images/appointment.jpg"
            spinner-color="white"
            :class="$q.platform.is.mobile ? '' : 'page-image'"
          />
        </div>
      </div>
      <q-form @submit="onSubmit">
        <div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Select the doctor of your choice</h2>
              <div>
                Select the doctor of your liking from the dropdown below.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <QSearch
                    label="Select Doctor"
                    :useStore="docStore"
                    optionValue="id"
                    optionLabel="name"
                    v-model="authStore.makeAppointment.doctor_id"
                    outlined
                    dense
                    square
                    :error-message="$getValidationErrors('doctor_id')"
                    :error="$hasValidationErrors('doctor_id')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Provide a date for appointment</h2>
              <div>Enter the date when you want your appointment</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    outlined
                    dense
                    readonly
                    label="Date for Appointment"
                    v-model="authStore.makeAppointment.appointment_date"
                    mask="date"
                    :rules="[
                      (val) =>
                        (val && val.length) ||
                        'Please enter date for the appointment',
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
                          <q-date
                            v-model="authStore.makeAppointment.appointment_date"
                          >
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Provide a Source</h2>
              <div>Mention your source below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    dense
                    outlined
                    v-model="authStore.makeAppointment.source"
                    square
                    placeholder="Source"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div> -->

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Nature of appointment priority</h2>
              <div>
                According to reasons or emergencies, Select a priority.<br />
                Abusing it may ban you from future appointments.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-select
                    :options="priorityList"
                    map-options
                    emit-value
                    option-label="label"
                    option-value="value"
                    type="priority"
                    outlined
                    clearable
                    v-model="authStore.makeAppointment.priority"
                    dense
                    label="Priority"
                    :rules="[
                      (val) =>
                        (val && val.length) || 'Please select a priority',
                    ]"
                    :error-message="$getValidationErrors('priority')"
                    :error="$hasValidationErrors('priority')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Consultantant Type</h2>
              <div>
                If you have any specific type of consultant.<br />
                Then please mention it below.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <!-- <q-input
                    dense
                    outlined
                    v-model="authStore.makeAppointment.consultantant_type"
                    square
                    placeholder="Consultantant Type"
                  /> -->
                  <q-select
                    :options="modeList"
                    map-options
                    emit-value
                    option-label="label"
                    option-value="value"
                    type="mode"
                    outlined
                    clearable
                    v-model="authStore.makeAppointment.consultantant_type"
                    dense
                    label="Mode"
                    :rules="[
                      (val) => (val && val.length) || 'Please select a Mode',
                    ]"
                    :error-message="$getValidationErrors('consultantant_type')"
                    :error="$hasValidationErrors('consultantant_type')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Any Messages</h2>
              <div>
                If you have any message concerning the appointment<br />
                Then please mention it below.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    dense
                    outlined
                    square
                    v-model="authStore.makeAppointment.message"
                    placeholder="Message"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Appointment Time</h2>
              <div>
                If you have any specific range of time in which you need the
                appointment to be in between.<br />
                Then please mention it below.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-6 col-lg-6">
                  <q-input
                    dense
                    outlined
                    square
                    label="From"
                    readonly
                    v-model="authStore.makeAppointment.from_time"
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
                          <q-time v-model="authStore.makeAppointment.from_time">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
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
                    v-model="authStore.makeAppointment.to_time"
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
                          <q-time v-model="authStore.makeAppointment.to_time">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="flex justify-end q-pt-md">
            <q-btn type="primary" color="primary">Make Appointment</q-btn>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { getCurrentInstance, ref, onMounted } from "vue";
import { useAppointmentStore } from "stores/Appointment/makeAppointment/index";
import { useAuthStore } from "stores/auth/index";
import { useShowDoctorStore } from "stores/showDoctors";

export default {
  name: "DescriptionPage",
  setup() {
    const appointmentStore = useAppointmentStore();
    const authStore = useAuthStore();
    const docStore = useShowDoctorStore();
    const { fetchAuthUser } = authStore;
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const onSubmit = () => {
      authStore
        .createAppointment()
        .then((response) => {
          console.log("A", authStore.makeAppointment.slot);
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
        })
        .catch((error) => {
          let formatted_message = "";
          if (error.response.data.message) {
            formatted_message = error.response.data.message;
          } else {
            formatted_message = error.response.data.error;
          }

          Qnotify({
            message: formatted_message,
            type: "negative",
          });
        });
    };

    onMounted(() => {
      fetchAuthUser();
    });

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
      onSubmit,
      priorityList: [
        { label: "No Urgency", value: "No Urgency" },
        { label: "Urgent", value: "Urgent" },
        { label: "Emergency", value: "Emergency" },
      ],
      modeList: [
        { label: "Online", value: "Online" },
        { label: "Offline", value: "Offline" },
      ],
      NumbersOnly,
      authStore,
      docStore,
      appointmentStore,
    };
  },
};
</script>

<style scoped>
.main-heading {
  font-size: 21px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
.form-heading {
  font-size: 18px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
.page-image {
  height: 150px;
  max-width: 150px;
}
</style>
