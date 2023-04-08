<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="All Patients" />

      <!-- CREATE -->
      <q-dialog v-model="showCreatePatient">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-patient :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditPatient">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-patient :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { usePatientStore } from "stores/patient";

const CreatePatient = defineAsyncComponent(() => import("./CreatePatient.vue"));
const EditPatient = defineAsyncComponent(() => import("./EditPatient.vue"));

export default {
  name: "ManageMedicine",
  components: {
    CreatePatient,
    EditPatient,
  },

  setup() {
    const useStore = usePatientStore();
    const showCreatePatient = computed(() => useStore.showCreatePatient);
    const showEditPatient = computed(() => useStore.showEditPatient);

    return {
      useStore,
      showCreatePatient,
      showEditPatient,
    };
  },
};
</script>
