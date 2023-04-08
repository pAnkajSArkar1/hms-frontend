<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-2 col-lg-2">
        <div class="q-pb-md">
          <q-card>
            <q-card-section>
              <p>Ppe Inspection</p>
            </q-card-section>
          </q-card>
        </div>
        <q-card>
          <q-card-section>
            <p>Ppe Inspection</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-10 col-lg-10">
        <q-card>
          <q-card-section>
            <BarChart
              chartLabel="Ppe Inspection Checklist"
              :chartData="chartData"
              class="barchart"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <PieChart :chartData="chartData" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-8 col-lg-8">
        <QDataTable
          :aditionalActions="true"
          :useStore="useStore"
          title="PPE Checklist"
        >
          <template v-slot:aditionalActions="bodyRow">
            <q-btn
              flat
              round
              dense
              color="secondary"
              icon="file_download"
              class="q-ml-sm"
              @click="onClickDownload(bodyRow.row)"
            >
              <q-tooltip> Download </q-tooltip>
            </q-btn>
          </template>
        </QDataTable>
      </div>
    </div>

    <!-- CREATE -->
    <q-dialog v-model="showCreateEquipment">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <create-checklist :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>

    <!-- EDIT -->
    <q-dialog v-model="showEditEquipment">
      <q-card class="card-width">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <edit-checklist :useStore="useStore" v-bind:modal="true" />
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { usePpeChecklistStore } from "stores/Customer/PpeInspection/ppeChecklist";

const CreateChecklist = defineAsyncComponent(() =>
  import("./CreateChecklist.vue")
);
const EditChecklist = defineAsyncComponent(() => import("./EditChecklist.vue"));

export default {
  name: "PpeChecklist",
  components: {
    CreateChecklist,
    EditChecklist,
  },

  setup() {
    const useStore = usePpeChecklistStore();
    const showCreateEquipment = computed(() => useStore.showCreateEquipment);
    const showEditEquipment = computed(() => useStore.showEditEquipment);

    return {
      useStore,
      showCreateEquipment,
      showEditEquipment,
      chartData: {
        labels: ["Risk Rating", "Frequency", "Severity", "Likelyhood"],
        datasets: [
          {
            data: [400, 150, 100, 200],
            backgroundColor: ["#2F8F9D", "#3BACB6", "#82DBD8", "#B3E8E5"],
            hoverOffset: 4,
          },
        ],
      },
    };
  },
};
</script>
