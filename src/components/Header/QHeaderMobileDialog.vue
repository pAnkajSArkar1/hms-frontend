<template>
  <q-card-section class="row items-center bg-primary">
    <q-btn
      flat
      color="white"
      :label="title"
      icon="arrow_back"
      padding="0"
      no-caps
      @click="back()"
    />
    <q-space />
  </q-card-section>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

export default {
  props: {
    modelValue: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const back = () => {
      emit("update:modelValue", false);
    };
    return { back };
  },
};
</script>

<style scoped>
.border-left {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.hotel-name {
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
}
.hotel-amenities {
  font-size: 18px;
}
</style>
