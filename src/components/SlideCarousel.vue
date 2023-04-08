<template>
  <div class="item-slider" ref="slider_wraper">
    <div>
      <div class="items" ref="slider_wraper_items">
        <div class="item" v-for="(item, index) in items" v-bind:key="index">
          <div
            v-if="!customBodySlot"
            @click="changeItem(item)"
            class="next cursor-pointer"
          >
            <q-img :src="item.url" :alt="item.name" spinner-color="white" />
          </div>
          <template v-else>
            <div
              :class="
                $q.platform.is.mobile & (index == 0) ? 'q-ml-md' : 'full-height'
              "
            >
              <slot name="bodySlot" v-bind:item="item"></slot>
            </div>
          </template>
        </div>
      </div>
      <div v-if="$q.platform.is.desktop">
        <q-btn
          icon="arrow_back_ios"
          class="item-left"
          v-if="previousBtn"
          @click="previous()"
        />
        <q-btn
          icon="arrow_forward_ios"
          class="item-right"
          v-if="nextBtn"
          @click="next()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";

export default {
  props: {
    modelValue: {
      type: Object,
      required: {},
    },
    items: {
      type: Array,
      required: [],
    },
    customBodySlot: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectedImage = ref({});
    const nextBtn = ref(true);
    const previousBtn = ref(false);
    const slider_wraper_items = ref(0);
    const slider_wraper = ref(0);
    const { items } = reactive(props);

    onMounted(() => {
      if (items.length > 0) selectedImage.value = items[0];
      emit("update:modelValue", selectedImage.value);
    });

    const next = () => {
      let slider_wraper_clientWidth = slider_wraper.value.clientWidth;
      previousBtn.value = true;
      let itemsArr = slider_wraper_items.value;
      let currx = itemsArr.scrollLeft;
      let amount = 200;

      let amX = parseInt(slider_wraper_clientWidth / amount); // cantidad de elementos x viewport

      let am = amX * amount - amount;
      let maxScrollLeft = itemsArr.scrollWidth - itemsArr.clientWidth;

      itemsArr.classList.add("my-class");
      itemsArr.scrollLeft += am;

      if (currx + am >= maxScrollLeft) nextBtn.value = false;
    };
    const previous = () => {
      let slider_wraper_clientWidth = slider_wraper.value.clientWidth;
      nextBtn.value = true;
      let itemsArr = slider_wraper_items.value;
      let currx = itemsArr.scrollLeft;
      let amount = 200;

      let amX = parseInt(slider_wraper_clientWidth / amount); // cantidad de elementos x viewport
      let am = amX * amount - amount;

      itemsArr.classList.add("my-class");
      itemsArr.scrollLeft -= am;
      if (currx - am <= 0) previousBtn.value = false;
    };
    const changeItem = (image) => {
      selectedImage.value = image;
      emit("update:modelValue", selectedImage.value);
    };

    return {
      nextBtn,
      previousBtn,
      next,
      previous,
      selectedImage,
      slider_wraper_items,
      slider_wraper,
      changeItem,
    };
  },
};
</script>

<style>
.my-class {
  scroll-behavior: smooth;
}
.items {
  width: 100%;
  /* height: 100px; */
}
.item {
  display: inline-block;
  /* width: 200px; */
  -webkit-transition: 0;
  -webkit-transition: all 0.25s, color 0s !important;
  -moz-transition: all 0.25s, color 0s !important;
  -o-transition: all 0.25s, color 0s !important;
  transition: all 0.25s, color 0s !important;
  position: relative;
  z-index: 0;
  flex: 0 0 auto;
  margin: 2px 2px 0 0;
}

.item-slider {
  position: relative;
}
.item-slider .items img {
  /* height: 100px; */
}
.item-slider .items {
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}

.item-slider .items::-webkit-scrollbar {
  display: none;
}
.item-right,
.item-left {
  width: 30px;
  height: 50px;
  color: #000;
  margin-bottom: auto;
  margin-top: auto;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: rgba(255, 253, 253, 0.54);
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0.94;
}
.item-right {
  right: 0px;
}
.item-left {
  left: 0px;
}

.item-right:hover,
.item-left:hover {
  opacity: 1;
  color: #fff;
  background: #000;
}

/* @media only screen and (max-width: 480px) {
  .items {
    height: 100px;
  }
  .item {
    width: 150px;
  }
  .item-slider .items img {
    height: 110px;
  }
} */
</style>
