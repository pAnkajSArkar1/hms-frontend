<template>
  <div class="hms-date-picker">
    <div
      :class="pickerOpen ? 'hms-date-card border-remove' : 'hms-date-card'"
      @click="selectHMSDateFilter()"
    >
      <div class="row mx-0 align-items-start">
        <svg
          width="20"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5 3H30V1.5C30 0.675 29.325 0 28.5 0C27.675 0 27 0.675 27 1.5V3H9V1.5C9 0.675 8.325 0 7.5 0C6.675 0 6 0.675 6 1.5V3H4.5C2.025 3 0 5.025 0 7.5V31.5C0 33.975 2.025 36 4.5 36H31.5C33.975 36 36 33.975 36 31.5V7.5C36 5.025 33.975 3 31.5 3ZM33 31.5C33 32.325 32.325 33 31.5 33H4.5C3.675 33 3 32.325 3 31.5V7.5C3 6.675 3.675 6 4.5 6H6V7.5C6 8.325 6.675 9 7.5 9C8.325 9 9 8.325 9 7.5V6H27V7.5C27 8.325 27.675 9 28.5 9C29.325 9 30 8.325 30 7.5V6H31.5C32.325 6 33 6.675 33 7.5V31.5Z"
            fill="black"
          />
          <path
            d="M28.5 13.5H7.5C6.675 13.5 6 14.175 6 15C6 15.825 6.675 16.5 7.5 16.5H28.5C29.325 16.5 30 15.825 30 15C30 14.175 29.325 13.5 28.5 13.5Z"
            fill="black"
          />
        </svg>
        <div class="hms-date-details">
          <div class="hms-date-text flex items-center">
            <strong v-if="selectedDate.tenure == 'last-week'"
              >Last 7 Days</strong
            >
            <strong v-else-if="selectedDate.tenure == 'this-month'"
              >This Month</strong
            >
            <strong v-else-if="selectedDate.tenure == 'last-month'"
              >Last Month</strong
            >
            <strong v-else-if="selectedDate.tenure == 'last-three-month'"
              >Last 90 Days</strong
            >
            <strong v-else-if="selectedDate.tenure == 'this-year'"
              >This Year</strong
            >
            <strong v-else>Select Date</strong>
          </div>
          <div class="hms-date-value q-pt-sm">
            {{ formatedDate }}
          </div>
        </div>
      </div>
    </div>
    <div v-show="pickerOpen" class="hms-date-options">
      <a
        @click="selectDate('last-week')"
        :class="
          selectedDate.tenure == 'last-week'
            ? 'hms-date-option active'
            : 'hms-date-option'
        "
        href="javascript:void(0)"
      >
        Last 7 days
        <svg
          v-if="selectedDate.tenure == 'last-week'"
          width="17"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.24 0C38.6743 0 38.3657 0 37.8 0L18 19.5211L8.74286 10.3944C8.17715 10.3944 7.86858 10.3944 7.30286 10.3944L0 17.5437C0 18.1014 0 18.4056 0 18.9634L17.28 36C17.8457 36 18.1543 36 18.72 36L46.4915 8.61972C46.4915 8.06197 46.4915 7.75775 46.4915 7.2L39.24 0Z"
            fill="#1B9142"
          />
        </svg>
      </a>
      <a
        @click="selectDate('this-month')"
        :class="
          selectedDate.tenure == 'this-month'
            ? 'hms-date-option active'
            : 'hms-date-option'
        "
        href="javascript:void(0)"
      >
        This month
        <svg
          v-if="selectedDate.tenure == 'this-month'"
          width="17"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.24 0C38.6743 0 38.3657 0 37.8 0L18 19.5211L8.74286 10.3944C8.17715 10.3944 7.86858 10.3944 7.30286 10.3944L0 17.5437C0 18.1014 0 18.4056 0 18.9634L17.28 36C17.8457 36 18.1543 36 18.72 36L46.4915 8.61972C46.4915 8.06197 46.4915 7.75775 46.4915 7.2L39.24 0Z"
            fill="#1B9142"
          />
        </svg>
      </a>
      <a
        @click="selectDate('last-month')"
        :class="
          selectedDate.tenure == 'last-month'
            ? 'hms-date-option active'
            : 'hms-date-option'
        "
        href="javascript:void(0)"
      >
        Last month
        <svg
          v-if="selectedDate.tenure == 'last-month'"
          width="17"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.24 0C38.6743 0 38.3657 0 37.8 0L18 19.5211L8.74286 10.3944C8.17715 10.3944 7.86858 10.3944 7.30286 10.3944L0 17.5437C0 18.1014 0 18.4056 0 18.9634L17.28 36C17.8457 36 18.1543 36 18.72 36L46.4915 8.61972C46.4915 8.06197 46.4915 7.75775 46.4915 7.2L39.24 0Z"
            fill="#1B9142"
          />
        </svg>
      </a>
      <a
        @click="selectDate('last-three-month')"
        :class="
          selectedDate.tenure == 'last-three-month'
            ? 'hms-date-option active'
            : 'hms-date-option'
        "
        href="javascript:void(0)"
      >
        Last 90 days
        <svg
          v-if="selectedDate.tenure == 'last-three-month'"
          width="17"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.24 0C38.6743 0 38.3657 0 37.8 0L18 19.5211L8.74286 10.3944C8.17715 10.3944 7.86858 10.3944 7.30286 10.3944L0 17.5437C0 18.1014 0 18.4056 0 18.9634L17.28 36C17.8457 36 18.1543 36 18.72 36L46.4915 8.61972C46.4915 8.06197 46.4915 7.75775 46.4915 7.2L39.24 0Z"
            fill="#1B9142"
          />
        </svg>
      </a>
      <a
        @click="selectDate('this-year')"
        :class="
          selectedDate.tenure == 'this-year'
            ? 'hms-date-option active'
            : 'hms-date-option'
        "
        href="javascript:void(0)"
      >
        This year
        <svg
          v-if="selectedDate.tenure == 'this-year'"
          width="17"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.24 0C38.6743 0 38.3657 0 37.8 0L18 19.5211L8.74286 10.3944C8.17715 10.3944 7.86858 10.3944 7.30286 10.3944L0 17.5437C0 18.1014 0 18.4056 0 18.9634L17.28 36C17.8457 36 18.1543 36 18.72 36L46.4915 8.61972C46.4915 8.06197 46.4915 7.75775 46.4915 7.2L39.24 0Z"
            fill="#1B9142"
          />
        </svg>
      </a>
    </div>
    <div
      @click="selectHMSDateFilter()"
      v-show="pickerOpen"
      class="hms-date-layer"
    ></div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, reactive, ref } from "vue";
import moment from "moment";

export default defineComponent({
  props: {
    modelValue: {},
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const pickerOpen = ref(false);
    const selectedDate = ref({
      tenure: "",
      from_date: "",
      to_date: "",
    });

    const selectHMSDateFilter = () => {
      if (pickerOpen.value) {
        var app = document.getElementById("q-app");
        app.setAttribute("style", "overflow-y:scroll !important");
        pickerOpen.value = false;
      } else {
        var app = document.getElementById("q-app");
        app.setAttribute("style", "overflow-y:hidden !important");
        pickerOpen.value = true;
      }
    };
    const selectDate = (tenure) => {
      if (tenure == selectedDate.value.tenure) {
        selectedDate.value.tenure = "";
        selectedDate.value.from_date = "";
        selectedDate.value.to_date = "";
        console.log("selectedDate.value", selectedDate.value);
        emit("update:modelValue", selectedDate.value);
        selectHMSDateFilter();
        return;
      }

      if (tenure == "last-week") {
        selectedDate.value.tenure = tenure;
        selectedDate.value.from_date = moment()
          .subtract(6, "d")
          .format("YYYY-MM-DD");
        selectedDate.value.to_date = moment().format("YYYY-MM-DD");
      }
      if (tenure == "this-month") {
        selectedDate.value.tenure = tenure;
        selectedDate.value.from_date = moment()
          .startOf("month")
          .format("YYYY-MM-DD");
        selectedDate.value.to_date = moment()
          .endOf("month")
          .format("YYYY-MM-DD");
      }
      if (tenure == "last-month") {
        selectedDate.value.tenure = tenure;
        selectedDate.value.from_date = moment()
          .subtract(1, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        selectedDate.value.to_date = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD");
      }
      if (tenure == "last-three-month") {
        selectedDate.value.tenure = tenure;
        selectedDate.value.from_date = moment()
          .subtract(89, "d")
          .format("YYYY-MM-DD");
        selectedDate.value.to_date = moment().format("YYYY-MM-DD");
      }
      if (tenure == "this-year") {
        selectedDate.value.tenure = tenure;
        selectedDate.value.from_date = moment()
          .startOf("year")
          .format("YYYY-MM-DD");
        selectedDate.value.to_date = moment()
          .endOf("year")
          .format("YYYY-MM-DD");
      }
      emit("update:modelValue", selectedDate.value);
      selectHMSDateFilter();
    };

    const formatedDate = computed(() => {
      if (selectedDate.value.tenure) {
        return (
          moment(selectedDate.value.from_date).format("MMM D, YYYY") +
          " - " +
          moment(selectedDate.value.to_date).format("MMM D, YYYY")
        );
      } else {
        return "-";
      }
    });

    onMounted(() => {
      console.log("props", props);
      if (props.modelValue) {
        selectedDate.value.tenure = props.modelValue.tenure;
        selectedDate.value.from_date = props.modelValue.from_date;
        selectedDate.value.to_date = props.modelValue.to_date;
      }
    });

    return {
      formatedDate,
      selectHMSDateFilter,
      selectDate,
      selectedDate,
      pickerOpen,
    };
  },
});
</script>

<style>
.hms-date-card {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 5px 7px;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  position: relative;
}
.hms-date-card.border-remove {
  border-radius: 8px 8px 0px 0px;
}
.hms-date-details {
  margin-left: 10px;
  margin-right: 10px;
}
.hms-date-text {
  font-size: 14px;
  line-height: 12px;
}
.hms-date-value {
  font-size: 15px;
  color: #9b9b9b;
  font-weight: 600;
  line-height: 12px;
}
.hms-date-filter {
  border-left: 1px solid #5e5e5e;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.hms-date-picker {
  position: relative;
  border: 1px solid #d1cece;
  border-radius: 7px;
}
.hms-date-options {
  position: absolute;
  background: white;
  width: 100%;
  text-align: left;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-flow: column;
  z-index: 99999;
  padding: 10px 0;
  border-top: 1px solid #dadada;
}
.hms-date-option {
  color: #000 !important;
  font-weight: 700;
  font-size: 17px;
  padding: 7px 20px;
  text-decoration: none;
}
.hms-date-option:hover {
  background: #efefef;
  padding: 7px 20px;
  text-decoration: none;
}
.hms-date-layer {
  background: #00000091;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.hms-date-option.active {
  background: #efefef;
  color: #148f3f !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
