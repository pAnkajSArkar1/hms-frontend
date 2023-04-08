<template>
  <q-card
    class="cursor-pointer full-height flex border-radius-20"
    flat
    bordered
    @click="goToProperty()"
  >
    <div class="flex self-start full-width">
      <q-img :src="item?.image" height="200px" class="border-radius-top-20">
        <div class="absolute-bottom card-bottom-shadow flex justify-end">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            no-dimming
          />
          <span class="text-subtitle2 q-ml-sm">4.3 (2099)</span>
        </div>
        <q-icon
          class="absolute all-pointer-events"
          size="32px"
          name="info"
          color="white"
          style="top: 8px; left: 8px"
        >
          <q-tooltip> Your best offer </q-tooltip>
        </q-icon>
      </q-img>
      <q-card-section class="q-pa-sm color-gery">
        <div>
          <div>
            <h3 class="card-heading q-pb-xs">{{ item?.name }}</h3>
          </div>
          <div class="q-gutter-sm amenities q-pb-sm">
            <q-icon name="chair" />
            <q-icon name="lunch_dining" />
            <q-icon name="directions_car" />
            <q-icon name="bathtub" />
          </div>
          <div class="row q-col-gutter-x-sm">
            <div class="col-auto">
              <q-icon name="location_on" color="red" class="font-16" />
            </div>
            <div class="col-10">
              <span class="font-12 card-content">
                {{ item?.description }}, 0043 BS Road, Near Bank,
                {{ item?.country }}
              </span>
            </div>
          </div>
        </div>
      </q-card-section>
    </div>
    <q-card-section
      class="q-pa-sm color-gery flex flex self-end justify-end full-width"
    >
      <div class="text-weight-bold q-gutter-sm">
        <span>4200INR</span>
        <span class="text-strike">5000INR</span>
        <span class="text-primary">57% off</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

export default {
  props: {
    item: {},
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const goToProperty = () => {
      router.push("/property/hotel-continental-saigon");
    };
    return {
      stars: 3,
      goToProperty,
    };
  },
};
</script>

<style scoped>
.amenities {
  font-size: 18px;
}
.card-bottom-shadow {
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(99, 95, 95, 0.829));
}
</style>
