<template>
  <QEditForm :useStore="useStore" :title="pageTitle">
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.name"
          dense
          label="Name"
          :rules="[(val) => (val && val.length) || 'Please enter name']"
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
          :rules="[(val) => (val && val.length) || 'Please enter username']"
          :error-message="$getValidationErrors('username')"
          :error="$hasValidationErrors('username')"
        >
        </q-input>
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
          :rules="[(val) => (val && val.length) || 'Please select role']"
          :error-message="$getValidationErrors('role')"
          :error="$hasValidationErrors('role')"
        >
        </q-select>
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
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.secondary_contact"
          dense
          type="number"
          label="Secondary Contact"
          :rules="[
            (val) => (val && val.length) || 'Please enter secondary contact',
          ]"
          :error-message="$getValidationErrors('secondary_contact')"
          :error="$hasValidationErrors('secondary_contact')"
        >
        </q-input>
      </div>

      <div class="col-12">
        <SingleUploaderFile
          v-model="formData.identity_proof"
          label="Upload Identity Proof"
          acceptFileType=".pdf,.txt,.doc,.docx"
          attachmentType="document"
        />
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
          :rules="[(val) => (val && val.length) || 'Please enter age']"
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
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          readonly
          label="Date of Admission"
          v-model="formData.date_of_addmission"
          mask="date"
          :rules="[
            (val) => (val && val.length) || 'Please enter date of addmission',
          ]"
          :error-message="$getValidationErrors('date_of_addmission')"
          :error="$hasValidationErrors('date_of_addmission')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formData.date_of_addmission">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          type="number"
          v-model="formData.assigned_to_room"
          dense
          label="Assigned to room"
          :rules="[
            (val) => (val && val.length) || 'Please assign a room number',
          ]"
          :error-message="$getValidationErrors('assigned_to_room')"
          :error="$hasValidationErrors('assigned_to_room')"
        >
        </q-input>
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.blood_pressure_level"
          dense
          label="Blood pressure level"
          :rules="[
            (val) => (val && val.length) || 'Please enter blood pressure level',
          ]"
          :error-message="$getValidationErrors('blood_pressure_level')"
          :error="$hasValidationErrors('blood_pressure_level')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.heart_beat"
          dense
          label="Heart Rate"
          :rules="[(val) => (val && val.length) || 'Please enter heart rate']"
          :error-message="$getValidationErrors('heart_beat')"
          :error="$hasValidationErrors('heart_beat')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.sugar_level"
          dense
          label="Blood Sugar Level"
          :rules="[
            (val) => (val && val.length) || 'Please enter blood sugar level',
          ]"
          :error-message="$getValidationErrors('sugar_level')"
          :error="$hasValidationErrors('sugar_level')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.height"
          dense
          label="Height"
          :rules="[(val) => (val && val.length) || 'Please enter height']"
          :error-message="$getValidationErrors('height')"
          :error="$hasValidationErrors('height')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.weight"
          dense
          label="Weight"
          :rules="[(val) => (val && val.length) || 'Please enter weight']"
          :error-message="$getValidationErrors('weight')"
          :error="$hasValidationErrors('weight')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.salary"
          dense
          type="number"
          label="Salary"
          :rules="[(val) => (val && val.length) || 'Please enter salary']"
          :error-message="$getValidationErrors('salary')"
          :error="$hasValidationErrors('salary')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.experience"
          dense
          label="Experience"
          :rules="[
            (val) => (val && val.length) || 'Please enter the experience',
          ]"
          :error-message="$getValidationErrors('experience')"
          :error="$hasValidationErrors('experience')"
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
      if (
        authUserStore?.authUser?.user_role?.role?.code === "sadmin" &&
        authUserStore?.authUser?.user_role?.role?.code === "admin"
      ) {
        if (company?.name) {
          return [
            {
              label: "Doctor",
              value: "doctor",
            },
            {
              label: "General user",
              value: "general_user",
            },
            {
              label: "Pharmacist",
              value: "pharmacist",
            },
            {
              label: "Receptionist",
              value: "receptionist",
            },
          ];
        } else {
          return [
            {
              label: "Doctor",
              value: "doctor",
            },
            {
              label: "General user",
              value: "general_user",
            },
            {
              label: "Pharmacist",
              value: "pharmacist",
            },
            {
              label: "Receptionist",
              value: "receptionist",
            },
          ];
        }
      } else if (
        authUserStore?.authUser?.user_role?.role?.code === "semployee"
      ) {
        return [
          {
            label: "Doctor",
            value: "doctor",
          },
          {
            label: "General user",
            value: "general_user",
          },
          {
            label: "Pharmacist",
            value: "pharmacist",
          },
          {
            label: "Receptionist",
            value: "receptionist",
          },
        ];
      } else if (authUserStore?.authUser?.user_role?.role?.code === "sadmin") {
        return [
          {
            label: "Doctor",
            value: "doctor",
          },
          {
            label: "General user",
            value: "general_user",
          },
          {
            label: "Pharmacist",
            value: "pharmacist",
          },
          {
            label: "Receptionist",
            value: "receptionist",
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
