<template>
  <q-page class="q-pa-md">
    <!-- Table -->
    <QDataTable
      :aditionalActions="true"
      class="no-shadow"
      :useStore="cmpStore"
      title="Hospitals"
    >
      <template v-slot:aditionalActions="props">
        <q-btn
          flat
          round
          dense
          color="accent"
          icon="group"
          class="q-ml-sm"
          @click="createCompanyUsers(props.row)"
        >
          <q-tooltip> Manage Users </q-tooltip>
        </q-btn>
      </template>
    </QDataTable>

    <!-- Create User Dialog -->
    <q-dialog v-model="showCreateModal">
      <q-card class="medium-card">
        <CreateCompany :useStore="cmpStore" />
      </q-card>
    </q-dialog>

    <!-- Edit User Dialog -->
    <q-dialog v-model="showEditModal">
      <q-card class="medium-card">
        <EditCompany :useStore="cmpStore" />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCompanyStore } from "stores/company/index";
import { defineAsyncComponent } from "vue";
import { useRouter, useRoute } from "vue-router";

const EditCompany = defineAsyncComponent(() =>
  import("./_components/Edit.vue")
);
const CreateCompany = defineAsyncComponent(() =>
  import("./_components/Create.vue")
);

export default {
  name: "CompanyPage",
  components: {
    EditCompany,
    CreateCompany,
  },

  setup() {
    const cmpStore = useCompanyStore();
    const showEditModal = computed(() => cmpStore.showEditModal);
    const showCreateModal = computed(() => cmpStore.showCreateModal);

    const { dialogs, formData, filter } = storeToRefs(cmpStore);

    const router = useRouter();

    const createCompanyUsers = (params) => {
      router.push({ name: "company-users.index", params: { id: params.id } });
    };

    return {
      cmpStore,
      showCreateModal,
      showEditModal,
      createCompanyUsers,
    };
  },
};
</script>
