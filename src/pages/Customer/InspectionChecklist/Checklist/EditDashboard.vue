<template>
  <QEditForm :useStore="useStore" title="Edit Checklist">
    <div>
      <div class="row q-col-gutter-md q-pb-md">
        <div class="col-12">
          <!-- list of templates dropdown -->
          <QSearch
            label="Template Name"
            :disable="true"
            v-model="formData.asset_inspection_template_id"
            :useStore="templateStore"
            optionValue="id"
            optionLabel="title"
            :rules="[(val) => val || 'Please choose a template']"
            :error-message="
              $getValidationErrors('asset_inspection_template_id')
            "
            :error="$hasValidationErrors('asset_inspection_template_id')"
          />
        </div>
        <!-- title -->
        <div class="col-12">
          <q-input
            dense
            outlined
            label="Checklist title"
            v-model="formData.title"
            :rules="[
              (val) => (val && val.length) || 'Please enter Checklist Title',
            ]"
            :error-message="$getValidationErrors('title')"
            :error="$hasValidationErrors('title')"
          />
        </div>
        <!-- @update:modelValue="onTemplateSelect" -->
      </div>

      <div class="row q-col-gutter-md q-pt-md q-pb-md">
        <div class="text-h6">Assets</div>
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-12"
          v-for="iAsset in formData.assets"
          v-bind:key="iAsset.id"
        >
          <div class="row q-col-gutter-md q-pt-md">
            <!-- asset expansion  -->
            <div class="col-12">
              <div class="text-title1 text-bold">
                {{ iAsset?.asset_details?.name }}
              </div>
            </div>
          </div>
          <q-separator />

          <div class="row q-col-gutter-md q-pt-md">
            <!-- Equipment/Asset Status -->
            <div class="col-12 col-md-6 col-lg-6">
              <q-select
                v-model="iAsset.status"
                :options="statuslist"
                map-options
                emit-value
                option-label="label"
                option-value="value"
                type="Status"
                outlined
                dense
                label="Asset Status"
                :rules="[
                  (val) => (val && val.length) || 'Please select Status',
                ]"
                :error-message="$getValidationErrors('status')"
                :error="$hasValidationErrors('status')"
              />
            </div>

            <!-- report defects -->
            <div class="col-12 col-md-6 col-lg-6">
              <q-select
                v-model="iAsset.report_defect"
                :options="defectslist"
                map-options
                emit-value
                option-label="label"
                option-value="value"
                type="defects"
                outlined
                dense
                label="Select Defects"
                :rules="[
                  (val) => (val && val.length) || 'Please select defects',
                ]"
                :error-message="$getValidationErrors('report_defect')"
                :error="$hasValidationErrors('report_defect')"
              />
            </div>

            <!-- image uploader -->
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <UploaderFile
                v-model="iAsset.image_ids"
                label="Upload Image"
                :multiple="true"
                acceptFileType="image/*"
              />
            </div>

            <!-- document uploader  -->
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <UploaderFile
                v-model="iAsset.document_ids"
                label="Upload Document"
                :multiple="true"
                acceptFileType=".pdf,.txt,.doc,.docx"
                attachmentType="document"
              />
            </div>
          </div>
        </div>
      </div>

      <q-separator />

      <div class="row q-col-gutter-md q-pt-md q-pt-md">
        <!-- action date -->
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            dense
            outlined
            v-model="formData.action_date"
            label="Action Date"
            :rules="[
              (val) => (val && val.length) || 'Please choose the action date',
            ]"
            :error-message="$getValidationErrors('action_date')"
            :error="$hasValidationErrors('action_date')"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="formData.action_date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <!-- actioned by -->
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            dense
            outlined
            label="Actioned by"
            v-model="formData.actioned_by"
            :rules="[
              (val) => (val && val.length) || 'Please enter Actioned by',
            ]"
            :error-message="$getValidationErrors('actioned_by')"
            :error="$hasValidationErrors('actioned_by')"
          />
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <!-- Description -->
        <div class="col-12">
          <q-input
            v-model="formData.description"
            outlined
            label="Recommendations"
            type="textarea"
          />
        </div>
        <!-- Remarks -->
        <div class="col-12">
          <q-input
            v-model="formData.remarks"
            outlined
            label="Comments"
            type="textarea"
          />
        </div>
        <div class="col-12">
          <q-btn
            :loading="saveLoader"
            dense
            color="primary"
            icon="cloud_upload"
            label="Save Report To Safety File"
            class="q-px-sm"
            @click="uploadToSafetyFile"
          />
        </div>
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "stores/Customer/Inspection/dashboard";
import { useTemplateStore } from "stores/Customer/Inspection/template";
import { useMediaStore } from "stores/media";
// const CustomUploader = defineAsyncComponent(() =>
//   import("./components/Uploader.vue")
// );
export default {
  name: "CreateDashboard",
  components: {
    // CustomUploader
  },
  setup() {
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const useStore = useDashboardStore();
    const templateStore = useTemplateStore();
    // const { newData, filter, getItems } = storeToRefs(useStore);

    const { formData } = storeToRefs(useStore);

    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;
    const saveLoader = ref(false);

    const onTemplateSelect = () => {
      console.log(
        "onTemplateSelect",
        formData.value.asset_inspection_template_id
      );

      templateStore
        .getItem({ id: formData.value.asset_inspection_template_id })
        .then((response) => {
          // formData.value.assets = [];
          // response.data.assets.forEach((iasset) => {
          //   formData.value.assets.push({
          //     id: iasset.asset.id,
          //     name: iasset.asset.name,
          //     status: "",
          //     defects: "",
          //     image_ids: [],
          //     document_ids: [],
          //   });
          // });
        });
    };

    const uploadToSafetyFile = () => {
      saveLoader.value = true;

      useStore.saveToSafetyFile({ report_type: 'asset_inspection', id: formData.value.id })
        .then((response) => {
          saveLoader.value = false;
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
        })
        .catch(error => {
          saveLoader.value = false;
        })

    }

    return {
      useStore,
      formData,
      templateStore,
      onTemplateSelect,
      uploadToSafetyFile,
      defectslist: ["Yes – Requires Maintenance", "No", "Not Required"],
      statuslist: [
        "Checked – Working",
        "Checked – Not Working",
        "Checked – Good",
        "Checked – Poor",
      ],
    };
  },
};
</script>

<style>
.addrow {
  width: 100px;
}
.deleterow {
  width: 130px;
}
</style>
