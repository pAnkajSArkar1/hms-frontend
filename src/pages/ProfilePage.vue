<template>
  <q-page class="container">
    <div class="row q-col-gutter-md">
      <q-form class="col-12" @submit="onSubmit">
        <div class="col-12">
          <q-card flat bordered>
            <q-card-section>
              <h6 class="q-mt-none q-mb-sm">User Details</h6>
              <div class="q-col-gutter-md">
                <div class="col-12">
                  <q-input
                    dense
                    outlined
                    label="Name"
                    v-model="authUserStore.authUser.name"
                  />
                </div>
                <div class="col-12">
                  <q-input
                    dense
                    outlined
                    label="Username"
                    v-model="authUserStore.authUser.username"
                  />
                </div>
                <div class="col-12">
                  <q-field>
                    <UploaderFile
                      label="Upload Signature"
                      v-model="authUserStore.authUser.signature_picture"
                      acceptFileType=".jpg, image/*"
                    />
                  </q-field>
                </div>
              </div>

              <div class="flex justify-end q-pt-md">
                <q-btn type="primary" color="primary">Update</q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-form>
      <q-form class="col-12" @submit="onSubmitPass">
        <div class="col-12">
          <q-card flat bordered>
            <q-card-section>
              <h6 class="q-mt-none q-mb-sm">Change Password</h6>
              <div class="q-col-gutter-md">
                <div class="col-12">
                  <q-input
                    type="password"
                    dense
                    outlined
                    label="Old Password"
                    v-model="authUserStore.credential.old_password"
                    :error-message="$getValidationErrors('old_password')"
                    :error="$hasValidationErrors('old_password')"
                  >
                  </q-input>
                </div>

                <div class="col-12">
                  <q-input
                    type="password"
                    dense
                    outlined
                    label="New Password"
                    v-model="authUserStore.credential.password"
                    :error-message="$getValidationErrors('password')"
                    :error="$hasValidationErrors('password')"
                  >
                  </q-input>
                </div>

                <div class="col-12">
                  <q-input
                    type="password"
                    dense
                    outlined
                    label="Confirm Password"
                    v-model="authUserStore.credential.confirm_password"
                    :error-message="$getValidationErrors('confirm_password')"
                    :error="$hasValidationErrors('confirm_password')"
                  >
                  </q-input>
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
import { useMediaStore } from "stores/media";

export default {
  component: {},

  setup() {
    const authUserStore = useAuthStore();
    const companyStore = useCompanyStore();
    const userStore = useUserStore();
    const { setDigitalSignature } = userStore;
    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;
    const passChangeLoader = ref(false);

    //sign uploader
    const setDigitalSign = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "image");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            authUserStore.setSignature({ id: res.data.media_id });
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };

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
      companyStore,
      userStore,
      setDigitalSign,
      onSubmit,
      onSubmitPass,
    };
  },
};
</script>
