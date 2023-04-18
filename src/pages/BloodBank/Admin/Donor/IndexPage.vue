<template>
  <q-page class="q-pb-md">
    <BloodAdmin />
    <div class="q-pt-md">
      <QDataTable
        :aditionalActions="true"
        :canEdit="false"
        :canAdd="false"
        :canDelete="false"
        class="no-shadow"
        :useStore="donorStore"
        title="Donors"
      >
      </QDataTable>
      <!-- <template v-slot:aditionalActions="props">
      <q-btn
        flat
        round
        dense
        color="accent"
        icon="edit"
        class="q-ml-sm"
        @click="onClickEdit(props.row)"
      >
        <q-tooltip> Edit </q-tooltip>
      </q-btn>
    </template> -->
    </div>

    <!-- Edit User Dialog -->
    <!-- <q-dialog v-model="showEditModal">
      <q-card class="card">
        <EditUser :useStore="userStore" :company="currentCompany"></EditUser>
      </q-card>
    </q-dialog> -->
  </q-page>
</template>

<script>
import {
  computed,
  ref,
  onMounted,
  defineAsyncComponent,
  onBeforeMount,
  onBeforeUnmount,
  watch,
} from "vue";
import { useUserStore } from "stores/user";
import { useShowDonorStore } from "stores/showDonors";
import { useCompanyStore } from "stores/company/index";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

// const EditUser = defineAsyncComponent(() => import("./EditDonor.vue"));

export default {
  name: "UserPage",
  components: {
    // EditUser,
  },

  setup() {
    const userStore = useUserStore();
    const donorStore = useShowDonorStore();
    const showEditModal = computed(() => userStore.showEditModal);

    const { dialogs, formData, filter } = storeToRefs(userStore);
    const route = useRoute();

    onBeforeMount(() => {
      filter.value.company_id = route.params.id;
    });

    watch(route, async (newValue, oldValue) => {
      if (newValue.params.id === undefined) {
        filter.value.company_id = null;
      }
    });

    const currentCompany = ref({});
    const companyStore = useCompanyStore();
    const { getItem } = companyStore;
    onMounted(() => {
      getItem({ id: route.params.id }).then((response) => {
        currentCompany.value = response;
      });
    });

    const onClickEdit = (params) => {
      formData.value.id = params.id;
      formData.value.name = params.name;
      formData.value.email = params.email;
      formData.value.username = params.username;
      formData.value.role = params.user_role.role.code;
      formData.value.primary_contact = params.primary_contact;
      formData.value.secondary_contact = params.secondary_contact;
      formData.value.identity_proof = params.identity_proof;
      formData.value.address = params.address;
      formData.value.gender = params.gender;
      formData.value.disease = params.disease;
      formData.value.assigned_to_room = params.assigned_to_room;
      formData.value.blood_group = params.blood_group;
      formData.value.date_of_addmission = params.date_of_addmission;
      formData.value.age = params.age;
      formData.value.blood_pressure_level = params.blood_pressure_level;
      formData.value.heart_beat = params.heart_beat;
      formData.value.sugar_level = params.sugar_level;
      formData.value.height = params.height;
      formData.value.weight = params.weight;
      formData.value.salary = params.salary;
      formData.value.experience = params.experience;
      dialogs.value.editItem = true;
    };

    return {
      userStore,
      donorStore,
      showEditModal,
      onClickEdit,
      currentCompany,
      filter,
    };
  },
};
</script>
