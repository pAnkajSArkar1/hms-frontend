<template>
  <q-select
    :dark="darkMode"
    class="full-width"
    outlined
    dense
    v-model="search"
    use-input
    input-debounce="0"
    :options="options"
    :loading="loading"
    @virtual-scroll="onScroll"
    @filter="filterFn"
    emit-value
    map-options
    :option-value="optionValue"
    :option-label="optionLabel"
    :use-chips="multiple"
    :multiple="multiple"
  />
</template>

<script>
import {
  nextTick,
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  toRefs,
  defineProps,
  watch,
} from "vue";

const allOptions = [];
for (let i = 0; i <= 100000; i++) {
  allOptions.push("Opt " + i);
}

const pageSize = 50;
const lastPage = Math.ceil(allOptions.length / pageSize);

export default {
  props: {
    autoLoad: {
      type: Boolean,
      default: true,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
    useStore: null, // store path
    modelValue: {
      type: [String, Object, Array, Number],
      default: "",
    },
    optionValue: {
      type: String,
      default: "",
    },
    optionLabel: {
      type: String,
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    dataType: {
      type: String,
      default: "string",
    },
    customFilter: {
      type: Object,
      default(rawProps) {
        return { search: "" };
      },
    },
  },
  setup(props, { emit }) {
    const { useStore, autoLoad } = reactive(props);
    const { getItems } = useStore;

    const loading = ref(false);
    const nextPage = ref(2);

    const options = ref([]);

    const pagination = ref({
      sortBy: "",
      descending: false,
      page: 1,
      direction: null,
      rowsPerPage: 1000,
      totalRecords: 0,
    });

    const search = ref("");
    const filter = ref({});

    const getOptionValues = async () => {
      filter.value = props.customFilter;

      console.log("On filter", {
        pagination: pagination.value,
        filter: filter,
      });

      getItems({
        pagination: pagination.value,
        // filter: customFilter,
      })
        .then((response) => {
          if (response.data && response.data.data) {
            options.value = response.data.data;
          } else {
            options.value = response.data;
          }

          loading.value = false;
        })
        .catch((err) => {
          loading.value = false;
        });

      loading.value = false;
    };

    onMounted(() => {
      search.value = props.modelValue;

      if (autoLoad) {
        getOptionValues();
      }
    });

    watch(
      () => {
        return search.value;
      },
      (first, second) => {
        if (props.dataType == "object") {
          var filteredArray = options.value.filter(function (itm) {
            return search.value == itm.id;
          });
          if (filteredArray.length > 0)
            emit("update:modelValue", filteredArray[0]);
        } else {
          emit("update:modelValue", search.value);
        }
      },
      { deep: true }
    );

    return {
      search,
      loading,
      nextPage,
      options,
      // onRequest,
      onScroll({ to, ref }) {
        const lastIndex = options.value.length - 1;
        if (
          loading.value !== true &&
          nextPage.value < lastPage &&
          to === lastIndex
        ) {
          loading.value = true;

          setTimeout(() => {
            nextPage.value++;
            nextTick(() => {
              ref.refresh();
              loading.value = false;
            });
          }, 500);
        }
      },

      filterFn(val, update) {
        loading.value = true;

        filter.value = props.customFilter;
        filter.value.search = val;

        console.log("On filter", {
          pagination: pagination.value,
          filter: filter,
        });

        getItems({
          pagination: pagination.value,
          filter: filter.value,
        })
          .then((response) => {
            update(() => {
              if (response.data && response.data.data) {
                options.value = response.data.data;
              } else {
                options.value = response.data;
              }
            });
            loading.value = false;
          })
          .catch((err) => {
            loading.value = false;
          });
        loading.value = false;
      },
    };
  },
};
</script>
