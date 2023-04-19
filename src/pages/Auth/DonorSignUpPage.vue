<template>
  <q-page class="flex flex-center">
    <q-card class="card-min-width">
      <q-form @submit.prevent="submitForm" autocomplete="off">
        <q-card-section class="row justify-center">
          <div class="col-12 text-h5 text-center text-weight-bold text-grey-9">
            Sign Up
          </div>
          <div class="row q-pt-md">
            <div>Already Signed Up?</div>
            <div class="flex justify-end q-pl-sm">
              <router-link to="/donor-login" class="text-weight-bold links">
                Login
              </router-link>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pb-sm">
          <div class="col-12">
            <QSearch
              label="Select Hospital"
              v-model="signup.company_id"
              :useStore="companyStore"
              optionValue="id"
              optionLabel="name"
              :error-message="$getValidationErrors('company_id')"
              :error="$hasValidationErrors('company_id')"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
            <q-input
              dense
              outlined
              label="Name"
              v-model="signup.name"
              :rules="[
                (val) => (val && val.length) || $t('Invalid Credentials'),
              ]"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
            >
              <template v-slot:prepend>
                <q-icon name="badge" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
            <q-input
              dense
              outlined
              label="Email"
              type="email"
              v-model="signup.email"
              :rules="[
                (val) => (val && val.length) || $t('Invalid Credentials'),
              ]"
              :error-message="$getValidationErrors('email')"
              :error="$hasValidationErrors('email')"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
            <q-input
              dense
              outlined
              label="Primary contact"
              type="number"
              v-model="signup.primary_contact"
              :rules="[
                (val) => (val && val.length) || $t('Invalid Credentials'),
              ]"
              :error-message="$getValidationErrors('primary_contact')"
              :error="$hasValidationErrors('primary_contact')"
            >
              <template v-slot:prepend>
                <q-icon name="call" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
            <q-input
              dense
              outlined
              label="Password"
              v-model="signup.password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val) => (val && val.length) || $t('Invalid Credentials'),
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
          <div class="col-12">
            <q-input
              :type="isNewPwd ? 'password' : 'text'"
              dense
              outlined
              label="Confirm Password"
              v-model="signup.confirm_password"
              :rules="[
                (val) =>
                  (val && val.length) || $t('Confirm Password cannot be empty'),
              ]"
              :error-message="$getValidationErrors('confirm_password')"
              :error="$hasValidationErrors('confirm_password')"
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
        <q-card-section class="col-12 col-sm-12 col-md-12 col-lg-12">
          <q-btn
            color="primary"
            label="Create Account"
            class="full-width"
            unelevated
            icon="login"
            :loading="loader"
            outlined
            type="submit"
          />
        </q-card-section>
      </q-form>

      <!-- <q-separator />

      <q-card-section class="row justify-center text-center">
        <div>
          Forgot your password?
          <router-link to="/forgot-password" class="forgot-pass">
            Reset It Here
          </router-link>
        </div>
        <div></div>
      </q-card-section> -->
    </q-card>
  </q-page>
</template>

<script>
import { ref, defineComponent, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth/index";
import { useCompanyStore } from "stores/getCompany";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const companyStore = useCompanyStore();
    const loader = ref(false);
    const $q = useQuasar();

    const { signup } = storeToRefs(store);

    const app = getCurrentInstance();
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;

    function submitForm() {
      loader.value = true;
      store
        .signupDonor()
        .then((response) => {
          loader.value = false;
          clearValidationErrors();
          Qnotify({
            message: "Account Created successfull",
            type: "positive",
          });

          router.push("/donor-login");
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
      companyStore,
      loader,
      submitForm,
      isPwd: ref(true),
      isNewPwd: ref(true),
      signup,
    };
  },
});
</script>

<style lang="sass">
.card-min-width
  min-width: 400px
</style>

<style scoped>
.links {
  text-decoration: none;
  color: #1b7af6;
}
</style>
