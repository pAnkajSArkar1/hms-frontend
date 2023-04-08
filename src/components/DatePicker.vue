<template>
  <q-field
    placeholder="CheckIn | CheckOut"
    outlined
    v-model="dateRange"
    color="white"
    bg-color="grey-3"
    label-color="black"
    :dense="dense"
  >
    <template v-slot:prepend>
      <q-icon name="event" />
    </template>
    <template v-slot:append>
      <q-btn
        round
        flat
        dense
        icon="cancel"
        @update:modelValue="onClearDateRange()"
        v-if="dateRange.startDate != '' && dateRange.endDate != ''"
      />
    </template>
    <template v-slot:control>
      <date-range-picker v-model="dateRange" :opens="position">
        <template v-slot:input="picker">
          <span
            v-if="
              picker.startDate &&
              picker.endDate &&
              dateRange.startDate != '' &&
              dateRange.endDate != ''
            "
          >
            {{ moment(picker.startDate).format("MMM Do YYYY") }} -
            {{ moment(picker.endDate).format("MMM Do YYYY") }}
          </span>
          <span class="input_box_click" v-else> - </span>
        </template>
        <div class="slot">
          <div data-v-1ebd09d2="" class="drp-buttons">
            <span data-v-1ebd09d2="" class="drp-selected"> - </span>
            <button
              v-on:click="data.clickCancel"
              type="button"
              class="cancelBtn btn btn-sm btn-secondary"
            ></button>
            <button
              type="button"
              @update:modelValue="data.clickApply"
              class="applyBtn btn btn-sm btn-success"
            >
              Apply
            </button>
          </div>
        </div>
      </date-range-picker>
    </template>
  </q-field>
</template>

<script>
import DateRangePicker from "daterange-picker-vue3";
import "daterange-picker-vue3/dist/daterange-picker-vue3.css";
import moment from "moment-timezone";

export default {
  props: {
    modelValue: Object,
    position: {
      type: String,
      default: "center",
    },
    dense: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      moment: moment,
      dateRange: {
        startDate: "",
        endDate: "",
      },
    };
  },
  methods: {
    onClearDateRange() {
      this.dateRange = {
        startDate: "",
        endDate: "",
      };
    },
  },
  mounted() {},
  components: {
    DateRangePicker,
  },
  watch: {
    dateRange: {
      handler() {
        console.log("value", this.modelValue);
        console.log(this.dateRange);
        this.$emit("update:modelValue", this.dateRange);
      },
      deep: true,
    },
  },
};
</script>
<style>
.reportrange-text {
  border: none !important;
}
.input_box_click {
  display: none !important;
}

.vue-daterange-picker {
  width: 100%;
}

.daterangepicker .drp-selected {
  display: inline-block;
  font-size: 12px;
  padding-right: 8px;
  color: #0000;
}
.reportrange-text {
  background: #eeeeee !important;
}
</style>
