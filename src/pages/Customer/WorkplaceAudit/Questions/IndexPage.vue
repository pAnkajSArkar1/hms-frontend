<template>
  <q-page>
    <WAMenu />
    <div class="q-pa-md">
      <QDataTable
        :setCreateModal="false"
        :useStore="useStore"
        title="All Questions"
      />

      <!-- CREATE -->
      <q-dialog v-model="showCreateQuestion">
        <q-card class="" style="width: 500px">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-question :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditQuestion">
        <q-card class="" style="width: 500px">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-question :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useQuestionStore } from "stores/Customer/WorkplaceAudit/questions";

const WAMenu = defineAsyncComponent(() =>
  import("../components/WASubMenu.vue")
);
const CreateQuestion = defineAsyncComponent(() =>
  import("./CreateQuestion.vue")
);
const EditQuestion = defineAsyncComponent(() => import("./EditQuestion.vue"));

export default {
  name: "AllQuestions",
  components: {
    CreateQuestion,
    EditQuestion,
    WAMenu,
  },
  setup() {
    const useStore = useQuestionStore();
    const showCreateQuestion = computed(() => useStore.showCreateQuestion);
    const showEditQuestion = computed(() => useStore.showEditQuestion);

    return {
      useStore,
      showCreateQuestion,
      showEditQuestion,
      WAMenu,
    };
  },
};
</script>
