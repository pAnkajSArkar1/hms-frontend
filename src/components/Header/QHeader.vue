<template>
  <!-- <p>I am landing</p> -->
  <q-header
    reveal
    class="main-header bg-white"
    v-if="$q.platform.is.desktop"
    @reveal="revealHeader"
    v-scroll="onScroll"
  >
    <!-- mobile nav bar -->
    <q-toolbar>
      <router-link to="/">
        <q-img src="~assets/svg/logo.svg" width="150px" />
      </router-link>

      <q-space></q-space>

      <div
        @click="setSearchBar"
        class="cursor-pointer"
        v-if="showSmallSearchBar"
      >
        <div
          class="searching-desktop bg-white text-black q-pa-xs q-pl-sm q-my-sm"
        >
          <div class="flex flex-center q-gutter-x-sm">
            <div>Where</div>
            <q-separator vertical inset />
            <div>24 Aug - 27 Aug</div>
            <q-separator vertical inset />
            <div>2 People</div>
            <div>
              <q-btn round unelevated color="primary" icon="search" size="sm" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="isShowSearchForm">
        <!-- <HotelSearchForm /> -->
      </div>
      <div v-if="isShowBookingStepper">
        <BookingStepper :isVertical="false" />
      </div>

      <q-space></q-space>

      <div class="flex justify-center q-gutter-sm">
        <div>
          <q-select
            v-model="locale"
            :options="langOptions"
            dropdown-icon="none"
            class="lang-dropdown"
            dense
            borderless
            emit-value
            map-options
            options-dense
          >
            <template v-slot:prepend>
              <q-icon name="language" />
            </template>
            <template v-slot:selected-item>
              <span class="grey-9">{{ nativeName }}</span>
            </template>
          </q-select>
        </div>
        <div>
          <q-btn round flat color="grey-9" icon="shopping_cart" to="/cart">
          </q-btn>
        </div>
        <div>
          <!-- <q-btn round flat color="grey-9" icon="notifications"></q-btn> -->
          <QMenuHover>
            <template #default="{ activatorAttr, menuAttr }">
              <q-btn
                round
                flat
                color="grey-9"
                icon="notifications"
                v-bind="activatorAttr"
              >
                <q-menu v-bind="menuAttr">
                  <QNotification />
                </q-menu>
              </q-btn>
            </template>
          </QMenuHover>
        </div>
        <div>
          <ProfileOption />
        </div>
      </div>

      <!-- <div class="">
        <div v-if="$q.platform.is.mobile && !$q.platform.is.ipad">
          <q-btn flat dense icon="notifications" size="md" />
          <q-btn flat dense icon="favorite" size="md" to="/wishlist" />
        </div>
        <div class="row" v-if="$q.platform.is.desktop || $q.platform.is.ipad">
          <div class="q-pr-sm">
            <q-select
              v-model="locale"
              :options="langOptions"
              dropdown-icon="none"
              class="lang-dropdown"
              dense
              borderless
              emit-value
              map-options
              options-dense
            >
              <template v-slot:prepend>
                <q-icon color="grey-2" name="language" />
              </template>
              <template v-slot:selected-item>
                <span class="text-white">{{ nativeName }}</span>
              </template>
            </q-select>
          </div>

          <q-btn flat dense icon="notifications" size="md" />
          <q-btn
            flat
            rounded
            :label="$t('homePage.menu.join')"
            class="join-btn"
          />
          <ProfileOption />
        </div>
      </div> -->
    </q-toolbar>

    <q-toolbar inset class="flex flex-center q-pb-md" v-if="showSearchBar">
      <HotelSearchForm :isVertical="false" />
    </q-toolbar>

    <!-- mobile sliding menu -->
    <!-- <q-header
      class="slider-alignment"
      v-if="!$q.platform.is.ipad && $q.platform.is.mobile"
    >
      <div class="mobile-slider-menu" @click="toSearch">
        <div class="item">
          <d iv class="row q-gutter-xs">
            <q-icon class="" name="apartment" size="sm" />
            <p>
              {{ $t("homePage.features.hotel") }}
            </p>
          </d>
        </div>
        <div class="item">
          <div class="row">
            <q-icon class="" name="house" size="sm" />
            <div class="">
              {{ $t("homePage.features.private") }}
            </div>
          </div>
        </div>
        <div class="item column">
          <div class="row">
            <q-icon name="event_note" size="sm" />
            <div class="">
              {{ $t("homePage.features.stay") }}
            </div>
          </div>
        </div>
        <div class="item column">
          <div class="row">
            <q-icon name="work_history" size="sm" />
            <div class="">
              {{ $t("homePage.features.work") }}
            </div>
          </div>
        </div>
      </div>
    </q-header> -->
    <q-separator />
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

export default {
  name: "MainHeader",
  components: {},
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

      if (route.name != "home") {
        showSmallSearchBar.value = true;
      }
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
      console.log("route.name", route.name);
      return route.name == "search" || route.name == "search-item";
    });
    const isShowBookingStepper = computed(() => {
      console.log("route.name", route.name);
      return route.name == "booking";
    });

    const activeRoute = computed(() => {
      return route.name;
    });

    const showSmallSearchBar = ref(false);
    const showSearchBar = ref(false);

    const setSearchBar = () => {
      showSearchBar.value = !showSearchBar.value;
    };
    const revealHeader = (status) => {
      if (!status) showSearchBar.value = false;
    };
    const onScroll = (position) => {
      if (route.name == "home") {
        if (position > 500) {
          showSmallSearchBar.value = true;
        } else {
          showSmallSearchBar.value = false;
          showSearchBar.value = false;
        }
      } else {
        if (position < 500) {
          showSearchBar.value = false;
        }
      }
    };

    watch(activeRoute, (val) => {
      if (activeRoute.value == "home") {
        showSmallSearchBar.value = false;
      } else {
        showSmallSearchBar.value = true;
      }
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

      showSmallSearchBar,
      showSearchBar,
      setSearchBar,
      revealHeader,
      onScroll,
      activeRoute,
    };
  },
};
</script>

<style scoped>
.card-border {
  border-radius: 30px 30px 0 0;
  width: 100%;
}

.footer-bg {
  background: #f1f1f1;
  padding: 50px 0;
}

.payment-img {
  width: 30px;
  height: 30px;
}
.store-img {
  width: 40%;
  height: 25%;
}

.booked-hotel-img {
  width: 50%;
  height: 80%;
}

.banner-img {
  position: relative !important;
}

.search-input-border {
  border-radius: 5px;
  border: 0.5px solid #ddd;
}

.slider-alignment {
  top: 58px;
}

.spacer {
  height: 50px;
}

.bg-home-img {
  width: 100%;
}
.app-name {
  font-size: 25px;
}

#logo {
  border-radius: 25px;
  padding-top: 1px;
}

.join-btn {
  background: #8f8f8f;
}

.slider-alignment {
  top: 50px;
}
.search-edit-title {
  font-size: 18px;
  font-weight: 500;
}
.hotel-name {
  font-size: 20px;
  font-weight: 600;
}
.diver {
  z-index: 10;
}
.offer-spacer {
  padding-top: 20px;
}

.items {
  width: 100%;
  height: 100px;
}
.item {
  width: 100px;
}

.searching-desktop {
  /* align-items: center; */
  border: 1px solid #aeaeb2;
  border-radius: 30px;
  box-shadow: 1px 2px 12px #0000001a;
  /* padding: 2px 4px; */
  /* display: flex;
  height: 60px;
  margin-top: 15px;
  padding: 4px 8px 4px 4px; */
}
</style>
