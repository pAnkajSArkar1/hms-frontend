<template>
  <!-- Footer -->
  <div v-if="$q.platform.is.desktop || $q.platform.is.ipad" class="footer-bg">
    <q-separator />
    <div class="container q-py-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-4">
          <q-img src="~assets/svg/logo.svg" width="150px" />
          <p class="q-pt-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div class="col-4 flex flex-center">
          <div>
            <h6 class="font-20 text-weight-bold q-pb-sm">Important Links</h6>
            <ul class="list-style-type-none">
              <li>
                <router-link
                  to="/about-us"
                  class="text-decoration-none text-black"
                >
                  {{ $t("footer.about") }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/terms-and-conditions"
                  class="text-decoration-none text-black"
                >
                  Terms and conditions
                </router-link>
              </li>
              <li>
                <router-link
                  to="/privacy-policy"
                  class="text-decoration-none text-black"
                >
                  Privacy policy
                </router-link>
              </li>
              <li>
                <router-link
                  to="/contact-us"
                  class="text-decoration-none text-black"
                >
                  Contact us
                </router-link>
              </li>
              <li>
                <router-link
                  to="/blogs"
                  class="text-decoration-none text-black"
                >
                  {{ $t("footer.blog") }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <h6 class="font-20 text-weight-bold q-pb-sm">
            {{ $t("footer.support") }}
          </h6>

          <div class="q-pb-xs">
            <q-icon name="call" size="xs" /> 93 343 9823 32343
          </div>
          <div class="q-pb-xs">
            <q-icon name="mail" size="xs" /> demo@demo.com
          </div>
          <div class="q-pb-xs">
            <q-icon name="home" size="xs" /> Hotel Management, 9th Street,
            Vietnam
          </div>
        </div>
      </div>
    </div>
    <q-separator />
    <div class="container flex justify-between items-center q-py-lg">
      <div>
        All material herein © 2020–2023 Hotel Company Pte. Ltd. All Rights
        Reserved.
      </div>
      <div class="flex justify-end items-center q-col-gutter-sm">
        <router-link to="#">
          <img src="~assets/images/play_store.png" class="store-img" />
        </router-link>
        <router-link to="#">
          <img src="~assets/images/apple_store.png" class="store-img" />
        </router-link>
      </div>
    </div>
  </div>
  <!-- mobile horizontal nav bar -->
  <q-separator inset />
  <q-footer
    reveal
    elevated
    class="row flex items-center justify-between text-blue-grey-10 bg-white q-pa-md"
    v-if="
      activeRoute == 'home' && !$q.platform.is.ipad && $q.platform.is.mobile
    "
  >
    <div class="flex items-center justify-center column" @click="toPath('/')">
      <q-icon name="fas fa-home" size="20px" />
    </div>
    <div
      class="flex items-center justify-center column"
      @click="toPath('/my-bookings')"
    >
      <q-icon name="fas fa-suitcase" size="20px" />
    </div>
    <div
      class="flex items-center justify-center column"
      @click="toPath('/cart')"
    >
      <q-icon name="fas fa-shopping-cart" size="20px" />
    </div>
    <div
      class="flex items-center justify-center column"
      @click="toPath('/profile')"
    >
      <q-icon name="fas fa-user" size="20px" />
    </div>
    <div
      class="flex items-center justify-center column"
      @click="accountDialog = true"
    >
      <q-icon name="fa-solid fa-bars" size="20px" />
    </div>
  </q-footer>

  <q-dialog
    v-model="accountDialog"
    transition-show="slide-left"
    transition-hide="slide-right"
    full-height
    :maximized="$q.platform.is.desktop ? false : true"
  >
    <q-card>
      <QHeaderMobileDialog v-model="accountDialog" title="Menu" />
      <q-card-section>
        <FooterMenuList :essentialLinks="essentialLinks" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, computed, defineAsyncComponent } from "vue";

import { useRouter, useRoute } from "vue-router";
const FooterMenuList = defineAsyncComponent(() =>
  import("./FooterMenuList.vue")
);

const essentialLinks = computed(() => [
  {
    id: "account",
    title: "Account",
    childs: [
      {
        title: "Profile",
        icon: "person",
        link: "/listing",
        show: true,
      },
      {
        title: "Booking",
        icon: "shopping_bag",
        link: "/my-bookings",
        show: true,
      },
      {
        title: "Cart",
        icon: "shopping_cart",
        link: "/cart",
        show: true,
      },
    ],
  },
  {
    id: "listing",
    title: "Listing",
    childs: [
      {
        title: "List your property",
        icon: "list",
        link: "/listings",
        show: true,
      },
    ],
  },
  {
    id: "help-&-support",
    title: "Help & Support",
    childs: [
      {
        title: "Help center",
        icon: "call",
        link: "/contact-us",
        show: true,
      },
      {
        title: "Q&A",
        icon: "question_mark",
        link: "/qna",
        show: true,
      },
    ],
  },
  {
    id: "important-links",
    title: "Important links",
    childs: [
      {
        title: "Abount us",
        icon: "info",
        link: "/about-us",
        show: true,
      },
      {
        title: "Privacy policy",
        icon: "security",
        link: "/privacy-policy",
        show: true,
      },
      {
        title: "Terms and conditions",
        icon: "block",
        link: "/terms-and-conditions",
        show: true,
      },

      {
        title: "Blog",
        icon: "rss_feed",
        link: "/blogs",
        show: true,
      },
    ],
  },
]);

export default {
  components: { FooterMenuList },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const accountDialog = ref(false);

    function toPath(path) {
      router.push(path);
    }

    const activeRoute = computed(() => {
      return route.name;
    });
    return {
      toPath,
      activeRoute,
      accountDialog,
      essentialLinks,
    };
  },
};
</script>

<style>
.footer-bg {
  background: #f1f1f1;
}

.payment-img {
  width: 30px;
  height: 30px;
}
.store-img {
  width: 100px;
}
</style>
