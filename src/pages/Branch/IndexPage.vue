<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Department Management" />

      <!-- CREATE -->
      <q-dialog v-model="showCreatetaskManage">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-task-manage :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEdittaskManage">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-task-manage :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useBranchStore } from "stores/branch";

const CreateTaskManage = defineAsyncComponent(() =>
  import("./CreateBranch.vue")
);
const EditTaskManage = defineAsyncComponent(() => import("./EditBranch.vue"));

export default {
  name: "ManageBranch",
  components: {
    CreateTaskManage,
    EditTaskManage,
  },

  setup() {
    const useStore = useBranchStore();
    const showCreatetaskManage = computed(() => useStore.showCreatetaskManage);
    const showEdittaskManage = computed(() => useStore.showEdittaskManage);

    return {
      useStore,
      showCreatetaskManage,
      showEdittaskManage,
    };
  },
};
</script>
