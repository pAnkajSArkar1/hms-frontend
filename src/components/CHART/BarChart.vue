<template>
  <bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chatTitle: {
      type: String,
      value: "",
    },
    chartId: {
      type: String,
      default: "",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    chartAxis: {
      type: String,
      default: "",
    },
    showLegend: {
      type: Boolean,
      default: false,
    },
    chartData: {},
  },
  setup(props) {
    return {
      chartOptions: {
        responsive: true,

        indexAxis: props.chartAxis,

        plugins: {
          legend: {
            display: props.showLegend,
          },
          title: {
            display: true,
            text: props.chatTitle,
            font: {
              size: 16,
            },
          },
        },
      },
    };
  },
};
</script>
