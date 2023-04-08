<template>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-sm-12 col-md-2">
      <q-btn
        disable
        unelevated
        outline=""
        color="grey-3"
        text-color="black"
        label="Sort by"
        padding="8px 0px"
        no-caps=""
        class="full-width"
      />
    </div>
    <div class="col-12 col-sm-12 col-md-3">
      <q-select
        dense
        outlined
        v-model="model"
        :options="options"
        label="Price"
      />
    </div>
    <div class="col-12 col-sm-12 col-md-3">
      <q-select
        dense
        outlined
        v-model="model"
        :options="options"
        label="Top review"
      />
    </div>
    <div class="col-12 col-sm-12 col-md-2">
      <q-btn
        unelevated
        outline=""
        color="grey-3"
        text-color="black"
        label="Hot Deals!"
        padding="8px 0px"
        no-caps=""
        class="full-width"
      />
    </div>
    <div class="col-12 col-sm-12 col-md-2">
      <q-btn
        unelevated
        outline=""
        color="grey-3"
        text-color="black"
        label="Clear all"
        padding="8px 0px"
        no-caps=""
        class="full-width"
      />
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  name: "SortPage",
  components: {},
  setup() {
    return {
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>
