import { defineStore } from "pinia"

function createElement(tagName: string, options: any | undefined) {
    return {
        contentType: "element",
        tagName,
        attributes: [
            { style: '' }
        ],
        ...options,
    };
}
function createText(tagText: string) {
    return {
        contentType: "text",
        tagText,
    };
}
function createAttribute(
    attributeName: string,
    attributeValue: string | boolean = true
) {
    return {
        attributeName,
        attributeValue,
    };
}
function waitForMs(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useUIStore = defineStore("UIStore", {
    state: () => {
        return {
            editMode: false,
            editor: {
                x: 0,
                y: 0,
                selectedEl: {},
                elID: null as null | number
            },
            pages: [
                "landing",
                "about",
                "projects",
                "testimonials",
                "team",
                "contact",
            ],
            navbar: createElement("nav", {
                children: [
                    createElement("h1", {
                        children: [createText("Jason")], attributes: [
                            createAttribute("id", "navbar-brand"),
                            createAttribute("class", "navbar-brand"),
                        ]
                    }),
                    createElement("ul", {
                        children: "",
                        attributes: [
                            createAttribute(
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
                    createAttribute(
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
            content: createElement("main", {
                children: "",
            }),
            footer: createElement("footer", {
                children: [createText("Made by Jason")],
                attributes: [
                    createAttribute(
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
            })
        }
    },
    actions: {
        async toggleEditMenu() {
            this.editMode = !this.editMode
        },
        async setEditMenuCoords(x: number, y: number) {
            if (!this.editMode) await waitForMs(250);
            this.editor.x = x;
            this.editor.y = y;
        },
        async setSelectedEl(element: any, elID: number) {
            this.editor.selectedEl = element;
            this.editor.elID = elID;
        }
    }
})
