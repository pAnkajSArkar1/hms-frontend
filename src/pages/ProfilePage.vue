<template>
  <q-page class="container q-pt-xl">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-8 col-lg-8">
        <h1 class="main-heading">Tell us who you are</h1>
        <div>
          Please provide your full legal name here as it is reqired for
          authentication.
          <br />
          If additional information is needed to, we will contact you.
        </div>
      </div>
      <div
        class="col-12 col-sm-12 col-md-4 col-lg-4 flex"
        :class="$q.platform.is.mobile ? 'justify-center' : 'justify-end'"
      >
        <q-img
          src="~assets/images/hotel/profile.svg"
          spinner-color="white"
          :class="$q.platform.is.mobile ? '' : 'page-image'"
        />
      </div>
    </div>
    <section class="q-pb-lg">
      <div>
        <h2 class="form-heading">User Details</h2>
      </div>
      <q-form class="col-12" @submit="onSubmit">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="row">
              <div
                class="col-12 col-sm-12 col-md-8 col-lg-8 row q-col-gutter-lg"
              >
                <div class="col-6">
                  <div class="q-pb-sm">
                    <label for="" class="text-weight-medium">Name</label>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12">
                      <q-input
                        dense
                        square
                        outlined
                        label="Name"
                        v-model="authUserStore.authUser.name"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="col-6">
                  <div class="q-pb-sm">
                    <label for="" class="text-weight-medium">User Name</label>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12">
                      <q-input
                        dense
                        outlined
                        square
                        label="Username"
                        v-model="authUserStore.authUser.username"
                      />
                    </div>
                  </div>
                </div> -->
                <div class="col-12">
                  <div class="q-pb-sm">
                    <label for="" class="text-weight-medium"
                      >Mobile phone number
                    </label>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-6">
                      <q-input
                        v-model="authUserStore.authUser.primary_contact"
                        v-on:keypress="NumbersOnly"
                        dense
                        maxlength="10"
                        outlined
                        square
                        placeholder="Type here"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="q-pb-sm">
                    <label for="" class="text-weight-medium"
                      >Primary Address (where you stay at least 8 months of the
                      year)
                    </label>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12">
                      <q-input
                        v-model="authUserStore.authUser.address"
                        dense
                        type="textarea"
                        outlined
                        square
                        placeholder="Type here"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end q-pt-md">
              <q-btn type="primary" color="primary">Update</q-btn>
            </div>
          </q-card-section>
        </q-card>
      </q-form>
    </section>

    <div class="row q-col-gutter-md">
      <q-form class="col-12" @submit="onSubmitPass">
        <div class="col-12">
          <div>
            <h2 class="form-heading">Change Password</h2>
          </div>
          <q-card flat bordered>
            <q-card-section class="">
              <div class="row">
                <div class="col-8">
                  <div class="q-col-gutter-md">
                    <div class="col-12">
                      <q-input
                        dense
                        square
                        outlined
                        :type="isPwd ? 'password' : 'text'"
                        label="Old Password"
                        v-model="authUserStore.credential.old_password"
                        :error-message="$getValidationErrors('old_password')"
                        :error="$hasValidationErrors('old_password')"
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
                        :type="isPwd1 ? 'password' : 'text'"
                        dense
                        outlined
                        label="New Password"
                        v-model="authUserStore.credential.password"
                        :error-message="$getValidationErrors('password')"
                        :error="$hasValidationErrors('password')"
                      >
                        <template v-slot:prepend>
                          <q-icon name="password" />
                        </template>
                        <template v-slot:append>
                          <q-icon
                            :name="isPwd1 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd1 = !isPwd1"
                          />
                        </template>
                      </q-input>
                    </div>

                    <div class="col-12">
                      <q-input
                        :type="isPwd2 ? 'password' : 'text'"
                        dense
                        outlined
                        label="Confirm Password"
                        v-model="authUserStore.credential.confirm_password"
                        :error-message="
                          $getValidationErrors('confirm_password')
                        "
                        :error="$hasValidationErrors('confirm_password')"
                      >
                        <template v-slot:prepend>
                          <q-icon name="password" />
                        </template>
                        <template v-slot:append>
                          <q-icon
                            :name="isPwd2 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd2 = !isPwd2"
                          />
                        </template>
                      </q-input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end q-pt-md">
                <q-btn type="submit" :loading="passChangeLoader" color="primary"
                  >Change Password</q-btn
                >
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
import { useAuthStore } from "stores/auth/index";
import { useCompanyStore } from "stores/company";
import { useUserStore } from "stores/user";

export default {
  component: {},

  setup() {
    const authUserStore = useAuthStore();

    const companyStore = useCompanyStore();
    const userStore = useUserStore();
    const { setDigitalSignature } = userStore;
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;
    const passChangeLoader = ref(false);
    const onSubmit = () => {
      authUserStore
        .updateProfile()
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
    const submit = () => {
      console.log("submitting", this.form);
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

    const onSubmitPass = () => {
      passChangeLoader.value = true;
      authUserStore
        .updatePassword()
        .then((response) => {
          passChangeLoader.value = false;
          clearValidationErrors();
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
        })
        .catch((error) => {
          passChangeLoader.value = false;
          let formatted_message = "";
          if (error.response.data.message) {
            formatted_message = error.response.data.message;
          } else {
            formatted_message = error.response.data.error;
          }

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
    };

    return {
      authUserStore,
      NumbersOnly,
      companyStore,
      userStore,
      onSubmit,
      submit,
      onSubmitPass,
      isPwd: ref(true),
      isPwd1: ref(true),
      isPwd2: ref(true),
    };
  },
};
</script>
