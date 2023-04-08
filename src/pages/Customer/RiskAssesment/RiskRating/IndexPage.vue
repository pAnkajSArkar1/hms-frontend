<template>
  <q-page>
    <RAMenu />
    <div class="q-pa-md">
      <QDataTable
        :useStore="useStore"
        createRoute="create-risk-rating"
        editRoute="edit-risk-rating"
        title="Risk Rating"
      />
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useRiskRatingStore } from "stores/Customer/RiskAssesment/riskRating";

const RAMenu = defineAsyncComponent(() =>
  import("src/pages/Customer/RiskAssesment/components/RAMenu.vue")
);
export default {
  name: "RiskAssessmentRating",
  components: {
    RAMenu,
  },
  setup() {
    const useStore = useRiskRatingStore();

    return {
      useStore,
      RAMenu,
    };
  },
};
</script>
