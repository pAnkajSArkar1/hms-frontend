import { boot } from "quasar/wrappers";
import { ref } from "vue";
import { useQuasar } from 'quasar'
import { Notify } from 'quasar'


export default boot(({ app }) => {
  const errors = ref([]);
  const $q = useQuasar();

  function getValidationErrorMessages(field) {
    if (!errors.value) {
      return [];
    }
    const keys = Object.keys(errors.value);
    const key = keys.find(
      (element) => element.toLowerCase() === field.toLowerCase()
    );
    if (errors.value[key]) {
      return errors.value[key];
    }
    return [];
  }
  function getValidationErrors(field) {
    let server_errors = getValidationErrorMessages(field);
    if (server_errors.length !== 0) {
      return server_errors.join("\r\n");
    }
    return "";
  }
  function hasValidationErrors(field) {
    if (getValidationErrorMessages(field).length !== 0) {
      return true;
    }
    return false;
  }
  function setValidationErrors(payload) {
    errors.value = payload;
    getValidationErrors("myReference");
    hasValidationErrors("myReference");
  }
  function Qnotify(props) {
    Notify.create({
      progress: true,
      message: props.message,
      type: props.type,
      timeout: props.timeout ? props.timeout : 5000,
      position: props.position ? props.position : "top-right",
      actions: [
        {
          icon: "close",
          color: "white",
          handler: () => {
            /* ... */
          },
        },
      ],
    });
  }

  function clearValidationErrors() {
    errors.value = [];
  }

  app.config.globalProperties.$Qnotify = Qnotify;
  app.config.globalProperties.$setValidationErrors = setValidationErrors;
  app.config.globalProperties.$getValidationErrors = getValidationErrors;
  app.config.globalProperties.$hasValidationErrors = hasValidationErrors;
  app.config.globalProperties.$clearValidationErrors = clearValidationErrors;
});
