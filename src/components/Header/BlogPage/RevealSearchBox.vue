<template>
  <div>
    <q-card
      flat
      class="bg-blue-grey-1"
      style="border-radius: 30px"
      @click="openSeachDialog"
    >
      <q-card-section style="padding: 5px 20px">
        <div class="flex q-gutter-x-md justify-between">
          <div>
            <div class="text-weight-bolder">Blogs</div>
            <div class="text-weight-bold font-10">{{ text }}</div>
          </div>
          <div class="flex flex-center text-weight-bolder">
            <q-icon name="search" size="md" />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-dialog
      v-model="seachDialog"
      no-backdrop-dismiss
      no-shake
      transition-show="slide-up"
      transition-hide="silde-down"
      position="bottom"
    >
      <q-card class="q-pa-sm">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Search</div>
          <q-space />
          <q-btn icon="close" flat round dense @click="seachDialog = false" />
        </q-card-section>
        <q-card-section>
          <SortBlog />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, ref, watch, onMounted } from "vue";

export default {
  name: "RevealSearchBox",
  setup() {
    const seachDialog = ref(false);
    const openSeachDialog = () => {
      seachDialog.value = !seachDialog.value;
    };
    return {
      seachDialog,
      openSeachDialog,
      text: "New to old, 12 Aug 2023",
    };
  },
};
</script>

<style scoped>
.search-seaction {
  width: 100%;
}
</style>
