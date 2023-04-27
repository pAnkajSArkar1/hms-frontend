<template>
  <q-page class="">
    <DoctorAdmin />
    <div class="q-pa-md">
      <QDataTable
        :customBodySlot="true"
        class="no-shadow"
        :useStore="userStore"
        title="Doctors"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr v-if="bodyRow.row.user_role.role.code === 'doctor'">
            <q-td key="name">{{ bodyRow.row?.name }} </q-td>
            <q-td key="email">{{ bodyRow.row?.email }} </q-td>
            <q-td key="speciality"
              >{{ bodyRow.row?.doctors_speciality_details?.name }}
            </q-td>

            <q-td key="actions" align="right">
              <q-btn
                flat
                round
                dense
                color="accent"
                icon="edit"
                class="q-ml-sm"
                @click="onClickEdit(bodyRow.row)"
              >
                <q-tooltip> Edit </q-tooltip>
              </q-btn>
              <q-btn
                flat
                round
                dense
                color="negative"
                icon="clear"
                @click="onClickDelete(bodyRow.row)"
              >
                <q-tooltip> Delete </q-tooltip>
              </q-btn>
            </q-td>
          </q-tr>
        </template>
        <!-- <template v-slot:customTop>
        <div>
          <QSearch
            label="Department"
            clearable
            v-model="filter.branch_id"
            :useStore="branchStore"
            optionValue="id"
            optionLabel="name"
          />
        </div>
      </template> -->
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
      </QDataTable>
    </div>

    <!-- Create User Dialog -->
    <q-dialog v-model="showCreateModal">
      <q-card class="card">
        <CreateUser
          :useStore="userStore"
          :company="currentCompany"
        ></CreateUser>
      </q-card>
    </q-dialog>

    <!-- Edit User Dialog -->
    <q-dialog v-model="showEditModal">
      <q-card class="card">
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
  getCurrentInstance,
  defineAsyncComponent,
  onBeforeMount,
  onBeforeUnmount,
  watch,
} from "vue";
import { useUserStore } from "stores/doctorManage/index";
import { useCompanyStore } from "stores/company/index";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
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
    const { deleteItem } = userStore;

    const showEditModal = computed(() => userStore.showEditModal);
    const showCreateModal = computed(() => userStore.showCreateModal);
    const app = getCurrentInstance();
    const $q = useQuasar();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const loading = ref([]);
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

    // const onClickEdit = (params) => {
    //   formData.value.id = params.id;
    //   formData.value.name = params.name;
    //   formData.value.doctors_speciality_id = params.doctors_speciality_id;
    //   formData.value.email = params.email;
    //   formData.value.username = params.username;
    //   formData.value.role = params.user_role.role.code;
    //   formData.value.primary_contact = params.primary_contact;
    //   formData.value.secondary_contact = params.secondary_contact;
    //   formData.value.identity_proof = params.identity_proof;
    //   formData.value.address = params.address;
    //   formData.value.gender = params.gender;
    //   formData.value.disease = params.disease;
    //   formData.value.assigned_to_room = params.assigned_to_room;
    //   formData.value.blood_group = params.blood_group;
    //   formData.value.date_of_addmission = params.date_of_addmission;
    //   formData.value.age = params.age;
    //   formData.value.blood_pressure_level = params.blood_pressure_level;
    //   formData.value.heart_beat = params.heart_beat;
    //   formData.value.sugar_level = params.sugar_level;
    //   formData.value.height = params.height;
    //   formData.value.weight = params.weight;
    //   formData.value.salary = params.salary;
    //   formData.value.experience = params.experience;
    //   dialogs.value.editItem = true;
    // };
    const onClickEdit = (params) => {
      formData.value = params;
      dialogs.value.editItem = true;
    };
    const onClickDelete = (param) => {
      $q.dialog({
        title: "Delete Confirmation",
        message: "Are you sure you want to Delete",
        ok: {
          label: "Delete",
          unelevated: true,
          color: "red-5",
        },
        cancel: {
          unelevated: true,
          color: "",
          textColor: "black",
        },
        persistent: true,
      }).onOk(() => {
        loading.value = true;
        deleteItem(param)
          .then((response) => {
            Qnotify({
              message: response.data.message,
              type: "positive",
            });
          })
          .catch((error) => {
            Qnotify({
              message: error.message,
              type: "negative",
            });
          })
          .finally(() => {
            loading.value = false;
          });
      });
    };

    return {
      userStore,
      showCreateModal,
      showEditModal,
      onClickDelete,
      onClickEdit,
      currentCompany,
      filter,
    };
  },
};
</script>
