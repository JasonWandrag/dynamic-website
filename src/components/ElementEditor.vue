<template>
    <div v-if="isEditing" class="element-editor">
        {{ isEditing }}
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
export default defineComponent({
    props: ["isEditing", "element", "elID",],
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.element)
    },
    methods: {

    }
})
</script>

    
<style>
.element-editor {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: #333;
}
</style>