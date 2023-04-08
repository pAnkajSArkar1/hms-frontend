<template>
  <QEditForm :useStore="useStore" title="Edit PPE Template">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-12 col-lg-12">
        <q-input
          dense
          outlined
          v-model="formData.name"
          placeholder="Ppe Template"
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
          v-model="formData.frequency"
          dense
          label="Select Frequency"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <QSearch
          label="Select Branch"
          v-model="formData.branch_id"
          :useStore="branchStore"
          optionValue="id"
          optionLabel="name"
        />
      </div>

      <div class="row q-col-gutter-md">
        <div
          class="col-12 col-md-6 col-lg-6"
          v-for="(equipment, key) in formData.equipments"
          :key="key"
        >
          <QSearch
            label="Select Equipment"
            :useStore="equipmentStore"
            v-model="equipment['equipment_id']"
            optionValue="id"
            optionLabel="name"
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
    </div>
  </QEditForm>
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
    const { formData } = storeToRefs(useStore);
    const branchStore = useBranchStore();
    const equipmentStore = usePpeEquipmentStore();

    const add = () => {
      formData.value.equipments.push({ equipment_id: "" });
    };
    const remove = () => {
      formData.value.equipments.pop({ equipment_id: "" });
    };

    return {
      formData,
      branchStore,
      equipmentStore,
      add,
      remove,
      frequencyOptions: [{ label: "Daily CheckList", value: "decl" }],
    };
  },
};
</script>
