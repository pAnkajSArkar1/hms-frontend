<template>
  <QCreateForm :useStore="useStore" title="New Task">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Task Name"
          dense
          outlined
          v-model="newData.name"
          :rules="[
            (val) => (val && val.length) || 'Please enter the task name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Assigned To"
          v-model="newData.assigned_to"
          :useStore="UserStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('assigned_to')"
          :error="$hasValidationErrors('assigned_to')"
        />
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          outlined
          dense
          clearable
          v-model="newData.priority"
          :options="priority_options"
          label="Priority"
          emit-value
          map-options
          :rules="[
            (val) => (val && val.length) || 'Please chooose the priority',
          ]"
          :error-message="$getValidationErrors('priority')"
          :error="$hasValidationErrors('priority')"
        />
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          outlined
          dense
          clearable
          v-model="newData.status"
          :options="status_options"
          label="Status"
          emit-value
          map-options
          :rules="[(val) => (val && val.length) || 'Please chooose the status']"
          :error-message="$getValidationErrors('status')"
          :error="$hasValidationErrors('status')"
        />
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          dense
          outlined
          v-model="newData.deadline"
          label="Deadline"
          :rules="[
            (val) => (val && val.length) || 'Please choose the Deadline Date',
          ]"
          :error-message="$getValidationErrors('deadline')"
          :error="$hasValidationErrors('deadline')"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="newData.deadline">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-12">
        <q-input
          label="Description"
          dense
          outlined
          type="textarea"
          v-model="newData.description"
          :rules="[
            (val) => (val && val.length) || 'Please enter the description',
          ]"
          :error-message="$getValidationErrors('description')"
          :error="$hasValidationErrors('description')"
        />
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";

export default {
  name: "CreateTaskManage",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const UserStore = useUserStore();

    return {
      newData,
      UserStore,
      priority_options: [
        {
          label: "Very High",
          value: "Very High",
        },
        {
          label: "High",
          value: "High",
        },
        {
          label: "Medium",
          value: "Medium",
        },
        {
          label: "Low",
          value: "Low",
        },
        {
          label: "Very Low",
          value: "Very Low",
        },
      ],
      status_options: [
        {
          label: "Complete",
          value: "Complete",
        },
        {
          label: "Incomplete",
          value: "Incomplete",
        },
        {
          label: "Overdue",
          value: "Overdue",
        },
      ],

      frequency_options: [
        {
          label: "Daily",
          value: "Daily",
        },
        {
          label: "Weekly",
          value: "Weekly",
        },
        {
          label: "Monthly",
          value: "Monthly",
        },
      ],
    };
  },
};
</script>
