<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="">
      <q-toolbar class="">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          v-if="$q.platform.is.mobile"
          class="q-mr-md"
        />

        <router-link to="/">
          <q-img
            src="~assets/images/logo1.png"
            width="150px"
            class="q-mt-xs"
            height="50px"
          />
        </router-link>

        <EssentialLink
          :essentialLinks="essentialLinks"
          :isVertical="false"
          v-if="$q.platform.is.desktop"
        />

        <q-space />
        <q-item clickable @click="logout()">
          <q-item-section>Logout</q-item-section>
        </q-item>
        <!-- <ProfileOption /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="230"
      v-if="$q.platform.is.mobile"
    >
      <q-list>
        <q-item-label header
          ><span class="flex flex-center menu_font">Menu</span>
        </q-item-label>
      </q-list>
      <EssentialLink :essentialLinks="essentialLinks" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-separator />
    <footer v-if="$q.platform.is.desktop">
      <div class="container flex justify-between items-center q-py-lg">
        <div>Copyright © 2023, DoctoLib. All rights reserved.</div>
        <div class="flex justify-end items-center q-col-gutter-sm">
          <router-link to="#">
            <q-img src="~assets/images/play_store.png" class="store-img" />
          </router-link>
          <router-link to="#">
            <q-img src="~assets/images/apple_store.png" class="store-img" />
          </router-link>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, computed, onBeforeMount } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { acl } from "boot/acl";
import { useAuthStore } from "stores/auth/index";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter();
    const authUserStore = useAuthStore();
    const essentialLinks = computed(() => [
      {
        title: "Dashboard",
        link: "/donor-dashboard",
        show: true,
      },
      {
        title: "Donate",
        link: "/donate",
        show: true,
      },
      {
        title: "Donation History",
        link: "/donation-history",
        show: true,
      },
      {
        title: "Brodcasts",
        link: "/donor-brodcasts",
        show: true,
      },
      // {
      //   title: "Home",
      //   link: "/overview",
      //   show: true,
      // },
      // {
      //   title: "Performance",
      //   icon: "",
      //   link: "",
      //   show: true,
      //   childs: [
      //     {
      //       title: "Dashboard",
      //       icon: "",
      //       link: "/admin-dashboard",
      //       show: true,
      //     },
      //     {
      //       title: "Review",
      //       icon: "",
      //       link: "/review",
      //       show: true,
      //     },
      //   ],
      // },
      // {
      //   title: "Listings",
      //   link: "/listings",
      //   show: true,
      // },
      // {
      //   title: "Inventory",
      //   link: "/inventory",
      //   show: true,
      // },
      // {
      //   title: "Booking",
      //   link: "/bookings",
      //   show: true,
      // },
      // {
      //   title: "Finance",
      //   icon: "",
      //   link: "",
      //   show: true,
      //   childs: [
      //     {
      //       title: "All Transactions",
      //       icon: "",
      //       link: "/finance/all-transactions",
      //       show: true,
      //     },
      //     {
      //       title: "Current Transactions",
      //       icon: "",
      //       link: "/finance/current-transactions",
      //       show: true,
      //     },
      //     {
      //       title: "My Payment Accounts",
      //       icon: "",
      //       link: "/finance/my-payment-ccounts",
      //       show: true,
      //     },
      //   ],
      // },
      // {
      //   title: "Help",
      //   icon: "",
      //   link: "",
      //   show: true,
      //   childs: [
      //     {
      //       title: "Privacy Policy",
      //       icon: "",
      //       link: "/help/privacy-policy",
      //       show: true,
      //     },
      //     {
      //       title: "Terms & Conditions",
      //       icon: "",
      //       link: "/help/terms-&-conditions",
      //       show: true,
      //     },
      //     {
      //       title: "Review Responses Guide",
      //       icon: "",
      //       link: "/help/review-responses-guide",
      //     },
      //   ],
      // },
      // {
      //   title: "Settings",
      //   link: "/settings",
      //   show: true,
      //   childs: [
      //     {
      //       title: "Account Verification",
      //       link: "/accountverification",
      //       show: true,
      //     },
      //     {
      //       title: "Contacts",
      //       link: "/contacts",
      //       show: true,
      //     },
      //     {
      //       title: "Profile",
      //       link: "/admin-profile",
      //       show: true,
      //     },
      //   ],
      // },
    ]);

    const logout = () => {
      $q.dialog({
        title: "Confirm",
        message: "Are you sure to logout?",
        ok: {
          label: "Yes",
          unelevated: true,
          color: "primary",
        },
        cancel: {
          unelevated: true,
          color: "",
          textColor: "black",
        },
        persistent: true,
      }).onOk(() => {
        authUserStore.logout().then((r) => {
          window.location.href = "/";
        });
      });
    };

    return {
      essentialLinks,
      leftDrawerOpen,
      logout,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.store-img {
  width: 150px;
}
</style>
