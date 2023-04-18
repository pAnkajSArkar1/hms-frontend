<template>
  <QEditForm :useStore="useStore" :title="pageTitle">
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.name"
          dense
          label="Name"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          type="email"
          outlined
          v-model="formData.email"
          dense
          label="Email"
          :rules="[(val) => (val && val.length) || 'Please enter email']"
          :error-message="$getValidationErrors('email')"
          :error="$hasValidationErrors('email')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.username"
          dense
          label="Username"
          :error-message="$getValidationErrors('username')"
          :error="$hasValidationErrors('username')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.primary_contact"
          dense
          type="number"
          label="Primary Contact"
          :rules="[
            (val) => (val && val.length) || 'Please enter primary contact',
          ]"
          :error-message="$getValidationErrors('primary_contact')"
          :error="$hasValidationErrors('primary_contact')"
        >
        </q-input>
      </div>
      <div class="col-12">
        <q-input
          type="textarea"
          outlined
          v-model="formData.address"
          dense
          label="Address"
          :rules="[(val) => (val && val.length) || 'Please enter your address']"
          :error-message="$getValidationErrors('address')"
          :error="$hasValidationErrors('address')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="genderList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="gender"
          outlined
          clearable
          v-model="formData.gender"
          dense
          label="Gender"
          :rules="[(val) => (val && val.length) || 'Please select a gender']"
          :error-message="$getValidationErrors('gender')"
          :error="$hasValidationErrors('gender')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="bloodList"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="blood"
          outlined
          clearable
          v-model="formData.blood_group"
          dense
          label="Blood Group"
          :rules="[(val) => (val && val.length) || 'Please select blood group']"
          :error-message="$getValidationErrors('blood_group')"
          :error="$hasValidationErrors('blood_group')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.age"
          dense
          type="number"
          label="Age"
          :error-message="$getValidationErrors('age')"
          :error="$hasValidationErrors('age')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.disease"
          dense
          label="Disease"
          :rules="[(val) => (val && val.length) || 'Please enter the disease']"
          :error-message="$getValidationErrors('disease')"
          :error="$hasValidationErrors('disease')"
        >
        </q-input>
      </div>
    </div>
    <div></div>
  </QEditForm>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "stores/auth/index";
// import { useUserStore } from "stores/user/index";

export default {
  name: "EditUserPage",
  props: {
    useStore: null, // store path
    company: Object,
  },
  setup(props) {
    const authUserStore = useAuthStore();
    // const useUsersStore = useUserStore();
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
      roleOptons: [
        {
          label: "Company Admin",
          value: "cadmin",
        },
        {
          label: "Company Employee",
          value: "cemployee",
        },
      ],
      genderList: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
      ],
      bloodList: [
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "AB+", value: "AB+" },
        { label: "AB-", value: "AB-" },
      ],
      formData,
      // useUsersStore,
      pageTitle,
    };
  },
};
</script>
