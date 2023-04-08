<template>
  <q-uploader
    :label="label"
    square
    flat
    :multiple="multiple"
    bordered
    no-thumbnails
    class="full-width"
    :factory="uploadFn"
    @failed="uploadFailed"
    auto-upload
    url=""
    :accept="acceptFileType"
    fieldName="file"
    @uploaded="uploadedFn"
  >
    <template v-slot:list="scope">
      <q-list separator v-if="modelValue" class="q-mb-sm">
        <q-item
          :class="modelValue.length > 1 ? 'q-mb-sm' : ''"
          class="q-pa-none"
          v-for="(file, index) in modelValue"
          :key="file?.name"
        >
          <q-item-section>
            <q-item-label class="full-width ellipsis">
              {{ file?.name }}
            </q-item-label>
          </q-item-section>

          <q-item-section v-if="file?.type == 'image'" thumbnail class="gt-xs">
            <img :src="file?.url" />
          </q-item-section>

          <q-item-section top side>
            <q-btn
              v-if="multiple"
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="delete"
              @click="deleteFile(index)"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list separator>
        <div v-for="file in scope.files" :key="file?.name">
          <q-item class="full-width" v-if="file.__status != 'uploaded'">
            <q-item-section>
              <q-item-label class="ellipsis">{{ file?.name }}</q-item-label>
              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>Status: {{ file.__status }}</q-item-label>
              <q-btn
                class="gt-xs"
                size="12px"
                dense
                round
                icon="delete"
                unelevated
                color="red-5"
                text-color="white"
                @click="scope.removeFile(file)"
              />
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </template>
  </q-uploader>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "stores/Customer/Inspection/dashboard";
import { useTemplateStore } from "stores/Customer/Inspection/template";
import { useMediaStore } from "stores/media";
import axios from "axios";
import { LocalStorage as SessionStorage } from "quasar";

export default {
  name: "CreateDashboard",

  props: {
    modelValue: Array,
    label: {
      type: String,
      default: "Upload Image",
    },
    attachmentType: {
      type: String,
      default: "image",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    privateData: {
      type: Boolean,
      default: true,
    },
    acceptFileType: {
      type: String,
      default: "image/*, .pdf",
    },
  },

  setup(props, { emit }) {
    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;
    let mFiles = reactive([]);
    const { attachmentType, modelValue, multiple, privateData } = reactive(props);

    onMounted(() => {
      mFiles = modelValue;
    });

    //image uploader
    function uploadFailed(info) {
      const response = JSON.parse(info.xhr.response);
      console.log("Upload error  sss: ", err);
      $q.notify({
        type: "negative",
        message: "Failed to upload file. " + response.error,
      });
    }

    const uploadFn = (files) => {
      var token = SessionStorage.getItem("token");
      token = JSON.parse(token);

      return new Promise((resolve, reject) => {
        resolve({
          url: `${process.env.MEDIA_API}?attachment_type=${attachmentType}&private=${privateData}`,
          method: "POST",
          headers: [{ name: "Authorization", value: `Bearer ${token}` }],
        });
      });
    };

    function onRejected(rejectedEntries) {
      $q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    }

    function uploadedFn(info) {
      const response = JSON.parse(info.xhr.response);

      if (multiple) {
        mFiles.push(response.media);
      } else {
        mFiles = [];
        mFiles.push(response.media);
      }

      emit("update:modelValue", mFiles);
    }

    function deleteFile(index) {
      mFiles.splice(index, 1);
      return true;
      // emit("update:modelValue", mFiles);
    }

    return {
      uploadFn,
      uploadedFn,
      uploadFailed,
      deleteFile,
    };
  },
};
</script>
