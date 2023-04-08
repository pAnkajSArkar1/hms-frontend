<template>
  <q-page>
    <ICMenu />
    <div class="q-pa-md">
      <checkDashboard />
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
import checkDashboard from "./Checklist/IndexPage.vue";

const ICMenu = defineAsyncComponent(() => import("./components/ICSubMenu.vue"));

export default {
  components: {
    checkDashboard,
    ICMenu,
  },
  setup() {
    return {
      ICMenu,
    };
  },
};
</script>
