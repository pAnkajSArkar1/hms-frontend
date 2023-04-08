<template>
  <div class="cursor-pointer" @click="goToProperty()">
    <div class="flex flex-center">
      <q-avatar size="130px" class="zoom-thumbnail">
        <img :src="item?.image" />
      </q-avatar>
    </div>
    <div class="color-gery text-center q-pa-sm">
      <h3 class="card-heading q-pb-xs">{{ item?.name }}</h3>
      <div class="font-12 q-pl-xs card-content">{{ item?.country }}</div>
      <div class="font-12 q-pl-xs card-content">{{ item?.description }}</div>
    </div>
  </div>
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
      url: "https://picsum.photos/500/300?t=" + Math.random(),
      goToProperty,
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
  transform: scale(0.8);
}
.zoom-thumbnail:hover {
  transform: scale(1);
  transition: 0.5s cubic-bezier(0.6, 0.03, 0.28, 0.98);
}
</style>
