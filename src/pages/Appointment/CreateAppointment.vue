<template>
  <q-page class="bg-white container">
    <div class="flex justify-center">
      <q-card class="card-min-width">
        <q-form @submit.prevent="submitForm">
          <q-card-section class="row justify-center">
            <div class="login text-h5 text-center text-weight-bold">
              Appointment
            </div>
          </q-card-section>
          <q-card-section>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-mb-md">
              <q-input dense outlined label="Email" type="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
            </div>
          </q-card-section>
          <q-card-section class="col-12 col-sm-12 col-md-12 col-lg-12">
            <q-btn
              color="primary"
              label="Appointment"
              class="submit full-width"
              unelevated
              icon="login"
              :loading="loader"
              outlined
              type="submit"
            />
          </q-card-section>
        </q-form>

        <q-separator />

        <!-- <q-card-section class="row justify-center text-center">
        <div>
          Forgot your password?
          <router-link to="/forgot-password" class="forgot-pass">
            Reset It Here
          </router-link>
        </div>
        <div></div>
      </q-card-section> -->
      </q-card>
    </div>
  </q-page>
</template>

<script>
// import { ref, defineComponent } from "vue";
// import { useRouter, useRoute } from "vue-router";
// import { useQuasar } from "quasar";
// import { useAuthStore } from "stores/auth/index";
// import { storeToRefs } from "pinia";

// export default defineComponent({
//   setup() {
//     const router = useRouter();
//     const store = useAuthStore();
//     const loader = ref(false);
//     const $q = useQuasar();

//     const { login } = storeToRefs(store);

//     function submitForm() {
//       loader.value = true;
//       store
//         .loginUser()
//         .then((response) => {
//           loader.value = false;

//           $q.notify({
//             progress: true,
//             message: response?.data?.message,
//             type: "positive",
//             timeout: 5000,
//             position: "top-right",
//             actions: [
//               {
//                 icon: "close",
//                 color: "white",
//                 handler: () => {},
//               },
//             ],
//           });

//           router.push("/dashboard");
//         })
//         .catch((error) => {
//           loader.value = false;
//           console.log({ error });
//         });
//     }
//     return {
//       store,
//       loader,
//       submitForm,
//       isPwd: ref(true),
//       login,
//     };
//   },
// });
</script>

<style lang="sass"></style>

<style scoped>
.forgot-pass {
  text-decoration: none;
  color: #36487c;
}
</style>
