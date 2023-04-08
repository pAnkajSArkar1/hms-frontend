<template>
  <QEditForm :useStore="useStore" title="Edit Question">
    <div class="row q-col-gutter-md q-pb-md">
      <div class="col-12">
        <q-input
          outlined
          dense
          label="Question Category"
          v-model="formData.category"
          :rules="[(val) => (val && val.length) || 'Please enter category']"
          :error-message="$getValidationErrors('category')"
          :error="$hasValidationErrors('category')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-12"
        v-for="(questions, key) in formData.questions"
        :key="key"
      >
        <q-input
          dense
          outlined
          label="Questions"
          v-model="questions['question']"
          :rules="[(val) => (val && val.length) || 'Please enter question']"
          :error-message="$getValidationErrors('question')"
          :error="$hasValidationErrors('question')"
        />
      </div>
      <div class="row">
        <q-card-actions>
          <q-btn class="addrow" color="primary" @click="add"
            >Add Questions</q-btn
          >
        </q-card-actions>
        <q-card-actions>
          <q-btn class="deleterow" color="primary" @click="remove"
            >Remove Questions</q-btn
          >
        </q-card-actions>
      </div>
    </div>
  </QEditForm>
</template>

<script>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuestionStore } from "stores/Customer/WorkplaceAudit/questions";
export default {
  name: "EditQuestion",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);
    const QuestionStore = useQuestionStore();
    const add = () => {
      formData.value.questions.push({ question: "" });
    };
    const remove = () => {
      formData.value.questions.pop({ question: "" });
    };
    return {
      formData,
      QuestionStore,
      add,
      remove,
    };
  },
};
</script>
