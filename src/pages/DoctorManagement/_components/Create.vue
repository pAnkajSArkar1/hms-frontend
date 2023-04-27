<template>
  <QCreateForm :useStore="useStore" :title="pageTitle">
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="newData.name"
          dense
          label="Name"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <QSearch
          label="Speciality"
          v-model="newData.doctors_speciality_id"
          :useStore="specialityStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('doctors_speciality_id')"
          :error="$hasValidationErrors('doctors_speciality_id')"
        />
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          type="email"
          outlined
          v-model="newData.email"
          dense
          label="Email"
          :error-message="$getValidationErrors('email')"
          :error="$hasValidationErrors('email')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="newData.username"
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
          v-model="newData.primary_contact"
          dense
          type="number"
          label="Primary Contact"
          :error-message="$getValidationErrors('primary_contact')"
          :error="$hasValidationErrors('primary_contact')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="newData.secondary_contact"
          dense
          type="number"
          label="Secondary Contact"
          :error-message="$getValidationErrors('secondary_contact')"
          :error="$hasValidationErrors('secondary_contact')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          type="password"
          outlined
          v-model="newData.password"
          dense
          label="New Password"
          :error-message="$getValidationErrors('password')"
          :error="$hasValidationErrors('password')"
        >
        </q-input>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="newData.confirm_password"
          dense
          type="password"
          label="Confirm Password"
          :error-message="$getValidationErrors('confirm_password')"
          :error="$hasValidationErrors('confirm_password')"
        >
        </q-input>
      </div>
      <!-- <div class="col-12">
        <SingleUploaderFile
          v-model="newData.identity_proof"
          label="Upload Identity Proof"
          acceptFileType=".pdf,.txt,.doc,.docx"
          attachmentType="document"
        />
      </div> -->
      <div class="col-12">
        <q-input
          type="textarea"
          outlined
          v-model="newData.address"
          dense
          label="Address"
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
          v-model="newData.gender"
          dense
          label="Gender"
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
          v-model="newData.blood_group"
          dense
          label="Blood Group"
          :error-message="$getValidationErrors('blood_group')"
          :error="$hasValidationErrors('blood_group')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="newData.age"
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
          v-model="newData.fees"
          dense
          type="number"
          label="Fees"
          :error-message="$getValidationErrors('fees')"
          :error="$hasValidationErrors('fees')"
        >
        </q-input>
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useBedListStore } from "stores/Beds/bedList";
import { useAuthStore } from "stores/auth/index";
import { useSpecialityStore } from "stores/doctorSpeciality";

export default {
  name: "CreateUserPage",
  props: {
    useStore: null, // store path
    company: Object,
  },
  setup(props) {
    const authUserStore = useAuthStore();
    const bedListStore = useBedListStore();
    const specialityStore = useSpecialityStore();
    const { useStore, company } = reactive(props);
    const { newData, filter } = storeToRefs(useStore);
    const route = useRoute();

    onMounted(() => {
      newData.value.company_id = route?.params?.id;
      newData.value.role = "doctor";
    });

    const pageTitle = computed(() => {
      return `Add doctor ${company?.name ? "( " + company?.name + " )" : ""}`;
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
      newData,
      pageTitle,
      bedListStore,
      specialityStore,
    };
  },
};
</script>
