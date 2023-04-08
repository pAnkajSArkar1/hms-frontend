<template>
  <div :class="isVertical ? '' : 'search-cotainer'">
    <div>
      <q-card
        flat
        style="border-radius: 20px"
        :class="isVertical ? 'bg-none' : ''"
      >
        <q-card-section :class="isVertical ? 'q-pa-none' : 'q-px-xl'">
          <div :class="$q.platform.is.desktop ? 'q-pb-md' : ''">
            <q-tabs
              v-model="searchTab"
              dense
              :narrow-indicator="!isVertical"
              :active-color="isVertical ? 'text-blue-grey-10' : 'primary'"
              class="isVertical ? 'text-black' : 'text-white'"
            >
              <q-tab name="hourly" label="Hourly" icon="schedule" />
              <q-tab name="overnight" label="Overnight" icon="bedtime" />
              <q-tab name="bydate" label="By date" icon="calendar_month" />
            </q-tabs>
          </div>
          <div class="q-pb-md" :class="isVertical ? 'q-py-lg' : ''">
            <HotelSearchForm :isVertical="isVertical" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  props: {
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup() {
    return {
      searchTab: ref("hourly"),
    };
  },
};
</script>

<style scoped>
.search-cotainer {
  animation: moveToBottom-a766487a 0.6s linear;
  transform: scale(1) translateY(-70px);
  box-shadow: 0 20px 30px #0000001a;
  border-radius: 20px;
}
</style>
