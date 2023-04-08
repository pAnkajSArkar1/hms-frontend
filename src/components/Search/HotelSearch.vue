<template>
  <!-- <div
    :class="
      $q.platform.is.desktop
        ? 'main-seaction'
        : 'main-seaction-mobile flex flex-center'
    "
  > -->
  <div>
    <seaction
      style="height: 286px; overflow: hidden; position: relative; width: 100%"
    >
      <div class="relative-position">
        <h1 v-if="$q.platform.is.desktop" class="home-banner-content">
          Flexible hotel booking - Best price
        </h1>
        <div
          class="search-bg"
          :class="
            $q.platform.is.desktop ? 'bg-desktop-height' : 'bg-mobile-height'
          "
        ></div>
        <div
          class="home-form-content"
          :class="$q.platform.is.mobile ? 'full-width' : ''"
          v-if="$q.platform.is.mobile"
        >
          <HotelSearchContainer :isVertical="true" />
        </div>
      </div>
    </seaction>

    <section class="container" v-if="$q.platform.is.desktop">
      <HotelSearchContainer />
      <!-- <div
        style="
          animation: moveToBottom-a766487a 0.6s linear;
          transform: scale(1) translateY(-70px);
          box-shadow: 0 20px 30px #0000001a;
          border-radius: 20px;
        "
      >
        <div>
          <q-card flat style="border-radius: 20px">
            <q-card-section class="q-px-xl">
              <div :class="$q.platform.is.desktop ? 'q-pb-md' : ''">
                <q-tabs
                  v-model="searchTab"
                  dense
                  narrow-indicator
                  active-color="primary"
                >
                  <q-tab name="hourly" label="Hourly" icon="schedule" />
                  <q-tab name="overnight" label="Overnight" icon="bedtime" />
                  <q-tab name="bydate" label="By date" icon="calendar_month" />
                </q-tabs>
              </div>
              <div class="q-pb-md">
                <HotelSearchForm :isHome="true" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div> -->
    </section>
    <!-- <div
      class="search-bg absolute"
      :class="$q.platform.is.desktop ? 'bg-desktop-height' : 'bg-mobile-height'"
    ></div> -->
    <!-- <div class="flex flex-center relative-position">
      <div class="search-container">
        <div
          class="text-center text-white"
          :class="$q.platform.is.desktop ? 'q-pb-xl' : ''"
        >
          <h1 style="font-size: 40px" class="main-title">Lorem Ipsum</h1>
          <h2 style="font-size: 20px" class="q-pb-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h2>
        </div>
        <div
          class="flex justify-center"
          :class="$q.platform.is.mobile ? 'reverse-wrap' : ''"
        >
          <q-card
            class="bg-secondary border-radius-16"
            flat
            :class="
              $q.platform.is.desktop
                ? 'search-card absolute bg-secondary'
                : 'bg-none full-width'
            "
          >
            <q-card-section
              class="q-gutter-md"
              :class="
                $q.platform.is.desktop ? 'search-card-section' : 'q-pa-none'
              "
            >
              <div :class="$q.platform.is.desktop ? 'q-pb-md' : ''">
                <q-tabs v-model="searchTab" class="text-white" dense>
                  <q-tab name="hourly" label="Hourly" />
                  <q-tab name="overnight" label="Overnight" />
                  <q-tab name="bydate" label="By date" />
                </q-tabs>
              </div>
              <HotelSearchForm />
            </q-card-section>
          </q-card>
          <q-card
            flat
            :class="
              $q.platform.is.desktop
                ? 'search-card-tab border-radius-16 relative-position bg-primary'
                : 'bg-none full-width'
            "
          >
            <q-card-section
              :class="$q.platform.is.desktop ? 'q-px-md' : 'q-py-md'"
            >
              <div class="row text-white justify-between full-width">
                <div
                  class="text-center"
                  style="width: 20%"
                  :class="$q.platform.is.desktop ? '' : 'item-card'"
                >
                  <div><q-icon name="apartment" size="md" /></div>
                  <div>Hotels & Houses</div>
                </div>
                <div
                  class="text-center"
                  style="width: 20%"
                  :class="$q.platform.is.desktop ? '' : 'item-card'"
                >
                  <div><q-icon name="home" size="md" /></div>
                  <div>Private Lodging</div>
                </div>
                <div
                  class="text-center"
                  style="width: 20%"
                  :class="$q.platform.is.desktop ? '' : 'item-card'"
                >
                  <div><q-icon name="bed" size="md" /></div>
                  <div>Long Stay</div>
                </div>
                <div
                  class="text-center"
                  style="width: 20%"
                  :class="$q.platform.is.desktop ? '' : 'item-card'"
                >
                  <div><q-icon name="work" size="md" /></div>
                  <div>Work</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
const HotelSearchContainer = defineAsyncComponent(() =>
  import("./HotelSearchContainer.vue")
);

export default {
  components: { HotelSearchContainer },
  setup() {
    return {
      searchTab: ref("hourly"),
      model: ref("India"),
      options: ["Google", "India", "Twitter", "Apple", "Oracle"],
      userModel: ref("Room"),
      useerOptions: ["Room"],
      room: ref(1),
      adults: ref(2),
      children: ref(1),
    };
  },
};
</script>

<style>
.main-title {
}
.search-bg {
  background-image: linear-gradient(
      rgba(177, 177, 177, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://c1.wallpaperflare.com/preview/925/666/440/sunset-ocean-hillside-sea-sun-sunrise.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  height: 400px;
  left: 0px;
  right: 0px;
}
.bg-desktop-height {
  height: 300px;
}
.bg-mobile-height {
  height: 100vh;
}
.search-container {
  max-width: 900px;
}

.main-seaction {
  padding-bottom: 350px;
}
.main-seaction-mobile {
  height: 100vh;
}
.search-card {
  width: 50vw;
}
.border-radius-16 {
  border-radius: 16px;
}
.search-card-container {
  border-radius: 16px;
  width: 70%;
  top: 15%;
  /* left: 50%; */
  transform: translate(-50%, -50%);
}
.search-card-section {
  padding: 10% 40px 40px 40px;
}
.search-card-tab {
  width: 90%;
  top: 0%;
  left: 45%;
  transform: translate(-50%, -50%);
}

.item-card {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px 5px;
}
.toolbar-bg {
  background: linear-gradient(rgba(99, 95, 95, 0.829), rgba(255, 255, 255, 0));
}

.home-banner-content {
  color: #fff;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 78px;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 40px;
}

.home-form-content {
  color: #fff;
  left: 50%;
  position: absolute;
  text-align: center;
  /* top: 100px; */
  bottom: 5%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 40px;
}
</style>
