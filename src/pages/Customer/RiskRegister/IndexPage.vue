<template>
  <q-page>
    <SubMenu />
    <div class="q-pa-md">
      <risk-manage />
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
import riskManage from "./ManageEvent/IndexPage.vue";

const SubMenu = defineAsyncComponent(() =>
  import("./components/TMSubMenu.vue")
);

export default {
  components: {
    riskManage,
    SubMenu,
  },
  setup() {
    return {};
  },
};
</script>
