<template>
  <q-page>
    <div>
      <div v-for="card in cardData" :key="card.id">
        <GlobalMessage :data="card" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onBeforeMount, onMounted, getCurrentInstance } from "vue";
import { useQuasar } from "quasar";
import { useGlobalStore } from "stores/globalMessage/index";

export default {
  setup() {
    const globalStore = useGlobalStore();
    const app = getCurrentInstance();
    const cardData = ref({});
    onBeforeMount(() => {
      fetchMessageData();
    });
    const fetchMessageData = () => {
      globalStore.getItems({ all: true }).then((response) => {
        cardData.value = response.data;
        console.log("f", cardData.value);
      });
    };

    return {
      cardData,
      globalStore,
    };
  },
};
</script>
