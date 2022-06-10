import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@popperjs/core"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);

app.use(router);

app.mount("#app");
