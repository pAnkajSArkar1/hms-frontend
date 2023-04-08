<template>
<q-uploader
    :label="label"
    square
    flat
    :multiple="multiple"
    bordered
    no-thumbnails
    auto-upload
    :accept="acceptFileType"
    class="full-width"
    :factory="setChecklistImg"
/>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "stores/Customer/Inspection/dashboard";
import { useTemplateStore } from "stores/Customer/Inspection/template";
import { useMediaStore } from "stores/media";

export default {
    name: "CreateDashboard",

    props: {
        modelValue: Array,
        label: {
            type: String,
            default: "Upload Image"
        },
        attachmentType: {
            type: String,
            default: "image"
        },
        multiple: {
            type: Boolean,
            default: false
        },
        acceptFileType: {
            type: String,
            default: 'image/*, .pdf'
        },
    },

    

    setup(props, { emit }) {
        const mediaStore = useMediaStore();
        const { uploadItem } = mediaStore;
        const mFiles = reactive([]);
        const { attachmentType, modelValue } = reactive(props);

        // onMounted(() => {
        //     mFiles = modelValue;
        // });

        //image uploader
        const setChecklistImg = (files) => {
            let uploadFormData = new FormData();
            uploadFormData.append("attachment_type", attachmentType);
            uploadFormData.append("file", files[0]);
            return new Promise((resolve) => {
                uploadItem(uploadFormData)
                .then((res) => {
                    mFiles.push(res.data.media_id)
                    emit("update:modelValue", mFiles);
                    resolve({ url: null });
                })
                .finally(() => {});
            });
        };


        function onRejected(rejectedEntries) {
            $q.notify({
                type: "negative",
                message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
            });
        }

        return {
            setChecklistImg,
        };
    },
};
</script>