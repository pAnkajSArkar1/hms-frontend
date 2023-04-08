<template>
  <q-page class="q-px-md">
    <div class="q-py-sm flex items-center row">
      <q-btn
        class="q-pa-none text-primary"
        flat
        icon="fas fa-chevron-left"
        size="md"
        to="/"
        v-if="$q.platform.is.mobile && !$q.platform.is.ipad"
      />
      <p class="q-mt-xs q-ml-sm page-title">{{ $t("account.title") }}</p>
    </div>
    <h3 class="user-name">{{ $t("account.username") }}</h3>
    <q-separator />
    <!-- explore -->
    <h5 class="text-grey-8">{{ $t("account.explore") }}</h5>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/">
        <q-icon name="fas fa-home-lg-alt" size="xs" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.book") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/search">
        <q-icon name="apartment" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.hotels_houses") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/search">
        <q-icon name="house" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.private_lodging") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/search">
        <q-icon name="event_note" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.long_stay") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/search">
        <q-icon name="work_history" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.work") }}</p>
      </q-btn>
    </div>
    <q-separator />
    <!-- promos -->
    <h5 class="q text-grey-8">{{ $t("account.promos") }}</h5>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/promos">
        <q-icon name="fas fa-tags" size="xs" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.deals") }}</p>
      </q-btn>
    </div>
    <q-separator />
    <!-- account -->
    <h5 class="text-grey-8">{{ $t("account.account") }}</h5>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/booking-history">
        <q-icon name="fas fa-suitcase" size="xs" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.bookings") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/wishlist">
        <q-icon name="fas fa-heart" size="xs" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.wishlist") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/cart">
        <q-icon name="shopping_cart" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.cart") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/profile">
        <q-icon name="account_circle" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.myprofile") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm q-pl-xs">
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
          <q-icon color="black" name="fa-solid fa-globe" size="xs" />
          <p class="q-my-none q-pl-sm lang">{{ $t("account.language") }}</p>
        </template>
        <template v-slot:selected-item>
          <span class="text-black">{{ nativeName }}</span>
        </template>
      </q-select>
    </div>
    <q-separator />
    <!-- about us  -->
    <h5 class="text-grey-8">{{ $t("account.important") }}</h5>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/QnA">
        <q-icon name="help" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.qna") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat :to="dashboardLink">
        <q-icon name="admin_panel_settings" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.admin") }}</p>
      </q-btn>
    </div>
    <div class="q-pb-sm">
      <q-btn class="q-pl-none" flat to="/about-us">
        <q-icon name="info" size="sm" />
        <p class="q-mt-none q-ml-sm">{{ $t("account.about") }}</p>
      </q-btn>
    </div>
  </q-page>
  <footer-menu />
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useQuasar, LocalStorage as SessionStorage } from "quasar";
import { useI18n } from "vue-i18n";
import languages from "quasar/lang/index.json";

const appLanguages = languages.filter((lang) =>
  ["vi", "en-US"].includes(lang.isoName)
);

const langOptions = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

export default {
  components: {},
  setup() {
    const $q = useQuasar();
    const nativeName = ref("");
    const { locale } = useI18n({ useScope: "global" });

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
      $q.lang.set(selectedLanguage.default);
      nativeName.value = selectedLanguage.default.nativeName;
    });

    return {
      nativeName,
      locale,
      langOptions,
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 600;
}
.lang {
  font-size: 15px;
  font-weight: 500;
  color: black;
}
</style>
