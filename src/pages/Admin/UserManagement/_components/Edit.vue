<template>
  <QEditForm :useStore="useStore" :title="pageTitle">
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input outlined v-model="formData.name" dense label="Name" />
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          type="email"
          outlined
          v-model="formData.email"
          dense
          label="Email"
        />
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input outlined v-model="formData.username" dense label="Username" />
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-select
          :options="getRoleOptions"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="role"
          outlined
          v-model="formData.role"
          dense
          label="Select Role"
        />
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "stores/auth/index";

export default {
  name: "CreateUserPage",
  props: {
    useStore: null, // store path
    company: Object,
  },
  setup(props) {
    const authUserStore = useAuthStore();
    const { useStore, company } = reactive(props);
    const { formData, filter } = storeToRefs(useStore);
    const route = useRoute();

    onMounted(() => {
      formData.value.company_id = route?.params?.id;
    });

    const pageTitle = computed(() => {
      return `Edit user ${company?.name ? "( " + company?.name + " )" : ""}`;
    });

    const getRoleOptions = computed(() => {
      if (authUserStore?.authUser?.user_role?.role?.code === "sadmin") {
        if (company?.name) {
          return [
            {
              label: "Company Admin",
              value: "cadmin",
            },
            {
              label: "Company Employee",
              value: "cemployee",
            },
          ];
        } else {
          return [
            {
              label: "Site Employee",
              value: "semployee",
            },
            {
              label: "Company Admin",
              value: "cadmin",
            },
            {
              label: "Company Employee",
              value: "cemployee",
            },
          ];
        }
      } else if (
        authUserStore?.authUser?.user_role?.role?.code === "semployee"
      ) {
        return [
          {
            label: "Company Admin",
            value: "cadmin",
          },
          {
            label: "Company Employee",
            value: "cemployee",
          },
        ];
      } else if (authUserStore?.authUser?.user_role?.role?.code === "sadmin") {
        return [
          {
            label: "Company Admin",
            value: "cadmin",
          },
          {
            label: "Company Employee",
            value: "cemployee",
          },
        ];
      } else {
        return [
          {
            label: "Company Employee",
            value: "cemployee",
          },
        ];
      }
    });

    return {
      getRoleOptions,
      pageTitle,
      roleOptons: [
        { label: "Site Employee", value: "semployee" },
        { label: "Site Employee", value: "semployee" },
      ],
      formData,
    };
  },
};
</script>
