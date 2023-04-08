<template>
  <q-btn flat round>
    <q-avatar size="30px">
      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
    </q-avatar>
    <!-- <q-menu v-if="authUser.email"> -->
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column q-gutter-y-sm">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-btn
            color="primary"
            size="xs"
            label="My Profile"
            push
            to="/profile"
          />
          <q-btn
            color="primary"
            size="xs"
            label="My Bookings"
            push
            to="/my-bookings"
          />
          <q-btn
            color="primary"
            size="xs"
            label="My Hotels"
            push
            :to="dashboardLink"
          />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>

          <div class="text-subtitle2 q-mt-md q-mb-xs">demo@demo.com</div>

          <q-btn
            color="negative"
            label="Logout"
            push
            size="sm"
            :disable="loader"
            :loading="loader"
            @click="logOut()"
          />
        </div>
      </div>
    </q-menu>
    <!-- <q-menu v-else>
      <div class="row no-wrap q-pa-md">
        <q-btn color="negative" label="Login" push size="sm" to="/login" />
      </div>
    </q-menu> -->
  </q-btn>
</template>

<script>
import { defineComponent, ref, getCurrentInstance, computed } from "vue";
import { useAuthStore } from "stores/auth/index";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "EssentialLink",
  setup(props) {
    const store = useAuthStore();
    const loader = ref(false);
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const router = useRouter();
    const { authUser } = storeToRefs(store);

    const logOut = () => {
      loader.value = true;
      store
        .logout()
        .then((response) => {
          loader.value = false;
          Qnotify({
            message: "Login successfull",
            type: "positive",
          });
          router.push("/login");
        })
        .catch((error) => {
          loader.value = false;
          let formatted_message = error?.response?.data?.message;
          let errorMessages = {};
          if (error?.response?.data?.errors) {
            errorMessages = error?.response?.data?.errors;
          }
          Qnotify({
            message: formatted_message,
            type: "negative",
          });
          loader.value = false;
        });
    };

    const dashboardLink = computed(() => {
      let link = "/login";
      if (authUser.value?.role?.code == "admin") {
        link = "/admin/dashboard";
      } else if (authUser.value?.role?.code == "customer") {
        link = "/dashboard";
      }
      return link;
    });

    return {
      loader,
      logOut,
      authUser,
      dashboardLink,
    };
  },
});
</script>
