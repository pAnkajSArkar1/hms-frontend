<template>
  <q-page>
    <WAMenu />
    <div class="q-pa-md">
      <q-card>
        <WAReport />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
import WAReport from "./WAReport/IndexPage.vue";

const WAMenu = defineAsyncComponent(() => import("./components/WASubMenu.vue"));

export default {
  components: {
    WAReport,
    WAMenu,
  },
  setup() {
    return {
      WAMenu,
    };
  },
};
</script>
