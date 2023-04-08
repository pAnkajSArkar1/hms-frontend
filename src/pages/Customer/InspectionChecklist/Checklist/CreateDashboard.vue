<template>
  <QCreateForm :useStore="useStore" title="New Checklist">
    <div>
      <div class="row q-col-gutter-md q-pb-md">
        <div class="col-12">
          <!-- list of templates dropdown -->
          <QSearch
            label="Template Name"
            v-model="newData.asset_inspection_template_id"
            :useStore="templateStore"
            optionValue="id"
            optionLabel="title"
            @update:modelValue="onTemplateSelect"
            :rules="[(val) => val || 'Please choose a template']"
            :error-message="
              $getValidationErrors('asset_inspection_template_id')
            "
            :error="$hasValidationErrors('asset_inspection_template_id')"
          />
        </div>
        <!--title -->
        <div class="col-12">
          <q-input
            dense
            outlined
            label="Checklist title"
            v-model="newData.title"
            :rules="[
              (val) => (val && val.length) || 'Please enter Checklist Title',
            ]"
            :error-message="$getValidationErrors('title')"
            :error="$hasValidationErrors('title')"
          />
        </div>
      </div>

      <div class="row q-col-gutter-md q-pt-md q-pb-md">
        <div class="text-h6">Assets</div>
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-12"
          v-for="iAsset in newData.assets"
          v-bind:key="iAsset.id"
        >
          <div class="row">
            <!-- asset expansion  -->
            <div class="col-12">
              <div class="text-title1 text-bold">{{ iAsset.name }}</div>
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
                :error-message="$getValidationErrors('Status')"
                :error="$hasValidationErrors('Status')"
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
            v-model="newData.action_date"
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
                  <q-date v-model="newData.action_date">
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
            v-model="newData.actioned_by"
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
            v-model="newData.description"
            outlined
            label="Recommendations"
            type="textarea"
          />
        </div>
        <!-- Remarks -->
        <div class="col-12">
          <q-input
            v-model="newData.remarks"
            outlined
            label="Comments"
            type="textarea"
          />
        </div>
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from "vue";
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
    // CustomUploader,
  },
  setup() {
    const useStore = useDashboardStore();
    const templateStore = useTemplateStore();
    // const { newData, filter, getItems } = storeToRefs(useStore);

    const { newData } = storeToRefs(useStore);

    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;

    const onTemplateSelect = () => {
      console.log(
        "onTemplateSelect",
        newData.value.asset_inspection_template_id
      );

      templateStore
        .getItem({ id: newData.value.asset_inspection_template_id })
        .then((response) => {
          newData.value.assets = [];
          response.data.assets.forEach((iasset) => {
            newData.value.assets.push({
              id: iasset.asset.id,
              name: iasset.asset.name,
              status: "",
              defects: "",
              image_ids: [],
              document_ids: [],
            });
          });
        });
    };

    onMounted(() => {
      console.log("newData ::: ", newData.value);
    });
    // const useActivity = useActivityStore();
    // const useHazard = useHazardStore();
    // const useRisk = useRiskStore();

    return {
      useStore,
      newData,
      templateStore,
      onTemplateSelect,
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
