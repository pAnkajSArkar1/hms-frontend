<template>
  <q-page>
    <SubMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Hazards" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateHazard">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-hazard :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditHazard">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-hazard :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useHazardStore } from "stores/Customer/RiskAssesment/hazard";
import { storeToRefs } from "pinia";

const SubMenu = defineAsyncComponent(() =>
  import("src/pages/Customer/RiskAssesment/components/RAMenu.vue")
);
const CreateHazard = defineAsyncComponent(() => import("./CreateHazard.vue"));
const EditHazard = defineAsyncComponent(() => import("./EditHazard.vue"));

export default {
  name: "RiskAssessmentHazard",
  components: {
    CreateHazard,
    EditHazard,
    SubMenu,
  },

  setup() {
    const useStore = useHazardStore();
    const showCreateHazard = computed(() => useStore.showCreateHazard);
    const showEditHazard = computed(() => useStore.showEditHazard);
    const { dialogs, formData } = storeToRefs(useStore);

    return {
      useStore,
      showCreateHazard,
      showEditHazard,
    };
  },
};
</script>
