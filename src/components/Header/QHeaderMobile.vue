<template>
  <q-header reveal class="bg-white" v-scroll="onScroll">
    <div id="bg" :style="activeMenu.backgroudnColor">
      <div
        class="relative-position flex flex-center"
        :class="
          scrollPosition > 99 ? 'bg-white box-shadow' : 'background-search'
        "
      >
        <q-toolbar class="text-black q-py-md q-gutter-sm">
          <a
            :href="activeMenu.backUrl"
            class="text-black text-decoration-none row items-center"
          >
            <q-btn
              v-if="activeMenu.backButton"
              round
              :flat="scrollPosition > 99"
              text-color="black"
              icon="arrow_back"
              class="bg-grey-transparent"
            />
            <q-img
              v-if="activeRoute == 'home'"
              src="~assets/images/logo.png"
              width="150px"
            />
            <span v-if="activeMenu.pageTitle" class="q-pl-md tool-bar-title">{{
              activeMenu.pageTitle
            }}</span>
          </a>
          <q-space></q-space>

          <div
            @click="openSeachDialog"
            v-if="activeMenu.isShowSearch && scrollPosition > 99"
            class="search-seaction full-width"
          >
            <RevealSearchBox v-if="activeRoute == 'search'" />
            <BlogRevealSearchBox v-if="activeRoute == 'blogs'" />
            <BookingRevealSearchBox v-if="activeRoute == 'my-bookings'" />
          </div>

          <q-space></q-space>
          <div class="q-gutter-x-sm">
            <q-btn
              v-if="activeMenu.notificationButton"
              round
              text-color="text-blue-grey-10"
              :flat="scrollPosition > 99"
              icon="notifications"
              to="/notifications"
              class="bg-grey-transparent"
            />
            <q-btn
              v-if="activeMenu.shareButton"
              round
              text-color="text-blue-grey-10"
              :flat="scrollPosition > 99"
              icon="share"
              class="bg-grey-transparent"
            />
            <q-btn
              v-if="activeMenu.addToCardButton"
              round
              text-color="text-blue-grey-10"
              :flat="scrollPosition > 99"
              icon="shopping_cart"
              to="/cart"
              class="bg-grey-transparent"
            />
          </div>
        </q-toolbar>
        <SearchBox
          v-if="activeRoute == 'search'"
          :scrollPosition="scrollPosition"
        />
        <BlogSearchBox
          v-if="activeRoute == 'blogs'"
          :scrollPosition="scrollPosition"
        />
        <BookingSearchBox
          v-if="activeRoute == 'my-bookings'"
          :scrollPosition="scrollPosition"
        />
      </div>
    </div>
  </q-header>
</template>

<script>
import { computed, defineAsyncComponent, ref, watch, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useQuasar, LocalStorage as SessionStorage } from "quasar";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import languages from "quasar/lang/index.json";

import { useAuthStore } from "stores/auth/index";
import { storeToRefs } from "pinia";

const appLanguages = languages.filter((lang) =>
  ["vi", "en-US"].includes(lang.isoName)
);

const langOptions = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

const SearchBox = defineAsyncComponent(() =>
  import("./SearchPage/SearchBox.vue")
);

const RevealSearchBox = defineAsyncComponent(() =>
  import("./SearchPage/RevealSearchBox.vue")
);

const BlogSearchBox = defineAsyncComponent(() =>
  import("./BlogPage/SearchBox.vue")
);

const BlogRevealSearchBox = defineAsyncComponent(() =>
  import("./BlogPage/RevealSearchBox.vue")
);

const BookingSearchBox = defineAsyncComponent(() =>
  import("./BookingPage/SearchBox.vue")
);

const BookingRevealSearchBox = defineAsyncComponent(() =>
  import("./BookingPage/RevealSearchBox.vue")
);

const menuList = {
  home: {
    pageTitle: "",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: "",
    borderReduce: "",
    backButton: false,
    shareButton: false,
    notificationButton: true,
    addToCardButton: true,
  },
  search: {
    pageTitle: "",
    backUrl: "/",
    isShowSearch: true,
    isShowSearchBox: true,
    backgroudnColor: `background: url(${require("assets/svg/bulding.svg")})!important; border-radius: 0 0 30px 30px;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: true,
  },
  "search-item": {
    pageTitle: "",
    backUrl: "/#/search",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: "",
    borderReduce: "",
    backButton: true,
    shareButton: true,
    addToCardButton: true,
  },
  booking: {
    pageTitle: "Booking",
    backUrl: "/#/property/hotel-continental-saigon",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: true,
  },
  "my-bookings": {
    pageTitle: "",
    backUrl: "/",
    isShowSearch: true,
    isShowSearchBox: true,
    backgroudnColor: `background: url(${require("assets/svg/booking.svg")})!important; border-radius: 0 0 30px 30px;  background-repeat: no-repeat!important; background-position: center!important; background-size: cover!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  "my-booking": {
    pageTitle: "",
    backUrl: "/#/my-bookings",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: "",
    borderReduce: "",
    backButton: true,
    shareButton: false,
    addToCardButton: false,
  },
  cart: {
    pageTitle: "Cart",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  profile: {
    pageTitle: "Profile",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  "contact-us": {
    pageTitle: "Contact us",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  "privacy-policy": {
    pageTitle: "Privacy Policy",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  "about-us": {
    pageTitle: "About us",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  "terms-and-conditions": {
    pageTitle: "Terms and conditions",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  "question-and-answer": {
    pageTitle: "Question and answer",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: `background: #fff!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  blogs: {
    pageTitle: "",
    backUrl: "/",
    isShowSearch: true,
    isShowSearchBox: true,
    backgroudnColor: `background: url(${require("assets/svg/blog.svg")})!important; border-radius: 0 0 30px 30px;  background-repeat: no-repeat!important; background-position: center!important; background-size: cover!important;`,
    borderReduce: "",
    backButton: true,
    shareButton: false,
    notificationButton: false,
    addToCardButton: false,
  },
  blog: {
    pageTitle: "",
    backUrl: "/#/blogs",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: "",
    borderReduce: "",
    backButton: true,
    shareButton: true,
    addToCardButton: false,
  },
  notifications: {
    pageTitle: "Notifications",
    backUrl: "/",
    isShowSearch: false,
    isShowSearchBox: false,
    backgroudnColor: "",
    borderReduce: "",
    backButton: true,
    shareButton: false,
    addToCardButton: false,
  },
};

export default {
  name: "MainHeader",
  components: {
    SearchBox,
    RevealSearchBox,
    BlogSearchBox,
    BlogRevealSearchBox,
    BookingSearchBox,
    BookingRevealSearchBox,
  },
  props: {
    backgroudnColor: {
      type: String,
      default: "",
    },
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    const nativeName = ref("");
    const { locale } = useI18n({ useScope: "global" });
    $q.platform.is.mobile;
    $q.platform.is.desktop;
    $q.platform.is.ipad;

    const store = useAuthStore();
    const { authUser } = storeToRefs(store);

    function toSearch() {
      router.push("search");
    }

    watch(locale, (val) => {
      import(`quasar/lang/${val}`).then((language) => {
        SessionStorage.set("language", language);
        nativeName.value = language.default.nativeName;
        $q.lang.set(language.default);
      });
    });

    onMounted(() => {
      let selectedLanguage = SessionStorage.getItem("language")
        ? SessionStorage.getItem("language")
        : "en-US";
      locale.value =
        selectedLanguage != "en-US"
          ? selectedLanguage.default.isoName
          : "en-US";

      nativeName.value =
        selectedLanguage != "en-US"
          ? selectedLanguage.default.nativeName
          : selectedLanguage;

      $q.lang.set(selectedLanguage.default);
    });

    const dashboardLink = computed(() => {
      let link = "/login";
      if (authUser.value?.role?.code == "admin") {
        link = "/admin/dashboard";
      } else if (authUser.value?.role?.code == "customer") {
        link = "/dashboard";
      }
      return link;
    });

    const isShowSearchForm = computed(() => {
      return route.name == "search" || route.name == "search-item";
    });
    const isShowBookingStepper = computed(() => {
      return route.name == "booking";
    });
    const paegName = computed(() => {
      return route.name == "booking";
    });

    // const checkReveal = (value) => {
    //   console.log("checkReveal", value);
    // };
    const scrollPosition = ref(0);
    const onScroll = (position) => {
      scrollPosition.value = position;
      // console.log("position", scrollPosition.value);
    };

    const activeRoute = computed(() => {
      return route.name;
    });

    const activeMenu = computed(() => {
      // console.log("route.nam", route.name);
      return menuList[route.name];
    });
    return {
      dialog: ref(false),
      slide: ref(1),
      mostbooked: ref(1),
      listofhotel: ref(1),
      autoplay: ref(true),
      tab: ref("Hourly"),
      toSearch,
      nativeName,
      locale,
      langOptions,
      authUser,
      dashboardLink,
      isShowSearchForm,
      isShowBookingStepper,
      paegName,
      // checkReveal,
      onScroll,
      scrollPosition,
      text: "Thu, Mar 16-Fri, Mar 17 2 Guests",
      menuList,
      activeMenu,
      activeRoute,
    };
  },
};
</script>

<style scoped>
.background-search {
  /* background: #db8a8a !important; */
  /* border-radius: 0 0 30px 30px; */
}
.background-transparent {
  background: transparent !important;
}
.hotel-name {
  font-size: 25px;
  line-height: 22px;
  font-weight: 600;
}
.border-right {
  border-right: 1px solid;
  border-color: rgba(0, 0, 0, 0.253);
}
.box-shadow {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.tool-bar-title {
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
}
</style>
