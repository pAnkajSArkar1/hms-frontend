<template>
  <q-page class="vertical-top fill">
    <searchHotel v-if="$q.platform.is.desktop" />

    <div :class="$q.platform.is.desktop ? 'q-py-xl' : 'q-py-md'">
      <!-- list of services -->
      <section
        class="q-pt-xl"
        :class="$q.platform.is.desktop ? 'container' : 'container'"
      >
        <div class="q-pb-md">
          <h2 class="heading">List of services</h2>
          <h5 class="heading">Services available in the hospital</h5>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-12 col-md-3 cursor-pointer zoom-thumbnail">
            <!-- <router-link to="/signup"> -->
            <q-card
              flat
              bordered
              class="cursor-pointer border-radius-20"
              @click="toAppointment()"
            >
              <q-img src="~assets/svg/doctor.svg" />
              <q-card-section class="text-white bg-primary q-pb-xl">
                <div class="text-weight-bold font-25">Appointments</div>
                <p class="font-16">Fast Appointments</p>
              </q-card-section>
            </q-card>
            <!-- </router-link> -->
          </div>
          <div class="col-12 col-sm-12 col-md-3 cursor-pointer zoom-thumbnail">
            <q-card flat bordered class="border-radius-20" @click="toDonor()">
              <q-img src="~assets/svg/blooddonation.svg" />
              <q-card-section class="text-white bg-secondary q-pb-xl">
                <div class="text-weight-bold font-25">Donate Blood</div>
                <p class="font-16">Donate Blood in our Blood Bank</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-sm-12 col-md-3 cursor-pointer zoom-thumbnail">
            <q-card
              flat
              bordered
              class="border-radius-20"
              @click="toReceiver()"
            >
              <q-img src="~assets/svg/bloodreceive.svg" />
              <q-card-section class="text-white bg-primary q-pb-xl">
                <div class="text-weight-bold font-25">Receive Blood</div>
                <p class="font-16">Receive Blood from Us</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-sm-12 col-md-3 cursor-pointer zoom-thumbnail">
            <q-card flat bordered class="border-radius-20" @click="toVisitor()">
              <q-img src="~assets/svg/visit.svg" />
              <q-card-section class="text-white bg-secondary q-pb-xl">
                <div class="text-weight-bold font-25">Visit Us</div>
                <p class="font-16">Visit Us anytime</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
      <section
        class="q-pt-xl"
        :class="$q.platform.is.desktop ? 'container' : 'container'"
      >
        <div class="q-pb-md">
          <h2 class="heading">
            Consult top doctors online for any health concern
          </h2>
          <h5 class="heading">
            Private online consultations with verified doctors in all
            specialists
          </h5>
          <div class="row justify-center q-gutter-lg">
            <div
              class="flex flex-center column cursor-pointer"
              style="max-width: 150px"
            >
              <q-avatar size="150px" class="zoom-thumbnail">
                <img src="~assets/svg/listOfHotels/room.svg" />
              </q-avatar>
              <div class="color-gery text-center q-pa-sm">
                <h4 class="card-heading q-pb-xs">
                  Acne, pimple or skin issues
                </h4>
              </div>
            </div>
            <div
              class="flex flex-center column cursor-pointer"
              style="max-width: 150px"
            >
              <q-avatar size="150px" class="zoom-thumbnail">
                <img src="~assets/svg/listOfHotels/room.svg" />
              </q-avatar>
              <div class="color-gery text-center q-pa-sm">
                <h5 class="card-heading q-pb-xs">Cold, cough or fever</h5>
              </div>
            </div>
            <div
              class="flex flex-center column cursor-pointer"
              style="max-width: 150px"
            >
              <q-avatar size="150px" class="zoom-thumbnail">
                <img src="~assets/svg/listOfHotels/room.svg" />
              </q-avatar>
              <div class="color-gery text-center q-pa-sm">
                <h5 class="card-heading q-pb-xs">Child not feeling well</h5>
              </div>
            </div>
            <div
              class="flex flex-center column cursor-pointer"
              style="max-width: 150px"
            >
              <q-avatar size="150px" class="zoom-thumbnail">
                <img src="~assets/svg/listOfHotels/room.svg" />
              </q-avatar>
              <div class="color-gery text-center q-pa-sm">
                <h5 class="card-heading q-pb-xs">Depression or anxiety</h5>
              </div>
            </div>
            <div
              class="flex flex-center column cursor-pointer"
              style="max-width: 150px"
            >
              <q-avatar size="150px" class="zoom-thumbnail">
                <img src="~assets/svg/listOfHotels/room.svg" />
              </q-avatar>
              <div class="color-gery text-center q-pa-sm">
                <h5 class="card-heading q-pb-xs">Want to lose some weight</h5>
              </div>
            </div>
            <div
              class="flex flex-center column cursor-pointer"
              style="max-width: 150px"
            >
              <q-avatar size="150px" class="zoom-thumbnail">
                <img src="~assets/svg/listOfHotels/room.svg" />
              </q-avatar>
              <div class="color-gery text-center q-pa-sm">
                <h5 class="card-heading q-pb-xs">
                  Are you facing Stomach issues
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="q-pt-xl"
        :class="$q.platform.is.desktop ? 'container' : 'container'"
      >
        <h2 class="heading">
          Book an appointment for an in-clinic consultation
        </h2>
        <h5 class="heading">Find experienced doctors across all specialties</h5>
        <carousel
          :wrap-around="false"
          :items-to-show="
            $q.screen.lt.xs ||
            ($q.screen.lt.md && $q.screen.lt.lg && $q.screen.lt.sm)
              ? 1.3
              : 3.2
          "
        >
          <slide v-for="slide in 5" :key="slide" class="q-px-sm">
            <q-card flat class="card-border" @click="RedirectToHotel">
              <img src="~assets/images/hotel1.png" />

              <div>
                <q-card-section class="hotel-list-border hotel q-pa-sm">
                  <div class="q-pt-none">
                    <div class="hotel-name">Orthopedist</div>
                    <div class="q-mt-none">
                      For Bone and Joints issues, spinal injuries and more
                    </div>
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </slide>

          <template
            #addons
            v-if="$q.platform.is.desktop || $q.platform.is.ipad"
          >
            <navigation class="text-grey-1 bg-grey-7" />
          </template>
        </carousel>
      </section>

      <section
        class="q-pt-xl"
        :class="$q.platform.is.desktop ? 'container' : 'container'"
      >
        <div class="q-pa-md">
          <q-carousel
            animated
            v-model="slide"
            :swipeable="$q.platform.is.desktop ? false : true"
            infinite
            :autoplay="autoplay"
            :arrows="$q.platform.is.desktop ? true : false"
            navigation
            control-color="primary"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="1" class="column no-wrap flex-center">
              <div
                class="font-20 q-mt-md text-center"
                :style="$q.platform.is.desktop ? 'max-width: 80%' : ''"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                voluptatem totam, architecto cupiditate officia rerum, error
                dignissimos praesentium libero ab nemo.
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap flex-center">
              <div
                class="font-20 q-mt-md text-center"
                :style="$q.platform.is.desktop ? 'max-width: 80%' : ''"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                voluptatem totam, architecto cupiditate officia rerum, error
                dignissimos praesentium libero ab nemo.
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap flex-center">
              <div
                class="font-20 q-mt-md text-center"
                :style="$q.platform.is.desktop ? 'max-width: 80%' : ''"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                voluptatem totam, architecto cupiditate officia rerum, error
                dignissimos praesentium libero ab nemo.
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap flex-center">
              <div
                class="font-20 q-mt-md text-center"
                :style="$q.platform.is.desktop ? 'max-width: 80%' : ''"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                voluptatem totam, architecto cupiditate officia rerum, error
                dignissimos praesentium libero ab nemo.
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import "vue3-carousel/dist/carousel.css";

import { useQuasar } from "quasar";

const images = [
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?animal",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?nature",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?mountain",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?sport",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?human",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?building",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?food",
  },
  {
    name: "image",
    url: "https://source.unsplash.com/1280x720/?beach",
  },
];
export default {
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const router = useRouter();
    const toAppointment = () => {
      router.push("/signup");
    };
    const toDonor = () => {
      router.push("/donor-signup");
    };
    const toReceiver = () => {
      router.push("/receiver-signup");
    };
    const toVisitor = () => {
      router.push("/visitor-signup");
    };
    const info = ref(null);
    const $q = useQuasar();
    $q.platform.is.mobile;
    $q.platform.is.desktop;
    $q.platform.is.ipad;

    return {
      dialog: ref(false),
      toAppointment,
      toReceiver,
      toVisitor,
      toDonor,
      slide: ref(1),
      autoplay: ref(true),
      mostbooked: ref(1),
      listofhotel: ref(1),
      images,
    };
  },
};
</script>

<style scoped>
.color-gery {
  color: rgb(42, 42, 46);
}
.card-heading {
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
}
.card-content {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(115, 115, 115);
}
.card-bottom-shadow {
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(99, 95, 95, 0.829));
}
.amenities {
  font-size: 18px;
}
.zoom-thumbnail {
  transition: 0.5s cubic-bezier(0.6, 0.03, 0.28, 0.98);
  transform: scale(0.9);
}
.zoom-thumbnail:hover {
  transform: scale(1);
  transition: 0.5s cubic-bezier(0.6, 0.03, 0.28, 0.98);
}
.card-border {
  border-radius: 30px 30px 0 0;
  width: 100%;
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

.items {
  width: 100%;
  height: 100px;
}
.item {
  width: 100px;
}

.mobile-padding {
  padding-bottom: 100px;
}
</style>
