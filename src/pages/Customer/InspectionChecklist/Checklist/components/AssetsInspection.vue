<template>
  <p class="q-mt-xs q-mb-none text-weight-bold">Equipment List</p>
  <!-- asset expansion  -->
  <div class="row q-col-gutter-md q-pt-md" v-for="n in 3" :key="n">
    <div class="col-12">
      <q-input
        outlined
        dense
        v-model="text"
        disable
        readonly
        label="Fire Extinguisher"
      />
    </div>
    <!-- Equipment/Asset Status -->
    <div class="col-12 col-md-6 col-lg-6">
      <q-select
        :options="statuslist"
        map-options
        emit-value
        option-label="label"
        option-value="value"
        type="Status"
        outlined
        dense
        label="Select Status"
        :rules="[(val) => (val && val.length) || 'Please select Status']"
        :error-message="$getValidationErrors('Status')"
        :error="$hasValidationErrors('Status')"
      />
    </div>

    <!-- report defects -->
    <div class="col-12 col-md-6 col-lg-6">
      <q-select
        :options="defectslist"
        map-options
        emit-value
        option-label="label"
        option-value="value"
        type="defects"
        outlined
        dense
        label="Select Defects"
        :rules="[(val) => (val && val.length) || 'Please select defects']"
        :error-message="$getValidationErrors('defects')"
        :error="$hasValidationErrors('defects')"
      />
    </div>

    <!-- image uploader -->
    <div class="col-12 col-lg-6 col-md-6 col-sm-6">
      <q-field>
        <q-uploader
          label="Upload Image"
          square
          flat
          multiple
          bordered
          no-thumbnails
          auto-upload
          accept="image/*"
          class="full-width"
          :factory="setChecklistImg"
        />
      </q-field>
    </div>

    <!-- document uploader  -->
    <div class="col-12 col-lg-6 col-md-6 col-sm-6">
      <q-field>
        <q-uploader
          label="Upload Document"
          square
          flat
          multiple
          bordered
          auto-upload
          accept=".pdf,.txt,.doc,.docx"
          class="full-width"
          :factory="setChecklistDoc"
          @rejected="onRejected"
        />
      </q-field>
    </div>
  </div>
</template>

<script>
import { useMediaStore } from "stores/media";
import { useDashboardStore } from "stores/Customer/Inspection/dashboard";

export default {
  setup() {
    const dashboard = useDashboardStore();
    const { setChecklistImage } = dashboard;
    const { setChecklistDocument } = dashboard;

    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;

    //image uploader
    const setChecklistImg = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "image");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            setChecklistImage({ id: res.data.media_id });
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };
    //doc uploader
    const setChecklistDoc = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "document");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            setChecklistDocument({ id: res.data.media_id });
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };

    return {
      setChecklistImg,
      setChecklistDoc,
      defectslist: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        { label: "Require Maintenance", value: "Require Maintenance" },
      ],
      statuslist: [
        { label: "Ongoing", value: "Ongoing" },
        { label: "Done", value: "Done" },
      ],
    };
  },
};
</script>
