<template>
  <QEditForm :useStore="useStore" title="Edit Template">
    <div class="template">
      <div class="row q-col-gutter-md">
        <!-- title -->
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            label="Template title"
            dense
            outlined
            v-model="formData.title"
            lazy-rules
            :rules="[
              (val) => (val && val.length) || 'Please enter Template Title',
            ]"
            :error-message="$getValidationErrors('title')"
            :error="$hasValidationErrors('title')"
          />
        </div>
        <!-- list of template type dropdown -->
        <div class="col-12 col-md-6 col-lg-6">
          <q-select
            :options="typeOptions"
            map-options
            emit-value
            option-label="label"
            option-value="value"
            type="type"
            outlined
            v-model="formData.type"
            dense
            label="Select Type"
            :rules="[(val) => (val && val.length) || 'Please select type']"
            :error-message="$getValidationErrors('type')"
            :error="$hasValidationErrors('type')"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="q-pb-md">
          <QSearch
            label="Department Name"
            v-model="formData.branch_id"
            optionValue="id"
            optionLabel="name"
            :useStore="branchStore"
            @update:modelValue="fetchAssestsLists"
          />
        </div>
        <span v-if="formData.branch_id != null">
          <div class="row q-col-gutter-md">
            <div
              class="col-12"
              v-for="(assets, key) in formData.assets"
              :key="key"
            >
              <q-select
                dense
                label="Select Asset"
                outlined
                :options="assetsOptions"
                v-model="assets['asset_id']"
                option-value="id"
                option-label="name"
                emit-value
                map-options
              />
            </div>
            <div class="row">
              <q-card-actions>
                <q-btn class="addrow" color="primary" @click="add"
                  >Add Row</q-btn
                >
              </q-card-actions>
              <q-card-actions>
                <q-btn class="deleterow" color="primary" @click="remove"
                  >Remove Row</q-btn
                >
              </q-card-actions>
            </div>
          </div>
        </span>
      </div>

      <!-- Description -->
      <div class="Description q-pt-md">
        <q-input
          outlined
          label="Description"
          v-model="formData.description"
          lazy-rules
          type="textarea"
        />
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useTemplateStore } from "stores/Customer/Inspection/template";
import { useAssetStore } from "stores/asset";
import { useBranchStore } from "stores/branch";

export default {
  name: "EditTemplate",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const templateStore = useTemplateStore();
    const assetStore = useAssetStore();
    const branchStore = useBranchStore();

    const assetsOptions = ref([]);

    // watch(formData.branch_id, async (newValue, oldValue) => {
    //   console.log('checking branch')
    //   if (newValue != oldValue) {
    //     formData.assets = [
    //       {
    //         asset_id: null,
    //       }
    //     ]
    //     fetchAssestsLists(newValue);
    //   }
    // });

    const fetchAssestsLists = (branch_id) => {
      assetStore
        .getItems({ all: true, branch_id: branch_id })
        .then((response) => {
          assetsOptions.value = response.data;
        });
    };
    const add = () => {
      formData.value.assets.push({ asset_id: "" });
    };
    const remove = () => {
      formData.value.assets.pop({ asset_id: "" });
    };

    return {
      formData,
      templateStore,
      assetStore,
      branchStore,
      fetchAssestsLists,
      assetsOptions,
      add,
      remove,
      typeOptions: [{ label: "Daily CheckList", value: "decl" }],
      statusOptions: [
        { label: "Ongoing", value: "ongoing" },
        { label: "Done", value: "done" },
      ],
    };
  },
};
</script>

<style>
.addrow {
  width: 100px;
}
.deleterow {
  width: 120px;
}
</style>
