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
          <q-img src="~assets/svg/logo.svg" width="150px" />
        </router-link>

        <EssentialLink
          :essentialLinks="essentialLinks"
          :isVertical="false"
          v-if="$q.platform.is.desktop"
        />

        <q-space />

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
        <div>Copyright © 2023, Practo. All rights reserved.</div>
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
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const essentialLinks = computed(() => [
      {
        title: "Home",
        link: "/",
        show: true,
      },
      {
        title: "Appointment",
        link: "/appointment",
        show: true,
      },
      {
        title: "Security & help",
        show: true,
        childs: [
          {
            title: "Data Security",
            link: "/data-security",
            show: true,
          },
          {
            title: "Help",
            link: "/help",
            show: true,
          },
        ],
      },
      {
        title: "Login",
        link: "/login",
        show: true,
      },
      {
        title: "Donate Blood",
        link: "/donor-login",
        show: true,
      },
      {
        title: "Receive Blood",
        link: "/receiver-login",
        show: true,
      },
      // {
      //   title: "Signup",
      //   link: "/signup",
      //   show: true,
      // },
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

    return {
      essentialLinks,
      leftDrawerOpen,
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
