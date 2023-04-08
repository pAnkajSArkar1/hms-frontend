<template>
  <q-page class="q-pa-md">
    <div class="q-pb-md">
      <q-card class="full-width">
        <q-card-section>
          <h2 class="q-ma-none text-center text-weight-bold">
            {{
              authUserStore?.authUser?.active_company
                ? authUserStore.authUser.active_company.name
                : "SAFE T TRANS"
            }}
          </h2>
          <!-- <div class="row justify-center q-gutter-md">
            <p class="text-center q-mb-none">Company Pvt.</p>
            <p class="text-center q-mb-none">Username</p>
            <p class="text-center q-mb-none">company@mail.com</p>
          </div> -->
        </q-card-section>
      </q-card>
    </div>

    <div class="">
      <q-card class="full-width">
        <q-form ref="createForm" @submit.prevent="submitForm">
          <q-card-section>
            <h6 class="q-mt-none q-mb-sm">Company Details</h6>
            <div class="row q-col-gutter-md">
              <!-- company name -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Company Name"
                  v-model="companyDetails.name"
                />
              </div>
              <!-- Company Email -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Company Email"
                  v-model="companyDetails.company_email"
                />
              </div>
              <!-- Primary Contact Number -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Primary Contact Number"
                  v-model="companyDetails.primary_contact"
                />
              </div>
              <!-- Secondary Contact Number -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Secondary Contact Number"
                  v-model="companyDetails.secondary_contact"
                />
              </div>
            </div>
            <div class="row q-col-gutter-md q-pt-md">
              <!-- Country -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Country"
                  v-model="companyDetails.country"
                />
              </div>
              <!-- City -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="City"
                  v-model="companyDetails.city"
                />
              </div>
              <!-- Post Code -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Post Code"
                  v-model="companyDetails.postcode"
                />
              </div>
              <!-- Street -->
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  dense
                  outlined
                  label="Street"
                  v-model="companyDetails.street"
                />
              </div>
            </div>
            <div class="row q-col-gutter-md q-pt-md">
              <!-- Address -->
              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  dense
                  outlined
                  type="textarea"
                  label="Address"
                  v-model="companyDetails.address"
                />
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-field>
                  <UploaderFile
                    v-model="companyDetails.logo"
                    label="Upload Company Logo"
                    acceptFileType=".jpg, image/*"
                  />

                  <!-- <q-uploader
                    label="Upload Company Logo"
                    square
                    flat
                    bordered
                    auto-upload
                    max-files="1"
                    class="full-width"
                    accept=".jpg, image/*"
                    :factory="factoryLogoUploader"
                  /> -->
                </q-field>
              </div>
            </div>
            <div class="flex justify-end q-pt-md">
              <q-btn :loading="updateloader" type="submit" color="primary"
                >Update</q-btn
              >
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useAuthStore } from "stores/auth/index";
import { useCompanyStore } from "stores/company";
import { useMediaStore } from "stores/media";
import {
  reactive,
  onBeforeMount,
  onMounted,
  ref,
  getCurrentInstance,
} from "vue";
import { storeToRefs } from "pinia";

export default {
  setup(props) {
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;

    const authUserStore = useAuthStore();
    const companyStore = useCompanyStore();
    const { updateCompanyDetails } = companyStore;
    const updateloader = ref(false);

    const companyDetails = reactive({
      name: "",
      country: "",
      company_email: "",
      primary_contact: null,
      secondary_contact: null,
      city: "",
      postcode: null,
      street: "",
      address: "",
      com_logo: null,
      logo: null,
    });

    onBeforeMount(() => {
      (companyDetails.id = authUserStore.authUser.active_company.id),
        (companyDetails.name = authUserStore.authUser.active_company.name),
        (companyDetails.country =
          authUserStore.authUser.active_company.country),
        (companyDetails.company_email =
          authUserStore.authUser.active_company.company_email),
        (companyDetails.primary_contact =
          authUserStore.authUser.active_company.primary_contact),
        (companyDetails.secondary_contact =
          authUserStore.authUser.active_company.secondary_contact),
        (companyDetails.city = authUserStore.authUser.active_company.city),
        (companyDetails.postcode =
          authUserStore.authUser.active_company.postcode),
        (companyDetails.street = authUserStore.authUser.active_company.street),
        (companyDetails.address =
          authUserStore.authUser.active_company.address),
        (companyDetails.logo = authUserStore.authUser.active_company.logo);
    });

    onMounted(() => {
      clearValidationErrors();
    });

    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);

    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;
    const { setNewItemLogo } = companyStore;

    const factoryLogoUploader = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "image");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            companyDetails.logo = res.data.media_id;
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };

    const submitForm = () => {
      updateloader.value = true;
      updateCompanyDetails(companyDetails)
        .then((response) => {
          updateloader.value = false;
          clearValidationErrors();
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
        })
        .catch((error) => {
          updateloader.value = false;

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
      formData,
      companyStore,
      authUserStore,
      factoryLogoUploader,
      companyDetails,
      updateloader,
      submitForm,
    };
  },
};
</script>
