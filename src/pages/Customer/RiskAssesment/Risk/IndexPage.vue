<template>
  <q-page>
    <RAMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Risk" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateRisk">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-risk :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditRisk">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-risk :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useRiskStore } from "stores/Customer/RiskAssesment/risk";

const RAMenu = defineAsyncComponent(() =>
  import("pages/Customer/RiskAssesment/components/RAMenu.vue")
);
const CreateRisk = defineAsyncComponent(() => import("./CreateRisk.vue"));
const EditRisk = defineAsyncComponent(() => import("./EditRisk.vue"));

export default {
  name: "RiskAssessmentRisk",
  components: {
    CreateRisk,
    EditRisk,
    RAMenu,
  },

  setup() {
    const useStore = useRiskStore();
    const showCreateRisk = computed(() => useStore.showCreateRisk);
    const showEditRisk = computed(() => useStore.showEditRisk);

    return {
      useStore,
      showCreateRisk,
      showEditRisk,
    };
  },
};
</script>
