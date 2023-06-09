<template>
  <BloodPatient />

  <q-page class="container">
    <div class="q-py-md">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <h1 class="main-heading">Receive blood in your time of need</h1>
          <div>The blood you are receiving will help in saving your life.</div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-4 col-lg-4 flex"
          :class="$q.platform.is.mobile ? 'justify-center' : 'justify-end'"
        >
          <q-img
            src="~assets/images/bloodReceive.jpg"
            spinner-color="white"
            :class="$q.platform.is.mobile ? '' : 'page-image'"
          />
        </div>
      </div>
      <q-form @submit="onSubmit">
        <div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Select your blood group</h2>
              <div>
                Please answer this correctly as it is regarding your own safety.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <q-select
                  :options="bloodList"
                  map-options
                  emit-value
                  v-model="requestStore.requestBlood.blood_group"
                  option-label="label"
                  option-value="value"
                  type="blood"
                  outlined
                  dense
                  square
                  label="Blood Group"
                  :error-message="$getValidationErrors('blood_group')"
                  :error="$hasValidationErrors('blood_group')"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Amount of Blood you want to receive</h2>
              <div>Enter the amount of units(ml)</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <q-input
                  dense
                  v-on:keypress="NumbersOnly"
                  outlined
                  v-model="requestStore.requestBlood.units_in_ml"
                  square
                  placeholder="Example: 10"
                  :error-message="$getValidationErrors('primary_contact')"
                  :error="$hasValidationErrors('primary_contact')"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Reason for requesting blood</h2>
              <div>
                If you have any specific reasons for which you are requesting
                blood.<br />
                Then please mention it below.
              </div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <q-input
                  v-model="requestStore.requestBlood.reason"
                  dense
                  outlined
                  square
                  type="textarea"
                  placeholder="Reason for requesting blood"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="flex justify-end q-pt-md">
            <q-btn type="primary" color="primary">Request</q-btn>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
import { useBloodRequestStore } from "stores/bloodbank/requestBlood/index";

export default {
  name: "DescriptionPage",
  setup() {
    const requestStore = useBloodRequestStore();
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const onSubmit = () => {
      requestStore
        .makeRequest()
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
      bloodList: [
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "AB+", value: "AB+" },
        { label: "AB-", value: "AB-" },
      ],
      NumbersOnly,
      requestStore,
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
