<template>
  <q-page>
    <DoctorAdmin />
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="Speciality" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateSpeciality">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-bed-type :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditSpeciality">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-bed-type :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useSpecialityStore } from "stores/doctorSpeciality";

const CreateBedType = defineAsyncComponent(() =>
  import("./CreateSpeciality.vue")
);
const EditBedType = defineAsyncComponent(() => import("./EditSpeciality.vue"));

export default {
  name: "BedTypeManagement",
  components: {
    CreateBedType,
    EditBedType,
  },

  setup() {
    const useStore = useSpecialityStore();
    const showCreateSpeciality = computed(() => useStore.showCreateSpeciality);
    const showEditSpeciality = computed(() => useStore.showEditSpeciality);

    return {
      useStore,
      showCreateSpeciality,
      showEditSpeciality,
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 400px;
}
</style>
