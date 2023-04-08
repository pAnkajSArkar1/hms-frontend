<template>
  <q-list style="min-width: 100px">
    <q-item clickable>
      <q-item-section>
        <q-item-label>Booking Confirmation</q-item-label>
        <q-item-label caption lines="2"
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>1 min ago</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator v-if="activeRoute == 'notifications'" />

    <q-item clickable>
      <q-item-section>
        <q-item-label>Super Deluxe</q-item-label>
        <q-item-label caption lines="2"
          >Secondary line text. Lorem ipsum dolor sit amet, consectetur
          adipiscit elit.</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>5 min ago</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable v-close-popup v-if="activeRoute != 'notifications'">
      <q-item-section>
        <router-link
          to="/notifications"
          class="text-decoration-none text-black"
        >
          View all
        </router-link>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { computed, defineAsyncComponent, ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "NotificationPage",
  components: {},
  setup() {
    const route = useRoute();
    const activeRoute = computed(() => {
      return route.name;
    });
    return { activeRoute };
  },
};
</script>
