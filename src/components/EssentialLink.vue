<template>
  <q-list
    flat
    class="rounded-borders"
    v-for="essentialLink in essentialLinks || essentialLinksAccount"
    :key="essentialLink.title"
    separator
  >
    <q-btn-dropdown stretch flat v-if="isShowDD(essentialLink)" no-caps>
      <template v-slot:label>
        <span class="dd-font-weigh">{{ essentialLink.title }}</span>
      </template>
      <q-list>
        <q-item
          v-for="child in essentialLink.childs"
          clickable
          :to="child.link"
          :key="child.title"
          v-show="child.show"
          v-close-popup
        >
          <q-item-section>
            <q-item-label>{{ child.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

    <q-expansion-item
      v-if="isShowExpand(essentialLink)"
      expand-separator
      v-show="essentialLink.show"
      :icon="essentialLink.icon"
      :label="essentialLink.title"
      class="border-bottom-light"
    >
      <q-item
        v-for="child in essentialLink.childs"
        clickable
        :to="child.link"
        :key="child.title"
        v-show="child.show"
      >
        <q-item-section v-if="child.icon" avatar>
          <!-- <q-icon :name="child.icon" /> -->
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ child.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <q-item
      v-if="!isShowDD(essentialLink) && !isShowExpand(essentialLink)"
      clickable
      :to="essentialLink.link"
      v-show="essentialLink.show"
      :disable="essentialLink.disable"
      class="border-bottom-light"
      v-bind:class="activeClass($route.path, essentialLink.link)"
    >
      <q-item-section v-if="essentialLink.icon" avatar>
        <q-icon :name="essentialLink.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ essentialLink.title }}</q-item-label>
      </q-item-section>
    </q-item>
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
    essentialLinksAccount: {
      type: Array,
      required: [],
    },
    isVertical: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { isVertical } = reactive(props);

    const isShowDD = (essentialLink) => {
      return (
        !isVertical && essentialLink.childs && essentialLink.childs.length > 0
      );
    };

    const isShowExpand = (essentialLink) => {
      return (
        isVertical && essentialLink.childs && essentialLink.childs.length > 0
      );
    };

    const activeClass = (routhPath, essentialLinkPath) => {
      if (!isVertical) {
        return routhPath == essentialLinkPath ? "text-green-2" : "text-white";
      }
    };

    return {
      isShowDD,
      isShowExpand,
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
