import { boot } from "quasar/wrappers";
import moment from "moment";

const dateConvert = {
  format(date, dateFormat = "DD-MM-YYYY") {
    return moment(date).format(dateFormat);
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$dateConvert = dateConvert;
});

export { dateConvert };
