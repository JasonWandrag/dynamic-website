import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia } from 'pinia'

const pinia = createPinia()

// import pinia from "pinia";

createApp(App).use(pinia).use(router).mount("#app");
