<template>
  <q-page class="q-pa-md">
    <QDataTable
      :aditionalActions="true"
      :canEdit="false"
      class="no-shadow"
      :useStore="userStore"
      title="Users"
    >
      <template v-slot:aditionalActions="props">
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
      </template>
    </QDataTable>
    <!-- Create User Dialog -->
    <q-dialog v-model="showCreateModal">
      <q-card>
        <CreateUser
          :useStore="userStore"
          :company="currentCompany"
        ></CreateUser>
      </q-card>
    </q-dialog>

    <!-- Edit User Dialog -->
    <q-dialog v-model="showEditModal">
      <q-card>
        <EditUser :useStore="userStore" :company="currentCompany"></EditUser>
      </q-card>
    </q-dialog>
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
import { useUserStore } from "stores/user/index";
import { useCompanyStore } from "stores/company/index";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

const EditUser = defineAsyncComponent(() => import("./_components/Edit.vue"));
const CreateUser = defineAsyncComponent(() =>
  import("./_components/Create.vue")
);

export default {
  name: "UserPage",
  components: {
    EditUser,
    CreateUser,
  },

  setup() {
    const userStore = useUserStore();
    const showEditModal = computed(() => userStore.showEditModal);
    const showCreateModal = computed(() => userStore.showCreateModal);

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
      // formData.value.user_details = params.user_details;
      // formData.value.user_details.address = params?.user_details?.address;
      // formData.value.user_details.gender = params.user_details.gender;
      // formData.value.user_details.disease = params.user_details.disease;
      // formData.value.user_details.assigned_to_room =
      //   params.user_details.assigned_to_room;
      // formData.value.user_details.blood_group = params.user_details.blood_group;
      // formData.value.user_details.date_of_addmission =
      //   params.user_details.date_of_addmission;
      // formData.value.user_details.age = params.user_details.age;
      // formData.value.user_details.blood_pressure_level =
      //   params.user_details.blood_pressure_level;
      // formData.value.user_details.heart_beat = params.user_details.heart_beat;
      // formData.value.user_details.sugar_level = params.user_details.sugar_level;
      // formData.value.user_details.height = params.user_details.height;
      // formData.value.user_details.weight = params.user_details.weight;
      // formData.value.user_details.salary = params.user_details.salary;
      // formData.value.user_details.experience = params.user_details.experience;
      console.log("hi", formData.value.user_details);
      dialogs.value.editItem = true;
    };

    return {
      userStore,
      showCreateModal,
      showEditModal,
      onClickEdit,
      currentCompany,
      filter,
    };
  },
};
</script>
