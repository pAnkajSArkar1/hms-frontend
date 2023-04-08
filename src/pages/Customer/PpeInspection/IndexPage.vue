<template>
  <ppe-menu />
  <q-page>
    <ppe-checklist />
  </q-page>
</template>

<script>
import PpeMenu from "./components/PpeMenu.vue";
import PpeChecklist from "./PpeChecklist/IndexPage.vue";

export default {
  components: {
    PpeMenu,
    PpeChecklist,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.remove-padding {
  padding-bottom: 0 !important;
}
</style>
