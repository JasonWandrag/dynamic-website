<template>
  <template v-if="element.contentType === 'element'">
    <component
      :is="element.tagName"
      :elID="elID"
      v-bind="attributes"
      @contextmenu="toggleEditMode">
      <template v-if="element.children">
        <DynamicElement v-for="(child, i) of element.children" :key="i" :element="child" />
      </template>
    </component>
  </template>
  <template v-else>
    {{ element.tagText }}
  </template>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import { useUIStore } from '@/store/campaignUI.store'
console.clear()
export default defineComponent({
  setup() {
    const UIStore = useUIStore();
    return { UIStore }
  },
  props: ["element"],
  data() {
    return {
      attributes: {},
      elID: Math.floor(Math.random() * 9999)
    }
  },
  mounted() {
    const attrDictionary: any = {}
    this.element.attributes?.forEach((attr: any) => {
      attrDictionary[attr.attributeName] = attr.attributeValue
    })
    this.attributes = attrDictionary
  },
  methods: {
    toggleEditMode(e: any) {
      e.preventDefault()
      if (e.target.getAttribute("elID") != this.elID) return

      console.log(this.element)
      this.UIStore.toggleEditMenu();
      this.UIStore.setEditMenuCoords(e.clientX, e.clientY)
      this.UIStore.setSelectedEl(this.element, this.elID)
    }
  }
})
</script>

    
<style>
</style>
