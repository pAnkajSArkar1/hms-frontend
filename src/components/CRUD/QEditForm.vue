<template>
  <q-form ref="createForm" @submit.prevent="submitForm">
    <q-card-section class="row items-center q-py-sm bg-primary" v-if="dialog">
      <div class="text-subtitle1 text-bold q-py-none text-white">
        {{ title }}
      </div>
      <q-space />
      <q-btn
        icon="close"
        color="white"
        flat
        round
        dense
        @click="onClickCancel()"
      >
        <q-tooltip> Close </q-tooltip>
      </q-btn>
    </q-card-section>

    <q-card-section class="q-pb-none">
      <slot></slot>
    </q-card-section>

    <q-separator />
    <q-card-actions class="justify-end q-py-sm">
      <q-btn
        v-if="cancelRoute !== ''"
        icon="clear"
        label="Cancel"
        type="reset"
        color="red-5"
        class="q-ml-sm"
        unelevated
        @click="onClickCancel()"
      />
      <q-btn
        :icon="saveButtonIcon"
        :label="saveButtonLabel"
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
  </q-form>
</template>

<script>
import { defineComponent, ref, reactive, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "CreateUserPage",
  props: {
    title: String,
    useStore: null,
    dataStore: {
      type: String,
      default: null,
    },
    saveAction: String,
    cancelRoute: {
      type: String,
      default: "",
    },
    dialog: {
      type: Boolean,
      default: true,
    },
    widgets: {
      default: false,
      type: Boolean,
    },
    tableId: String,
    saveButtonIcon: {
      default: "done",
      type: String,
    },
    saveButtonLabel: {
      default: "Save",
      type: String,
    },
    closeRoute: {
      default: "showHideCreateModal",
      type: String,
    },
  },
  setup(props) {
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;

    const submitting = ref(false);
    const { useStore, saveAction, cancelRoute } = reactive(props);
    const { editItem } = useStore;
    const { dialogs } = storeToRefs(useStore);

    const submitForm = () => {
      submitting.value = true;
      editItem()
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

    const onClickCancel = () => {
      if (cancelRoute != "") {
      } else {
        dialogs.value.editItem = false;
      }
    };

    return {
      submitting,
      submitForm,
      onClickCancel,
    };
  },
});
</script>
