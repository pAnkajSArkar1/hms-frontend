<template>
  <q-page>
    <ICMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Template" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateTemplate">
        <q-card class="" style="width: 500px">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-template :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditTemplate">
        <q-card class="" style="width: 500px">
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
import { useTemplateStore } from "stores/Customer/Inspection/template";

const ICMenu = defineAsyncComponent(() =>
  import("../components/ICSubMenu.vue")
);

const CreateTemplate = defineAsyncComponent(() =>
  import("./CreateTemplate.vue")
);
const EditTemplate = defineAsyncComponent(() => import("./EditTemplate.vue"));

export default {
  name: "InspectionTemplate",
  components: {
    CreateTemplate,
    EditTemplate,
    ICMenu,
  },
  setup() {
    const useStore = useTemplateStore();
    const showCreateTemplate = computed(() => useStore.showCreateTemplate);
    const showEditTemplate = computed(() => useStore.showEditTemplate);

    return {
      useStore,
      showCreateTemplate,
      showEditTemplate,
      ICMenu,
    };
  },
};
</script>
