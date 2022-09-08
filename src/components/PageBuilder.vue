<template>
  <DynamicElement v-if="app" :element="app" />
  <!-- <EditorMenu />d -->
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import { useUIStore } from '@/store/campaignUI.store'
import DynamicElement from "./DynamicElement.vue";
// import EditorMenu from "./EditorMenu.vue";

export default defineComponent({
  methods: {
    createElement(tagName: string, options: any | undefined) {
      return {
        contentType: "element",
        tagName,
        attributes: [
          { style: '' }
        ],
        ...options,
      };
    },
    createText(tagText: string) {
      return {
        contentType: "text",
        tagText,
      };
    },
    createAttribute(
      attributeName: string,
      attributeValue: string | boolean = true
    ) {
      return {
        attributeName,
        attributeValue,
      };
    },
    async openStyles(e: any) {
      console.log(e)
      this.editor.isEditing = !this.editor.isEditing;
      // this.editor.selectedEl = e.element
      if (!this.editor.isEditing) await this.waitForMs(250);
      this.editor.x = this.editor.isEditing ? e.event?.clientX : -300
      this.editor.y = e.event?.clientY
      console.log(e)
      console.log(this.editor)
    },
    waitForMs(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  },
  components: { DynamicElement, },
  computed: {
    sections() {
      return useUIStore().$state.pages
    }
  },
  data() {
    return {

      navbar: this.createElement("nav", {
        children: [
          this.createElement("h1", {
            children: [this.createText("Jason")], attributes: [
              this.createAttribute("id", "navbar-brand"),
              this.createAttribute("class", "navbar-brand"),
            ]
          }),
          this.createElement("ul", {
            children: "",
            attributes: [
              this.createAttribute(
                "style",
                `
                            display: flex;
                            list-style-type: none;
                            `
              ),
            ],
          }),
        ],
        attributes: [
          this.createAttribute(
            "style",
            `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: cornflowerblue;
                    padding: 1rem 3rem;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    `
          ),
        ],
      }),
      content: this.createElement("main", {
        children: "",
      }),
      footer: this.createElement("footer", {
        children: [this.createText("Made by Jason")],
        attributes: [
          this.createAttribute(
            "style",
            // eslint-disable-next-line
            `
                            position: fixed;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            padding: 1rem 3rem;
                            background: cornflowerblue;
                            text-align: center;
                            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                        `
          ),
        ],
      }),
      app: null,
      editor: {
        isEditing: false,
        x: 0,
        y: 0,
        selectedEl: {}
      }
    };
  },
  mounted() {
    this.navbar.children[1].children = this.sections.map((section: any) => {
      return this.createElement("li", {
        children: [
          this.createElement("a", {
            children: [this.createText(section)],
            attributes: [
              this.createAttribute("href", `#${section}`),
              this.createAttribute(

                "style",
                `
                                text-decoration: none;
                                color: inherit;
                                padding: 10px;
                                display: block;
                                text-transform: capitalize;
                                `
              ),
            ],
          }),
        ],
      });
    });
    this.content.children = this.sections.map((section: any, index: number) => {
      return this.createElement("section", {
        children: [
          this.createElement("h1", {
            children: [this.createText(section)],
            attributes: [
              this.createAttribute("style", `text-transform: uppercase;`),
            ],
          }),
          this.createElement("div", {
            attributes: [this.createAttribute("id", `${section}-content`)],
          }),
        ],
        attributes: [
          this.createAttribute("id", section),
          this.createAttribute(
            "style",
            `
                                min-height: 100vh;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                color: ${index % 2 === 0 ? "cornflowerblue" : "#333"
            };
                                background: ${index % 2 === 0 ? "#333" : "cornflowerblue"
            };
                            `
          ),
        ],
      });
    });
    this.app = this.createElement("div", { children: [this.navbar, this.content, this.footer] })

  },
  name: "PageBuilder",
});
</script>
