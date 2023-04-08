<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Asset Management">
        <template v-slot:customTop>
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
        </template>
      </QDataTable>

      <!-- CREATE -->
      <q-dialog v-model="showCreateAsset">
        <q-card class="" style="width: 600px">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-asset :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditAsset">
        <q-card class="" style="width: 600px">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-asset :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useAssetStore } from "stores/asset";
import { useBranchStore } from "stores/branch";
import { storeToRefs } from "pinia";
const CreateAsset = defineAsyncComponent(() => import("./CreateAsset.vue"));
const EditAsset = defineAsyncComponent(() => import("./EditAsset.vue"));

export default {
  name: "ManageAsset",
  components: {
    CreateAsset,
    EditAsset,
  },
  setup() {
    const useStore = useAssetStore();
    const showCreateAsset = computed(() => useStore.showCreateAsset);
    const showEditAsset = computed(() => useStore.showEditAsset);
    const branchStore = useBranchStore();
    const { filter } = storeToRefs(useStore);

    return {
      useStore,
      branchStore,
      showCreateAsset,
      showEditAsset,
      filter,
      department: [
        { label: "Site Admin", value: "sadmin" },
        { label: "Site Employee", value: "semployee" },
      ],
    };
  },
};
</script>
