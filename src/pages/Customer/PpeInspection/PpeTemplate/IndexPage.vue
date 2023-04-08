<template>
  <q-page>
    <PpeMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="All PPE Templates" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateTemplate">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-template :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditTemplate">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-template :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { usePpeTemplateStore } from "stores/Customer/PpeInspection/ppeTemplate";

const PpeMenu = defineAsyncComponent(() =>
  import("src/pages/Customer/PpeInspection/components/PpeMenu.vue")
);
const createTemplate = defineAsyncComponent(() =>
  import("./CreateTemplate.vue")
);
const editTemplate = defineAsyncComponent(() => import("./EditTemplate.vue"));

export default {
  name: "PpeTemplate",
  components: {
    PpeMenu,
    createTemplate,
    editTemplate,
  },

  setup() {
    const useStore = usePpeTemplateStore();
    const showCreateTemplate = computed(() => useStore.showCreateTemplate);
    const showEditTemplate = computed(() => useStore.showEditTemplate);

    return {
      useStore,
      showCreateTemplate,
      showEditTemplate,
    };
  },
};
</script>
