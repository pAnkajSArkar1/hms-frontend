<template>
  <q-page>
    <div class="q-pa-md">
      <QDataTable :useStore="useStore" title="All Doctors" />

      <!-- CREATE -->
      <q-dialog v-model="showCreateDoctors">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <create-doctors :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>

      <!-- EDIT -->
      <q-dialog v-model="showEditdoctors">
        <q-card class="card-width">
          <div :class="$q.platform.is.desktop ? '' : ''">
            <edit-doctors :useStore="useStore" v-bind:modal="true" />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useDoctorStore } from "stores/employee/doctors";

const CreateDoctors = defineAsyncComponent(() => import("./CreateDoctor.vue"));
const EditDoctors = defineAsyncComponent(() => import("./EditDoctor.vue"));

export default {
  name: "ManageDoctor",
  components: {
    CreateDoctors,
    EditDoctors,
  },

  setup() {
    const useStore = useDoctorStore();
    const showCreateDoctors = computed(() => useStore.showCreateDoctors);
    const showEditdoctors = computed(() => useStore.showEditdoctors);

    return {
      useStore,
      showCreateDoctors,
      showEditdoctors,
    };
  },
};
</script>
