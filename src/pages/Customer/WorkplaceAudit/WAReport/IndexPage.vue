<template>
  <QDataTable
    :aditionalActions="true"
    :canEdit="false"
    :useStore="useStore"
    title="Audit Manager"
  />

  <!-- CREATE -->
  <q-dialog v-model="showCreateAudit">
    <q-card class="" style="max-width: 700px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <create-audit :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>

  <!-- EDIT -->
  <q-dialog v-model="showEditAudit">
    <q-card class="" style="width: 600px">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <edit-audit :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useAuditStore } from "stores/Customer/WorkplaceAudit/audit";

const CreateAudit = defineAsyncComponent(() => import("./CreateAudit.vue"));
const EditAudit = defineAsyncComponent(() => import("./EditAudit.vue"));

export default {
  name: "WorkplaceAudit",
  components: {
    CreateAudit,
    EditAudit,
  },
  setup() {
    const useStore = useAuditStore();
    const showCreateAudit = computed(() => useStore.showCreateAudit);
    const showEditAudit = computed(() => useStore.showEditAudit);

    return {
      useStore,
      showCreateAudit,
      showEditAudit,
    };
  },
};
</script>
