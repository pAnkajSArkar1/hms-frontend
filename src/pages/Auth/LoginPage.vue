<template>
  <q-page class="flex flex-center">
    <q-card class="card-min-width">
      <q-form @submit.prevent="submitForm" autocomplete="off">
        <q-card-section class="row justify-center">
          <div class="text-h5 text-center text-weight-bold text-grey-9">
            Login
          </div>
        </q-card-section>
        <q-card-section class="q-pb-sm">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
            <q-input
              dense
              outlined
              label="Email"
              type="email"
              v-model="login.email"
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
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <q-input
              dense
              outlined
              label="Password"
              v-model="login.password"
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
          <div class="flex justify-end">
            <router-link to="/forgot-password" class="text-weight-bold links">
              Forgot your password?
            </router-link>
          </div>
        </q-card-section>
        <q-card-section class="col-12 col-sm-12 col-md-12 col-lg-12">
          <q-btn
            color="primary"
            label="Login"
            class="full-width"
            unelevated
            icon="login"
            :loading="loader"
            outlined
            type="submit"
          />
        </q-card-section>
      </q-form>

      <q-separator />

      <q-card-section class="row justify-center text-center">
        <div>Don't have an account yet ?</div>
        <div class="flex justify-end q-pl-sm">
          <router-link to="/signup" class="text-weight-bold links">
            Sign Up
          </router-link>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, defineComponent, getCurrentInstance, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth/index";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const loader = ref(false);
    const $q = useQuasar();
    const { fetchAuthUser } = store;
    const { login } = storeToRefs(store);

    const app = getCurrentInstance();
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;

    onMounted(() => {});
    function submitForm() {
      loader.value = true;
      store
        .loginUser()
        .then((response) => {
          loader.value = false;
          fetchAuthUser();
          clearValidationErrors();
          Qnotify({
            message: "Login successfull",
            type: "positive",
          });
          if (
            store.authUser.user_role.role.code === "sadmin" ||
            store.authUser.user_role.role.code === "admin"
          ) {
            router.push("/home");
          } else if (store.authUser.user_role.role.code === "blood_donor") {
            router.push("/donor-dashboard");
          } else if (store.authUser.user_role.role.code === "blood_reciever") {
            router.push("/receiver-dashboard");
          } else if (store.authUser.user_role.role.code === "regd_patient") {
            router.push("/make-appointment");
          } else if (store.authUser.user_role.role.code === "visitor") {
            router.push("/visit");
          } else if (store.authUser.user_role.role.code === "pharmacist") {
            router.push("/medicine-list");
          } else if (store.authUser.user_role.role.code === "receptionist") {
            router.push("/patients-management");
          }
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
      isPwd: ref(true),
      login,
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
