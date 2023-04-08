<template>
  <seacion
    class="text-black full-width q-pt-md search-overlay"
    v-if="scrollPosition < 100"
  >
    <div class="q-px-md q-pb-xl text-white" @click="openShortDialog">
      <div>
        <div class="flex justify-between q-col-gutter-x-sm">
          <div class="flex q-col-gutter-x-sm">
            <div class="flex items-center">
              <q-icon name="search" size="md" />
            </div>
            <div>
              <div class="hotel-name q-pb-sm">Blogs</div>
              <div class="text-weight-bold">New to old, 12 Aug 2023</div>
            </div>
          </div>
          <div class="flex items-center">
            <span>(854)</span>
            <span class="text-blue-6 q-pl-sm">Edit</span>
          </div>
        </div>
      </div>
    </div>
  </seacion>
  <section
    class="text-black"
    :class="scrollPosition < 100 ? 'absolute' : ''"
    style="width: 90%; bottom: -15px"
  >
    <q-card
      :flat="scrollPosition > 99"
      :class="scrollPosition < 100 ? 'border-radius-30' : ''"
      @click="openShortDialog"
    >
      <q-card-section
        :class="
          scrollPosition < 100
            ? 'filter-card-section'
            : 'filter-card-section-mobile'
        "
      >
        <div class="flex justify-between">
          <div>
            <div>Filters</div>
          </div>
          <div class="border-right"></div>
          <div>
            <div>Search</div>
          </div>
          <div class="border-right"></div>
          <div>
            <div>Sort</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </section>

  <q-dialog
    v-model="shortDialog"
    no-backdrop-dismiss
    no-shake
    transition-show="slide-up"
    transition-hide="silde-down"
    position="bottom"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Sort by</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="shortDialog = false" />
      </q-card-section>
      <q-card-section>
        <SortBlog />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineAsyncComponent, ref, watch, onMounted } from "vue";

export default {
  name: "MainHeader",
  props: {
    scrollPosition: {
      type: Number,
    },
  },
  setup() {
    const shortDialog = ref(false);

    const openShortDialog = () => {
      shortDialog.value = !shortDialog.value;
    };
    return {
      text: "05 jun - 10 jun  3 guest",
      shortDialog,
      openShortDialog,
    };
  },
};
</script>

<style scoped>
.search-overlay {
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(20 19 19 / 83%));
  border-radius: 0 0 30px 30px;
}
.background-search {
  background: #db8a8a !important;
  border-radius: 0 0 30px 30px;
}
.background-transparent {
  background: transparent !important;
}
.hotel-name {
  font-size: 25px;
  line-height: 22px;
  font-weight: 600;
}
.border-right {
  border-right: 1px solid;
  border-color: rgba(0, 0, 0, 0.253);
}

.border-radius-30 {
  border-radius: 30px;
}
.filter-card-section {
  padding: 15px 20px;
}
.filter-card-section-mobile {
  padding: 10px 0px;
}
</style>
