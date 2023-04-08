<template>
  <q-page>
    <SubMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Activities" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateActivity">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-activity :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditActivity">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-activity :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useActivityStore } from "stores/Customer/RiskAssesment/activity";

const SubMenu = defineAsyncComponent(() =>
  import("src/pages/Customer/RiskAssesment/components/RAMenu.vue")
);
const CreateActivity = defineAsyncComponent(() =>
  import("./CreateActivity.vue")
);
const EditActivity = defineAsyncComponent(() => import("./EditActivity.vue"));

export default {
  name: "RiskAssessmentActivities",
  components: {
    CreateActivity,
    EditActivity,
    SubMenu,
  },

  setup() {
    const useStore = useActivityStore();
    const showCreateActivity = computed(() => useStore.showCreateActivity);
    const showEditActivity = computed(() => useStore.showEditActivity);

    return {
      useStore,
      showCreateActivity,
      showEditActivity,
    };
  },
};
</script>
