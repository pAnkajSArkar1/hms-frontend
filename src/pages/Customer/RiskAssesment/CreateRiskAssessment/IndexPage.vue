<template>
  <div>
    <div class="row q-col-gutter-md">
      <div class="flex flex-center">
        <div class="col-12 col-md-2 col-lg-2 column">
          <div class="q-pb-sm">
            <q-card>
              <q-card-section class="column">
                <p class="text-weight-bold user text-center">
                  Risk Value Before
                </p>
                <p class="q-ma-none text-center text-weight-bold">
                  {{
                    assessmentDetails?.risk_rating
                      ? assessmentDetails?.risk_rating
                      : 0
                  }}
                </p>
              </q-card-section>
            </q-card>
          </div>

          <q-card>
            <q-card-section class="column">
              <div>
                <p class="text-weight-bold user text-center">
                  Risk Value After
                </p>
              </div>
              <div>
                <p class="q-ma-none text-center text-weight-bold">
                  {{
                    assessmentDetails?.risk_rating_after_control
                      ? assessmentDetails?.risk_rating_after_control
                      : 0
                  }}
                </p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-card>
          <q-card-section>
            <BarChart
              chartAxis="y"
              chatTitle="Risk Value Before and Risk Value After"
              class="barchart"
              :chartData="barChartData"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-3 col-lg-3">
        <q-card>
          <q-card-section class="flex justify-center">
            <PieChart
              chatTitle="Risk Value Before"
              style="width: 300px"
              :chartData="riskValueBefore"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-3 col-lg-3">
        <q-card>
          <q-card-section class="flex justify-center">
            <PieChart
              chatTitle="Risk Value After"
              style="width: 300px"
              :chartData="riskValueAfter"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pt-md">
      <QDataTable
        :canEdit="false"
        :canView="true"
        :useStore="useStore"
        :aditionalActions="true"
        viewRoute="view-risk-assessment"
        title="Risk Assessment"
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

      <!-- <QDataTable
        :useStore="useStore"
        :aditionalActions="true"
        :customBodySlot="true"
        viewRoute="view-risk-assessment"
        title="Risk Assessment"
      >
        <template v-slot:customBodySlot="bodyRow">
          <q-tr @click="onTableRowClick(bodyRow.row)">
            <q-td key="actionDate">{{ bodyRow.row.action_date }} </q-td>
            <q-td key="actionedBy">{{ bodyRow.row.actioned_by }} </q-td>
            <q-td key="assessment">{{ bodyRow.row.assessment_name }} </q-td>
            <q-td key="activity">{{ bodyRow.row.activity }} </q-td>
            <q-td key="hazard">{{ bodyRow.row.hazards }} </q-td>
            <q-td key="risk">{{ bodyRow.row.risks }} </q-td>
            <q-td key="likelyhood">{{ bodyRow.row.likelyhood }} </q-td>
            <q-td key="severity">{{ bodyRow.row.severity }} </q-td>
            <q-td key="frequency">{{ bodyRow.row.frequency }} </q-td>
            <q-td key="riskRatingBefore">{{ bodyRow.row.risk_rating }} </q-td>
            <q-td key="controls">{{ bodyRow.row.controls }} </q-td>
            <q-td key="likelyhoodAfterControl"
              >{{ bodyRow.row.likelyhood_after_control }}
            </q-td>
            <q-td key="severityAfterControl"
              >{{ bodyRow.row.severity_after_control }}
            </q-td>
            <q-td key="frequencyAfterControl"
              >{{ bodyRow.row.frequency_after_control }}
            </q-td>
            <q-td key="riskRating"
              >{{ bodyRow.row.risk_rating_after_control }}
            </q-td>
            <q-td key="actions">
              <q-btn
                flat
                round
                dense
                color="green"
                icon="visibility"
                class="q-ml-sm"
                @click="onClickView(bodyRow.row)"
              >
                <q-tooltip> View </q-tooltip>
              </q-btn>
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
            </q-td>
          </q-tr>
        </template>
      </QDataTable> -->
    </div>
  </div>

  <!-- CREATE -->
  <q-dialog v-model="showCreateAssessment">
    <q-card class="card-width">
      <div :class="$q.platform.is.desktop ? '' : ''">
        <create-assessment :useStore="useStore" v-bind:modal="true" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineAsyncComponent, ref, reactive } from "vue";
import { useAssessmentStore } from "stores/Customer/RiskAssesment/assessment";

const CreateAssessment = defineAsyncComponent(() =>
  import("./CreateAssessment.vue")
);

export default {
  name: "RiskAssessment",
  components: {
    CreateAssessment,
  },

  setup() {
    const useStore = useAssessmentStore();
    const showCreateAssessment = computed(() => useStore.showCreateAssessment);
    const { generateReportDownloadURL } = useStore;
    const assessmentDetails = ref("");

    const onClickView = (params) => {
      router.push({ name: props.viewRoute, params: { id: params.id } });
    };

    const onClickDownload = (row) => {
      generateReportDownloadURL({ id: row.id }).then((response) => {
        window.open(response.tempUrl);
      });
    };

    const barChartData = reactive({
      labels: ["Risk Rating", "Frequency", "Severity", "Likelyhood"],
      datasets: [
        {
          data: [],
          backgroundColor: ["#F10B0B", "#F1F00B", "#42CE23", "#27AE60"],
          hoverOffset: 4,
        },
      ],
    });

    const riskValueBefore = reactive({
      labels: ["Risk Rating Before", "Frequency", "Severity", "Likelyhood"],
      datasets: [
        {
          data: [],
          backgroundColor: ["#F10B0B", "#F1F00B", "#42CE23", "#27AE60"],
          hoverOffset: 4,
        },
      ],
    });

    const riskValueAfter = reactive({
      labels: ["Risk Rating After", "Frequency", "Severity", "Likelyhood"],
      datasets: [
        {
          data: [],
          backgroundColor: ["#F10B0B", "#F1F00B", "#42CE23", "#27AE60"],
          hoverOffset: 4,
        },
      ],
    });

    const onTableRowClick = (props) => {
      useStore.getItem(props.id).then((response) => {
        assessmentDetails.value = response.data;

        barChartData.datasets[0].data = [];
        barChartData.datasets[0].data.push(response.data.risk_rating);
        barChartData.datasets[0].data.push(response.data.frequency);
        barChartData.datasets[0].data.push(response.data.severity);
        barChartData.datasets[0].data.push(response.data.likelyhood);

        riskValueBefore.datasets[0].data = [];
        riskValueBefore.datasets[0].data.push(response.data.risk_rating);
        riskValueBefore.datasets[0].data.push(response.data.frequency);
        riskValueBefore.datasets[0].data.push(response.data.severity);
        riskValueBefore.datasets[0].data.push(response.data.likelyhood);

        riskValueAfter.datasets[0].data = [];
        riskValueAfter.datasets[0].data.push(
          response.data.risk_rating_after_control
        );
        riskValueAfter.datasets[0].data.push(
          response.data.frequency_after_control
        );
        riskValueAfter.datasets[0].data.push(
          response.data.severity_after_control
        );
        riskValueAfter.datasets[0].data.push(
          response.data.likelyhood_after_control
        );
      });
    };

    return {
      useStore,
      showCreateAssessment,
      assessmentDetails,
      barChartData,
      riskValueBefore,
      riskValueAfter,
      onTableRowClick,
      onClickDownload,
      onClickView,
    };
  },
};
</script>
