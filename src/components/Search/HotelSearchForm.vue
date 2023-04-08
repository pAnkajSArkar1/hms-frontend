<template>
  <div
    class=""
    :class="
      !isVertical
        ? 'searching-desktop justify-between bg-white q-gutter-x-sm'
        : 'row q-gutter-y-md'
    "
  >
    <div :class="isVertical ? 'full-width' : ''">
      <q-input
        :outlined="isVertical"
        :rounded="!isVertical"
        :borderless="!isVertical"
        v-model="text"
        label="Label (stacked)"
        stack-label
        placeholder="Where do you want to go"
        :bg-color="isVertical ? '' : ''"
        :class="!isVertical ? 'search' : ''"
      >
        <!-- :dense="!isVertical ? false : true" -->
        <template v-slot:prepend>
          <q-icon name="location_on" />
        </template>
      </q-input>
    </div>
    <div
      v-if="!isVertical"
      style="position: relative"
      :class="!isVertical ? 'searching-date' : ''"
    >
      <div class="flex q-gutter-x-sm q-pl-xs" style="align-items: center">
        <div>
          <q-input
            :outlined="isVertical"
            :rounded="!isVertical"
            :borderless="!isVertical"
            v-model="text"
            label="Check in"
            stack-label
            placeholder="23 Aug 5"
            :bg-color="isVertical ? '' : ''"
            :class="!isVertical ? 's-date' : ''"
          >
            <template v-slot:prepend>
              <q-icon name="login" />
            </template>
          </q-input>
        </div>
        <span v-if="!isVertical" class="range-separator"></span>
        <div>
          <q-input
            :outlined="isVertical"
            :rounded="!isVertical"
            :borderless="!isVertical"
            v-model="text"
            label="Check out"
            stack-label
            placeholder="23 Aug 10"
            :bg-color="isVertical ? '' : ''"
            :class="!isVertical ? 'e-date' : ''"
          >
            <template v-slot:prepend>
              <q-icon name="logout" />
            </template>
          </q-input>
        </div>
      </div>
    </div>

    <div v-else :class="isVertical ? 'full-width' : ''">
      <q-input
        :outlined="isVertical"
        :rounded="!isVertical"
        :borderless="!isVertical"
        v-model="text"
        label="Check out"
        stack-label
        placeholder="23 Aug 10"
        :bg-color="isVertical ? '' : ''"
        :class="!isVertical ? 'e-date' : ''"
      >
        <template v-slot:prepend>
          <q-icon name="logout" />
        </template>
      </q-input>
    </div>
    <div :class="isVertical ? 'full-width' : ''">
      <q-input
        :outlined="isVertical"
        :rounded="!isVertical"
        :borderless="!isVertical"
        v-model="text"
        label="Guest"
        stack-label
        placeholder="2 Night"
        :bg-color="isVertical ? '' : ''"
        :class="!isVertical ? 'guest' : ''"
      >
        <template v-slot:prepend>
          <q-icon name="group" />
        </template>
      </q-input>
    </div>
    <div :class="isVertical ? 'full-width' : ''">
      <q-btn
        v-if="!isVertical"
        unelevated
        rounded
        color="primary"
        label="Search"
        icon="search"
        no-caps
        to="/search"
      />
      <q-btn
        v-else
        unelevated
        color="primary"
        label="Search"
        :padding="isVertical ? '10px 100px' : '8px 30px'"
        no-caps
        to="/search"
        class="full-width"
      />
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  components: {},
  props: {
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
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

<style scoped>
.search-container {
  box-shadow: 0 20px 30px #0000001a;
}
.searching-desktop {
  align-items: center;
  border: 1px solid #aeaeb2;
  border-radius: 30px;
  display: flex;
  height: 60px;
  margin-top: 15px;
  padding: 4px 8px 4px 4px;
}
</style>
<style>
.search .q-field__inner .q-field__control {
  border-radius: 28px 10px 10px 28px !important;
}
.s-date .q-field__inner .q-field__control {
  border-radius: 10px 0px 0px 10px !important;
}
.e-date .q-field__inner .q-field__control {
  border-radius: 0px 10px 10px 0px !important;
}
.guest .q-field__inner .q-field__control {
  border-radius: 10px 10px 10px 10px !important;
}
/*
.searching-date {
  margin-left: 8px;
} */

.searching-date:after,
.searching-date:before {
  border-right: 1px solid #d1d1d6;
  content: "";
  height: 38px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.searching-date:after {
  right: 0;
}
.range-separator {
  border-right: 1px solid #d1d1d6;
  display: block;
  height: 38px;
  width: 1px;
  font-weight: 700;
  line-height: 19px;

  box-sizing: border-box;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
</style>
