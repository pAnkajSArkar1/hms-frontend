<template>
  <polar-area
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
  />
</template>

<script>
import { PolarArea } from "vue-chartjs";
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
  name: "PolarAreaChart",
  components: { PolarArea },
  props: {
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
  },
  setup() {
    return {
      // chartData: {
      //   labels: [],
      //   datasets: [
      //     {
      //       data: [11, 16, 7, 3, 14],
      //       label: "Africa",
      //       backgroundColor: [
      //         "rgb(255, 99, 132)",
      //         "rgb(75, 192, 192)",
      //         "rgb(255, 205, 86)",
      //         "rgb(201, 203, 207)",
      //         "rgb(54, 162, 235)",
      //       ],
      //     },
      //   ],
      // },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Incident Count By PPE",
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
