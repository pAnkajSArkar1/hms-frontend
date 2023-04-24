<template>
  <q-page>
    <MedicineMenu />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Category" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateCategory">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-category :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditCategory">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-category :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useCategoryStore } from "stores/MedicineManage/category";

const CreateCategory = defineAsyncComponent(() =>
  import("./CreateCategory.vue")
);
const EditCategory = defineAsyncComponent(() => import("./EditCategory.vue"));

export default {
  name: "CategoryManagement",
  components: {
    CreateCategory,
    EditCategory,
  },

  setup() {
    const useStore = useCategoryStore();
    const showCreateCategory = computed(() => useStore.showCreateCategory);
    const showEditCategory = computed(() => useStore.showEditCategory);

    return {
      useStore,
      showCreateCategory,
      showEditCategory,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
