<template>
  <q-page class="container">
    <div class="q-py-md">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <h1 class="main-heading">Make a Visit</h1>
          <div>You can visit the hospital by filling up this form.</div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-4 col-lg-4 flex"
          :class="$q.platform.is.mobile ? 'justify-center' : 'justify-end'"
        >
          <q-img
            src="~assets/images/visit.jpg"
            spinner-color="white"
            :class="$q.platform.is.mobile ? '' : 'page-image'"
          />
        </div>
      </div>
      <q-form @submit="onSubmit">
        <div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Your Name</h2>
              <div>Enter your name in the feild below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    label="Name"
                    v-model="authStore.makeVisitor.name"
                    outlined
                    dense
                    square
                    :error-message="$getValidationErrors('name')"
                    :error="$hasValidationErrors('name')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Your Email</h2>
              <div>Enter your working email in the feild below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    label="Email"
                    type="email"
                    v-model="authStore.makeVisitor.email"
                    outlined
                    dense
                    square
                    :error-message="$getValidationErrors('email')"
                    :error="$hasValidationErrors('email')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Your Address</h2>
              <div>Enter your current address in the feild below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    label="Address"
                    v-model="authStore.makeVisitor.address"
                    outlined
                    type="textarea"
                    dense
                    square
                    :error-message="$getValidationErrors('address')"
                    :error="$hasValidationErrors('address')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">The purpose behind visiting</h2>
              <div>
                Enter your purpose behind visitng us in the feild below.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    label="Purpose of visiting"
                    v-model="authStore.makeVisitor.purpose_of_visiting"
                    outlined
                    dense
                    square
                    :error-message="$getValidationErrors('purpose_of_visiting')"
                    :error="$hasValidationErrors('purpose_of_visiting')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Provide a date for visiting</h2>
              <div>Enter the date when you want to visit us.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    outlined
                    dense
                    readonly
                    label="Date of visiting"
                    v-model="authStore.makeVisitor.date_of_visiting"
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
                          <q-date
                            v-model="authStore.makeVisitor.date_of_visiting"
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

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Your Adhaar No</h2>
              <div>Mention your Adhaar No. below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-input
                    dense
                    outlined
                    v-on:keypress="NumbersOnly"
                    maxlength="12"
                    minlength="12"
                    v-model="authStore.makeVisitor.aadhar_no"
                    square
                    placeholder="Adhaar No"
                    :error-message="$getValidationErrors('aadhar_no')"
                    :error="$hasValidationErrors('aadhar_no')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Covid-19 Vaccination Status</h2>
              <div>
                Enter the covid-19 vaccination you have been,<br />
                Vaccinated with.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-9 col-lg-9">
                  <q-select
                    :options="vaccinationList"
                    map-options
                    emit-value
                    option-label="label"
                    option-value="value"
                    type="vaccination"
                    outlined
                    clearable
                    v-model="authStore.makeVisitor.vaccination_status"
                    dense
                    label="Vaccination Status"
                    :error-message="$getValidationErrors('vaccination_status')"
                    :error="$hasValidationErrors('vaccination_status')"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Visiting Time</h2>
              <div>
                A specific range of time in which you would like to visit.<br />
                Please mention it below.
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
                    v-model="authStore.makeVisitor.from_time"
                    mask="time"
                  >
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time v-model="authStore.makeVisitor.from_time">
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
                    v-model="authStore.makeVisitor.to_time"
                    mask="time"
                  >
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time v-model="authStore.makeVisitor.to_time">
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
import { useAuthStore } from "stores/auth/index";

export default {
  name: "DescriptionPage",
  setup() {
    const authStore = useAuthStore();
    const { fetchAuthUser } = authStore;
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const onSubmit = () => {
      authStore
        .createVisitor()
        .then((response) => {
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
      vaccinationList: [
        { label: "1st Dose", value: "1st Dose" },
        { label: "2nd Dose", value: "2nd Dose" },
        { label: "Both Doses", value: "Both Doses" },
      ],

      NumbersOnly,
      authStore,
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
