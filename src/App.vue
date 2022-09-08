<template >
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <EditorMenu />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useUIStore } from '@/store/campaignUI.store'
import EditorMenu from "@/components/EditorMenu.vue"


export default defineComponent({
  setup() {
    const UIStore = useUIStore();
    return { UIStore }
  },
  components: { EditorMenu },
  computed: {
  },
  mounted() {
  },
  methods: {
  },

})
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
}

#app {
  height: 100%;
}
</style>
