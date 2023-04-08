<template>
  <q-page class="flex flex-center">
    <q-card flat class="card-min-width">
      <q-form @submit.prevent="submitForm">
        <q-card-section class="row justify-center q-pb-xs">
          <div class="text-h5 text-center text-weight-bold text-grey-9">
            Reset Password
          </div>
        </q-card-section>
        <q-card-section class="q-py-xs">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pt-sm">
            <q-input
              :type="isPwd ? 'password' : 'text'"
              dense
              outlined
              label="New Password"
              v-model="passwordReset.password"
              :rules="[
                (val) =>
                  (val && val.length) || $t('New Password cannot be empty'),
              ]"
              :error-message="$getValidationErrors('password')"
              :error="$hasValidationErrors('password')"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="col-12" v-if="passwordReset.password != ''">
            <q-input
              :type="isNewPwd ? 'password' : 'text'"
              dense
              outlined
              label="Confirm Password"
              v-model="passwordReset.password_confirmation"
              :rules="[
                (val) =>
                  (val && val.length) || $t('Confirm Password cannot be empty'),
              ]"
              :error-message="$getValidationErrors('password_confirmation')"
              :error="$hasValidationErrors('password_confirmation')"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isNewPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isNewPwd = !isNewPwd"
                />
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section class="col-12 col-sm-12 col-md-12 col-lg-12 q-pt-none">
          <q-btn
            color="primary"
            label="Change Password"
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
        .resetPassword()
        .then((response) => {
          loader.value = false;
          clearValidationErrors();
          Qnotify({
            message: "Password Changed",
            type: "positive",
          });
          router.push("/login");
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
      noRules: [
        (val) => (val !== null && val !== "") || "Please Enter 6 Digit Code",
        (val) => val.length === 6 || "Code must be of 6 digits",
      ],
      isPwd: ref(true),
      isNewPwd: ref(true),
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
