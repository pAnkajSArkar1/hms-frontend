<template>
  <q-list
    flat
    class="rounded-borders"
    v-for="(essentialLink, index) in essentialLinks || essentialLinksAccount"
    :key="essentialLink.id"
  >
    <q-item-label header>{{ essentialLink.title }}</q-item-label>
    <q-item
      v-for="child in essentialLink.childs"
      clickable
      :to="child.link"
      :key="child.title"
      v-show="child.show"
      v-close-popup
    >
      <q-item-section v-if="child.icon" avatar>
        <q-icon :name="child.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ child.title }}</q-item-label>
      </q-item-section>
    </q-item>
    <div v-if="index != essentialLinks.length - 1">
      <q-separator />
    </div>
  </q-list>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    essentialLinks: {
      type: Array,
      required: [],
    },
  },
  setup(props) {
    const { isVertical } = reactive(props);

    const activeClass = (routhPath, essentialLinkPath) => {
      if (!isVertical) {
        return routhPath == essentialLinkPath ? "text-green-2" : "text-white";
      }
    };

    return {
      activeClass,
    };
  },
});
</script>

<style scoped>
.dd-font-weigh {
  font-weight: 400;
}
</style>
