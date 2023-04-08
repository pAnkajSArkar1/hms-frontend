import { boot } from "quasar/wrappers";
import axios from "axios";
import { LocalStorage as SessionStorage } from "quasar";

const api = axios.create({ baseURL: process.env.API });

export default boot(({ app }) => {
  axios.defaults.baseURL = process.env.API;

  axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    var token = SessionStorage.getItem("token");

    if (token === null) {
      let location = window.location.hash;
      var res1 = location.split("#/");
      var res2 = location.split("/");

      let allowedPath = [
        "/terms-and-condition",
        "/login",
        "/#/login",
        "/forget-password",
        "#/forget-password",
        "#/confirm-password-reset-code",
        "#/reset-password",
      ];

      if (allowedPath.indexOf("#/" + res2[1]) === -1) {
        if (!res1 || res1[2] == "undefined") {
          router.push({
            path: "/",
            query: { redirect: window.location.hash.substring(1) },
          });
        }
      }
    } else {
      token = JSON.parse(token);
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
    }
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error?.response?.status) {
        SessionStorage.remove("token");
        router.push({
          path: "/login",
        });
      } else {
        return Promise.reject(error);
      }
    }
  );

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, axios };
