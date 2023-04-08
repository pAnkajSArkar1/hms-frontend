<template>
  <q-page class="flex flex-center">
    <q-card flat class="card-min-width">
      <q-form @submit.prevent="submitForm">
        <q-card-section class="row justify-center q-pb-xs">
          <div class="text-h5 text-center text-weight-bold text-grey-9">
            Verify OTP
          </div>
        </q-card-section>
        <q-card-section class="q-py-xs">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pt-sm">
            <q-input
              dense
              outlined
              v-on:keypress="NumbersOnly"
              label="6 Digit Code"
              maxlength="6"
              v-model="passwordReset.otp"
              :rules="noRules"
              :error-message="$getValidationErrors('otp')"
              :error="$hasValidationErrors('otp')"
            >
              <template v-slot:append>
                <p
                  class="text-center q-pt-md text-amber-9"
                  style="font-size: 14px"
                  v-if="setTime > 0"
                >
                  {{ setTime }}s
                </p>
                <q-btn
                  label="Resend code"
                  text-color="amber-9"
                  flat
                  v-else
                  uneleveted
                  no-caps
                  @click="resendOTP"
                  :loading="resetBtn"
                />
              </template>
            </q-input>
          </div>
        </q-card-section>
        <q-card-section class="col-12 col-sm-12 col-md-12 col-lg-12 q-pt-none">
          <q-btn
            color="primary"
            label="Verify OTP"
            class="full-width"
            unelevated
            :loading="loader"
            outlined
            type="submit"
          />
        </q-card-section>
      </q-form>
      <p class="q-mb-xs text-center text-amber-9">
        Please do not refresh this page !
      </p>
    </q-card>
  </q-page>
</template>

<script>
import {
  ref,
  defineComponent,
  getCurrentInstance,
  onMounted,
  watch,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth/index";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const loader = ref(false);
    const setTime = ref(30);
    const resetBtn = ref(false);

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

    const { passwordReset } = storeToRefs(store);

    const app = getCurrentInstance();
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;

    function submitForm() {
      loader.value = true;
      store
        .verifyOTP()
        .then((response) => {
          loader.value = false;
          clearValidationErrors();
          Qnotify({
            message: "OTP Verified Successfully",
            type: "positive",
          });
          router.push("/forgot-password/reset-password");
        })
        .catch((error) => {
          loader.value = false;
          let formatted_message = error.response.data.message;
          let errorMessages = {};
          if (error.response.data.errors) {
            errorMessages = error.response.data.errors;
          }
          setValidationErrors(errorMessages);
          Qnotify({
            message: formatted_message,
            type: "negative",
          });
        });
    }

    const resendOTP = () => {
      resetBtn.value = true;
      store
        .sendOTP()
        .then((response) => {
          loader.value = false;
          resetBtn.value = false;
          setTime.value = 30;
          clearValidationErrors();
          Qnotify({
            message: "OTP Sent Please Check Your Email",
            type: "positive",
          });
        })
        .catch((error) => {
          console.log("chekcing error", { error });
          loader.value = false;
          resetBtn.value = false;
          let formatted_message = error?.response?.data?.message;
          let errorMessages = {};
          if (error?.response?.data?.errors) {
            errorMessages = error?.response?.data?.errors;
          }
          setValidationErrors(errorMessages);
          Qnotify({
            message: formatted_message,
            type: "negative",
          });
        });
    };

    watch(
      setTime,
      (newTime, oldTime) => {
        if (setTime.value > 0) {
          setTimeout(() => {
            setTime.value--;
          }, 1000);
        }
      },
      { immediate: true }
    );

    return {
      store,
      setTime,
      resetBtn,
      loader,
      submitForm,
      passwordReset,
      NumbersOnly,
      resendOTP,
      noRules: [
        (val) => (val !== null && val !== "") || "Please Enter 6 Digit Code",
        (val) => val.length === 6 || "Code must be of 6 digits",
      ],
    };
  },
});
</script>

<style lang="sass">
.card-min-width
  min-width: 400px
</style>

<style scoped>
.forgot-pass {
  text-decoration: none;
}
</style>
