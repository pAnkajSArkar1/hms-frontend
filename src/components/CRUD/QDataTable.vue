<template>
  <q-table
    class="my-sticky-header-table no-border-radius shadow-1"
    :title="title"
    :rows="records"
    :columns="columns"
    v-model:pagination="pagination"
    :filter="filter"
    :loading="loading"
    row-key="id"
    @row-click="onRowClick"
    @request="onRequest"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          class="text-black"
        >
          <div class="text-bold">{{ col.label }}</div>
        </q-th>
      </q-tr>
    </template>
    <template v-slot:top>
      <div
        class="col-xs-12 col-sm-6 col-md-6 text-subtitle1 text-bold q-py-none text-primary"
      >
        {{ title }}
      </div>
      <div
        class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center q-col-gutter-sm"
      >
        <div class="col-6 col-md-6 col-lg-6">
          <slot name="customTop"></slot>
        </div>
        <div class="col-6 col-md-6 col-lg-6">
          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter.search"
            clearable
            placeholder="Search"
            v-show="canSearch"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </template>

    <template v-slot:body="props" v-if="customBodySlot">
      <slot name="customBodySlot" v-bind:row="props.row"></slot>
    </template>

    <template v-slot:body-cell-actions="props" v-if="customAction">
      <slot name="actions" v-bind:row="props.row"></slot>
    </template>
    <template v-slot:body-cell-actions="props" v-else>
      <q-td :props="props">
        <slot
          name="aditionalActions"
          v-if="aditionalActions"
          v-bind:row="props.row"
        ></slot>
        <q-btn
          flat
          round
          dense
          color="accent"
          icon="edit"
          class="q-ml-sm"
          @click="onClickEdit(props.row)"
          v-show="canEdit"
        >
          <q-tooltip> Edit </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          dense
          color="green"
          icon="visibility"
          class="q-ml-sm"
          @click="onClickView(props.row)"
          v-if="canView"
        >
          <q-tooltip> View </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          dense
          color="negative"
          icon="clear"
          @click="onClickDelete(props.row)"
          v-show="canDelete"
        >
          <q-tooltip> Delete </q-tooltip>
        </q-btn>
      </q-td>
    </template>
  </q-table>
  <div class="q-pb-xl">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        @click="setCreateModal(true)"
        v-show="canAdd"
      />
    </q-page-sticky>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  getCurrentInstance,
  onDeactivated,
} from "vue";
import { computed } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  props: {
    title: String, // tbale title //
    useStore: null, // store path
    customBodySlot: {
      // if you want to need custome table body //
      default: false,
      type: Boolean,
    },
    // filter: Object, // table filter object //
    aditionalActions: {
      // if you want add aditional actions //
      default: false,
      type: Boolean,
    },
    customAction: {
      // if you want to add custome actions //
      default: false,
      type: Boolean,
    },

    canAdd: {
      // user cant add? //
      default: true,
      type: Boolean,
    },
    canView: {
      // user cant view? //
      default: false,
      type: Boolean,
    },
    canEdit: {
      // user cant edit? its default true //
      default: true,
      type: Boolean,
    },
    canDelete: {
      // user cant delete? //
      default: true,
      type: Boolean,
    },
    canSearch: {
      // user cant search? //
      default: true,
      type: Boolean,
    },

    viewRoute: {
      // it's optional //
      type: String,
      default: "",
    },
    editRoute: {
      // it's optional //
      type: String,
      default: "",
    },
    createRoute: {
      // it's optional //
      type: String,
      default: "",
    },
    deleteRoute: {
      // it's optional //
      type: String,
      default: "",
    },
  },
  setup(props) {
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;

    const quasar = useQuasar();
    const records = ref([]);
    const loading = ref([]);
    const router = useRouter();

    const pagination = ref({
      sortBy: "created_at",
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });

    const { useStore } = reactive(props);
    const columns = computed(() => useStore.columns);
    const { getItems, deleteItem } = useStore;
    const { dialogs, formData, filter } = storeToRefs(useStore);

    onMounted(() => {
      onRequest({
        pagination: pagination.value,
        filter: filter,
      });
    });

    onDeactivated(() => {
      unsubscribe();
    });

    const unsubscribe = useStore.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {
        after((result) => {
          if (
            name == "createItem" ||
            name == "editItem" ||
            name == "updateSafetyFolder" ||
            name == "deleteItem"
          ) {
            onRequest({
              pagination: pagination.value,
              filter: filter,
            });
          }
        });
      }
    );

    const onRequest = (params) => {
      loading.value = true;
      getItems(params)
        .then((response) => {
          // set data to proper variables
          pagination.value.page = response?.data?.current_page;
          pagination.value.rowsPerPage = response?.data?.per_page;
          pagination.value.rowsNumber = response?.data?.total;
          pagination.value.sortBy = params.pagination.sortBy;
          pagination.value.descending = params.pagination.descending;

          // create item object to update the store
          let tableData = {};
          tableData.pagination = pagination;
          tableData.filter = props.filter;
          tableData.data = response?.data?.data;

          records.value = response?.data?.data;
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const onRowClick = (evt, row) => {
      return;
    };

    const setCreateModal = (params) => {
      if (props.createRoute !== "") {
        router.push({ name: props.createRoute });
      }
      dialogs.value.createItem = true;
    };

    const onClickEdit = (params) => {
      if (props.editRoute !== "") {
        router.push({ name: props.editRoute });
      }
      formData.value = Object.assign({}, params);
      dialogs.value.editItem = true;
    };

    function onClickDelete(param) {
      quasar
        .dialog({
          title: "Delete Confirmation",
          message: "Are you sure you want to Delete",
          ok: {
            label: "Delete",
            unelevated: true,
            color: "red-5",
          },
          cancel: {
            unelevated: true,
            color: "",
            textColor: "black",
          },
          persistent: true,
        })
        .onOk(() => {
          deleteTableData(param);
        });
    }

    const deleteTableData = (params) => {
      loading.value = true;
      deleteItem(params)
        .then((response) => {
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
        })
        .catch((error) => {
          Qnotify({
            message: error.message,
            type: "negative",
          });
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const onClickView = (params) => {
      router.push({ name: props.viewRoute, params: { id: params.id } });
    };

    return {
      records,
      columns,
      loading,
      pagination,
      filter,
      onRequest,
      onRowClick,
      onClickEdit,
      setCreateModal,
      onClickDelete,
      onClickView,
    };
  },
});
</script>
