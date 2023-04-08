<template>
  <QCreateForm :useStore="useStore" title="New PPE Template">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-12 col-lg-12">
        <q-input
          dense
          outlined
          v-model="newData.name"
          placeholder="Ppe Template"
          lazy-rules
          hint
          :rules="[(val) => (val && val.length) || 'Please enter equipment']"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          :options="frequencyOptions"
          map-options
          emit-value
          option-label="label"
          option-value="value"
          type="type"
          outlined
          v-model="newData.frequency"
          dense
          label="Select Frequency"
          :rules="[(val) => (val && val.length) || 'Please select type']"
          :error-message="$getValidationErrors('type')"
          :error="$hasValidationErrors('type')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Select Department"
          v-model="newData.branch_id"
          :useStore="branchStore"
          optionValue="id"
          optionLabel="name"
          :error-message="$getValidationErrors('branch_id')"
          :error="$hasValidationErrors('branch_id')"
        />
      </div>

      <span v-if="newData.branch_id != null">
        <div class="row q-col-gutter-md">
          <div
            class="col-12 col-md-6 col-lg-6"
            v-for="(equipment, key) in newData.equipments"
            :key="key"
          >
            <QSearch
              label="Select Equipment"
              :useStore="equipmentStore"
              v-model="equipment['equipment_id']"
              optionValue="id"
              optionLabel="name"
              :error-message="$getValidationErrors('equipment_id')"
              :error="$hasValidationErrors('equipment_id')"
            />
          </div>
          <div class="row">
            <q-card-actions>
              <q-btn class="addrow" color="primary" @click="add">
                Add Equipment
              </q-btn>
            </q-card-actions>
            <q-card-actions>
              <q-btn class="deleterow" color="primary" @click="remove">
                Remove Equipment
              </q-btn>
            </q-card-actions>
          </div>
        </div>
      </span>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useBranchStore } from "stores/branch";
import { usePpeEquipmentStore } from "stores/Customer/PpeInspection/ppeEquipment";

export default {
  name: "CreateEquipment",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const branchStore = useBranchStore();
    const equipmentStore = usePpeEquipmentStore();

    const add = () => {
      newData.value.equipments.push({ equipment_id: "" });
    };
    const remove = () => {
      newData.value.equipments.pop({ equipment_id: "" });
    };

    return {
      newData,
      branchStore,
      equipmentStore,
      add,
      remove,
      frequencyOptions: [{ label: "Daily CheckList", value: "decl" }],
    };
  },
};
</script>
