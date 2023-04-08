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
      <q-select dense outlined v-model="sort" :options="sortOptions" />
    </div>
    <div class="col-12 col-sm-12 col-md-3">
      <q-select dense outlined v-model="type" :options="options" />
    </div>
    <div class="col-12 col-sm-12 col-md-2">
      <q-input dense outlined placeholder="Search booking id">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
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
      sort: "New to old",
      sortOptions: ["New to old", "Old to new"],
      type: "All",
      options: ["All", "Complete", "Cancel"],
    };
  },
};
</script>
