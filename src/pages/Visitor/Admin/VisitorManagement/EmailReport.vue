<template>
  <q-form ref="createForm" @submit.prevent="submitForm">
    <q-card>
      <q-card-section class="row items-center q-py-sm bg-primary">
        <div class="text-subtitle1 text-bold q-py-none text-white">
          Email Report
        </div>
        <q-space />

        <q-btn
          color="white"
          icon="close"
          flat
          round
          dense
          @click="dialogs.emailReport = false"
        >
          <q-tooltip> Close </q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section class="q-pb-none">
        <div class="row q-col-gutter-md q-pb-md">
          <div class="col-12">
            <q-input
              dense
              outlined
              label="Subject"
              v-model="emailReport.subject"
              autogrow
            />
          </div>
        </div>
      </q-card-section>

      <q-separator />
      <q-card-actions class="justify-end q-py-sm">
        <q-btn
          icon="email"
          label="Email Report"
          type="submit"
          color="primary"
          unelevated
          :loading="submitting"
          dense
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-form>
</template>
<script>
import {
  ref,
  defineAsyncComponent,
  onMounted,
  reactive,
  getCurrentInstance,
} from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";

export default {
  name: "emailReportPage",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;

    const { useStore } = reactive(props);
    const { emailReport, dialogs } = storeToRefs(useStore);
    const { emailReportToUser } = useStore;
    const submitting = ref(false);
    const userStore = useUserStore();

    onMounted(() => {
      clearValidationErrors();
    });

    // const onUserSelect = () => {
    //   userStore.getItem({ id: emailReport.value.user_id }).then((response) => {
    //     emailReport.value.email = response?.data?.email;
    //   });
    // };

    const submitForm = () => {
      // if (
      //   emailReport.value.user_id === null &&
      //   emailReport.value.email === ""
      // ) {
      //   Qnotify({
      //     message: "Please select user or enter email",
      //     type: "negative",
      //   });
      //   return false;
      // }
      submitting.value = true;
      emailReportToUser()
        .then((response) => {
          clearValidationErrors();
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
          useStore.dialogs.emailReport = false;
        })
        .catch((error) => {
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
        })
        .finally(() => {
          submitting.value = false;
        });
    };

    return {
      emailReport,
      dialogs,
      submitForm,
      // onUserSelect,
      submitting,
      userStore,
    };
  },
};
</script>
