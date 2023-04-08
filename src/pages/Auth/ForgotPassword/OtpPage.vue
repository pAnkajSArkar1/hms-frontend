<template>
  <q-page class="flex flex-center">
    <q-card flat class="card-min-width">
      <q-form @submit.prevent="submitForm">
        <q-card-section class="row justify-center q-pb-xs">
          <div class="text-h5 text-center text-weight-bold text-grey-9">
            Email Verification
          </div>
        </q-card-section>
        <q-card-section class="q-py-none">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pt-sm">
            <q-input
              dense
              outlined
              label="Enter Your Email"
              type="email"
              v-model="passwordReset.email"
              :rules="[
                (val) => (val && val.length) || $t('Email Field Is Required'),
              ]"
              :error-message="$getValidationErrors('email')"
              :error="$hasValidationErrors('email')"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section class="col-12 col-sm-12 col-md-12 col-lg-12 q-pt-none">
          <q-btn
            color="primary"
            label="Send OTP"
            class="full-width"
            unelevated
            :loading="loader"
            outlined
            type="submit"
          />
        </q-card-section>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { ref, defineComponent, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth/index";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const loader = ref(false);
    // const $q = useQuasar();

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
        .sendOTP()
        .then((response) => {
          loader.value = false;
          clearValidationErrors();
          Qnotify({
            message: "OTP Sent Please Check Your Email",
            type: "positive",
          });
          router.push("/forgot-password/verification");
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

    return {
      store,
      loader,
      submitForm,
      passwordReset,
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
