import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Datepicker from "vue3-date-time-picker";

import "vue3-date-time-picker/dist/main.css";
import "vue3-date-time-picker/src/Vue3DatePicker/style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.use(router);
app.component("Datepicker", Datepicker);
app.use(createPinia());
app.mount("#app");
