<template>
    <div ref="editorBar" id="editorBar" editorBar :class="{ show: editMode }"
        :style="{ top: `${editOptions?.y}px`, left: `${editOptions?.x}px` }">
        <div class="editorBar-inner">
            <a href="#section1" class="editor-button"><i class="fa-solid fa-house"></i></a>
            <a href="#section2" class="editor-button"><i class="fa-solid fa-user"></i></a>
            <a href="#section3" class="editor-button"><i class="fa-solid fa-briefcase"></i></a>
            <a href="#section4" class="editor-button"><i class="fa-solid fa-code"></i></a>
            <a href="#section5" class="editor-button"><i class="fa-solid fa-laptop-code"></i></a>
            <a href="#section6" class="editor-button"><i class="fa-solid fa-comment-dots"></i></a>
            <a href="#section7" class="editor-button"><i class="fa-solid fa-envelope"></i></a>
            <a href="#section8" class="editor-button"><i class="fa-solid fa-gears"></i></a>
            <button class="editor-button" menu-button>{{ editOptions?.elID }} - {{ editOptions?.selectedEl }}<i
                    class="fa-solid fa-bars"></i></button>
        </div>
    </div>
</template>
    
<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import { useUIStore } from '@/store/campaignUI.store'
export default defineComponent({
    setup() {
        const UIStore = useUIStore();
        return { UIStore }
    },
    props: ["element", "elID"],
    computed: {
        editOptions() {
            return this.UIStore.editor
        },
        editMode() {
            return this.UIStore.editMode
        }
    },
    methods: {
        savePage() { },
        addPage() { },
        editPage() { },
        addComponent() { },
        editComponent() { },
        editStyles() { },
        publishPage() { },
        viewLive() { },
    }
})
</script>

    
    
<style>
:root {
    --blue1: #caf0f8;
    --blue2: #ade8f4;
    --blue3: #90e0ef;
    --blue4: #48cae4;
    --blue5: #00b4d8;
    --blue6: #0096c7;
    --blue7: #0077b6;
    --blue8: #023e8a;
    --blue9: #03045e;
    --blueGray1: #353539;
    --blueGray2: #333337;
    --blueGray3: #313135;
    --blueGray4: #292933;
    --blueGray5: #272731;
    --blueGray6: #252529;
    --blueGray7: #232327;
    --blueGray8: #212125;
    --blueGray9: #191923;
}

#editorBar {
    position: fixed;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s linear;
    opacity: 0;
    width: 0;
    height: 0;
    display: grid;
    place-items: center;
    left: -100%;
    color: white;
    border-radius: 50%;
    transition: all 300ms ease;
    transition-property: height, width, opacity;
}

#editorBar.show {
    transition-delay: 300ms;
    opacity: 1;
    width: 120px;
    height: 120px;
    z-index: 100;
}

.editor-button {
    color: var(--blue6);
    background-color: var(--blueGray1);
    /* border: 2px solid var(--blue6); */
    border: none;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    outline: none;
    height: 45px;
    width: 45px;
    transition: all 0.3s ease;
    transition-property: top, left, background-color, color;
    z-index: -1;
    cursor: pointer;
    display: grid;
    place-items: center;
}

.editor-button:last-child {
    transition: z-index 0.1s linear;
}

.editor-button:hover {
    color: var(--blueGray1);
    background-color: var(--blue6);
    z-index: 10;
}

.show .editor-button {
    left: 50%;
    top: 0;
    z-index: 50;
    transition: all 0.3s cubic-bezier(0, 0, 0, 2.83);
    transition-property: top, left, color, background-color;
}

.show .editor-button:nth-child(2) {
    left: 85%;
    top: 15%;
}

.show .editor-button:nth-child(3) {
    left: 100%;
    top: 50%;
}

.show .editor-button:nth-child(4) {
    left: 85%;
    top: 85%;
}

.show .editor-button:nth-child(5) {
    left: 50%;
    top: 100%;
}

.show .editor-button:nth-child(6) {
    left: 15%;
    top: 85%;
}

.show .editor-button:nth-child(7) {
    left: 0;
    top: 50%;
}

.show .editor-button:nth-child(8) {
    left: 15%;
    top: 15%;
}

.show .editor-button:nth-child(9) {
    left: 50%;
    top: 50%;
    display: grid;
    place-items: center;
    transition: all 0.3s cubic-bezier(0, 0, 0, 2.83);
    width: 70px;
    height: 70px;
    transition-property: width, height;
}

.show .editor-button:hover,
.editor-button:hover {
    transition-delay: 0ms !important;
}
</style>