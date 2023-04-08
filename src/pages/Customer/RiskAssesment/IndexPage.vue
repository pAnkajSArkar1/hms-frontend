<template>
  <q-page>
    <SubMenu />

    <div class="q-pa-md">
      <riskCreate />
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
import riskCreate from "./CreateRiskAssessment/IndexPage.vue";

const SubMenu = defineAsyncComponent(() => import("./components/RAMenu.vue"));

export default {
  components: {
    riskCreate,
    SubMenu,
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
