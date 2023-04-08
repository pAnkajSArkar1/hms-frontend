<template>
  <QCreateForm :useStore="useStore" title="New PPE Checklist">
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-md-12 col-lg-12">
        <q-input
          dense
          outlined
          placeholder="Project Name"
          v-model="newData.name"
          :rules="[(val) => (val && val.length) || 'Please enter project name']"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Site Checked By"
          v-model="newData.checked_by"
          :rules="[
            (val) => (val && val.length) || 'Please enter checked person name',
          ]"
          :error-message="$getValidationErrors('checked_by')"
          :error="$hasValidationErrors('checked_by')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Supervisor/Quality Inspector"
          v-model="newData.supervisor"
          :rules="[
            (val) =>
              (val && val.length) ||
              'Please enter supervisor/quality Inspector name',
          ]"
          :error-message="$getValidationErrors('supervisor')"
          :error="$hasValidationErrors('supervisor')"
        />
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Company Name"
          v-model="newData.business"
          readonly
          disable
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Address"
          v-model="newData.address"
          :rules="[(val) => (val && val.length) || 'Please enter address']"
          :error-message="$getValidationErrors('address')"
          :error="$hasValidationErrors('address')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Contact Number"
          v-model="newData.primary_number"
          :rules="[
            (val) => (val && val.length) || 'Please enter contact number',
          ]"
          :error-message="$getValidationErrors('primary_number')"
          :error="$hasValidationErrors('primary_number')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Secondary Number"
          v-model="newData.secondary_number"
          :rules="[
            (val) => (val && val.length) || 'Please enter contact number',
          ]"
          :error-message="$getValidationErrors('secondary_number')"
          :error="$hasValidationErrors('secondary_number')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          dense
          outlined
          placeholder="Action Date"
          v-model="newData.action_date"
          mask="date"
          :rules="[(val) => (val && val.length) || 'Please enter action date']"
          :error-message="$getValidationErrors('action_date')"
          :error="$hasValidationErrors('action_date')"
        >
          <template v-slot:append>
            <q-icon name="event" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Branch Name"
          v-model="newData.branch_id"
          optionValue="id"
          optionLabel="name"
          :useStore="branchStore"
        />
      </div>
    </div>

    <!-- Employee & Equipments -->
    <span v-if="newData.branch_id != null">
      <div v-for="(user, key) in newData.user" :key="key">
        <div class="row q-col-gutter-sm">
          <div class="col-12">
            <QSearch
              label="Employee Name"
              :useStore="userStore"
              v-model="user['user_ids']"
              optionValue="id"
              optionLabel="name"
              :error-message="$getValidationErrors('user_ids')"
              :error="$hasValidationErrors('user_ids')"
            />
          </div>
          <div v-for="iAsset in newData.assets" v-bind:key="iAsset.id">
            <div class="col-12 col-md-4 col-lg-4 q-pb-md">
              {{ iAsset.name }}
              <!-- <QSearch
                dense
                label="Select Asset"
                outlined
                :useStore="assetStore"
                v-model="iAsset"
                option-value="id"
                option-label="name"
                emit-value
                map-options
              /> -->
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <q-card-actions>
          <q-btn class="addrow" color="primary" @click="add"
            >Add Employee</q-btn
          >
        </q-card-actions>
        <q-card-actions>
          <q-btn class="deleterow" color="primary" @click="remove"
            >Remove Employee</q-btn
          >
        </q-card-actions>
      </div>
    </span>

    <div class="q-py-md">
      <div class="row q-col-gutter-sm">
        <div class="col-12 col-md-12 col-lg-12"></div>
        <div></div>
      </div>

      <!-- COMMENT SECTION -->
      <div class="q-py-md">
        <q-input
          outlined
          type="textarea"
          label="Comment/Remarks"
          v-model="newData.comment"
        />
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { usePpeChecklistStore } from "src/stores/Customer/PpeInspection/ppeChecklist";
import { useUserStore } from "stores/user";
import { useBranchStore } from "stores/branch";
import { useAssetStore } from "stores/asset";

export default {
  name: "CreatePpeInspection",
  props: {
    useStore: null, // store path
  },

  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const PpeChecklistStore = usePpeChecklistStore();
    const userStore = useUserStore();
    const branchStore = useBranchStore();
    const assetStore = useAssetStore();

    const fetchAssestsLists = (branch_id) => {
      assetStore
        .getItems({ all: true, branch_id: branch_id })
        .then((response) => {
          assetsOptions.value = response.data;
        });
    };

    return {
      newData,
      PpeChecklistStore,
      userStore,
      branchStore,
      assetStore,
      fetchAssestsLists,
      options: ["Good", "Bad", "Not Required"],
    };
  },
  methods: {
    add: function () {
      this.newData.user.push({ user_id: "" });
    },
    remove: function () {
      this.newData.user.pop({ user_id: "" });
    },
  },
};
</script>
