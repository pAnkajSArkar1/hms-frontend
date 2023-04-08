<template>
  <QCreateForm :useStore="useStore" title="Add New Question">
    <div class="row q-col-gutter-md q-pb-md">
      <div class="col-12">
        <q-input
          outlined
          dense
          label="Question Category"
          v-model="newData.category"
          :rules="[(val) => (val && val.length) || 'Please enter category']"
          :error-message="$getValidationErrors('category')"
          :error="$hasValidationErrors('category')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-12"
        v-for="(questions, key) in newData.questions"
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
  </QCreateForm>
</template>

<script>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuestionStore } from "stores/Customer/WorkplaceAudit/questions";
export default {
  name: "CreateQuestion",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { newData } = storeToRefs(useStore);
    const QuestionStore = useQuestionStore();
    const add = () => {
      newData.value.questions.push({ question: "" });
    };
    const remove = () => {
      newData.value.questions.pop({ question: "" });
    };
    return {
      newData,
      QuestionStore,
      add,
      remove,
    };
  },
};
</script>
